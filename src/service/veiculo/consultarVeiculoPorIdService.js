import { consultarVeiculoPorId } from "../../repository/veiculoRepository.js";
import { validarVeiculoUnico } from "../../validation/veiculo/veiculoValidation.js";

export default async function consultarVeiculoPorIdService(id) {
    let registros = await consultarVeiculoPorId(id);

    validarVeiculoUnico(registros);

    let veiculo = registros[0];

    return veiculo;
}