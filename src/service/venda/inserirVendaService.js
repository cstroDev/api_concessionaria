import { inserirVenda } from "../../repository/vendaRepository.js";
import { consultarClientePorId } from "../../repository/clienteRepository.js";
import { alterarStatusVeiculo, consultarVeiculoPorId } from "../../repository/veiculoRepository.js";
import { validarCamposObrigatoriosVenda } from "../../validation/venda/vendasValidation.js";

export default async function inserirVendaService(venda) {
    validarCamposObrigatoriosVenda(venda);
    
    let veiculo = await consultarVeiculoPorId(venda.idVeiculo);

    if (!veiculo[0])
        throw new Error('Veículo não encontrado')

    if (veiculo[0].status === 'vendido')
        throw new Error('Veículo já vendido')

    let cliente = await consultarClientePorId(venda.idCliente);

    if (!cliente[0])
        throw new Error('Cliente não encontrado')

    let id = await inserirVenda(venda);

    await alterarStatusVeiculo(venda.idVeiculo, 'vendido');

    return id;
}