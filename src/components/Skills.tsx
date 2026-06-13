import styles from './Skills.module.css'

const D = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

interface Tech {
  name: string
  icon: string
  invertDark?: boolean
}

interface Category {
  title: string
  iconBg: string
  iconColor: string
  accentColor: string
  techs: Tech[]
  icon: JSX.Element
}

function MonitorIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  )
}

function GearIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  )
}

function SmartphoneIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M12 18h.01" />
    </svg>
  )
}

function DatabaseIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  )
}

function WrenchIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}

const categories: Category[] = [
  {
    title: 'Frontend',
    iconBg: '#eef0fb',
    iconColor: '#6b7fe8',
    accentColor: '#6b7fe8',

    icon: <MonitorIcon color="#6b7fe8" />,
    techs: [
      { name: 'TypeScript', icon: `${D}/typescript/typescript-original.svg` },
      { name: 'JavaScript', icon: `${D}/javascript/javascript-original.svg` },
      { name: 'HTML', icon: `${D}/html5/html5-original.svg` },
      { name: 'CSS', icon: `${D}/css3/css3-original.svg` },
      { name: 'React', icon: `${D}/react/react-original.svg` },
      { name: 'Next.js', icon: `${D}/nextjs/nextjs-original.svg`, invertDark: true },
      { name: 'Three.js', icon: `${D}/threejs/threejs-original.svg`, invertDark: true },
    ],
  },
  {
    title: 'Backend',
    iconBg: '#e8f5e9',
    iconColor: '#43a047',
    accentColor: '#43a047',

    icon: <GearIcon color="#43a047" />,
    techs: [
      { name: 'Python', icon: `${D}/python/python-original.svg` },
      { name: 'FastAPI', icon: `${D}/fastapi/fastapi-original.svg` },
    ],
  },
  {
    title: 'Mobile / Game',
    iconBg: '#fff8e1',
    iconColor: '#fb8c00',
    accentColor: '#fb8c00',

    icon: <SmartphoneIcon color="#fb8c00" />,
    techs: [
      { name: 'Java\n(Android)', icon: `${D}/java/java-original.svg` },
      { name: 'C#\n(Unity)', icon: `${D}/csharp/csharp-original.svg` },
    ],
  },
  {
    title: 'Database & Infrastructure',
    iconBg: '#f3e5f5',
    iconColor: '#8e24aa',
    accentColor: '#8e24aa',

    icon: <DatabaseIcon color="#8e24aa" />,
    techs: [
      { name: 'PostgreSQL', icon: `${D}/postgresql/postgresql-original.svg` },
      { name: 'Docker', icon: `${D}/docker/docker-original.svg` },
      { name: 'AWS', icon: `${D}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
      { name: 'Vercel', icon: `${D}/vercel/vercel-original.svg`, invertDark: true },
    ],
  },
  {
    title: 'Tools & Workflow',
    iconBg: '#fce4ec',
    iconColor: '#e91e8c',
    accentColor: '#e91e8c',

    icon: <WrenchIcon color="#e91e8c" />,
    techs: [
      { name: 'Git', icon: `${D}/git/git-original.svg` },
      { name: 'GitHub Actions', icon: `${D}/githubactions/githubactions-original.svg` },
      { name: 'Vitest', icon: `${D}/vitest/vitest-original.svg` },
      { name: 'Figma', icon: `${D}/figma/figma-original.svg` },
      { name: 'Notion', icon: `${D}/notion/notion-original.svg`, invertDark: true },
    ],
  },
]


export default function Skills({ isDark }: { isDark: boolean }) {
  return (
    <section id="skills" className={`${styles.techStack} ${isDark ? styles.dark : ''}`}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.sectionNum}>03</span>
          <h2 className={styles.heading}>Skills</h2>
          <p className={styles.headerDesc}>
            これまでの学習や開発経験で触れた技術スタックです。
          </p>
        </div>
      </div>

      {/* Cards grid */}
      <div className={styles.grid}>
        {categories.map((cat) => (
          <div key={cat.title} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIconWrap} style={{ background: cat.iconBg }}>
                {cat.icon}
              </div>
              <div>
                <h3 className={styles.cardTitle}>{cat.title}</h3>
                <span className={styles.cardAccent} style={{ background: cat.accentColor }} />
              </div>
            </div>

            <div className={styles.techList}>
              {cat.techs.map((t) => (
                <div key={t.name} className={styles.techItem}>
                  <img
                    src={t.icon}
                    alt={t.name}
                    className={`${styles.techIcon} ${isDark && t.invertDark ? styles.invertIcon : ''}`}
                  />
                  <span className={styles.techName}>{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
