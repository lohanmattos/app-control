import { Router} from "express";
import { checkProductController } from "../controllers/product/ckeckProductController";


const checkProductRoute = Router();

checkProductRoute.get('/check-product',new checkProductController().findAllCheckedProduct)
checkProductRoute.post('/check-product',new checkProductController().createCheckProduct)

export default checkProductRoute
