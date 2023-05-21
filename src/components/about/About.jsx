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
              I'm a self-taught full stack MERN developer with expertise in
              MongoDB, Express.js, React.js, and Node.js. I'm also skilled in
              HTML, CSS, Sass, JavaScript, Bootstrap, PHP, MySQL, and WordPress.
            </p>
            <a
              href="../../assets/mern ALMARZOUK Jumaa WEB 2022.pdf"
              className="btn"
              download
            >
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
