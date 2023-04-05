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
            <div className="container px-4 py-5" id="hanging-icons">
                <h1 className="pb-2 ">Sistema de Controle de Bens-Patrimoniais</h1>
                
            </div>
        </div>

    )
}


export default Home