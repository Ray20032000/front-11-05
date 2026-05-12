import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home/Home.jsx"
import Login from "./assets/pages/Login/Login.jsx";
import Cadastro from "./assets/pages/Cadastro/Cadastro.jsx";
import Erro404 from "./assets/pages/Erro404/Erro404.jsx";

function App({ API }) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Home" element={<Home/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/Cadastro" element={<Cadastro/>} />
                <Route path="/*" element={<Erro404/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;