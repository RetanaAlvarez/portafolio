import texto from '../../data/Texto.json';

import Footer from '../../components/Footer/Footer';

export default function Contacto() {
  return (
    <>
      <section id='contacto'>
        <div>
          <h1>{texto.Contacto.titulo}</h1>
          <p>{texto.Contacto.mensaje}</p>
          {texto.Contacto.Referencias.map((j, index) => (
            <div key={index}>
              <h3>{j.nombre}</h3>
              <p>{j.contenido}</p>
            </div>
          ))}
        </div>
        <Footer/>
      </section>
    </>
  )
}
