import { ItPedido } from "../entities/it_pedidos.entity";

export class CreatePedidoDto {
    ped_idcliente:number;
    ped_valortotal:number;
    ped_emissao:string;
    lista_itens:ItPedido[];
}
