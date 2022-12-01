import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: "produtos"})
export class Produto {
  @PrimaryGeneratedColumn()
  prod_id: number;

  @Column()
  prod_desc: string;

  @Column()
  prod_tipo: string;

  @Column()
  prod_arq: string;
  
  @Column()
  prod_qtest: number;
  
  @Column()
  prod_preco: number;
  
  @Column()
  imgpath: string;
  
  @Column()
  prod_type: string;
  
}