import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar"
import { useApi } from "../../hooks/userApi";
import { User } from "../../types/User";
import { Link } from "react-router-dom";

const Users = () => {

    const api = useApi();

    const [data, setData] = useState<User[]>([] || null)


    useEffect(() => {

        const findAllUsers = async () => {
            const resut = await api.findAllUsers();
            setData(resut);
        }
        findAllUsers()
    }, [])


    return (
        <div >
            <NavBar />
            <div className="container">
                <div className="d-flex bd-highlight mb-3">
                    <div className="me-auto p-2 bd-highlight mt-4"><h1>Usuários</h1></div>
                    <div className="p-2 bd-highlight mt-4"><Link to={'/register'}><button type="button" className="btn btn-primary">Novo Usuário</button></Link></div>
                </div>

                <table className='table table-hover' >
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Username</th>
                            <th>E-mail</th>
                            <th colSpan={2} >Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((items, index) => {
                            return (
                                <tr key={index}>
                                    <td>{items.employee? items.employee.first_name: "Usuário sem Nome" }</td>
                                    <td>{items.username}</td>
                                    <td>{items.email}</td>
                                    <td><Link to={"/user/edit/" + items.id}><button type="button" className="btn btn-primary">Mais</button></Link></td>
                                    <td><Link to={"/user/view/" + items.id}><button type="button" className="btn btn-danger">Excluir</button></Link></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users