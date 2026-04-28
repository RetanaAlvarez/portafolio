import styles from "./Experiencia.module.css";
import data from "../../data/Texto.json";

export function Experiencia() {
  const experiencias = data.experiencia_profesional;

  return (
    <section id="experiencia">
      <h1>Experiencia Profesional</h1>

      <div className={styles.expContainer}>
        {experiencias.map((exp, index) => (
          <div key={index} className={styles.card}>

            {/* HEADER */}
            <div className={styles.header}>

              <div className={styles.left}>
                <h2>{exp.puesto}</h2>
                <span>{exp.empresa}</span>
              </div>

              <div className={styles.right}>
                <span>{exp.periodo}</span>
              </div>

            </div>

            {/* DESCRIPCIÓN */}
            <p>{exp.descripcion}</p>

            {/* LISTA */}
            <div className={styles.grid}>
              {exp.responsabilidades.map((item, i) => (
                <div key={i} className={styles.item}>
                  <span className={styles.dot}></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}