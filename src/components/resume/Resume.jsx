import "./Resume.css";
import Data from "./Data.js";
import Card from "./Card";

function Resume() {
  return (
    <section className="container resume section" id="experience">
      <h2 className="section__title">Erfahrung</h2>

      <div className="resume__container grid">
        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category === "bildung") {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            }
            return null; // Return null when condition isn't met
          })}
        </div>
        <div className="timeline grid">
          {Data.map((val, index) => {
            if (val.category === "erfahrung") {
              return (
                <Card
                  key={index}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            }
            return null; // Return null when condition isn't met
          })}
        </div>
      </div>
    </section>
  );
}

export default Resume;
