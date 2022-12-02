import { Module } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { PedidosController } from './pedidos.controller';
import { Pedido } from './entities/pedido.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItPedido } from './entities/it_pedidos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pedido,ItPedido])],
  controllers: [PedidosController],
  providers: [PedidosService]
})
export class PedidosModule {}
