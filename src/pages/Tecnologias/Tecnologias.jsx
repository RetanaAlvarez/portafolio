import data from "../../data/Texto.json";

import { techIcons } from "../../assets/icons";

import styles from "./Tecnologias.module.css";
function Tecnologias() {
  return (
    <section id="tecnologias" className={styles.container}>

      <h2 className={styles.title}>Tecnologías que uso</h2>

      <div className={styles.grid}>
        {data.tecnologias_que_uso?.[0]?.Tecnologicas.map((tech) => {
          const key = tech.toLowerCase();

          return (
            <div key={tech} className={styles.card}>
              <div className={styles.icon}>
                {techIcons[key]?.()}
              </div>
              <p>{tech}</p>
            </div>
          );
        })}
      </div>

    </section>
  );
}

export default Tecnologias;