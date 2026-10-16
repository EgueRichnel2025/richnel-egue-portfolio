import { useLanguage, type Language } from '../i18n/LanguageProvider'

const options: { value: Language; label: string }[] = [
  { value: 'fr', label: 'FR' },
  { value: 'en', label: 'EN' },
]

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div
      className="language-switcher"
      role="group"
      aria-label={t.language.label}
    >
      {options.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          className="language-switcher__option"
          aria-pressed={language === value}
          aria-label={
            value === 'fr'
              ? t.language.switchToFrench
              : t.language.switchToEnglish
          }
          onClick={() => setLanguage(value)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
