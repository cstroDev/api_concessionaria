import { alterarVeiculo } from "../../repository/veiculoRepository.js";
import { validarCamposObrigatoriosVeiculo } from "../../validation/veiculo/veiculoValidation.js";

export default async function alterarVeiculoService(veiculo, id) {
    validarCamposObrigatoriosVeiculo(veiculo);

    let linhasAfetadas = await alterarVeiculo(veiculo, id);

    if (linhasAfetadas == 0)
        throw new Error("Nenhum veículo foi alterado.");
}