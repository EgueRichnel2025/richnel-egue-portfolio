import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageProvider'

export default function HeroSection() {
  const { t } = useLanguage()

  const steps = [
    { number: '01', label: t.hero.stepMath },
    { number: '02', label: t.hero.stepAI },
    { number: '03', label: t.hero.stepBuild },
  ]

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__copy">
        <p className="hero__eyebrow">
          <span className="hero__eyebrow-mark" aria-hidden="true" />
          {t.hero.eyebrow}
        </p>

        <h1 className="hero__title" id="hero-title">
          {t.hero.titlePrefix}{' '}
          <span className="hero__title-accent">{t.hero.titleHighlight}</span>
        </h1>

        <p className="hero__description">{t.hero.description}</p>

        <div className="hero__actions">
          <Link className="hero__button hero__button--primary" to="/#projects">
            {t.hero.primaryCta}
            <span aria-hidden="true">↗</span>
          </Link>

          <Link className="hero__button hero__button--secondary" to="/#contact">
            {t.hero.secondaryCta}
          </Link>
        </div>

        <p className="hero__note">
          <span className="hero__note-dot" aria-hidden="true" />
          {t.hero.note}
        </p>
      </div>

      <aside className="hero__visual" aria-label={t.hero.visualAriaLabel}>
        <div className="hero__visual-card">
          <div className="hero__visual-header">
            <span className="hero__visual-kicker">{t.hero.visualKicker}</span>
            <span className="hero__visual-index" aria-hidden="true">
              01 / 03
            </span>
          </div>

          <h2 className="hero__visual-title">{t.hero.visualTitle}</h2>

          <div className="hero__steps">
            {steps.map((step) => (
              <div className="hero__step" key={step.number}>
                <span className="hero__step-number">{step.number}</span>
                <span className="hero__step-label">{step.label}</span>
                <span className="hero__step-indicator" aria-hidden="true">
                  ↗
                </span>
              </div>
            ))}
          </div>

          <div className="hero__visual-footer">
            <span className="hero__visual-equation" aria-hidden="true">
              x → f(x) → ŷ
            </span>
            <span className="hero__visual-caption">
              {t.hero.visualFootnote}
            </span>
          </div>
        </div>
      </aside>
    </section>
  )
}
