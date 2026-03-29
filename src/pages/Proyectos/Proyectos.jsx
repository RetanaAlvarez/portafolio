import styles from "./Proyectos.module.css";
import texto from "../../data/Texto.json";

function Proyectos() {
  return (
    <section id="proyectos" className={styles.container}>

      <h2 className={styles.title}>
        {texto.proyectos.titulo}
      </h2>

      <div className={styles.grid}>
        {texto.proyectos.lista.map((proyecto, i) => (

          <div key={i} className={styles.card}>

            <img
              src={`https://api.microlink.io/?url=${proyecto.url}&screenshot=true&meta=false&embed=screenshot.url`}
              alt={proyecto.nombre}
              className={styles.image}
            />

            <h3>{proyecto.nombre}</h3>

            <div className={styles.techList}>
              {proyecto.Tecnologicas.map((tech, j) => (
                <span key={j} className={styles.techItem}>
                  {tech}
                </span>
              ))}
            </div>

            <p>{proyecto.Descripcion}</p>

            <ul className={styles.funcList}>
              {proyecto.Funciones.map((func, k) => (
                <li key={k}>{func}</li>
              ))}
            </ul>

            <a href={proyecto.url} className={styles.button} target="_blank" rel="noreferrer">
              Ver Proyecto
            </a>

            <p className={styles.text}>{texto.proyectos.descripcion_final}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Proyectos;