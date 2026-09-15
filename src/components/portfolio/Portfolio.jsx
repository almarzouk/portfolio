import "./Portfolio.css";
import Menu from "./Menu";
import { useState } from "react";

const filters = [
  { label: "Alle", value: "all" },
  { label: "Full-Stack", value: "Full-Stack" },
  { label: "Next.js", value: "Next.js" },
  { label: "React", value: "React" },
  { label: "PHP", value: "PHP" },
];

function Portfolio() {
  const [items, setItems] = useState(Menu);
  const [active, setActive] = useState("all");

  const filterItem = (categoryItem) => {
    setActive(categoryItem);
    if (categoryItem === "all") {
      setItems(Menu);
      return;
    }
    setItems(Menu.filter((currentEl) => currentEl.category === categoryItem));
  };

  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title">Ausgewählte Arbeiten</h2>
      <div className="work__filters" role="tablist" aria-label="Projektfilter">
        {filters.map((filter) => (
          <button
            type="button"
            key={filter.value}
            className={
              active === filter.value ? "work__item is-active" : "work__item"
            }
            onClick={() => filterItem(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="work__container grid">
        {items.map((item) => {
          const { id, image, title, category, link, description } = item;
          return (
            <article className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__image" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <p className="work__description">{description}</p>
              <a
                href={link}
                className="work__button"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} öffnen`}
              >
                <i className="icon-link work__button-i" aria-hidden="true"></i>
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
