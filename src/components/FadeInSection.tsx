import { useRef, useEffect, useState, ReactNode } from 'react'
import styles from './FadeInSection.module.css'

export default function FadeInSection({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`${styles.fadeIn} ${visible ? styles.visible : ''}`}>
      {children}
    </div>
  )
}
