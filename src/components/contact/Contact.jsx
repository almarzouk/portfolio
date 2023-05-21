import "./Contact.css";

function Contact() {
  return (
    <section className="container section contact">
      <h2 className="section__title">Get In Touch</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything</h3>
          <p className="contact__details">
            Don't like forms? Send me an Email. 👋
          </p>
        </div>
        <form className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="your name"
              />
            </div>
            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="your email"
              />
            </div>
          </div>
          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input"
              placeholder="your subject"
            />
          </div>
          <div className="contact__form-div contact__form-area">
            <textarea
              type="text"
              className="contact__form-input"
              placeholder="your message"
            ></textarea>
          </div>
          <div className="btn">Send Message</div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
