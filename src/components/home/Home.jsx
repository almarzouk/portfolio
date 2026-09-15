import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import "./Home.css";
import Shapes from "./Shapes";

function Home() {
  return (
    <section className="container home" id="home">
      <div className="intro">
        <div className="home__avatar" aria-hidden="true">
          JA
        </div>
        <h1 className="home__name">Jumaa Almarzouk</h1>
        <span className="home__education">
          Full-Stack Entwickler · dream-soft GmbH
        </span>
        <p className="home__tagline">
          Haselünne · React, Next.js, Node.js, PHP und WordPress
        </p>
        <HeaderSocials />
        <div className="home__actions">
          <a href="mailto:jumaa.almarzouk@gmail.com" className="btn">
            Schreiben Sie mir
          </a>
          <a href="#portfolio" className="btn btn--ghost">
            Projekte ansehen
          </a>
        </div>
        <ScrollDown />
      </div>
      <Shapes />
    </section>
  );
}

export default Home;
