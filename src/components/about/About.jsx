import "./About.css";
import AboutBox from "./AboutBox";
import AboutMe from "../../assets/avatar-2.svg";
function About() {
  return (
    <section id="about" className="about container section">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={AboutMe} alt="about me" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am Bolby Doe, web developer from London, United Kingdom. I have
              rich experience in web site design and building and customization,
              also I am good at WordPress.
            </p>
            <a href="/" className="btn">
              Download CV
            </a>
          </div>
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Graphic Design</h3>
                <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage graphic__design"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Photography</h3>
                <span className="skills__number">70%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage photography "></span>
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
