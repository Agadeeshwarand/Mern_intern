import Home from"./components/FunctionalComponents/Home"

import About from "./components/FunctionalComponents/About"
import ClassCompEG from "./components/classComponents/ClassCompEG";
import Gallery from "./components/FunctionalComponents/gallery";
import Contact from "./components/FunctionalComponents/Contact";
function App() {
 

  return (<div>
    <Home />
  <About/>
  <ClassCompEG/>
  <Gallery/>
  <h2>fs</h2>
  <Gallery image="college sece logo" page="Gallery"/>
  <Contact/>
  </div>)
        
}

export default App;