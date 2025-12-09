import Navbar from '../../components/Navbar/Navbar';

import Sobre from '../Sobre/Sobre';

import texto from '../../data/Texto.json';

import styles from './Inicio.module.css';

function inicio() {
  return (
    <>
      <Navbar />
      <section id='inicio'>
        <div className='home'>
          <img src={texto.Inicio.foto} alt="MiFoto" />
          <h4>{texto.Inicio.hola}</h4>
          <h2 className="text-white text-4xl md:text-6xl mb-4">{texto.Inicio.name}</h2>
          <h3>{texto.Inicio.puesto}</h3>
          <p>{texto.Inicio.descripcion}</p>
        </div>
      </section>
      <Sobre />
    </>
  )
}

export default inicio