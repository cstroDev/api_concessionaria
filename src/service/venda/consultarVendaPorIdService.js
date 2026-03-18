import { consultarVendaPorId } from "../../repository/vendaRepository.js";

export default async function consultarVendaPorIdService(id) {
    let registros = await consultarVendaPorId(id);

    if (registros.length == 0)
        throw new Error("Nenhuma venda encontrada.");

    return registros[0];
}