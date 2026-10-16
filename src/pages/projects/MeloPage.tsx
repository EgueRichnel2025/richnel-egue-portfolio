import { useLanguage } from '../../i18n/LanguageProvider'

export default function MeloPage() {
  const { t } = useLanguage()

  return (
    <section>
      <h1>{t.projectPlaceholders.melo}</h1>
      <p>{t.projectPlaceholders.details}</p>
    </section>
  )
}
