import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Master } from "./Master";
@Entity()
export class Details {
  @Column()
  postal_code: string;

  @Column()
  city: string;

  @OneToOne(() => Master, { primary: true, cascade: true, onDelete: "CASCADE" })
  @JoinColumn()
  id: Master;
}
