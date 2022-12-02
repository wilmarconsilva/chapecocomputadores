import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Pedido } from './entities/pedido.entity';

@Injectable()
export class PedidosService {
  constructor(
    @InjectRepository(Pedido)
    private pedidoRepository: Repository<Pedido>,
  ){}
  create(createPedidoDto: CreatePedidoDto) {
    return this.pedidoRepository.save(createPedidoDto);
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
