import { Router} from "express";
import empresaControllers from "../controllers/companyController/companyController";

const companyRoute = Router();

companyRoute.get('/company',new empresaControllers().findAllCompany)
companyRoute.post('/company',new empresaControllers().createCompany)

export default companyRoute
