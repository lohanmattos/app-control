import { Router} from "express";
import { checkProductController } from "../controllers/product/ckeckProductController";


const checkProductRoute = Router();

checkProductRoute.get('/check-product',new checkProductController().findAllCheckedProduct)
//checkProductRoute.post('/company',new empresaControllers().createCompany)

export default checkProductRoute
