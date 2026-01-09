import Contacto from "../Contacto/Contacto"

import texto from '../../data/Texto.json';

import { formacionIcons } from '../../assets/formacionIcons';

function Formacion() {
  return (
    <>
      <section id='formacion'>
        <div>
          <h1>{texto.formacion_academica.nombre}</h1>
          <h3>{texto.formacion_academica.carrera}</h3>
          <h4>{texto.formacion_academica.institucion}</h4>
          <p>{texto.formacion_academica.periodo}</p>
        </div>


        <div className="forma-grid">
          {texto.FormacionIcon.map((icon, i) => (
            <div key={i} className="icon-card">
              {formacionIcons[icon] && formacionIcons[icon]()}

              <ul>
                {texto.FormacionText.titulo.map((titulo,i) => (
                  <li key={i}>
                    <strong>{titulo}</strong> {texto.FormacionText.descripcion['i']}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <Contacto />
    </>
  )
}

export default Formacion;