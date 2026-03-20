import { alterarCliente } from "../../repository/clienteRepository.js";
import { validarCamposObrigatoriosCliente } from "../../validation/cliente/clienteValidation.js";

export default async function alterarClienteService(cliente, id) {
    validarCamposObrigatoriosCliente(cliente);

    let linhasAfetadas = await alterarCliente(cliente, id);

    if (linhasAfetadas == 0)
        throw new Error("Nenhum cliente alterado.");
}