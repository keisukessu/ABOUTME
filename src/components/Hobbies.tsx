import React from 'react'
import styles from './Hobbies.module.css'

function RunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13" cy="4" r="2" />
      <path d="m15 9-3 3-2 5-3-3" />
      <path d="m9 17 2 3" />
      <path d="m15 9 3 2 2-2" />
    </svg>
  )
}

function DumbbellIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4v16M18 4v16M4 8h4M16 8h4M4 16h4M16 16h4M8 12h8" />
    </svg>
  )
}

function PlaneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19 4c-2 0-4 2-4 2L7 7.8l-1.5 3L10 12l-1 4 4-1 1.2 4.5z" />
    </svg>
  )
}

function GameIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M6 12h4M8 10v4M15 12h2" />
      <circle cx="17" cy="10" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

function MonitorIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  )
}

function HorseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 22V10.5C5 7 7 4 11 4c1.5 0 2.5.5 3.5 1.5L17 8l2-1v4l-2 1-1 5-1 5h-3l.5-4H10l.5 4H8l-1-5z" />
    </svg>
  )
}

interface HobbyCard {
  title: string
  desc: React.ReactNode
  image: string
  icon: JSX.Element
}

const hobbies: HobbyCard[] = [
  {
    title: '運動',
    desc: <>小学校から高校までサッカーをしていました。<br />体を動かすことが好きで、今はよくランニングをしています。</>,
    image: '/images/soccer.jpg',
    icon: <RunIcon />,
  },
  {
    title: '筋トレ',
    desc: <>家でダンベルや自重を使って筋トレをしています。</>,
    image: '/images/training.jpg',
    icon: <DumbbellIcon />,
  },
  {
    title: '旅行',
    desc: <>旅行に行くのが好きです。<br />海外もいろんなとこに行ってみたいです。</>,
    image: '/images/trip.jpg',
    icon: <PlaneIcon />,
  },
  {
    title: 'ゲーム',
    desc: <>友達とスマブラをして遊んでいます。<br />ポケモン、スプラトゥーン、モンハンも好きです！</>,
    image: '/images/game.jpg',
    icon: <GameIcon />,
  },
  {
    title: 'アニメ',
    desc: <>王道系を見ることが多いです。見始めると一気見しちゃいます。</>,
    image: '/images/anime.jpg',
    icon: <MonitorIcon />,
  },
  {
    title: '競馬',
    desc: <>2022年の有馬記念を見てから競馬が好きになりました。ときどき競馬場に観戦しに行ってます！</>,
    image: '/images/keiba.jpg',
    icon: <HorseIcon />,
  },
]

export default function Hobbies({ isDark }: { isDark: boolean }) {
  return (
    <section id="hobbies" className={`${styles.hobbies} ${isDark ? styles.dark : ''}`}>
      <div className={styles.inner}>
        <aside className={styles.sidebar}>
          <span className={styles.sectionNum}>02</span>
          <h2 className={styles.heading}>My Hobbies</h2>
        </aside>

        <div className={styles.grid}>
          {hobbies.map((h) => (
            <div key={h.title} className={styles.card}>
              <div className={styles.cardImage}>
                <img src={h.image} alt={h.title} className={styles.cardImg} />
                <div className={styles.cardIconBadge}>{h.icon}</div>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{h.title}</h3>
                <p className={styles.cardDesc}>{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
