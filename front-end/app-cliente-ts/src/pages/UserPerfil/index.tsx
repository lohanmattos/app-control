import { useContext } from "react";
import NavBar from "../../components/NavBar"
import "./style.css"
import AuthContext from "../../contexts/Auth/AuthContext";

const UserPerfil = () => {
    const auth = useContext(AuthContext);

    return (
        <div>
            <NavBar />
            <div className="container-fluid altura">
                <div className="group-card">
                    <h3></h3>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{`${auth.user?.employee.first_name} ${auth.user?.employee.last_name}`}</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><span className="span-bold">CPF: </span>{auth.user?.employee.cpf}</li>
                            <li className="list-group-item"><span className="span-bold">Email: </span>{auth.user?.email}</li>
                            <li className="list-group-item"><span className="span-bold">Secão: </span>{auth.user?.employee.section.acronym}</li>
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