function HeaderSocials() {
  return (
    <div className="home__socials">
      <a
        href="https://github.com/almarzouk"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <i className="fa-brands fa-github" aria-hidden="true"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/almarzouk/"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
      </a>
      <a
        href="https://wa.me/4917674724437"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
      </a>
    </div>
  );
}

export default HeaderSocials;
