import styles from "./Proyectos.module.css";
import data from "../../data/Texto.json";

function Proyectos() {
  const proyectos = data.proyectos.lista;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Proyectos Destacados</h2>

      <div className={styles.grid}>

        {/* CARD GRANDE */}
        {proyectos[0] && (
          <div className={`${styles.card} ${styles.big}`}>
            <Card proyecto={proyectos[0]} />
          </div>
        )}

        {/* CARDS ABAJO */}
        <div className={styles.row}>
          {proyectos.slice(1).map((p, i) => (
            <div key={i} className={styles.card}>
              <Card proyecto={p} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}



export default Proyectos;

function Card({ proyecto }) {
  return (
    <>
      <div className={styles.imageWrapper}>
        <img
          src={
            proyecto.imagen ||
            `https://api.microlink.io/?url=${proyecto.url}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1200&viewport.height=800`
          }
          alt={proyecto.nombre}
          loading="lazy"
          onError={(e) => {
            e.target.src = "/img/fallback.png";
          }}
        />

        <a
          href={proyecto.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.overlayBtn}
          onClick={(e) => {
            if (!proyecto.url) {
              e.preventDefault();
              alert("Proyecto sin URL");
            }
          }}
        >
          Ver
        </a>
      </div>

      <h3>{proyecto.nombre}</h3>
      <p>{proyecto.descripcion}</p>

      <div className={styles.techList}>
        {proyecto.tecnologias.map((tech, i) => (
          <span key={i} className={styles.techItem}>
            {tech}
          </span>
        ))}
      </div>

      <ul className={styles.funcList}>
        {proyecto.funciones.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </>
  );
}