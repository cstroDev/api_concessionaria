export function validarCamposObrigatoriosVenda(venda) {
    if (!venda.idCliente)
        throw new Error("idCliente obrigatório.")
    
    if (!venda.idFuncionario)
        throw new Error("IdFuncionario obrigatório.")
    
    if (!venda.idVeiculo)
        throw new Error("idVeiculo obrigatório.")

    if (!venda.dataVenda)
        throw new Error("dataVenda obrigatório.")

    if (!venda.valorVenda)
        throw new Error("valorVenda obrigatório.")

    if (!venda.formaPagamento)
        throw new Error("formaPagamento obrigatório.")
}