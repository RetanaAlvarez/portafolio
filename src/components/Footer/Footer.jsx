import texto from '../../data/Texto.json';

import style from "./Footer.module.css"

function Footer() {
  return (
    <footer className={style.footer}>
      <p>{texto.copyright} {texto.autor} — {texto.rol}</p>
    </footer>
  );
}

export default Footer;