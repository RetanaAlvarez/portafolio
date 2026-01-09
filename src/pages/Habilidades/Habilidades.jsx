import texto from '../../data/Texto.json';

import Formacion from "../Formacion/Formacion"

function Habilidades() {
    return (
        <>
            <section id="habilidades">
                <div>
                    {texto.habilidades_tecnicas.map((job, index) => (
                        <div key={index}>
                            <h2>{job.nombre}</h2>
                            <ul>
                                {job.herramientas.map((r,i)=>(
                                    <li key={i}>{r}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div>
                     {texto.certificaciones_cursos.map((job, index) => (
                        <div key={index}>
                            <h2>{job.nombre}</h2>
                            <ul>
                                {job.cursos.map((r,i)=>(
                                    <li key={i}>{r}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
            <Formacion />
        </>
    )
}

export default Habilidades