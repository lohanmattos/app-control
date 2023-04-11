import { useEffect, useState } from "react";
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
            console.log(resut)
        }
        findProductAll()
    }, [])

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="container-detalhe">
                    <h1 className="mt-4">Produtos</h1>
                    <table className='table table-hover' >
                        <thead>
                            <tr key={10}>
                                <th key={1}>Code</th>
                                <th key={2}>Descrição</th>
                                <th key={2}>Seção</th>
                                <th key={3} colSpan={2} >Opções</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((items, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{items.code}</td>
                                        <td>{items.description}</td>
                                        <td>{items.section.name}</td>
                                        <td><Link to={"/product/edit/" + items.id}>Editar</Link></td>
                                        <td><Link to={"/product/view/" + items.id}>Visualizar</Link></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>




            </div>

        </div>
    )
}

export default Products