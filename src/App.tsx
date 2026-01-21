import "./index.css";
import Navbar from "./components/Navbar"; 
import './App.css'
import Hero from './components/Hero';
import About from "./components/About";
import Services from './components/Services';
import ContactCTA from './components/ContactCTA';
import StudyMaterials from "./components/StudyMaterials";

function App() {
  const path =
    new URLSearchParams(window.location.search).get("path") ||
    window.location.pathname;

  if (path === "/study-materials") {
    return (
      <>
        <Navbar/>
        <StudyMaterials/>
        <ContactCTA/>
      </>
    );
  }

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <ContactCTA/>
  
    </>
  )
}

export default App
