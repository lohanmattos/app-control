import { Router, Request, Response, NextFunction } from "express";
import empresaControllers from "../controllers/companyController/companyController";

const companyRoute = Router();

companyRoute.get('/company',new empresaControllers().listaEmpresa)
companyRoute.post('/company',new empresaControllers().criarEmpresa)

export default companyRoute
