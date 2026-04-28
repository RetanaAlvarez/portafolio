
  import Footer from "../../components/Footer/Footer";
  import Contacto from "../Contacto/Contacto";
  import { Experiencia } from "../Experiencia/Experiencia";
  import Formacion from "../Formacion/Formacion";
  import Habilidades from "../Habilidades/Habilidades";
  import Inicio from "../Inicio/Inicio";
  import Sobre from "../Sobre/Sobre";
  import Tecnologias from "../Tecnologias/Tecnologias";
  import Proyectos from "../Proyectos/Proyectos";

  import styles from "./Home.module.css"

  function Home() {
    return (
      <>
        <div className={ styles.container}>
          <Inicio />
          <Sobre />
          <Experiencia />
          <Proyectos />
          <Tecnologias />
          <Habilidades />
          <Formacion />
          <Contacto />
          <Footer />
        </div>
      </>
    )
  }

  export default Home