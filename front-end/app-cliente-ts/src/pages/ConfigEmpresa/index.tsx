import React, { useState, useEffect } from 'react'
import { Api } from '../../api';
import NavBar from '../../Components/NavBar';
import axios from 'axios';

const ConfigEmpresa = () => {

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

        try {
            const { data, status } = await Api.get('/empresa');

            return setdadosApi(data[0])

        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    }

    getEmpresa();

    return (
        <>
            <NavBar />{ }
            <h1>{dadosApi?.nome}</h1>
            <h3>{dadosApi?.descricao}</h3>

            <table border={1}>
                <thead>
                    <tr>
                        <th>Sigla</th>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dadosApi?.departamentos.map(dep => (
                            <tr
                                key={dep.id}>
                                <td>{dep.sigla}</td>
                                <td><strong>{dep.nome}</strong></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </>
    )
}

export default ConfigEmpresa