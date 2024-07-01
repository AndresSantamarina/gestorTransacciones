import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListaTransacciones from "../pages/ListaTransacciones";
import Buscador from "../pages/Buscador";
import Resumen from "../pages/Resumen";
import Home from "../pages/Home";
import Menu from "../common/Menu";

const AppRouter = () => {
    return (
       <BrowserRouter>
       <Menu>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/lista" element={<ListaTransacciones />}/>
            <Route path="/buscador" element={<Buscador />}/>
            <Route path="/resumen" element={<Resumen />}/>
          </Routes>
       </Menu>
       </BrowserRouter>
    );
};

export default AppRouter;