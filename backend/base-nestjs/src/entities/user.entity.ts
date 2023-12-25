import { Entity, Column, PrimaryGeneratedColumn, VersionColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullname: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  note: string;

  @Column({ nullable: true })
  stock: number;

  @VersionColumn({ default: 1 })
  version: number;
}
