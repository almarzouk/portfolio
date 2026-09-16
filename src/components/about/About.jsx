import "./About.css";

function About() {
  return (
    <section id="about" className="about container section">
      <h2 className="section__title">Über mich</h2>
      <div className="about__container grid">
        <div className="about__mark" aria-hidden="true">
          JA
        </div>
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Ich bin Full-Stack Entwickler in Haselünne und arbeite aktuell bei
              dream-soft GmbH. Zuvor habe ich bei Eilinghoff + Team und
              co:listic WordPress- und Frontend-Projekte für Agenturkunden
              umgesetzt.
            </p>
            <p className="about__description">
              Ich baue Webanwendungen mit React, Next.js, Node.js und
              PHP/Laravel – von der Oberfläche bis zur API. Neben Deutsch
              arbeite ich auf Englisch, Französisch und Arabisch.
            </p>
            <a href="/jumaa_lebenslauf.pdf" className="btn" download>
              Lebenslauf herunterladen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
