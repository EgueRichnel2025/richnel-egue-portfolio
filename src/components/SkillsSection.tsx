import { useLanguage } from '../i18n/LanguageProvider'

export default function SkillsSection() {
  const { t } = useLanguage()

  const groups = [
    {
      id: 'mathematics',
      title: t.skills.groups.mathematics.title,
      items: t.skills.groups.mathematics.items,
    },
    {
      id: 'ai',
      title: t.skills.groups.ai.title,
      items: t.skills.groups.ai.items,
    },
    {
      id: 'software',
      title: t.skills.groups.software.title,
      items: t.skills.groups.software.items,
    },
    {
      id: 'robotics',
      title: t.skills.groups.robotics.title,
      items: t.skills.groups.robotics.items,
    },
  ]

  return (
    <section
      className="skills-section"
      id="skills"
      aria-labelledby="skills-title"
    >
      <header className="skills-section__header">
        <p className="skills-section__eyebrow">{t.skills.eyebrow}</p>

        <h2 className="skills-section__title" id="skills-title">
          {t.skills.title}
        </h2>

        <p className="skills-section__description">{t.skills.description}</p>
      </header>

      <div className="skills-grid">
        {groups.map((group, index) => (
          <article className="skills-card" key={group.id}>
            <div className="skills-card__header">
              <span className="skills-card__index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3 className="skills-card__title">{group.title}</h3>
            </div>

            <ul className="skills-card__list" aria-label={group.title}>
              {group.items.map((item) => (
                <li className="skills-card__item" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
