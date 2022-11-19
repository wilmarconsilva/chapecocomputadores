import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import {Cliente} from './entities/cliente.entity';
@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private clientesRepository: Repository<Cliente>,
  ) {}
  create(createClienteDto: CreateClienteDto) {
    return this.clientesRepository.save(createClienteDto);
  }

  findAll() {
    return this.clientesRepository.find();
  }

  findOne(id: number) {
    return this.clientesRepository.findOneBy({id});
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return `This action updates a #${id} cliente`;
  }

  async remove(id: number) {
    await this.clientesRepository.delete(id);
  }
}
