import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppShell from './components/AppShell'
import HomePage from './pages/HomePage'
import MedAssistPage from './pages/projects/MedAssistPage'
import MeloPage from './pages/projects/MeloPage'
import MedAssistLanguageDataPage from './pages/projects/MedAssistLanguageDataPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/medassist" element={<MedAssistPage />} />
          <Route path="/projects/melo" element={<MeloPage />} />
          <Route
            path="/projects/medassist-language-data"
            element={<MedAssistLanguageDataPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
