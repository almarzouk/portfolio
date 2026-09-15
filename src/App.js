import "./App.css";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Sidebar from "./components/sidebar/Sidebar";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Skills />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}

export default App;
