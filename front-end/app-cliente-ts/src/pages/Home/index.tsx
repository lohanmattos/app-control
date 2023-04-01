import { useContext } from "react"
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar"
import AuthContext from "../../contexts/Auth/AuthContext"
import "./style.css"

const Home = () => {

    const auth = useContext(AuthContext);

    return (

        <div>
            <NavBar/>
            <div className="container">
            <h1>Sistema de Controle de Bens-Patrimoniais</h1>
            <p>Realize de maneira eficiente seu controle de bens patriomiais.</p>

            {
                !auth.user &&
                <div>
                    <Link to={'/login'}><button className="btn btn-primary">Acessar</button></Link>
                </div>
            }

        </div>
        </div>
        
    )
}


export default Home