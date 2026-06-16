import styles from './Works.module.css'

interface Project {
  title: string
  description: string
  techs: string[]
  awards?: string[]
  url: string
  accentColor: string
  iconBg: string
  image?: string
  imageFit?: 'cover' | 'contain'
}

const projects: Project[] = [
  {
    title: 'Mystery Cook',
    description: '世界のマイナーな料理をガチャ形式で提案するWebアプリ。いつもと違う料理をしてみたい人向けに、Python バックエンドと React フロントエンドで構築。',
    techs: ['Python', 'FastAPI', 'TypeScript', 'React'],
    url: 'https://github.com/keisukessu/Mystery-cook',
    accentColor: '#f59e0b',
    iconBg: '#fff8e1',
    image: '/images/works/mystery-cook.png',
  },
  {
    title: 'AruCo',
    description: 'VRと認知トレーニングを組み合わせた認知症予防ゲーム。Unity + Go で開発。操作補助のアンドロイドアプリも開発し、その担当をした。',
    techs: ['C#', 'Unity', 'Go', 'ShaderLab', 'Android'],
    awards: ['技育博 2024 企業賞', '技育展 2024 決勝進出'],
    url: 'https://github.com/anshibagundan/AruCo',
    accentColor: '#7c6fe0',
    iconBg: '#f0eeff',
    image: '/images/works/aruco.png',
    imageFit: 'contain',
  },
  {
    title: '551 Game',
    description: '関西の食文化・ランドマークを学ぶ教育クイズゲーム。KC3 Hack で開発。Android アプリと Django REST API、PostgreSQL で構成。',
    techs: ['Java', 'Android', 'Python', 'Django', 'PostgreSQL'],
    url: 'https://github.com/anshibagundan/KC3Hack_551game',
    accentColor: '#10b981',
    iconBg: '#e8f5e9',
    image: '/images/works/kc3hack.png',
    imageFit: 'contain',
  },
]

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
    </svg>
  )
}

function TrophyIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
    </svg>
  )
}

interface WorksProps {
  isDark: boolean
}

export default function Works({ isDark }: WorksProps) {
  return (
    <section id="works" className={`${styles.works} ${isDark ? styles.dark : ''}`}>
      <span className={styles.sectionNum}>03</span>
      <h2 className={styles.heading}>Works</h2>

      <div className={styles.grid}>
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            {p.image ? (
              <div className={styles.cardImage}>
                <img src={p.image} alt={p.title} className={styles.cardImg} style={{ objectFit: p.imageFit ?? 'cover' }} />
                <div className={styles.imageOverlay} style={{ background: p.accentColor }} />
              </div>
            ) : (
              <div className={styles.accent} style={{ background: p.accentColor }} />
            )}
            <div className={styles.cardInner}>
              <div className={styles.cardTop}>
                <h3 className={styles.title}>{p.title}</h3>
                {p.awards && (
                  <div className={styles.awards}>
                    {p.awards.map((a) => (
                      <span key={a} className={styles.award}>
                        <TrophyIcon />
                        {a}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <p className={styles.desc}>{p.description}</p>
              <div className={styles.techList}>
                {p.techs.map((t) => (
                  <span key={t} className={styles.tag} style={{ borderColor: p.accentColor, color: p.accentColor }}>
                    {t}
                  </span>
                ))}
              </div>
              <div className={styles.link}>
                <GitHubIcon />
                <span>GitHub で見る</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
