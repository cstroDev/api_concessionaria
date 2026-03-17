import { consultarClientePorId } from "../../repository/clienteRepository.js";
import { validarClienteUnico } from "../../validation/cliente/clienteValidation.js";

export default async function consultarClientePorIdService(id) {
    let registros = await consultarClientePorId(id);

    validarClienteUnico(registros);

    let cliente = registros[0];
    
    return cliente;
}