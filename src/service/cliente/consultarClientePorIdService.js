import { consultarClientePorId } from "../../repository/clienteRepository.js";

export default async function consultarClientePorIdService(id) {
    let registros = await consultarClientePorId(id);

    if (registros.length == 0)
        throw new Error("Cliente não encontrado.");

    let cliente = registros[0];

    return cliente;
}