import "./Portfolio.css";
import Menu from "./Menu";
import { useState } from "react";

function Portfolio() {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((currentEl) => {
      return currentEl.category === categoryItem;
    });
    setItems(updatedItems);
  };
  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title">Neueste Arbeiten</h2>
      <div className="work__filters">
        <span
          className="work__item"
          onClick={() => {
            setItems(Menu);
          }}
        >
          Alles
        </span>
        <span
          className="work__item"
          onClick={() => {
            filterItem("Static Website");
          }}
        >
          Statische Website
        </span>
        <span
          className="work__item"
          onClick={() => {
            filterItem("PHP");
          }}
        >
          PHP
        </span>
        <span
          className="work__item"
          onClick={() => {
            filterItem("Javascript");
          }}
        >
          Javascript
        </span>
        <span
          className="work__item"
          onClick={() => {
            filterItem("Tailwind");
          }}
        >
          Tailwind
        </span>
        <span
          className="work__item"
          onClick={() => {
            filterItem("Reactjs");
          }}
        >
          Reactjs
        </span>
        <span
          className="work__item"
          onClick={() => {
            filterItem("Nextjs");
          }}
        >
          Next.js
        </span>
      </div>

      <div className="work__container grid">
        {items.map((item) => {
          const { id, image, title, category, link } = item;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt={title} className="work__image" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a
                href={link}
                className="work__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-link work__button-i"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
