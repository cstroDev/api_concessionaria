import { listarCliente } from "../../repository/clienteRepository.js";

export default async function listarClienteService() {
    let registros = await listarCliente();
    return registros;
}