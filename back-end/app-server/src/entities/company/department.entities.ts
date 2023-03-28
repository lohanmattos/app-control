import {Entity , Column, ManyToOne, PrimaryGeneratedColumn, OneToMany, CreateDateColumn} from 'typeorm'
import { Company } from '../company/company.entities'
import { Section } from './section.entities'

@Entity()
export class Department{
    
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    name:string
    
    @Column()
    acronym:string

    @ManyToOne(() => Company, (company) => company.department)
    company: Company

    @OneToMany(() => Section, (section) => section.department)
    section: Section[]

    @CreateDateColumn({ type: 'timestamp'})
    departament_createdAt: Date
}