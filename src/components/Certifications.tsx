import styles from './Certifications.module.css'

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
    <section id="certifications" className={`${styles.certifications} ${isDark ? styles.dark : ''}`} >
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
          <img src="/images/certification.png" alt="Certifications" className={styles.bannerImg} />
        </div>
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
