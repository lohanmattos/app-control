import { AppDataSource } from "../data-source";
import { Employee } from "../entities/company/employee.entities";

export const employeeService = AppDataSource.getRepository(Employee);