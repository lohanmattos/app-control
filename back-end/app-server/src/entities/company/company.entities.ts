import {Entity , Column, OneToMany, PrimaryGeneratedColumn, CreateDateColumn} from 'typeorm'
import { Department } from '../company/department.entities'

@Entity()
export class Company{
    
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    name:string

    @Column()
    decription:string
    
    @Column()
    acronym:string

    @OneToMany(() => Department, (department) => department.company)
    department: Department[]

    @CreateDateColumn({ type: 'timestamp'})
    company_createdAt: Date

}