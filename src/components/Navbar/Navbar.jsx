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
                    <li><a onClick={() => scrollToSection("/")}>{texto.Inicio}</a></li>
                    <li><a onClick={() => scrollToSection("sobre")}>{texto.Sobre}</a></li>
                    <li><a onClick={() => scrollToSection("/")}>{texto.Experiencia}</a></li>
                    <li><a onClick={() => scrollToSection("/")}>{texto.Habilidades}</a></li>
                    <li><a onClick={() => scrollToSection("/")}>{texto.Formacion}</a></li>
                    <li><a onClick={() => scrollToSection("/")}>{texto.Contacto}</a></li>
                </ul>
            </nav>
        </>
    )
};

export default Navbar;