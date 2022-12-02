import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'it_pedidos'})
export class ItPedido {
  @PrimaryGeneratedColumn()
  it_num: number;

  @Column()
  it_seq: number;

  @Column()
  it_idprod: number;

  @Column()
  it_descprod: string;

  @Column()
  it_qtde: number;

  @Column()
  it_vlrunit: number;

  @Column()
  it_idpedido: number;
}