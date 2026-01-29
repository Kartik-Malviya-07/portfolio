import {
  Navbar,
  Hero,
  About,
  Experience,
  Projects,
  Skills,
  Education,
  Contact,
  Footer
} from './components'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="bg-grid"></div>
      <div className="bg-glow"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
