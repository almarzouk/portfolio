import "./Sidebar.css";
import Logo from "../../assets/logo.svg";
import { useState } from "react";
function Sidebar() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <a href="#home" className="nav__logo">
          <img src={Logo} alt="logo" className="logo" />
        </a>
        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__ite">
                <a href="#home" className="nav__link">
                  <i className="icon-home"></i>
                </a>
              </li>
              <li className="nav__ite">
                <a href="#about" className="nav__link">
                  <i className="icon-user-following"></i>
                </a>
              </li>
              <li className="nav__ite">
                <a href="#services" className="nav__link">
                  <i className="icon-briefcase"></i>
                </a>
              </li>
              <li className="nav__ite">
                <a href="#experience" className="nav__link">
                  <i className="icon-graduation"></i>
                </a>
              </li>
              <li className="nav__ite">
                <a href="#portfolio" className="nav__link">
                  <i className="icon-layers"></i>
                </a>
              </li>
              <li className="nav__ite">
                <a href="#contact" className="nav__link">
                  <i className="icon-bubble"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="nav__footer">
          <span className="copyright">&copy; 2023.</span>
        </div>
      </aside>
      <div
        className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
        onClick={() => setToggle(!toggle)}
      >
        {!toggle ? (
          <i className="fa-solid fa-bars"></i>
        ) : (
          <i className="fa-solid fa-xmark"></i>
        )}
      </div>
    </>
  );
}

export default Sidebar;
