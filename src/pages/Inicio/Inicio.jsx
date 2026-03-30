import texto from '../../data/Texto.json';

import styles from './Inicio.module.css';

const apiImagen = import.meta.env.VITE_IMAGEN_PERFIL;

function Inicio() {
  return (
    <>
      <section id='inicio'>
        <div className={styles.home}>
          <img src={apiImagen} alt="MiFoto" />
          <div>
            <h4>{texto.Inicio.hola}</h4>
            <h2>{texto.Inicio.name}</h2>
            <h3>{texto.Inicio.puesto}</h3>
            <p>{texto.Inicio.descripcion}</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Inicio