import { useContext } from "react"
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar"
import AuthContext from "../../contexts/Auth/AuthContext"
import "./style.css"

const Home = () => {

    const auth = useContext(AuthContext);

    return (
        <div>
            <NavBar />

            <main className="container">
                <h1>Sistema de Controle de Bens-Patrimoniais</h1>
                <pre>Realize de maneira eficiente seu controle de bens patriomiais.</pre>
                {
                    !auth.user &&
                    <div>
                        <h3>Faça Login para acessar o Sistema</h3>
                        <Link to={'/login'}><button>Acessar</button></Link>
                        <Link to={'/register'}><button>Cadastra-se</button></Link>
                    </div>
                }

            </main>

        </div>
    )
}


export default Home