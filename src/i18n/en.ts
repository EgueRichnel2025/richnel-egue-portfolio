const en = {
  language: {
    label: 'Language selection',
    french: 'French',
    english: 'English',
    switchToFrench: 'Switch to French',
    switchToEnglish: 'Switch to English',
  },

  theme: {
    label: 'Theme preference',
    system: 'System',
    light: 'Light',
    dark: 'Dark',
  },

  navigation: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    howCanIHelp: 'Solutions',
    projects: 'Projects',
    journey: 'Journey',
    certifications: 'Certifications',
    aiLab: 'AI Lab',
    contact: 'Contact',
    downloadCv: 'Download CV',
  },

  hero: {
    eyebrow: 'Aspiring AI Engineer · Full-Stack Web & Mobile Developer',
    titlePrefix: 'I build at the intersection of',
    titleHighlight: 'mathematics, AI, and software.',
    description:
      'I study Mathematics & Modeling, build full-stack web and mobile applications, and explore machine learning and robotics through practical projects.',
    primaryCta: 'Explore projects',
    secondaryCta: 'Get in touch',
    note: 'Learning, experimenting, and building.',
    visualAriaLabel: 'A glimpse of my approach to building',
    visualKicker: 'ONE CONNECTED APPROACH',
    visualTitle: 'From mathematics to prototypes',
    stepMath: 'Model the problem',
    stepAI: 'Experiment with AI',
    stepBuild: 'Build a solution',
    visualFootnote: 'Understand → Model → Build',
  },

  skills: {
    eyebrow: 'SKILLS & EXPLORATION',
    title: 'Skills across connected disciplines.',
    description:
      'I connect mathematics, artificial intelligence, and software development. Here are the technologies I use and the areas I explore, without artificial proficiency rankings.',
    groups: {
      mathematics: {
        title: 'Mathematics & modeling',
        items: [
          'Linear algebra',
          'Probability & statistics',
          'Mathematical modeling',
          'Optimization',
        ],
      },
      ai: {
        title: 'AI & data',
        items: [
          'Python',
          'Machine Learning',
          'Deep Learning',
          'Computer Vision',
          'Data analysis',
          'scikit-learn',
        ],
      },
      software: {
        title: 'Web & mobile development',
        items: [
          'React',
          'TypeScript',
          'Flutter',
          'Dart',
          'FastAPI',
          'REST APIs',
          'Git',
        ],
      },
      robotics: {
        title: 'Robotics & embedded systems',
        items: [
          'Arduino',
          'MicroPython',
          'Sensors',
          'Embedded systems',
          'Robotics',
        ],
      },
    },
  },

  solutions: {
    eyebrow: 'POTENTIAL APPLICATIONS',
    title: 'Technology applied to real-world problems.',
    description:
      'Artificial intelligence and software development can bring useful ideas to many sectors. Here are some applications I would like to explore and help build.',
    scopeNote:
      'These examples illustrate potential applications, not a list of services or results already delivered.',
    sectors: {
      healthcare: {
        title: 'Healthcare',
        description:
          'Explore how data and AI could support analysis and improve access to health information.',
        points: [
          'Medical data analysis',
          'Classification and decision support',
          'Multilingual health tools',
        ],
      },
      insurance: {
        title: 'Insurance',
        description:
          'Explore how data analysis could help process information and flag unusual situations.',
        points: [
          'Claims analysis and classification',
          'Anomaly detection',
          'Intelligent document processing',
        ],
      },
      agriculture: {
        title: 'Agriculture',
        description:
          'Explore computer vision and predictive analysis to support crop monitoring.',
        points: [
          'Crop disease detection',
          'Predictive analysis',
          'Intelligent monitoring',
        ],
      },
      industry: {
        title: 'Industry',
        description:
          'Explore how equipment data could help understand processes and anticipate some issues.',
        points: [
          'Predictive maintenance',
          'Sensor data analysis',
          'Anomaly detection',
        ],
      },
    },
    contactPrompt: 'Have a problem worth exploring?',
    contactCta: 'Let’s discuss your idea',
  },

  about: {
    eyebrow: 'ABOUT',
    title: 'Connecting mathematics to practical solutions.',
    introduction:
      'I study Mathematics & Modeling at ENSGMM Abomey. This background shapes how I approach problems: understanding phenomena, reasoning carefully, and turning ideas into prototypes.',
    description:
      'Alongside my studies, I build full-stack web and mobile applications and explore machine learning, computer vision, and robotics through projects and continued learning.',
    purposeLabel: 'What I want to contribute to',
    purpose:
      'In the long term, I want to contribute to useful solutions that combine artificial intelligence and robotics, particularly to address practical healthcare needs in Africa.',
    focusLabel: 'Areas I explore',
    focus: {
      mathematics: 'Mathematics & modeling',
      ai: 'AI & machine learning',
      software: 'Web & mobile development',
      robotics: 'Robotics & embedded systems',
    },
  },

  notFound: {
    title: '404 — Page Not Found',
    description: 'The page you are looking for does not exist.',
  },

  projectPlaceholders: {
    medAssist: 'MedAssist Project',
    melo: 'Melo Project',
    medAssistLanguageData: 'MedAssist Language Data Project',
    details: 'Details about this project will be available soon.',
  },

  footer: {
    tagline: 'Mathematics × AI × Software Engineering × Robotics',
    rights: 'All rights reserved.',
  },
} as const

export default en
