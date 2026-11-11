import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Expertise from './components/Expertise'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import SelectedWork from './components/SelectedWork'

function App() {

  return (
    <main>
      <Navbar />
      <Hero />
      <SelectedWork />
      <About />
      <Expertise />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
