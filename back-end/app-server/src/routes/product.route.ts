import { Router} from "express";
import { productController } from "../controllers/product/productController";


const productRoute = Router();

productRoute.get('/product',new productController().findAllProduct)
//checkProductRoute.post('/company',new empresaControllers().createCompany)

export default productRoute
