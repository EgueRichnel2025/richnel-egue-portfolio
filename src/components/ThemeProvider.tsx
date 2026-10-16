import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type ThemePreference = 'system' | 'light' | 'dark'
export type ResolvedTheme = 'light' | 'dark'

interface ThemeContextValue {
  preference: ThemePreference
  resolvedTheme: ResolvedTheme
  setPreference: (preference: ThemePreference) => void
}

const STORAGE_KEY = 'richnel-theme'

const ThemeContext = createContext<ThemeContextValue | null>(null)

function readSavedPreference(): ThemePreference {
  if (typeof window === 'undefined') {
    return 'light'
  }

  try {
    const savedPreference = window.localStorage.getItem(STORAGE_KEY)

    if (
      savedPreference === 'system' ||
      savedPreference === 'light' ||
      savedPreference === 'dark'
    ) {
      return savedPreference
    }
  } catch {
    // Utiliser le thème par défaut si le stockage est indisponible.
  }

  return 'light'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreferenceState] =
    useState<ThemePreference>(readSavedPreference)

  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>('light')

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') {
      return
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const updateSystemTheme = () => {
      setSystemTheme(mediaQuery.matches ? 'dark' : 'light')
    }

    updateSystemTheme()
    mediaQuery.addEventListener?.('change', updateSystemTheme)

    return () => {
      mediaQuery.removeEventListener?.('change', updateSystemTheme)
    }
  }, [])

  const resolvedTheme: ResolvedTheme =
    preference === 'system' ? systemTheme : preference

  useEffect(() => {
    document.documentElement.dataset.theme = resolvedTheme
    document.documentElement.style.colorScheme = resolvedTheme

    try {
      window.localStorage.setItem(STORAGE_KEY, preference)
    } catch {
      // Le thème reste utilisable même si le stockage est indisponible.
    }
  }, [preference, resolvedTheme])

  const setPreference = useCallback((nextPreference: ThemePreference) => {
    setPreferenceState(nextPreference)
  }, [])

  const value = useMemo(
    () => ({
      preference,
      resolvedTheme,
      setPreference,
    }),
    [preference, resolvedTheme, setPreference]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
