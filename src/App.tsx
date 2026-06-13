import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Hobbies from './components/Hobbies'
import Works from './components/Works'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import FadeInSection from './components/FadeInSection'

export default function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [isDark])

  return (
    <>
      <Navbar isDark={isDark} onToggleDark={() => setIsDark(d => !d)} />
      <main>
        <Hero isDark={isDark} />
        <FadeInSection><About isDark={isDark} /></FadeInSection>
        <FadeInSection><Hobbies isDark={isDark} /></FadeInSection>
        <FadeInSection><Works isDark={isDark} /></FadeInSection>
        <FadeInSection><Skills isDark={isDark} /></FadeInSection>
        <FadeInSection><Certifications isDark={isDark} /></FadeInSection>
        <FadeInSection><Contact isDark={isDark} /></FadeInSection>
      </main>
    </>
  )
}
