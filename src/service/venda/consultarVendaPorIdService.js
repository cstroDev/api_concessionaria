import { consultarVendaPorId } from "../../repository/vendaRepository.js";

export default async function consultarVendaPorIdService(id) {
    let registros = await consultarVendaPorId(id);

    if (registros.length == 0)
        throw new Error("Venda não encontrada.");

    let venda = registros[0];
    
    return venda;
}