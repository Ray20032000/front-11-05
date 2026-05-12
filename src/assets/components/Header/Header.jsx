import styles from "./Header.module.css";
import react from "@vitejs/plugin-react";

function Header() {

    return (
        <div>
            <img
                className={}
                src="../../../../public/icon.png"
                alt="Logo ReportaAí"
            />
            <Link to="/Login">Login</Link>
            <Link to="/Cadastro">Cadastro</Link>
        </div>
    );
}

export default Header;