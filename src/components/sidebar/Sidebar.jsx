import "./Sidebar.css";
import Logo from "../../assets/logo.svg";
import { useState } from "react";

const links = [
  { href: "#home", icon: "icon-home", label: "Start" },
  { href: "#about", icon: "icon-user-following", label: "Über mich" },
  { href: "#services", icon: "icon-briefcase", label: "Leistungen" },
  { href: "#experience", icon: "icon-graduation", label: "Erfahrung" },
  { href: "#portfolio", icon: "icon-layers", label: "Arbeiten" },
  { href: "#contact", icon: "icon-bubble", label: "Kontakt" },
];

function Sidebar() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <a href="#home" className="nav__logo" aria-label="Zur Startseite">
          <img src={Logo} alt="" className="logo" />
        </a>
        <nav className="nav" aria-label="Hauptnavigation">
          <div className="nav__menu">
            <ul className="nav__list">
              {links.map((link) => (
                <li className="nav__item" key={link.href}>
                  <a
                    href={link.href}
                    className="nav__link"
                    aria-label={link.label}
                    onClick={() => setToggle(false)}
                  >
                    <i className={link.icon} aria-hidden="true"></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div className="nav__footer">
          <span className="copyright">
            &copy; {new Date().getFullYear()} Jumaa Almarzouk
          </span>
        </div>
      </aside>
      {toggle ? (
        <button
          type="button"
          className="nav__backdrop"
          aria-label="Menü schließen"
          onClick={() => setToggle(false)}
        />
      ) : null}
      <button
        type="button"
        className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
        onClick={() => setToggle(!toggle)}
        aria-expanded={toggle}
        aria-label={toggle ? "Menü schließen" : "Menü öffnen"}
      >
        {!toggle ? (
          <i className="fa-solid fa-bars" aria-hidden="true"></i>
        ) : (
          <i className="fa-solid fa-xmark" aria-hidden="true"></i>
        )}
      </button>
    </>
  );
}

export default Sidebar;
