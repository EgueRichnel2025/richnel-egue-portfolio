import { test, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

test('renders navbar links', () => {
  render(<App />)
  const homeLink = screen.getByRole('link', { name: /^home$/i })
  expect(homeLink).toBeTruthy()
  const medassistLink = screen.getByRole('link', { name: /^medassist$/i })
  expect(medassistLink).toBeTruthy()
  const meloLink = screen.getByRole('link', { name: /^melo$/i })
  expect(meloLink).toBeTruthy()
  const medassistLanguageDataLink = screen.getByRole('link', {
    name: /^medassist language data$/i,
  })
  expect(medassistLanguageDataLink).toBeTruthy()
})

test('renders home page content by default', () => {
  render(<App />)
  const heading = screen.getByRole('heading', { name: /home page/i })
  expect(heading).toBeTruthy()
  const welcomeText = screen.getByText(/welcome to richnel egue's portfolio/i)
  expect(welcomeText).toBeTruthy()
})

test('navigates to medassist page and renders its content', async () => {
  render(<App />)
  const medassistLink = screen.getByRole('link', { name: /^medassist$/i })
  await fireEvent.click(medassistLink)
  const heading = screen.getByRole('heading', { name: /medassist project/i })
  expect(heading).toBeTruthy()
  const detailsText = screen.getByText(/details about the medassist project/i)
  expect(detailsText).toBeTruthy()
})

test('navigates to melo page and renders its content', async () => {
  render(<App />)
  const meloLink = screen.getByRole('link', { name: /^melo$/i })
  await fireEvent.click(meloLink)
  const heading = screen.getByRole('heading', { name: /melo project/i })
  expect(heading).toBeTruthy()
  const detailsText = screen.getByText(/details about the melo project/i)
  expect(detailsText).toBeTruthy()
})

test('navigates to medassist language data page and renders its content', async () => {
  render(<App />)
  const medassistLanguageDataLink = screen.getByRole('link', {
    name: /^medassist language data$/i,
  })
  await fireEvent.click(medassistLanguageDataLink)
  const heading = screen.getByRole('heading', {
    name: /medassist language data project/i,
  })
  expect(heading).toBeTruthy()
  const detailsText = screen.getByText(
    /details about the medassist language data project/i
  )
  expect(detailsText).toBeTruthy()
})

test('renders the not found page for an unknown URL', () => {
  window.history.replaceState({}, '', '/route-inconnue')

  render(<App />)

  expect(
    screen.getByRole('heading', { name: /404 - page not found/i })
  ).toBeTruthy()

  expect(
    screen.getByText(/the page you are looking for does not exist/i)
  ).toBeTruthy()

  window.history.replaceState({}, '', '/')
})

test('supports light and dark theme preferences', () => {
  window.localStorage.removeItem('richnel-theme')

  render(<App />)

  expect(document.documentElement.dataset.theme).toBe('light')
  expect(screen.getByRole('button', { name: /système/i })).toBeTruthy()

  fireEvent.click(screen.getByRole('button', { name: /sombre/i }))

  expect(document.documentElement.dataset.theme).toBe('dark')
  expect(window.localStorage.getItem('richnel-theme')).toBe('dark')

  fireEvent.click(screen.getByRole('button', { name: /clair/i }))

  expect(document.documentElement.dataset.theme).toBe('light')
  expect(window.localStorage.getItem('richnel-theme')).toBe('light')
})
