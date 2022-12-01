import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'pedidos'})
export class Pedido {
  @PrimaryGeneratedColumn()
  ped_numero: number;

  @Column()
  ped_idcliente: number;

  @Column()
  ped_valortotal: number;

  @Column()
  ped_emissao: string;
}