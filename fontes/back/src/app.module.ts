import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesModule } from './clientes/clientes.module';
import { Cliente } from './clientes/entities/cliente.entity';
import { Produto } from './produtos/entities/produto.entity';
import { ProdutosModule } from './produtos/produtos.module';
@Module({
  imports: [ClientesModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'mysql',
    password: 'mysql',
    database: 'chapeco_computadores',
    autoLoadEntities: true,
  }), ProdutosModule,],
  controllers: [],
  providers: [],
})
export class AppModule { }
