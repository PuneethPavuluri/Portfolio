import "./App.css"
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import SkillExp from "./components/SkillExp.jsx"
import Project from "./components/Project.jsx"
import Contact from "./components/Contact.jsx"

function App() {

  return (
    <>
    <div className="App">
      <Navbar />
      <Hero />
      <SkillExp/>
      <Project />
      <Contact />
    </div>
    </>
  )
}

export default App
