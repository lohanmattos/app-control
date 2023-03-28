import { AppDataSource } from "../data-source";
import { Department } from "../entities/company/department.entities"; 

export const departamentService = AppDataSource.getRepository(Department);