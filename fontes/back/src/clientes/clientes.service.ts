import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { LoginClienteDto } from './dto/login.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import {Cliente} from './entities/cliente.entity';
@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private clientesRepository: Repository<Cliente>,
  ) {}
  async create(createClienteDto: CreateClienteDto) {
    let exists = await this.clientesRepository.findOneBy({
      cli_cpfcnpj:createClienteDto.cli_cpfcnpj
    });
    if (!exists){
      return this.clientesRepository.save(createClienteDto);
    }else{
      return {
        message: 'Cliente já cadastrado com o CPF informado'
      }
    }
  }

  async login(loginClienteDto: LoginClienteDto){
    let exists = await this.clientesRepository.findOneBy({
      cli_email: loginClienteDto.cli_email
    });
    if (exists && exists.cli_password == loginClienteDto.cli_password){
      return exists
    }else{
      return {
        id:0
      }
    }
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
    let entity = await this.clientesRepository.findOneBy({
      cli_id:id
    });
    await this.clientesRepository.remove(entity);
    return {
      message: "Cliente excluído com sucesso!"
    }
  }
}
