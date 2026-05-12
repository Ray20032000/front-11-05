import styles from "./Home.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Home() {
    return (
        <div>
            <Header />

            <img
                src="/background.png"
                alt="Background ReportaAí"
            />

            <div>
                <h3>Bem-vindo ao ReportaAí!</h3>

                <img src="/check.png" alt="check" />
                <p>Sistema de chamados de manutenção escolar</p>

                <img src="/check.png" alt="check" />
                <p>Relate problemas em equipamentos e salas</p>

                <img src="/check.png" alt="check" />
                <p>Envie o chamado para a manutenção</p>

                <img src="/check.png" alt="check" />
                <p>Acompanhe o andamento do conserto</p>
            </div>

            <Footer />
        </div>
    );
}

export default Home;