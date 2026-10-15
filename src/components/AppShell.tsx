import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const AppShell: React.FC = () => {
  return (
    <>
      <header>
        {/* Navbar placeholder */}
        <nav>
          <ul>
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
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        {/* Footer placeholder */}
        <div>Footer Placeholder</div>
      </footer>
    </>
  )
}

export default AppShell
