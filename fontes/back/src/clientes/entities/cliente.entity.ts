import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'clientes'})
export class Cliente {
  @PrimaryGeneratedColumn()
  cli_id: number;

  @Column()
  cli_nome: string;

  @Column()
  cli_cpfcnpj: number;

  @Column()
  cli_fone: string;

  @Column()
  cli_email: string;

  @Column()
  cli_password: string;

}