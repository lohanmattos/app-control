import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import AuthContext from "../../contexts/Auth/AuthContext"
import "./style.css"
import Perfil from "../../assets/img/perfil.png"
import { Employee } from "../../types/Employee"
const NavBar = () => {

    const auth = useContext(AuthContext);
    const nav = useNavigate()

    const handleLogout = async () => {
        await auth.signout()
        nav('/')
    }

    const [user, setUser] = useState<Employee>()
    
    useEffect(() => {
        setUser(auth.user?.employee)
    },[auth.user])


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
                                <Link to={'/company'} className="nav-link">Empresa</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/control-material'}>Controle Material</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/users'}>Usuários</Link>
                            </li>
                        </ul>
                        {
                            auth.user && <div className="d-flex">
                                <ul className="navbar-nav me-auto">
                                    <li className="nav-item">
                                        <img src={Perfil} alt="Avatar Logo" className="rounded-pill" />
                                    </li>
                                    <li className="nav-item">
                                        <Link to={'/user-perfil'} className="nav-link">{user?.first_name}</Link>

                                    </li>
                                    <li className="nav-item">
                                        <Link to={''} className="nav-link" onClick={handleLogout}>Sair</Link>
                                    </li>
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            </nav>
        </>

    )
}
export default NavBar