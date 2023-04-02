import "./App.css";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Sidebar from "./components/sidebar/Sidebar";
import Pricing from "./components/priceing/Pricing";
import Contact from "./components/contact/Contact";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}

export default App;
