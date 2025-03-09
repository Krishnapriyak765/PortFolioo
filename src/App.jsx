
import './App.css'
import Nav from './components/Navbar'
import Bg from './components/Baground'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Tecono from './components/Tecnoladgy.jsx'
import Exp from './components/Expirance.jsx'
import Pro from './components/project.jsx'
import Con from './components/Contact.jsx'
import DownloadCV from './components/Download.jsx'
import Eduation from './components/Education.jsx'
import { UpdateFollower } from 'react-mouse-follower'
export function App() {
  return (
    <>
      <UpdateFollower mouseOptions={{ backgroundColor: "white", zIndex:999,followSpeed:1.5}}>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <Bg />
        <div className="container mx-auto px-8">
          <Nav />
          <Hero />
          <About />
          <Tecono />
          <Exp />
          <Eduation />
          <Pro />
          <Con />
        </div>
      </div>
      </UpdateFollower>
    </>

  )
}
export default App
