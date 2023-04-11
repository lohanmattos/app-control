import { User } from "./User";

export type Section = {
    id: number;
    name: string,
    acronym:string
    section_createdAt: Date,
    department: Departments
}

export type Departments={
    name: string,
    acronym: string,
    departament_createdAt: Date,
    section: Section[]
}

export type Company = {
    id: number
    name: string,
    decription: string,
    acronym: string,
    department: Departments[]
}

export type Category = {
    id: number, 
    name: string
}


export type CheckProduct ={
    id: number,
    checkProduct_createdAt: Date,
    section: Section,
    user: User
}

export type Product = {
    id: number,
    code: string,
    name: string,
    description: string,
    price: number,
    section: Section,
    product_category: Category,
    checkProduct: CheckProduct[]
}
