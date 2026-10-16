import { Link, Outlet } from 'react-router-dom'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeSwitcher from './ThemeSwitcher'
import { useLanguage } from '../i18n/LanguageProvider'

export default function AppShell() {
  const { t, language } = useLanguage()

  const navigationItems = [
    { label: t.navigation.about, id: 'about' },
    { label: t.navigation.skills, id: 'skills' },
    { label: t.navigation.howCanIHelp, id: 'how-can-i-help' },
    { label: t.navigation.projects, id: 'projects' },
    { label: t.navigation.journey, id: 'journey' },
    { label: t.navigation.certifications, id: 'certifications' },
    { label: t.navigation.aiLab, id: 'ai-lab' },
    { label: t.navigation.contact, id: 'contact' },
  ]

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-header__inner">
          <Link className="app-brand" to="/" aria-label="Richnel EGUE — Home">
            <span className="app-brand__mark" aria-hidden="true">
              RE
            </span>
            <span>Richnel EGUE</span>
          </Link>

          <nav
            className="app-nav"
            aria-label={
              language === 'fr' ? 'Navigation principale' : 'Main navigation'
            }
          >
            <ul className="app-nav__links">
              {navigationItems.map(({ label, id }) => (
                <li key={id}>
                  <Link to={`/#${id}`}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="app-header__controls">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </div>
      </header>

      <main className="app-main">
        <Outlet />
      </main>

      <footer className="app-footer">
        <p>
          © {new Date().getFullYear()} Richnel EGUE · {t.footer.tagline}
        </p>
        <p>{t.footer.rights}</p>
      </footer>
    </div>
  )
}
