import texto from '../../data/Texto.json';

function sobre() {
  return (
    <>
      <section id='sobre'>
        <h1>{texto.SobreMi.titulo}</h1>
        <h4>{texto.SobreMi.pregunta}</h4>
        <p>{texto.SobreMi.descripcion1}</p>
        <p>{texto.SobreMi.descripcion2}</p>
      </section>

    </>
  )
}

export default sobre