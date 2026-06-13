import styles from './About.module.css'

export default function About({ isDark }: { isDark: boolean }) {
  return (
    <section id="about" className={`${styles.about} ${isDark ? styles.dark : ''}`}>
      <div className={styles.inner}>
        <span className={styles.sectionNum}>01</span>
        <h2 className={styles.heading}>About Me</h2>

        <div className={styles.body}>
          <div className={styles.avatarWrap}>
            <div className={styles.avatar}>
              <img src="/images/me.jpg" alt="Keisuke" className={styles.avatarImg} />
            </div>
          </div>

          <div className={styles.textCol}>
            <p className={styles.greeting}>はじめまして！</p>
            <p className={styles.desc}>
              Web開発やUnityを使ったVR制作などを行っています。<br />
              今はいろいろ学んで作りたいものを実装できる技術力を身につけれるように取り組んでいます。
            </p>
            <a href="#" className={styles.more}>
              More About Me
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.meta}>
          <span className={styles.metaItem}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            Japan
          </span>
          <span className={styles.metaItem}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            2003.07.19
          </span>
          <span className={styles.metaItem}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            keisukesonoyama.official@example.com
          </span>
        </div>
      </div>
    </section>
  )
}
