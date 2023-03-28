import { Router} from "express";
import departmentController from "../controllers/companyController/departmentController";

const departamentRoute = Router();

departamentRoute.get('/department',new departmentController().findAllDepartments)
departamentRoute.post('/department',new departmentController().createDepartment)

export default departamentRoute
