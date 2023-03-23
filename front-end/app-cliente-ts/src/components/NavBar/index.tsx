import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import AuthContext from "../../contexts/Auth/AuthContext"
import "./style.css"
const NavBar = () => {

    const auth = useContext(AuthContext);
    const nav = useNavigate()

    const handleLogout = async () =>{
        await auth.signout()
        nav('/')
        //window.location.href = window.location.href;
    }

    return (
        <>
            <nav className="nav">
                <Link to={'/'}>Home</Link>
                {auth.user && <Link to={'/dashboard'}>Dashboard</Link>}

                {
                    auth.user && <button onClick={
                        handleLogout
                    }>Sair</button>
                }
            </nav>
            <hr />
        </>

    )
}
export default NavBar