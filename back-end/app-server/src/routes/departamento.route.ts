import { Router, Request, Response, NextFunction } from "express";
import departamentoControllers from "../controllers/DepartamentoController";

const departamentoRoute = Router();

departamentoRoute.get('/departamento',new departamentoControllers().listarDepartamento)
departamentoRoute.post('/departamento',new departamentoControllers().criarDepartamento)

export default departamentoRoute
