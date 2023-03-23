import { AppDataSource } from "../data-source";
import { Department } from "../entities/company/department.entities"; 

export const departamentoService = AppDataSource.getRepository(Department);