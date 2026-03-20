import { consultarVeiculoPorId } from "../../repository/veiculoRepository.js";

export default async function consultarVeiculoPorIdService(id) {
    let registros = await consultarVeiculoPorId(id);

    if (registros.length == 0)
        throw new Error("Veículo não encontrado.");

    let veiculo = registros[0];

    return veiculo;
}