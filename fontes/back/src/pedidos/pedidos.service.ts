import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItPedidoDto } from './dto/create-itPedido.dto';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { ItPedido } from './entities/it_pedidos.entity';
import { Pedido } from './entities/pedido.entity';

@Injectable()
export class PedidosService {
  constructor(
    @InjectRepository(Pedido)
    private pedidoRepository: Repository<Pedido>,

    @InjectRepository(ItPedido)
    private itPedidoRepository: Repository<ItPedido>,
  ){}

  async create(createPedidoDto: CreatePedidoDto) {
    await this.pedidoRepository.save(createPedidoDto);
    for(let i=0; i < createPedidoDto.lista_itens.length;i++){
      console.log(createPedidoDto.lista_itens[i])
      await this.itPedidoRepository.save(createPedidoDto.lista_itens[i]);
    }
  }

  findAll() {
    return this.pedidoRepository.find();
  }

  findOne(id: number) {
    return this.pedidoRepository.findOneBy({ped_numero:id});
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    return `This action updates a #${id} pedido`;
  }

  remove(id: number) {
    return this.pedidoRepository.delete({ped_numero:id});
  }
}
