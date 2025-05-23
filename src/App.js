import "./App.css";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Sidebar from "./components/sidebar/Sidebar";
import Testimonials from "./components/testimonials/Testimonials";
import Skills from "./components/skills/Skills";

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
        <Testimonials />
      </main>
    </>
  );
}

export default App;
