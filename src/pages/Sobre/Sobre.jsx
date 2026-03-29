import { FaCode, FaBriefcase, FaGraduationCap } from "react-icons/fa";

import texto from '../../data/Texto.json';
import styles from './Sobre.module.css';

function Sobre() {

  const iconos = [FaCode, FaBriefcase, FaGraduationCap];

  return (
    <>
      <section id='sobre'>
        <h1>{texto.SobreMi.titulo}</h1>

        <div className={styles.container}>
          <h2>{texto.SobreMi.pregunta}</h2>

          {texto.DescripcionSobre.map((j, i) => (
            <p key={i}>{j.texto}</p>
          ))}
        </div>

        <div className={styles.metricas}>
          {texto.TiempoExperiencias.map((j, index) => {
            
            const Icono = iconos[index];  

            return (
              <div key={index} className={styles.metrica}>
                <Icono className={styles.icon} />   
                <h4>{j.cantidad}</h4>
                <p>{j.titulo}</p>
              </div>
            );
          })}
        </div>
      </section>

    </>
  );
}

export default Sobre;
