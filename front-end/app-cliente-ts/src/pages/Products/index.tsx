import { Fragment, useEffect, useState } from "react";
import NavBar from "../../components/NavBar"
import { useApi } from "../../hooks/userApi"
import { Product } from "../../types/Company";
import { Link } from "react-router-dom";

const Products = () => {

    const api = useApi();

    const [data, setData] = useState<Product[]>([])

    useEffect(() => {

        const findProductAll = async () => {
            const resut = await api.findAllProduct();
            setData(resut);
        }
        findProductAll()
    }, [])

    return (
        <div>
            <NavBar />
            <div className="container">
                <h1 className="mt-4">Produtos</h1>
                <table className='table table-hover' >
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Descrição</th>
                            <th>Seção</th>
                            <th colSpan = {2} >Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((items, index) => {
                            return (
                                <tr key={index}>
                                    <td>{items.code}</td>
                                    <td>{items.description}</td>
                                    <td>{items.section.name}</td>
                                    <td><Link to={"/product/edit/"+items.id}>Editar</Link></td>
                                    <td><Link to={"/product/view/"+items.id}>Visualizar</Link></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Products