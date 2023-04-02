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
    name: string,
    decription: string,
    acronym: string,
    departments: Departments[]
}
