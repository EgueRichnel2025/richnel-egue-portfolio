import { useLanguage } from '../i18n/LanguageProvider'

export default function AboutSection() {
  const { t } = useLanguage()

  const focusAreas = [
    { number: '01', label: t.about.focus.mathematics },
    { number: '02', label: t.about.focus.ai },
    { number: '03', label: t.about.focus.software },
    { number: '04', label: t.about.focus.robotics },
  ]

  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-section__main">
        <p className="about-section__eyebrow">{t.about.eyebrow}</p>

        <h2 className="about-section__title" id="about-title">
          {t.about.title}
        </h2>

        <p className="about-section__introduction">{t.about.introduction}</p>

        <p className="about-section__description">{t.about.description}</p>

        <div className="about-section__purpose">
          <h3>{t.about.purposeLabel}</h3>
          <p>{t.about.purpose}</p>
        </div>
      </div>

      <aside className="about-section__focus" aria-label={t.about.focusLabel}>
        <h3 className="about-section__focus-title">{t.about.focusLabel}</h3>

        <ol className="about-section__focus-list">
          {focusAreas.map((area) => (
            <li className="about-section__focus-item" key={area.number}>
              <span className="about-section__focus-number">{area.number}</span>
              <span className="about-section__focus-label">{area.label}</span>
            </li>
          ))}
        </ol>
      </aside>
    </section>
  )
}
