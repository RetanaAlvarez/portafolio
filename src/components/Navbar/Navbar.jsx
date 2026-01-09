import texto from '../../data/Navbar.json';

import styles from './Navbar.module.css';

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};


const Navbar = () => {
    return (
        <>
            <nav className={styles.nav}>
                <ul className={styles.menu}>
                    <li><a onClick={() => scrollToSection("inicio")}>{texto.Inicio}</a></li>
                    <li><a onClick={() => scrollToSection("sobre")}>{texto.Sobre}</a></li>
                    <li><a onClick={() => scrollToSection("experiencia")}>{texto.Experiencia}</a></li>
                    <li><a onClick={() => scrollToSection("tecnologias")}>{texto.Tecnologias}</a></li>
                    <li><a onClick={() => scrollToSection("habilidades")}>{texto.Habilidades}</a></li>
                    <li><a onClick={() => scrollToSection("formacion")}>{texto.Formacion}</a></li>
                    <li><a onClick={() => scrollToSection("contacto")}>{texto.Contacto}</a></li>
                </ul>
            </nav>
        </>
    )
};

export default Navbar;