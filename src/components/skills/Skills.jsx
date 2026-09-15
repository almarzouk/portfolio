import "./Skills.css";

const groups = [
  {
    title: "Frontend",
    items: [
      "HTML",
      "CSS",
      "Sass",
      "JavaScript",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "PHP", "Laravel", "MySQL", "MongoDB"],
  },
  {
    title: "CMS & Tools",
    items: ["WordPress", "Git", "GitHub", "AWS"],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills container section">
      <h2 className="section__title">Fähigkeiten</h2>
      <div className="skill__groups grid">
        {groups.map((group) => (
          <div className="skill__group" key={group.title}>
            <h3 className="skill__group-title">{group.title}</h3>
            <ul className="skill__list">
              {group.items.map((item) => (
                <li className="skill__tag" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
