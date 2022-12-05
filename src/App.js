import Header from "./component/pages/Header"
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Landing from "./component/pages/Landing"
import AboutMe from "./component/pages/AboutMe"
import Projects from "./component/pages/Projects"
import Skills from "./component/pages/Skills"
import Contact from "./component/pages/Contact"
function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/about" element={<AboutMe/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
    </>
  )
}
export default App