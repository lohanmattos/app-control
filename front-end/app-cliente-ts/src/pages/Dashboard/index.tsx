import { useContext } from "react"
import NavBar from "../../components/NavBar"
import AuthContext from "../../contexts/Auth/AuthContext"

const Dashboard = () => {
    const auth = useContext(AuthContext);

    return (
        <div>
            <NavBar />
            <main className="container">
                <h1>Dashboard</h1>
                <p>Olá {auth.user?.username}, Tudo Bem ?</p>
            </main>

        </div>
    )
}

export default Dashboard