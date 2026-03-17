import { consultarVeiculo } from "../../repository/veiculoRepository.js";

export default async function consultarVeiculoService(filtro) {
    let registros = await consultarVeiculo(filtro);

    if (registros.length == 0)
        throw new Error('Nenhum veículo encontrado.');

    return registros;
}