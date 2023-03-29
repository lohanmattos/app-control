import {Entity , Column, ManyToOne, PrimaryGeneratedColumn, OneToMany, CreateDateColumn} from 'typeorm'
import { Department } from '../company/department.entities'
import { Employee } from '../company/employee.entities'
import { checkProduct } from '../product/checkProduct'
import { Product } from '../product/product.entities'

@Entity()
export class Section{
    
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    name:string
    
    @Column()
    acronym:string

    @ManyToOne(() => Department, (department) => department.section)
    department: Department

    @OneToMany(() => Employee, (employee) => employee.section)
    employee: Employee[]

    @OneToMany(() => Product, (product) => product.section )
    product: Product

    @OneToMany(() => checkProduct, (checkProduct) => checkProduct.section)
    checkProduct: checkProduct

    @CreateDateColumn({ type: 'timestamp'})
    section_createdAt: Date
}