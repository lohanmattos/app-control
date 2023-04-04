import { Link, Route, Routes, useParams } from "react-router-dom";
import { useApi } from "../../../hooks/userApi";
import { useEffect, useState } from "react";
import { CheckProduct, Product } from "../../../types/Company";
import NavBar from "../../../components/NavBar";
import { formatLocalDate } from ".././../../utils/format";
import "./style.css"

const ProductPerfil = () => {

    const { id } = useParams();

    const api = useApi();

    const [data, setData] = useState<Product[]>([])
    const [listCheck, setListCheck] = useState<CheckProduct[]>([])

    useEffect(() => {

        const findProduct = async () => {
            const resut = await api.findProduct(Number(id));
            const product = resut as Product[];

            const checkList = product.map(item => setListCheck(item.checkProduct));
            setData(product)
        }
        findProduct()
    }, [])


    console.log(listCheck)

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="container-detalhe">
                    <h3 className="mt-4">Detalhes do Produto</h3>

                    <div className="row mb-3">
                        <div className="col-sm-3 themed-grid-col">Código Produto: <b>{data[0]?.code}</b></div>
                        <div className="col-sm-4 themed-grid-col">Nome: <b>{data[0]?.name}</b></div>
                        <div className="col-sm-5 themed-grid-col">Descrição: <b>{data[0]?.description}</b></div>

                    </div>

                    <div className="row mb-3">
                        <div className="col-sm-3 themed-grid-col">Valor: R$ <b>{data[0]?.price}</b></div>
                        <div className="col-sm-4 themed-grid-col">Seção Cadastrada: <b>{data[0]?.section.name}</b></div>
                        <div className="col-sm-5 themed-grid-col">Categoria: <b>{data[0]?.product_category.name}</b></div>
                    </div>
                </div>



                <h3>Lista de Conferencias</h3>

                <table className='table table-hover' >
                    <thead>
                        <tr>
                            <th >Data da Conferência</th>
                            <th >Localização(Secão)</th>
                            <th >Usuário</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listCheck.map((item) => {
                                return (
                                    <tr>
                                        <td>{formatLocalDate(String(item.checkProduct_createdAt), "dd/MM/yyyy") }</td>
                                        <td>{item.section.name}</td>
                                        <td>{item.user.employee.first_name}</td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default ProductPerfil