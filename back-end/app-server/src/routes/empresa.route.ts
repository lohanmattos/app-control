import { Router, Request, Response, NextFunction } from "express";
import empresaControllers from "../controllers/EmpresaController";

const empresaRoute = Router();

empresaRoute.get('/empresa',new empresaControllers().listaEmpresa)
empresaRoute.post('/empresa',new empresaControllers().criarEmpresa)

export default empresaRoute
