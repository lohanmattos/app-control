import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import AuthContext from "../../contexts/Auth/AuthContext"
import "./style.css"
import Perfil from "../../assets/img/perfil.png"
const NavBar = () => {

    const auth = useContext(AuthContext);
    const nav = useNavigate()

    const handleLogout = async () => {
        await auth.signout()
        nav('/')
        //window.location.href = window.location.href;
    }

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to={'/'} className="navbar-brand">SisPat</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="javascript:void(0)">Empresa</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="javascript:void(0)">Controle Material</a>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <img src={Perfil} alt="Avatar Logo" className="rounded-pill" />
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="javascript:void(0)">{auth.user?.username}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>

    )
}
export default NavBar