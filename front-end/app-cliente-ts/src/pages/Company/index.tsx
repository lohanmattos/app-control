import React, { useState, useEffect, useContext } from 'react'
import NavBar from '../../components/NavBar'
import { useApi } from '../../hooks/userApi'
import AuthContext from '../../contexts/Auth/AuthContext'
import { User } from '../../types/User'
import { Company } from '../../types/Company'
import { Departments } from '../../types/Company'

const PageCompany = () => {
    //const auth = useContext(AuthContext)
    const api = useApi();

    const [data, setData] = useState()

    useEffect(() => {

        const findCompanyAll = async () => {
            const resut = await api.findAllCompany();
            setData(resut);
        }
        findCompanyAll()
    }, [])

    console.log(typeof data)
    return (
        <div>
            <div >
                <NavBar />
            </div>
            <div className="container">
                <h1>Empresas</h1>
            </div>
        </div>
    )
}

export default PageCompany