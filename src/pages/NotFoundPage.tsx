import { useLanguage } from '../i18n/LanguageProvider'

export default function NotFoundPage() {
  const { t } = useLanguage()

  return (
    <section>
      <h1>{t.notFound.title}</h1>
      <p>{t.notFound.description}</p>
    </section>
  )
}
