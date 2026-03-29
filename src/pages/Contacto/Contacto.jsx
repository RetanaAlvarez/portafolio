import texto from '../../data/Texto.json';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import styles from './Contacto.module.css';

export default function Contacto() {

  const icons = {
    email: <FaEnvelope />,
    location: <FaMapMarkerAlt />,
    linkedin: <FaLinkedin />,
    whatsapp: <FaWhatsapp />
  };

  return (
    <section id="contacto" className={styles.container}>

      <h2 className={styles.title}>{texto.Contacto.titulo}</h2>
      <p className={styles.subtitle}>{texto.Contacto.mensaje}</p>

      <div className={styles.grid}>
        {texto.Contacto.Referencias.map((item, i) => (
          <div key={i} className={styles.card}>

            <div className={styles.icon}>
              {icons[item.icono]}
            </div>

            <div>
              <strong>{item.nombre}</strong>

              {item.icono === "email" && (
                <a href={`mailto:${item.contenido}`}><br />{item.contenido}</a>
              )}

              {item.icono === "linkedin" && (
                <a href={item.contenido} target="_blank" rel="noreferrer">
                  <br />
                  Ver perfil
                </a>
              )}

              {item.icono === "whatsapp" && (
                <a target="_blank" href={`https://wa.me/${item.contenido.replace(/\D/g, '')}`}>
                  Enviar mensaje
                </a>
              )}

              {item.icono === "location" && (
                <p>{item.contenido}</p>
              )}

            </div>

          </div>
        ))}
      </div>

    </section >
  );
}