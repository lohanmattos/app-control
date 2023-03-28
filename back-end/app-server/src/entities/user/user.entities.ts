import {Entity , Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm'
import { Employee } from '../company/employee.entities'

@Entity()
export class User{
    
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({unique: true})
    username:string

    @Column()
    password:string

    @Column({unique: true})
    email:string

    @OneToOne(() => Employee, (employee) => employee.user)
    employee: Employee

}