import { Suspense } from 'react'
import Scene3D from './Scene3D'
import styles from './Hero.module.css'

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
  </svg>
)


interface HeroProps {
  isDark: boolean
}

export default function Hero({ isDark }: HeroProps) {
  return (
    <section className={`${styles.hero} ${isDark ? styles.dark : ''}`}>
      {/* Left scroll indicator */}
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>SCROLL</span>
        <div className={styles.scrollLine} />
      </div>

      {/* Left content */}
      <div className={styles.content}>
        <p className={styles.greeting}>Hello,</p>
        <h1 className={styles.title}>I'm Keisuke.</h1>
        <p className={styles.role}>名前：園山佳典<br />職業：立命館大学　情報理工学部　４回生</p>
        <p className={styles.description}>
          Webエンジニアを志望しています。<br />
          大学院進学予定で２９卒です。
        </p>
        <div className={styles.languages}>
          <span className={styles.langLabel}>Languages</span>
          <span className={styles.langTag}>日本語</span>
          <span className={styles.langTag}>English</span>
        </div>
        <div className={styles.buttons}>
          <a href="#contact" className={styles.btnSecondary}>
            Contact
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>
      </div>

      {/* 3D Scene */}
      <div className={styles.scene}>
        <Suspense fallback={null}>
          <Scene3D isDark={isDark} />
        </Suspense>
      </div>

      {/* Right social links */}
      <div className={styles.socials}>
        <a href="https://github.com/keisukessu" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <GitHubIcon />
        </a>
      </div>
    </section>
  )
}
