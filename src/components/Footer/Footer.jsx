import texto from "../../data/Texto.json";
import style from "./Footer.module.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={style.footer}>
      <p>
        {texto.copyright}{year} {texto.autor} — {texto.rol}
      </p>

      <span className={style.version}>
        v1.0.9
      </span>
    </footer>
  );
}

export default Footer;