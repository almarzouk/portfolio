import "./Contact.css";

const contacts = [
  {
    label: "E-Mail",
    value: "jumaa.almarzouk@gmail.com",
    href: "mailto:jumaa.almarzouk@gmail.com",
    icon: "icon-envelope",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/almarzouk",
    href: "https://www.linkedin.com/in/almarzouk/",
    icon: "icon-social-linkedin",
  },
  {
    label: "GitHub",
    value: "github.com/almarzouk",
    href: "https://github.com/almarzouk",
    icon: "icon-social-github",
  },
  {
    label: "Standort",
    value: "Haselünne, Deutschland",
    href: "https://www.google.com/maps/search/?api=1&query=Haseluenne",
    icon: "icon-location-pin",
  },
];

function Contact() {
  return (
    <section className="container section contact" id="contact">
      <h2 className="section__title">Kontakt</h2>
      <div className="contact__intro">
        <h3 className="contact__title">Lassen Sie uns sprechen</h3>
        <p className="contact__details">
          Für Projekte, Stellen oder eine kurze Rückfrage schreiben Sie mir
          direkt. Kein Formular, nur ein Klick.
        </p>
        <a href="mailto:jumaa.almarzouk@gmail.com" className="btn">
          E-Mail schreiben
        </a>
      </div>
      <div className="contact__container grid">
        {contacts.map((item) => (
          <a
            className="contact__card"
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
          >
            <i className={`contact__icon ${item.icon}`} aria-hidden="true"></i>
            <span className="contact__label">{item.label}</span>
            <span className="contact__value">{item.value}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
