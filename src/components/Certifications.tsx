import styles from './Certifications.module.css'

function CertIllustration({ isDark }: { isDark: boolean }) {
  const bg = isDark ? '#1e1e2e' : '#ffffff'
  const line = isDark ? '#3a3a55' : '#dde0f0'
  const shadow = isDark ? 'rgba(0,0,0,0.4)' : 'rgba(124,111,224,0.12)'
  return (
    <svg viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shadow */}
      <ellipse cx="110" cy="188" rx="72" ry="10" fill={shadow} />
      {/* Certificate body */}
      <rect x="28" y="20" width="156" height="152" rx="14" fill={bg} stroke="#e0ddf5" strokeWidth="1.5" />
      {/* Top accent bar */}
      <rect x="28" y="20" width="156" height="8" rx="14" fill="#7c6fe0" opacity="0.18" />
      {/* Text lines */}
      <rect x="50" y="52" width="88" height="7" rx="3.5" fill={line} />
      <rect x="50" y="68" width="112" height="5" rx="2.5" fill={line} />
      <rect x="50" y="80" width="96" height="5" rx="2.5" fill={line} />
      <rect x="50" y="92" width="100" height="5" rx="2.5" fill={line} />
      {/* Divider */}
      <line x1="50" y1="108" x2="168" y2="108" stroke={line} strokeWidth="1" />
      {/* Signature-like scribble */}
      <path d="M56 124 Q62 118 68 124 Q74 130 82 122 Q88 116 94 124" stroke="#7c6fe0" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
      {/* Seal circle */}
      <circle cx="154" cy="146" r="24" fill="#7c6fe0" />
      <circle cx="154" cy="146" r="20" fill="#6358c8" />
      {/* Star */}
      <path d="M154 132 L156.4 139.6 H164.4 L158 144.4 L160.4 152 L154 147.2 L147.6 152 L150 144.4 L143.6 139.6 H151.6 Z" fill="white" opacity="0.9" />
      {/* Ribbon left */}
      <path d="M143 168 L148 154 L154 160 L148 168 Z" fill="#9585e8" />
      {/* Ribbon right */}
      <path d="M165 168 L160 154 L154 160 L160 168 Z" fill="#9585e8" />
      {/* Decorative dots */}
      <circle cx="40" cy="40" r="2" fill="#7c6fe0" opacity="0.25" />
      <circle cx="192" cy="30" r="1.5" fill="#7c6fe0" opacity="0.2" />
      <circle cx="200" cy="80" r="2" fill="#7c6fe0" opacity="0.18" />
      <circle cx="35" cy="130" r="1.5" fill="#7c6fe0" opacity="0.2" />
    </svg>
  )
}

const certifications = [
  {
    name: '普通自動車第一種運転免許',
    date: '2022年6月取得',
  },
  {
    name: '基本情報技術者',
    date: '2024年6月取得',
  },
  {
    name: 'TOEIC 870点',
    date: '2026年3月取得',
  },
]

export default function Certifications({ isDark }: { isDark: boolean }) {
  return (
    <section id="certifications" className={`${styles.certifications} ${isDark ? styles.dark : ''}`}>
      {/* Hero banner */}
      <div className={styles.banner}>
        <div className={styles.bannerLeft}>
          <span className={styles.sectionNum}>04</span>
          <h2 className={styles.heading}>Certifications</h2>
          <p className={styles.bannerDesc}>
            これまでに取得した資格です。
          </p>
        </div>
        <div className={styles.bannerRight}>
          <CertIllustration isDark={isDark} />
        </div>
        {/* Decorative plus marks */}
        <span className={`${styles.plus} ${styles.plus1}`}>+</span>
        <span className={`${styles.plus} ${styles.plus2}`}>+</span>
        <span className={`${styles.plus} ${styles.plus3}`}>+</span>
      </div>

      {/* List section */}
      <div className={styles.listSection}>
        <h3 className={styles.listHeading}>保有資格一覧</h3>
        <ul className={styles.list}>
          {certifications.map((cert) => (
            <li key={cert.name} className={styles.item}>
              <div className={styles.bullet} />
              <div className={styles.itemContent}>
                <span className={styles.itemName}>{cert.name}</span>
                <span className={styles.itemDate}>{cert.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
