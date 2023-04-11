import { useContext, useState, useEffect, Fragment } from "react";
import NavBar from "../../components/NavBar"
import AuthContext from "../../contexts/Auth/AuthContext";
import { Employee } from "../../types/Employee"
import { useApi } from "../../hooks/userApi";
import { Company, Departments, Section } from "../../types/Company";
import { useParams } from "react-router-dom";

const CompanyPerfil = () => {
    const auth = useContext(AuthContext);
    const api = useApi();


    const { id } = useParams();

    const [data, setData] = useState<Company[]>([])
    const [dep, setDep] = useState<Departments[]>([])


    const [showSpinner, setShowSpinner] = useState(true)

    useEffect(() => {
        const findByIdCompany = async () => {
            const resut = await api.findByIdCompany(Number(id));
            const company = resut as Company[];

            const dep = company.map(item => setDep(item.department));
            setData(company)
            setShowSpinner(false)
        }
        findByIdCompany()
    }, [])

    const tableuser = (
        <Fragment>
            <div className="container-detalhe" style={{ background: "rgb(255, 255, 255)" }}>
                <h1 className="mt-4 border-bottom">Detalhes da Empresa</h1>
                <div className="row mb-3">
                    <div className="col-sm-2 themed-grid-col">Sigla:<b>{data[0]?.acronym}</b></div>
                    <div className="col-sm-8 themed-grid-col">Nome: <b>{data[0]?.name}</b></div>
                </div>
            </div>

            <h4 className="mt-4" >Lista de Departamentos</h4>

            <table className='table table-hover' style={{ background: "rgb(255, 255, 255)" }} >
                <thead>
                    <tr>
                        <th >Sigla</th>
                        <th >Nome</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dep?.map((item) => {
                            return (
                                <tr>
                                    <td>{item.acronym}</td>
                                    <td>{item.name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </Fragment>
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
                {
                    showSpinner ? spinner : tableuser
                }


            </div>
        </div>
    )
}

export default CompanyPerfil