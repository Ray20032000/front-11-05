import styles from "./Footer.module.css";
import react from "@vitejs/plugin-react";

function Header() {

    return (
        <div>
            <h3>CONTATO</h3>
            <p>Email: reporta.ai@gmail.com</p>

            <h3>SOBRE O SISTEMA</h3>
            <p> O ReportaAí é uma plataforma desenvolvida para facilitar o registro e acompanhamento
                de chamados técnicos em ambientes escolares, garantindo mais organização e agilidade
                na resolução de problemas.</p>

            <p>Política de Privacidade   |   Termos de uso</p>
            <p>© 2026 ReportaAí – Todos os direitos reservados</p>

            <img
                src="../../../../public/icon.png"
                alt="Logo ReportaAí"
            />



        </div>
    );
}

export default Header;