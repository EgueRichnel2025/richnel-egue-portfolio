import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import en from './en'
import fr from './fr'

export type Language = 'fr' | 'en'

const translations = { fr, en }

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  t: (typeof translations)[Language]
}

const STORAGE_KEY = 'richnel-language'

const LanguageContext = createContext<LanguageContextValue | null>(null)

function readSavedLanguage(): Language {
  try {
    const savedLanguage = window.localStorage.getItem(STORAGE_KEY)

    if (savedLanguage === 'fr' || savedLanguage === 'en') {
      return savedLanguage
    }
  } catch {
    // Le français reste disponible sans stockage local.
  }

  return 'fr'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(readSavedLanguage)

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
    document.title = 'Richnel EGUE — Portfolio'

    try {
      window.localStorage.setItem(STORAGE_KEY, language)
    } catch {
      // La langue reste utilisable si localStorage est indisponible.
    }
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language, setLanguage]
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }

  return context
}
