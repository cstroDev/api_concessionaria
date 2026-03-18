import { consultarVenda } from "../../repository/vendaRepository.js";

export default async function consultarVendaService() {
    let registros = await consultarVenda();

    if (registros.length == 0)
        throw new Error("Nenhuma venda encontrada.");
        
    return registros;
}