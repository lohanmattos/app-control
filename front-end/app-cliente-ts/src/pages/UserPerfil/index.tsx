import { useContext, useState, useEffect } from "react";
import NavBar from "../../components/NavBar"
import "./style.css"
import AuthContext from "../../contexts/Auth/AuthContext";
import {Employee} from "../../types/Employee"

const UserPerfil = () => {
    const auth = useContext(AuthContext);

    const [user, setUser] = useState<Employee | undefined>()
    
    useEffect(() => {
        setUser(auth.user?.employee)
    },[auth.user])

    return (
        <div>
            <NavBar />
            <div className="container-fluid altura">
                <div className="group-card">
                    <h3></h3>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{`${user?.first_name} ${user?.last_name}`}</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><span className="span-bold">CPF: </span>{user?.cpf}</li>
                            <li className="list-group-item"><span className="span-bold">Email: </span>{auth.user?.email}</li>
                            <li className="list-group-item"><span className="span-bold">Secão: </span>{user?.section.acronym}</li>
                        </ul>
                        <div className="card-body">
                            <a href="#" className="card-link">Editar Perfil</a>
                            <a href="#" className="card-link">Trocar Senha</a>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    )
}

export default UserPerfil