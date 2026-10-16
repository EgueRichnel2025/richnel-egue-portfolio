import { beforeEach, expect, test } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

function renderAtPath(path: string) {
  window.history.replaceState({}, '', path)
  return render(<App />)
}

beforeEach(() => {
  window.localStorage.clear()
  window.history.replaceState({}, '', '/')
})

test('renders the main portfolio navigation in French', () => {
  render(<App />)

  expect(screen.getByRole('link', { name: /^à propos$/i })).toBeTruthy()
  expect(screen.getByRole('link', { name: /^compétences$/i })).toBeTruthy()
  expect(screen.getByRole('link', { name: /^solutions$/i })).toBeTruthy()
  expect(screen.getByRole('link', { name: /^projets$/i })).toBeTruthy()
  expect(screen.getByRole('link', { name: /^parcours$/i })).toBeTruthy()
  expect(screen.getByRole('link', { name: /^certifications$/i })).toBeTruthy()
  expect(screen.getByRole('link', { name: /^ai lab$/i })).toBeTruthy()
  expect(screen.getByRole('link', { name: /^contact$/i })).toBeTruthy()

  expect(screen.queryByRole('link', { name: /^medassist$/i })).toBeNull()
  expect(screen.queryByRole('link', { name: /^melo$/i })).toBeNull()

  expect(document.documentElement.lang).toBe('fr')
})

test('renders the French hero by default', () => {
  render(<App />)

  expect(
    screen.getByRole('heading', {
      name: /je construis à la croisée des/i,
    })
  ).toBeTruthy()

  expect(
    screen.getByText(/étudiant en mathématiques & modélisation/i)
  ).toBeTruthy()

  expect(
    screen.getByRole('link', { name: /explorer les projets/i })
  ).toBeTruthy()
})

test('renders the MedAssist project route', () => {
  renderAtPath('/projects/medassist')

  expect(
    screen.getByRole('heading', { name: /projet medassist/i })
  ).toBeTruthy()

  expect(screen.getByText(/détails de ce projet/i)).toBeTruthy()
})

test('renders the Melo project route', () => {
  renderAtPath('/projects/melo')

  expect(screen.getByRole('heading', { name: /projet melo/i })).toBeTruthy()

  expect(screen.getByText(/détails de ce projet/i)).toBeTruthy()
})

test('renders the MedAssist Language Data project route', () => {
  renderAtPath('/projects/medassist-language-data')

  expect(
    screen.getByRole('heading', {
      name: /projet medassist language data/i,
    })
  ).toBeTruthy()

  expect(screen.getByText(/détails de ce projet/i)).toBeTruthy()
})

test('renders the not found page for an unknown URL', () => {
  renderAtPath('/route-inconnue')

  expect(
    screen.getByRole('heading', { name: /404.*page introuvable/i })
  ).toBeTruthy()

  expect(screen.getByText(/page que vous recherchez/i)).toBeTruthy()
})

test('supports light and dark theme preferences', () => {
  render(<App />)

  expect(document.documentElement.dataset.theme).toBe('light')

  fireEvent.click(screen.getByRole('button', { name: /^sombre$/i }))

  expect(document.documentElement.dataset.theme).toBe('dark')
  expect(window.localStorage.getItem('richnel-theme')).toBe('dark')

  fireEvent.click(screen.getByRole('button', { name: /^clair$/i }))

  expect(document.documentElement.dataset.theme).toBe('light')
  expect(window.localStorage.getItem('richnel-theme')).toBe('light')
})

test('switches between French and English', () => {
  render(<App />)

  expect(
    screen.getByRole('heading', { name: /je construis à la croisée des/i })
  ).toBeTruthy()

  fireEvent.click(screen.getByRole('button', { name: 'Passer en anglais' }))

  expect(document.documentElement.lang).toBe('en')
  expect(window.localStorage.getItem('richnel-language')).toBe('en')

  expect(
    screen.getByRole('heading', { name: /i build at the intersection of/i })
  ).toBeTruthy()

  expect(screen.getByRole('link', { name: /^about$/i })).toBeTruthy()
  expect(screen.getByRole('link', { name: /^projects$/i })).toBeTruthy()

  fireEvent.click(screen.getByRole('button', { name: 'Switch to French' }))

  expect(document.documentElement.lang).toBe('fr')
  expect(window.localStorage.getItem('richnel-language')).toBe('fr')

  expect(screen.getByRole('link', { name: /^à propos$/i })).toBeTruthy()
})

test('renders the about section in French and English', () => {
  render(<App />)

  expect(
    screen.getByRole('heading', {
      name: /relier les mathématiques aux solutions concrètes/i,
    })
  ).toBeTruthy()

  expect(screen.getByText(/ensgmm d’abomey/i)).toBeTruthy()

  fireEvent.click(screen.getByRole('button', { name: 'Passer en anglais' }))

  expect(
    screen.getByRole('heading', {
      name: /connecting mathematics to practical solutions/i,
    })
  ).toBeTruthy()

  expect(
    screen.getByText(/mathematics & modeling at ensgmm abomey/i)
  ).toBeTruthy()
})

test('renders the skills section in French and English', () => {
  render(<App />)

  expect(
    screen.getByRole('heading', {
      name: /des compétences à la croisée de plusieurs domaines/i,
    })
  ).toBeTruthy()

  expect(screen.getByText('Algèbre linéaire')).toBeTruthy()
  expect(screen.getByText('Vision par ordinateur')).toBeTruthy()

  fireEvent.click(screen.getByRole('button', { name: 'Passer en anglais' }))

  expect(
    screen.getByRole('heading', {
      name: /skills across connected disciplines/i,
    })
  ).toBeTruthy()

  expect(screen.getByText('Linear algebra')).toBeTruthy()
  expect(screen.getByText('Computer Vision')).toBeTruthy()
})

test('renders the solutions section in French and English', () => {
  render(<App />)

  expect(
    screen.getByRole('heading', {
      name: /la technologie au service de problèmes concrets/i,
    })
  ).toBeTruthy()

  expect(screen.getByText('Santé')).toBeTruthy()
  expect(screen.getByText('Assurance')).toBeTruthy()
  expect(screen.getByText('Agriculture')).toBeTruthy()
  expect(screen.getByText('Industrie')).toBeTruthy()

  fireEvent.click(screen.getByRole('button', { name: 'Passer en anglais' }))

  expect(
    screen.getByRole('heading', {
      name: /technology applied to real-world problems/i,
    })
  ).toBeTruthy()

  expect(screen.getByText('Healthcare')).toBeTruthy()
  expect(screen.getByText('Insurance')).toBeTruthy()
})
