import { Link, Route, Routes, useParams } from "react-router-dom";
import { useApi } from "../../../hooks/userApi";
import { useEffect, useState } from "react";
import { CheckProduct, Product } from "../../../types/Company";
import NavBar from "../../../components/NavBar";

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
                <h3>{data[0]?.name}</h3>
               
                <h3>Lista de Conferencias</h3>

                <table className='table table-hover' >
                    <thead>
                        <tr>
                            <th >Data</th>
                            <th >Seção</th>
                            <th >Usuário</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listCheck.map((item) => {
                                return(
                                    <tr>
                                    <td>{item.checkProduct_createdAt}</td>
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