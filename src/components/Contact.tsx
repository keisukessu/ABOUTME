import styles from './Contact.module.css'

function GitHubIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

const contacts = [
  {
    label: 'GitHub',
    value: 'https://github.com/keisukessu',
    display: 'github.com/keisukessu',
    href: 'https://github.com/keisukessu',
    icon: <GitHubIcon />,
    external: true,
  },
  {
    label: 'Email',
    value: 'keisukesonoyama.official@gmail.com',
    display: 'keisukesonoyama.official@gmail.com',
    href: 'mailto:keisukesonoyama.official@gmail.com',
    icon: <EmailIcon />,
    external: false,
  },
]

export default function Contact({ isDark }: { isDark: boolean }) {
  return (
    <section id="contact" className={`${styles.contact} ${isDark ? styles.dark : ''}`}>
      <div className={styles.inner}>
        {/* Left */}
        <div className={styles.left}>
          <span className={styles.sectionNum}>06</span>
          <h2 className={styles.heading}>Contact</h2>
          <p className={styles.desc}>
            ご依頼・ご相談・ご質問など、お気軽にご連絡ください。
          </p>

          <ul className={styles.list}>
            {contacts.map((c) => (
              <li key={c.label} className={styles.item}>
                <a
                  href={c.href}
                  className={styles.itemLink}
                  target={c.external ? '_blank' : undefined}
                  rel={c.external ? 'noopener noreferrer' : undefined}
                >
                  <div className={styles.iconWrap}>{c.icon}</div>
                  <div className={styles.itemBody}>
                    <span className={styles.itemLabel}>{c.label}</span>
                    <span className={styles.itemValue}>{c.display}</span>
                  </div>
                  {c.external && (
                    <span className={styles.externalIcon}>
                      <ExternalLinkIcon />
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2026 Keisuke Sonoyama.</p>
      </footer>
    </section>
  )
}
