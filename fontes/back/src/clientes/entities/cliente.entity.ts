import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cli_nome: string;

  @Column()
  cli_cpfcnpj: string;

  @Column()
  cli_endereco: string;
  
  @Column()
  cli_bairro: string;
  
  @Column()
  cli_municipio: string;
  
  @Column()
  cli_uf: string;
  
  @Column()
  cli_cep: string;
  
  @Column()
  cli_fone: string;

  @Column()
  cli_email: string;
}