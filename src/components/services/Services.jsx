import "./Services.css";
import Img1 from "../../assets/service-1.svg";
import Img2 from "../../assets/service-2.svg";
import Img3 from "../../assets/service-3.svg";
const data = [
  {
    id: 1,
    image: Img1,
    title: "Web Design",
    description:
      "Engaging and intuitive web designs that provide a seamless user experience. ",
  },
  {
    id: 2,
    image: Img2,
    title: "Web Development",
    description:
      "Custom web development solutions tailored to meet your specific business needs.",
  },
  {
    id: 3,
    image: Img2,
    title: "WordPress Development",
    description:
      "Professional WordPress development services to help you create a powerful online presence.",
  },
];
function Services() {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>
      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card " key={id}>
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
