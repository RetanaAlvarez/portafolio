import { useState } from "react";
import texto from '../../data/Navbar.json';
import styles from './Navbar.module.css';

const scrollToSection = (id) => {
    const el = document.getElementById(id);
    const yOffset = -100;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
};

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = (id) => {
        scrollToSection(id);
        setMenuOpen(false);
    };

    return (
        <nav className={styles.nav}>

            <div
                className={styles.hamburger}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? "✕" : "☰"}
            </div>

            <ul className={`${styles.menu} ${menuOpen ? styles.active : ""}`}>
                <li><a onClick={() => handleClick("inicio")}>{texto.Inicio}</a></li>
                <li><a onClick={() => handleClick("sobre")}>{texto.Sobre}</a></li>
                <li><a onClick={() => handleClick("experiencia")}>{texto.Experiencia}</a></li>
                <li><a onClick={() => handleClick("proyectos")}>{texto.Proyecto}</a></li>
                <li><a onClick={() => handleClick("tecnologias")}>{texto.Tecnologias}</a></li>
                <li><a onClick={() => handleClick("habilidades")}>{texto.Habilidades}</a></li>
                <li><a onClick={() => handleClick("formacion")}>{texto.Formacion}</a></li>
                <li><a onClick={() => handleClick("contacto")}>{texto.Contacto}</a></li>
            </ul>
            {menuOpen && <div className={styles.overlay} onClick={() => setMenuOpen(false)}></div>}
        </nav>
    );
};

export default Navbar;