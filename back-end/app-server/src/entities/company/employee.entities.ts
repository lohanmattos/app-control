import {Entity , Column, ManyToOne, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, OneToOne, JoinColumn} from 'typeorm'
import { User } from '../user/user.entities'
import { Section } from './section.entities'

@Entity()
export class Employee{
    
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    first_name:string

    @Column()
    last_name:string

    @Column()
    cpf: string

    @OneToOne(() => User, (user) => user.employee)
    user: User

    @ManyToOne(() => Section, (section) => section.employee)
    section: Section

    @CreateDateColumn({ type: 'timestamp'})
    createdAt: Date
}