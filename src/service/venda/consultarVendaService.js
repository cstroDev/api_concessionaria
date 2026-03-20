import { consultarVenda } from "../../repository/vendaRepository.js";

export default async function consultarVendaService(filtro) {
    let registros = await consultarVenda(filtro);

    if (registros.length == 0)
        throw new Error("Nenhuma venda encontrada.")
        
    return registros;
}