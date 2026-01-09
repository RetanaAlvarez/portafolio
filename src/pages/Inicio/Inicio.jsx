import Navbar from '../../components/Navbar/Navbar';

import Sobre from '../Sobre/Sobre';

import texto from '../../data/Texto.json';

import styles from './Inicio.module.css';

function inicio() {
  return (
    <>
      <Navbar />
      <section id='inicio'>
        <div className={styles.home}>
          <img src={texto.Inicio.foto} alt="MiFoto" />
          <div>
            <h4>{texto.Inicio.hola}</h4>
            <h2>{texto.Inicio.name}</h2>
            <h3>{texto.Inicio.puesto}</h3>
            <p>{texto.Inicio.descripcion}</p>
          </div>
        </div>
      </section>
      <Sobre />
    </>
  )
}

export default inicio