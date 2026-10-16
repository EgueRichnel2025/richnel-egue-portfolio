import { Link, Outlet } from 'react-router-dom'
import ThemeSwitcher from './ThemeSwitcher'

export default function AppShell() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-header__inner">
          <Link className="app-brand" to="/">
            <span className="app-brand__mark" aria-hidden="true">
              RE
            </span>
            <span>Richnel EGUE</span>
          </Link>

          <nav className="app-nav" aria-label="Navigation principale">
            <ul className="app-nav__links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/projects/medassist">MedAssist</Link>
              </li>
              <li>
                <Link to="/projects/melo">Melo</Link>
              </li>
              <li>
                <Link to="/projects/medassist-language-data">
                  MedAssist Language Data
                </Link>
              </li>
            </ul>
          </nav>

          <ThemeSwitcher />
        </div>
      </header>

      <main className="app-main">
        <Outlet />
      </main>

      <footer className="app-footer">
        <p>
          © {new Date().getFullYear()} Richnel EGUE · Mathematics × AI ×
          Software Engineering × Robotics
        </p>
      </footer>
    </div>
  )
}
