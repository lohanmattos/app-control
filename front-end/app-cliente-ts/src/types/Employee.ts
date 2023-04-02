import { Section } from "./Company";

export type Employee = {
    id: number;
    first_name: string,
    last_name: string
    cpf: string,
    section: Section
    createdAt: Date
}