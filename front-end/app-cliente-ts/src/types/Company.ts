export type Section = {
    id: number;
    name: string,
    acronym:string
    section_createdAt: Date
}

export type Departments={
    name: string,
    acronym: string,
    departament_createdAt: Date
}

export type Company = {
    id: number
    name: string,
    decription: string,
    acronym: string,
    departments: Departments[]
}

export type Category = {
    id: number, 
    name: string
}

export type Product = {
    id: number,
    code: string,
    name: string,
    description: string,
    price: number,
    section: Section,
    product_category: Category
}
