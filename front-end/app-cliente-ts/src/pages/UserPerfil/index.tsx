import { useContext, useState, useEffect } from "react";
import NavBar from "../../components/NavBar"
import "./style.css"
import AuthContext from "../../contexts/Auth/AuthContext";
import { Employee } from "../../types/Employee"

const UserPerfil = () => {
    const auth = useContext(AuthContext);

    const [user, setUser] = useState<Employee>()

    useEffect(() => {
        setUser(auth.user?.employee)
    }, [])

    return (
        <div>
            <NavBar />
            <div className="container">
                <h1>Dados Pessoais</h1>
                <table className='table table-hover' >
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>E-mail</th>
                            <th>Seção</th>
                            <th colSpan={2}>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{`${user?.first_name} ${user?.last_name}`}</td>
                            <td>{user?.cpf}</td>
                            <td>{auth.user?.email}</td>
                            <td>{user?.section.acronym}</td>
                            <td><a >Editar</a></td>
                            <td><a >Visualizar</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserPerfil