import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

interface NavbarProps {
  isDark: boolean
  onToggleDark: () => void
}

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#hobbies', label: 'Hobbies' },
  { href: '#skills', label: 'Skills' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ isDark, onToggleDark }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      setMenuOpen(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${isDark ? styles.dark : ''}`}>
      <a href="#" className={styles.logo}>Keisuke</a>

      <ul className={styles.links}>
        {navLinks.map(link => (
          <li key={link.href}><a href={link.href}>{link.label}</a></li>
        ))}
      </ul>

      <button className={styles.themeToggle} onClick={onToggleDark} aria-label="Toggle theme">
        {isDark ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 17q-2.075 0-3.537-1.463T7 12q0-2.075 1.463-3.537T12 7q2.075 0 3.538 1.463T17 12q0 2.075-1.462 3.538T12 17ZM2 13H1v-2h1v2Zm21 0h-1v-2h1v2ZM11 2V1h2v1h-2Zm0 21v-1h2v1h-2ZM4.225 5.637 2.808 4.222l1.414-1.414 1.414 1.414L4.222 5.637Zm15.138 15.15-1.414-1.415 1.414-1.414 1.415 1.414-1.415 1.415ZM18.363 4.223l1.414-1.414 1.414 1.414-1.414 1.414-1.414-1.414ZM3.213 19.363l-1.414-1.414 1.414-1.414 1.414 1.414-1.414 1.414Z" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21q-3.75 0-6.375-2.625T3 12q0-3.75 2.625-6.375T12 3q.35 0 .688.025.337.025.662.075-1.025.725-1.637 1.887Q11.1 6.15 11.1 7.5q0 2.25 1.575 3.825Q14.25 12.9 16.5 12.9q1.375 0 2.525-.613 1.15-.612 1.875-1.637.05.325.075.662Q21 11.65 21 12q0 3.75-2.625 6.375T12 21Z" />
          </svg>
        )}
      </button>

      <button
        className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
        onClick={() => setMenuOpen(prev => !prev)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
