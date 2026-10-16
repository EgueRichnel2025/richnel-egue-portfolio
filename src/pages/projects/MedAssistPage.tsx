import { useLanguage } from '../../i18n/LanguageProvider'

export default function MedAssistPage() {
  const { t } = useLanguage()

  return (
    <section>
      <h1>{t.projectPlaceholders.medAssist}</h1>
      <p>{t.projectPlaceholders.details}</p>
    </section>
  )
}
