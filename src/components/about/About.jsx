import "./About.css";
import AboutBox from "./AboutBox";
import AboutMe from "../../assets/avatar-2.svg";

function About() {
  return (
    <section id="about" className="about container section">
      <h2 className="section__title">Über mich</h2>
      <div className="about__container grid">
        <img src={AboutMe} alt="about me" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Ich bin ein autodidaktischer Full-Stack MERN-Entwickler mit
              Fachkenntnissen in MongoDB, Express.js, React.js und Node.js. Ich
              bin auch erfahren in HTML, CSS, Sass, JavaScript, Bootstrap, PHP,
              MySQL und WordPress.
            </p>
            <a
              href="../../assets/jumaa_lebenslauf.pdf"
              className="btn"
              download
            >
              Lebenslauf herunterladen
            </a>
          </div>
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Entwicklung</h3>
                <span className="skills__number">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Grafikdesign</h3>
                <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage graphic__design"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Fotografie</h3>
                <span className="skills__number">70%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage photography"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
}

export default About;
