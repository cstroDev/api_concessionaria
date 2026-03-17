import { inserirVeiculo } from "../../repository/veiculoRepository.js";
import { validarCamposObrigatoriosVeiculo } from "../../validation/veiculo/veiculoValidation.js"

export default async function inserirVeiculoService(veiculo) {
    validarCamposObrigatoriosVeiculo(veiculo);

    let id = await inserirVeiculo(veiculo);

    return id;
}