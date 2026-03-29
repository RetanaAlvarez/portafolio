import { FaBriefcase, FaCalendarAlt, FaCircle } from "react-icons/fa";

import texto from '../../data/Texto.json';

import styles from './Experiencia.module.css';

function Experiencia() {
  return (
    <>
      <section id="experiencia">
        <h1>Experiencia Profesional</h1>

        <div className={styles.expContainer}>
          {texto.experiencia_profesional.map((job, index) => (
            <div key={index} className={styles.card}>

              <div className={styles.topRow}>

                <div className={styles.iconEmpresa}>
                  <FaBriefcase />
                </div>

                <div className={styles.infoEmpresa}>
                  <h2>{job.empresa}</h2>
                  <h3>{job.puesto}</h3>
                </div>

                <div className={styles.fechaBox}>
                  <FaCalendarAlt className={styles.fechaIcon} />
                  <span>{job.periodo}</span>
                </div>

              </div>

              <p className={styles.descripcion}>{job.descripcion}</p>

              <ul>
                {job.responsabilidades.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>

            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Experiencia;