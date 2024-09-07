import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio"; 
import Sobre from "./pages/Sobre-mim/Sobre";

function ConfigRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre-mim" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ConfigRoutes;
