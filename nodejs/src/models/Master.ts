import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Master {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
}
