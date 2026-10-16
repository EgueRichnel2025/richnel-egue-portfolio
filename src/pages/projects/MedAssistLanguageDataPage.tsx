import { useLanguage } from '../../i18n/LanguageProvider'

export default function MedAssistLanguageDataPage() {
  const { t } = useLanguage()

  return (
    <section>
      <h1>{t.projectPlaceholders.medAssistLanguageData}</h1>
      <p>{t.projectPlaceholders.details}</p>
    </section>
  )
}
