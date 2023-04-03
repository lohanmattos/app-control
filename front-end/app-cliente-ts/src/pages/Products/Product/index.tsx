import { Route, Routes, useParams } from "react-router-dom";
import { useApi } from "../../../hooks/userApi";
import { useEffect, useState } from "react";
import { Product } from "../../../types/Company";

const ProductPerfil = () => {

    const {id} = useParams();

    const api = useApi();

    const [data, setData] = useState<Product[]>([])

    useEffect(() => {

        const findProduct = async () => {
            const resut = await api.findProduct(Number(id));
            setData(resut);
            console.log(resut)
        }
        findProduct()
    }, [])

    console.log(data)

    return(
        
        <div>
            <h1>Produto {id}</h1>
            {
            
            }
        </div>
    )
}

export default ProductPerfil