import { inserirVenda } from "../../repository/vendaRepository.js";
import { consultarFuncionarioPorId } from "../../repository/funcionarioRepository.js";
import { consultarClientePorId } from "../../repository/clienteRepository.js";
import { alterarStatusVeiculo, consultarVeiculoPorId } from "../../repository/veiculoRepository.js";
import { validarCamposObrigatoriosVenda } from "../../validation/venda/vendasValidation.js";

export default async function inserirVendaService(venda) {
    validarCamposObrigatoriosVenda(venda);

    let cliente = await consultarClientePorId(venda.idCliente);
    if (!cliente[0])
        throw new Error('Cliente não encontrado.')

    let funcionario = await consultarFuncionarioPorId(venda.idFuncionario);
    if (!funcionario[0])
        throw new Error('Funcionário não encontrado.')

    let veiculo = await consultarVeiculoPorId(venda.idVeiculo);
    if (!veiculo[0])
        throw new Error('Veículo não encontrado.')

    if (veiculo[0].status === 'vendido')
        throw new Error('Veículo já vendido.')

    let id = await inserirVenda(venda);

    await alterarStatusVeiculo(venda.idVeiculo, 'vendido');

    return id;
}