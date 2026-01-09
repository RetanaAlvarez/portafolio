import { BrowserRouter, Routes, Route } from "react-router-dom";

import Experiencia from "../pages/Experiencia/Experiencia";
import Habilidades from "../pages/Habilidades/Habilidades";
import Inicio from "../pages/Inicio/Inicio";
import Sobre from '../pages/Sobre/Sobre';
import Formacion from "../pages/Formacion/Formacion"


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="*" element={<Inicio />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/experiencia" element={<Experiencia />} />
                <Route path="/habilidades" element={<Habilidades />} />
                <Route path="/formacion" element={<Formacion />} />
            </Routes>
        </BrowserRouter>
    )
};

export default AppRouter;
