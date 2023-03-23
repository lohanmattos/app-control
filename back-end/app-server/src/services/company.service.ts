import { AppDataSource } from "../data-source";
import { Company } from "../entities/company/company.entities";

export const empresaService = AppDataSource.getRepository(Company);