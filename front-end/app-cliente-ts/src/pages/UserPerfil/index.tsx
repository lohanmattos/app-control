import { useContext, useState, useEffect } from "react";
import NavBar from "../../components/NavBar"
import "./style.css"
import AuthContext from "../../contexts/Auth/AuthContext";
import { Employee } from "../../types/Employee"
import { useApi } from "../../hooks/userApi";

const UserPerfil = () => {
    const auth = useContext(AuthContext);
    const api = useApi();

    const name = auth.user?.username || ""

    const [data, setData] = useState<Employee>()
    const [showSpinner, setShowSpinner] = useState(true)

    useEffect(() => {
        const findByNameEmployee = async () => {
            const resut = await api.findByNameEmployee(name);
            setData(resut[0])
            setShowSpinner(false)
        }
        findByNameEmployee()

    }, [])

    const tableuser = (
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
                    <td>{`${data?.first_name} ${data?.last_name}`}</td>
                    <td>{data?.cpf}</td>
                    <td>{auth.user?.email}</td>
                    <td>{data?.section.acronym}</td>
                    <td><a >Editar</a></td>
                    <td><a >Visualizar</a></td>
                </tr>
            </tbody>
        </table>
    )

    const spinner = (
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )

    return (
        <div>
            <NavBar />
            <div className="container">
                <h1 className="mt-4">Dados Pessoais</h1>
                {
                    showSpinner ? spinner : tableuser
                }
            </div>
        </div>
    )
}

export default UserPerfil