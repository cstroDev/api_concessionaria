import { consultarVendaPorId, deletarVenda } from "../../repository/vendaRepository.js";
import { alterarStatusVeiculo } from "../../repository/veiculoRepository.js";

export default async function deletarVendaService(id) {
    let venda = await consultarVendaPorId(id);

    if (!venda[0])
        throw new Error('Venda não encontrado');

    let idVeicul = venda[0].idVeiculo;

    await alterarStatusVeiculo(idVeicul, 'disponivel');
    await deletarVenda(id);
}