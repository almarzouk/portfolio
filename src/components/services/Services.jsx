import "./Services.css";
import Img1 from "../../assets/service-1.svg";
import Img2 from "../../assets/service-2.svg";
import Img3 from "../../assets/service-3.svg";

const data = [
  {
    id: 1,
    image: Img1,
    title: "Webentwicklung",
    description:
      "Responsive Oberflächen und Web-Apps mit React, Next.js, HTML und CSS – klar, schnell und wartbar.",
  },
  {
    id: 2,
    image: Img2,
    title: "WordPress",
    description:
      "Themes, Inhalte und Kundenwebsites aus der Agenturpraxis: strukturiert, pflegbar und auf das Briefing zugeschnitten.",
  },
  {
    id: 3,
    image: Img3,
    title: "Full-Stack Anwendungen",
    description:
      "APIs, Authentifizierung, Dashboards und Datenbanken mit Node.js, PHP/Laravel, MySQL und MongoDB.",
  },
];

function Services() {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Leistungen</h2>
      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
