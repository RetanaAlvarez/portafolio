import texto from '../../data/Texto.json';


function experiencia() {
  return (
    <>
      <section id='experiencia'>
        <div>
          {texto.experiencia_profesional.map((job, index) => (
            <div key={index}>
              <h2>{job.empresa}</h2>
              <h3>{job.puesto}</h3>
              <p>{job.periodo}</p>
              <p>{job.descripcion}</p>

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

export default experiencia