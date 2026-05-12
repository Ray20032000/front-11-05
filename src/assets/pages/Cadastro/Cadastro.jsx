import styles from "frontinho/src/assets/pages/Cadastro";
import react from "@vitejs/plugin-react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Cadastro() {

    return (
        <div>
            <Header />
            <form onSubmit={Cadastro}>
                <h1>Logar</h1>

                <label>Nome</label>
                <input name="email" placeholder="Digite seu nome" type="text" />

                <label>Telefone</label>
                <input name="telefone" placeholder="Digite seu telefone" type="tel" />

                <label>Email</label>
                <input name="email" placeholder="Digite seu email" type="email" />

                <label>Senha</label>
                <input name="senha" placeholder="Digite seu senha" type="password" />

                <label>Ícone de Perfil</label>
                <input name="icone" placeholder="Carregar imagem" type="file" />

                <button type="submit">Entrar</button>
                <Link to="/">Cancelar</Link>
                <Link to="/esqueci-senha">Esqueci minha senha</Link>
            </form>
            <Footer />
        </div>);
}
export default Cadastro;