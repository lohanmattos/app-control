import { Route, Routes, useParams } from "react-router-dom";

const Product = () => {

    const {id} = useParams();
    console.log(id)

    return(
        
        <div>
            <h1>Produto {id}</h1>
        </div>
    )
}

export default Product