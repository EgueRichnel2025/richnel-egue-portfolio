import { useTheme, type ThemePreference } from './ThemeProvider'

const options: { value: ThemePreference; label: string }[] = [
  { value: 'system', label: 'Système' },
  { value: 'light', label: 'Clair' },
  { value: 'dark', label: 'Sombre' },
]

export default function ThemeSwitcher() {
  const { preference, setPreference } = useTheme()

  return (
    <div
      className="theme-switcher"
      role="group"
      aria-label="Préférence du thème"
    >
      {options.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          className="theme-switcher__option"
          aria-pressed={preference === value}
          title={`Utiliser le thème ${label.toLowerCase()}`}
          onClick={() => setPreference(value)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
