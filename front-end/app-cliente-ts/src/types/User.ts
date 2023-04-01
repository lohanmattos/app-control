import { Employee } from "./Employee";

export type User = {
    id: string;
    username: string;
    password?: string;
    email: string;
    employee: Employee,
}