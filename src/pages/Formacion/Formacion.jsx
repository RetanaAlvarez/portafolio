import texto from '../../data/Texto.json';
import { formacionIcons } from '../../assets/formacionIcons';
import styles from './Formacion.module.css';

function Formacion() {
  const data = texto.formacion_academica;

  return (
    <section id="formacion" className={styles.container}>

      <h2 className={styles.title}>{data.titulo}</h2>
      <div className={styles.card}>

        <div className={styles.header}>
          <div className={styles.iconMain}>
            {formacionIcons.school?.()}
          </div>

          <div>
            <h3>{data.carrera}</h3>
            <p className={styles.institucion}>{data.institucion}</p>
            <span className={styles.periodo}>{data.periodo}</span>
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.detalles}>
          {data.detalles.map((item) => {
            const key = item.icono;

            return (
              <div key={key} className={styles.item}>
                <div className={styles.icon}>
                  {formacionIcons[key]?.()}
                </div>

                <div>
                  <strong>{item.titulo}</strong>
                  <p>{item.descripcion}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}

export default Formacion;