import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produto)
    private produtosRepository: Repository<Produto>,
  ) {}
  create(createProdutoDto: CreateProdutoDto) {
    return this.produtosRepository.save(createProdutoDto);
  }

  findAll() {
    return this.produtosRepository.find();
  }

  findOne(id: number) {
    return this.produtosRepository.findOneBy({prod_id:id});
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return `This action updates a #${id} produto`;
  }

  async remove(id: number) {
    await this.produtosRepository.delete(id);
  }
}
