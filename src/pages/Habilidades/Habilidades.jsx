import styles from "./Habilidades.module.css";
import data from "../../data/Texto.json";

import { FaServer, FaLaptopCode, FaDatabase, FaTools } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { HiOutlineCog } from "react-icons/hi";

function Habilidades() {
  const habilidades = data.habilidades_tecnicas.lista;

  const iconos = {
    "Back End": <FaServer />,
    "Frontend": <FaLaptopCode />,
    "Base de Datos": <FaDatabase />,
    "Herramientas": <FaTools />,
    "Sistemas Operativos": <MdComputer />,
    "Otras Tecnologias": <HiOutlineCog />
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Habilidades Técnicas</h2>

      <div className={styles.grid}>
        {habilidades.map((item, i) => {
          const claseColor = item.nombre
            .toLowerCase()
            .replace(/\s+/g, "");

          return (
            <div key={i} className={styles.card}>

              <div className={`${styles.icon} ${styles[claseColor]}`}>
                {iconos[item.nombre] || <FaLaptopCode />}
              </div>

              <h3>{item.nombre}</h3>

              <div className={styles.badges}>
                {item.herramientas.map((tool, j) => (
                  <span key={j} className={styles.badge}>
                    {tool}
                  </span>
                ))}
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Habilidades;