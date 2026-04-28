import { BrowserRouter, Routes, Route } from "react-router-dom";

//  import Experiencia from "../pages/Experiencia/Experiencia";
import Habilidades from "../pages/Habilidades/Habilidades";
import Home from "../pages/Home/Home";
import Sobre from '../pages/Sobre/Sobre';
import Formacion from "../pages/Formacion/Formacion"


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
};

export default AppRouter;
