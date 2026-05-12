import styles from "./Erro404.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Erro404() {

    return (
        <div>
            <Header />
            <div>
                <h1>Ops!</h1>
                <h2>Página não encontrada</h2>
                <h3>Erro</h3>
                <img src="/erro.png" alt="Logo de erro" />
                <button>Voltar pra home</button>
            </div>
            <Footer />
        </div>);
}
export default Erro404;