export function validarCamposObrigatoriosVeiculo(veiculo) {
    if (!veiculo.marca)
        throw new Error("Marca do veículo obrigatória.")

    if (!veiculo.modelo)
        throw new Error("Modelo do veículo obrigatório.")

    if (!veiculo.ano)
        throw new Error("Ano do veículo obrigatório.")

    if (!veiculo.cor)
        throw new Error("Cor do veículo obrigatório.")

    if (veiculo.quilometragem == null)
        throw new Error("Quilometragem do veículo obrigatório.")

    if (!veiculo.preco)
        throw new Error("Preço do veículo obrigatório.")

    if (!veiculo.placa)
        throw new Error("Placa do veículo obrigatória.")

    if (!veiculo.combustivel)
        throw new Error("Combustível do veículo obrigatório.")

    if (!veiculo.cambio)
        throw new Error("Tipo de câmbio obrigatório.")

    if (!veiculo.status)
        throw new Error("Status do veículo é obrigatório.")
}