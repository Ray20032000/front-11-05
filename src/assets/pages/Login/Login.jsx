import styles from "./Login.module.css";
import react from "@vitejs/plugin-react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Login() {

    return (
        <div>
            <Header />
            <form onSubmit={Login}>
                <h1>Logar</h1>

                <label>Email</label>
                <input name="email" placeholder="Digite seu email" type="email" />

                <label>Senha</label>
                <input name="senha" placeholder="Digite seu senha" type="password" />

                <button type="submit">Entrar</button>
                <Link to="/">Cancelar</Link>
                <Link to="/esqueci-senha">Esqueci minha senha</Link>
            </form>

            <Footer />
        </div>);
}
export default Login;