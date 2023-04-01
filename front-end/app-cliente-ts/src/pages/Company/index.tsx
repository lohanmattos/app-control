import React, { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar'

const Company = () => {

    type Idados = {
        nome: string,
        descricao: string,
        sigla: string,
        departamentos: [{
            id: number,
            nome: string,
            sigla: string
        }]
    }


    const [dadosApi, setdadosApi] = useState<Idados>();

    async function getEmpresa() {

    }

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

export default Company