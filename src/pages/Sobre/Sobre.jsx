import texto from '../../data/Texto.json';
import Experiencia from '../Experiencia/Experiencia';

function sobre() {
  return (
    <>
      <section id='sobre'>
        <h1>{texto.SobreMi.titulo}</h1>
        <h4>{texto.SobreMi.pregunta}</h4>
        <p>{texto.SobreMi.descripcion}</p> 
      </section>
    <Experiencia/>
    </>
  )
}

export default sobre