import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Tasks extends BaseEntity {

    @PrimaryColumn()
    taskId: string;

    @Column()
    description: string;

    @Column({
        default: true
    })
    completed: boolean;

    @Column()
    userId: number;
     
}