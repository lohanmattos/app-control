import React, { useState, useEffect, useContext } from 'react'
import NavBar from '../../components/NavBar'
import { useApi } from '../../hooks/userApi'
import AuthContext from '../../contexts/Auth/AuthContext'
import { User } from '../../types/User'
import { Company } from '../../types/Company'
import { Departments } from '../../types/Company'
import { Link } from 'react-router-dom'


const PageCompany = () => {
    const api = useApi();

    const [data, setData] = useState<Company[]>([])

    useEffect(() => {

        const findCompanyAll = async () => {
            const resut = await api.findAllCompany();
            setData(resut)
            console.log(resut)
        }
        findCompanyAll()
    }, [])


    return (
        <div>
            <div >
                <NavBar />
            </div>
            <div className="container">
                <h1>Empresas</h1>

                <table className='table table-hover' >
                    <thead>
                        <tr key={10}>
                            <th key={1}>Sigla</th>
                            <th key={2}>Nome</th>
                            <th key={3} colSpan = {2} >Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((items, index) => {
                            return (
                                <tr key={index}>
                                    <td>{items.acronym}</td>
                                    <td>{items.name}</td>
                                    <td><Link to={"/company/edit/"+items.id}>Editar</Link></td>
                                    <td><Link to={"/company/view/"+items.id}>Visualizar</Link></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default PageCompany