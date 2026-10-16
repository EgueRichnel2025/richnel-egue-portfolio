import { useLanguage } from '../i18n/LanguageProvider'
import { useTheme, type ThemePreference } from './ThemeProvider'

export default function ThemeSwitcher() {
  const { preference, resolvedTheme, setPreference } = useTheme()
  const { t } = useLanguage()

  const options: { value: ThemePreference; label: string }[] = [
    { value: 'system', label: t.theme.system },
    { value: 'light', label: t.theme.light },
    { value: 'dark', label: t.theme.dark },
  ]

  return (
    <div
      className="theme-switcher"
      role="group"
      aria-label={t.theme.label}
      data-resolved-theme={resolvedTheme}
    >
      {options.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          className="theme-switcher__option"
          aria-pressed={preference === value}
          title={label}
          onClick={() => setPreference(value)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
