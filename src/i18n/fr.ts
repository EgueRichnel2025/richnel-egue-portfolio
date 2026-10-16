const fr = {
  language: {
    label: 'Choix de la langue',
    french: 'Français',
    english: 'English',
    switchToFrench: 'Passer en français',
    switchToEnglish: 'Passer en anglais',
  },

  theme: {
    label: 'Préférence du thème',
    system: 'Système',
    light: 'Clair',
    dark: 'Sombre',
  },

  navigation: {
    home: 'Accueil',
    about: 'À propos',
    skills: 'Compétences',
    howCanIHelp: 'Solutions',
    projects: 'Projets',
    journey: 'Parcours',
    certifications: 'Certifications',
    aiLab: 'AI Lab',
    contact: 'Contact',
    downloadCv: 'Télécharger le CV',
  },

  hero: {
    eyebrow: 'Futur ingénieur en IA · Développeur web & mobile full-stack',
    titlePrefix: 'Je construis à la croisée des',
    titleHighlight: 'mathématiques, de l’IA et du logiciel.',
    description:
      'Étudiant en Mathématiques & Modélisation, je développe des applications web et mobile et j’explore le machine learning et la robotique à travers des projets concrets.',
    primaryCta: 'Explorer les projets',
    secondaryCta: 'Me contacter',
    note: 'Apprendre, expérimenter et construire.',
    visualAriaLabel: 'Aperçu de mon approche de conception',
    visualKicker: 'UNE APPROCHE TRANSVERSALE',
    visualTitle: 'Des mathématiques au prototype',
    stepMath: 'Modéliser le problème',
    stepAI: 'Expérimenter avec l’IA',
    stepBuild: 'Construire une solution',
    visualFootnote: 'Comprendre → Modéliser → Construire',
  },

  skills: {
    eyebrow: 'COMPÉTENCES & EXPLORATION',
    title: 'Des compétences à la croisée de plusieurs domaines.',
    description:
      'Je relie les mathématiques, l’intelligence artificielle et le développement logiciel. Voici les technologies que j’utilise et les domaines que j’explore, sans classement artificiel.',
    groups: {
      mathematics: {
        title: 'Mathématiques & modélisation',
        items: [
          'Algèbre linéaire',
          'Probabilités & statistiques',
          'Modélisation mathématique',
          'Optimisation',
        ],
      },
      ai: {
        title: 'IA & données',
        items: [
          'Python',
          'Machine Learning',
          'Deep Learning',
          'Vision par ordinateur',
          'Analyse de données',
          'scikit-learn',
        ],
      },
      software: {
        title: 'Développement web & mobile',
        items: [
          'React',
          'TypeScript',
          'Flutter',
          'Dart',
          'FastAPI',
          'API REST',
          'Git',
        ],
      },
      robotics: {
        title: 'Robotique & systèmes embarqués',
        items: [
          'Arduino',
          'MicroPython',
          'Capteurs',
          'Systèmes embarqués',
          'Robotique',
        ],
      },
    },
  },

  solutions: {
    eyebrow: 'APPLICATIONS POSSIBLES',
    title: 'La technologie au service de problèmes concrets.',
    description:
      'L’intelligence artificielle et le développement logiciel peuvent apporter des réponses utiles à de nombreux secteurs. Voici quelques pistes que j’aimerais explorer et contribuer à construire.',
    scopeNote:
      'Ces exemples illustrent des applications possibles, et non une liste de prestations ou de résultats déjà réalisés.',
    sectors: {
      healthcare: {
        title: 'Santé',
        description:
          'Explorer comment les données et l’IA peuvent soutenir l’analyse et faciliter l’accès à l’information de santé.',
        points: [
          'Analyse de données médicales',
          'Classification et aide à l’orientation',
          'Outils de santé multilingues',
        ],
      },
      insurance: {
        title: 'Assurance',
        description:
          'Étudier comment l’analyse de données peut aider à traiter les informations et repérer des situations inhabituelles.',
        points: [
          'Analyse et classification de sinistres',
          'Détection d’anomalies',
          'Traitement intelligent de documents',
        ],
      },
      agriculture: {
        title: 'Agriculture',
        description:
          'Explorer la vision par ordinateur et l’analyse prédictive pour accompagner le suivi des cultures.',
        points: [
          'Détection de maladies des cultures',
          'Analyse prédictive',
          'Surveillance intelligente',
        ],
      },
      industry: {
        title: 'Industrie',
        description:
          'Étudier comment les données des équipements peuvent aider à mieux comprendre les processus et anticiper certains incidents.',
        points: [
          'Maintenance prédictive',
          'Analyse de données de capteurs',
          'Détection d’anomalies',
        ],
      },
    },
    contactPrompt: 'Vous avez un problème à explorer ?',
    contactCta: 'Parlons de votre idée',
  },

  about: {
    eyebrow: 'À PROPOS',
    title: 'Relier les mathématiques aux solutions concrètes.',
    introduction:
      'J’étudie les Mathématiques & Modélisation à l’ENSGMM d’Abomey. Cette formation nourrit ma façon d’aborder les problèmes : comprendre les phénomènes, raisonner avec rigueur et transformer des idées en prototypes.',
    description:
      'En parallèle, je développe des applications web et mobile full-stack et j’explore le machine learning, la vision par ordinateur et la robotique à travers mes projets et mes apprentissages.',
    purposeLabel: 'Ce vers quoi je veux contribuer',
    purpose:
      'À terme, je souhaite participer à la création de solutions utiles qui associent intelligence artificielle et robotique, notamment pour répondre à des besoins concrets dans le domaine de la santé en Afrique.',
    focusLabel: 'Mes axes d’exploration',
    focus: {
      mathematics: 'Mathématiques & modélisation',
      ai: 'IA & machine learning',
      software: 'Développement web & mobile',
      robotics: 'Robotique & systèmes embarqués',
    },
  },

  notFound: {
    title: '404 — Page introuvable',
    description: "La page que vous recherchez n'existe pas.",
  },

  projectPlaceholders: {
    medAssist: 'Projet MedAssist',
    melo: 'Projet Melo',
    medAssistLanguageData: 'Projet MedAssist Language Data',
    details: 'Les détails de ce projet seront bientôt disponibles.',
  },

  footer: {
    tagline: 'Mathématiques × IA × Développement logiciel × Robotique',
    rights: 'Tous droits réservés.',
  },
} as const

export default fr
