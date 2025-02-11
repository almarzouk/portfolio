import Me from "../../assets/avatar-1.svg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import "./Home.css";
import Shapes from "./Shapes";

function Home() {
  return (
    <section className="container home" id="home">
      <div className="intro">
        <img src={Me} alt="me" className="home__img" />
        <h1 className="home__name">Jumaa Almarzouk</h1>
        <span className="home__education">
          Ich bin ein Full-Stack Entwickler
        </span>
        <HeaderSocials />
        <a href="mailto:jumaa.almarzouk@gmail.com" className="btn">
          Engagieren Sie mich
        </a>
        <ScrollDown />
      </div>
      <Shapes />
    </section>
  );
}

export default Home;
