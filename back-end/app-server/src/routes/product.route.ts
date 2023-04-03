import { Router} from "express";
import { productController } from "../controllers/product/productController";


const productRoute = Router();

productRoute.get('/product',new productController().findAllProduct)
productRoute.get('/product/:id',new productController().findProduct)
//checkProductRoute.post('/company',new empresaControllers().createCompany)

export default productRoute
