import { AppDataSource } from "../data-source";
import { Section } from "../entities/company/section.entities";

export const sectionService = AppDataSource.getRepository(Section);