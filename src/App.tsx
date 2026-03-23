import './App.scss'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Tools from './components/Tools'
import Experience from './components/Experience'
import Education from './components/Education'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-sans bg-gradient-main-subtle">
      <Navbar />
      <Hero />
      <Profile />
      <Skills />
      <Tools />
      <Experience />
      <Education />
      <Footer />
    </div>
  )
}
