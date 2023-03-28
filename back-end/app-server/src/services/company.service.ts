import { AppDataSource } from "../data-source";
import { Company } from "../entities/company/company.entities";

export const companyService = AppDataSource.getRepository(Company);