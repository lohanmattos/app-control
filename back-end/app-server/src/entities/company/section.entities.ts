import {Entity , Column, ManyToOne, PrimaryGeneratedColumn, OneToMany, CreateDateColumn} from 'typeorm'
import { Department } from '../company/department.entities'
import { Employee } from '../company/employee.entities'

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

    @CreateDateColumn({ type: 'timestamp'})
    section_createdAt: Date
}