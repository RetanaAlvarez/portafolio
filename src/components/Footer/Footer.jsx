import texto from '../../data/Texto.json';

function Footer() {
  return (
    <footer>
        <p>{texto.copyright} {texto.autor} {texto.rol}</p>
    </footer>
  )
}

export default Footer;