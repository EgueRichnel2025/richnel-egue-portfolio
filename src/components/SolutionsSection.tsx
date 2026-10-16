import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageProvider'

export default function SolutionsSection() {
  const { t } = useLanguage()

  const sectors = [
    {
      id: 'healthcare',
      title: t.solutions.sectors.healthcare.title,
      description: t.solutions.sectors.healthcare.description,
      points: t.solutions.sectors.healthcare.points,
    },
    {
      id: 'insurance',
      title: t.solutions.sectors.insurance.title,
      description: t.solutions.sectors.insurance.description,
      points: t.solutions.sectors.insurance.points,
    },
    {
      id: 'agriculture',
      title: t.solutions.sectors.agriculture.title,
      description: t.solutions.sectors.agriculture.description,
      points: t.solutions.sectors.agriculture.points,
    },
    {
      id: 'industry',
      title: t.solutions.sectors.industry.title,
      description: t.solutions.sectors.industry.description,
      points: t.solutions.sectors.industry.points,
    },
  ]

  return (
    <section
      className="solutions-section"
      id="how-can-i-help"
      aria-labelledby="solutions-title"
    >
      <header className="solutions-section__header">
        <p className="solutions-section__eyebrow">{t.solutions.eyebrow}</p>

        <h2 className="solutions-section__title" id="solutions-title">
          {t.solutions.title}
        </h2>

        <p className="solutions-section__description">
          {t.solutions.description}
        </p>

        <p className="solutions-section__scope">{t.solutions.scopeNote}</p>
      </header>

      <div className="solutions-grid">
        {sectors.map((sector, index) => (
          <article className="solutions-card" key={sector.id}>
            <div className="solutions-card__header">
              <span className="solutions-card__index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{sector.title}</h3>
            </div>

            <p className="solutions-card__description">{sector.description}</p>

            <ul className="solutions-card__list">
              {sector.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="solutions-section__cta">
        <p>{t.solutions.contactPrompt}</p>

        <Link to="/#contact">
          {t.solutions.contactCta}
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  )
}
