import { consultarCliente } from "../../repository/clienteRepository.js";

export default async function consultarClienteService(filtro) {
    let registros = await consultarCliente(filtro);

    if (registros.length == 0)
        throw new Error('Nenhum cliente encontrado.');

    return registros;
}