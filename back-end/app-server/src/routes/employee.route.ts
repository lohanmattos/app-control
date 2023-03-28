import { Router} from "express";
import employeeController from "../controllers/companyController/employeeController";

const employeeRoute = Router();

employeeRoute.get('/employee', new employeeController().getEmployee)
employeeRoute.post('/employee',new employeeController().createEmployee)

export default employeeRoute
