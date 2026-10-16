import { useLanguage } from '../i18n/LanguageProvider'

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <section>
      <h1>{t.home.title}</h1>
      <p>{t.home.welcome}</p>
    </section>
  )
}
