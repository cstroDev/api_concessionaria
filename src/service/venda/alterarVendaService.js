import { consultarFuncionarioPorId } from "../../repository/funcionarioRepository.js";
import { consultarClientePorId } from "../../repository/clienteRepository.js";
import { consultarVeiculoPorId } from "../../repository/veiculoRepository.js";
import { alterarVenda, consultarVendaPorId } from "../../repository/vendaRepository.js";

import { validarCamposObrigatoriosVenda } from "../../validation/venda/vendasValidation.js"

export default async function alterarVendaService(venda, id) {
    validarCamposObrigatoriosVenda(venda);

    let vendaAtual = await consultarVendaPorId(id);
    if (!vendaAtual[0])
        throw new Error('Venda não encontrada.')

    let cliente = await consultarClientePorId(venda.idCliente);
    if (!cliente[0])
        throw new Error('Cliente não encontrado.')

    let funcionario = await consultarFuncionarioPorId(venda.idFuncionario);
    if (!funcionario[0])
        throw new Error('Funcionário não encontrado.')

    let veiculo = await consultarVeiculoPorId(venda.idVeiculo);
    if (!veiculo[0])
        throw new Error('Veículo não encontrado.')

    let idVeiculoAtual = vendaAtual[0].idVeiculo;
    let idVeiculoNovo = venda.idVeiculo;

    if (idVeiculoNovo !== idVeiculoAtual && veiculo[0].status === 'vendido')
        throw new Error('Veículo já vendido.');

    let linhasAfetadas = await alterarVenda(venda, id);

    if (linhasAfetadas == 0)
        throw new Error("Nenhuma venda foi alterada.")
}