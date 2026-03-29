import texto from '../../data/Texto.json';
import styles from './Habilidades.module.css';

function Habilidades() {
  return (
    <section id="habilidades" className={styles.container}>
      
      <h2 className={styles.title}>Habilidades Técnicas</h2>

      <div className={styles.grid}>
        {texto.habilidades_tecnicas.lista.map((categoria) => (
          <div key={categoria.nombre} className={styles.card}>
            
            <h3>{categoria.nombre}</h3>

            <div className={styles.badges}>
              {categoria.herramientas.map((item) => (
                <span key={item} className={styles.badge}>
                  {item}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* CERTIFICACIONES */}
      <div className={styles.certificaciones}>
        <h3>Certificaciones y Cursos</h3>

        <div className={styles.certGrid}>
          {texto.certificaciones_cursos.map((grupo) =>
            grupo.cursos.map((curso) => (
              <p key={curso} className={styles.certItem}>
                ✔ {curso}
              </p>
            ))
          )}
        </div>
      </div>

    </section>
  );
}

export default Habilidades;