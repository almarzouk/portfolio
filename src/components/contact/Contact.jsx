import "./Contact.css";

function Contact() {
  return (
    <section className="container section contact">
      <h2 className="section__title">Kontaktieren Sie mich</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Lassen Sie uns über alles sprechen</h3>
          <p className="contact__details">
            Mögen Sie keine Formulare? Senden Sie mir eine E-Mail. 👋
          </p>
        </div>
        <form className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Ihr Name"
              />
            </div>
            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Ihre E-Mail"
              />
            </div>
          </div>
          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input"
              placeholder="Ihr Betreff"
            />
          </div>
          <div className="contact__form-div contact__form-area">
            <textarea
              type="text"
              className="contact__form-input"
              placeholder="Ihre Nachricht"
            ></textarea>
          </div>
          <div className="btn">Nachricht senden</div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
