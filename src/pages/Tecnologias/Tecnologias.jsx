import data from "../../data/Texto.json";

import { techIcons } from "../../assets/icons";

import Habilidades from '../Habilidades/Habilidades';
function Tecnologias() {
  return (
    <>
      <section id="tecnologias">
        <div className="tech-grid">
          {data.tecnologias_que_uso.map((tech, i) => (
            <div key={i} className="tech-card">
              {techIcons[tech] && techIcons[tech]()}
              <p>{tech}</p>
            </div>
          ))}
        </div>
      </section>
      <Habilidades />
    </>
  );
}

export default Tecnologias;
