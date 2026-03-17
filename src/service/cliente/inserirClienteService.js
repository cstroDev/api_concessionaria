import { inserirCliente } from "../../repository/clienteRepository.js";
import { validarCamposObrigatoriosCliente } from "../../validation/cliente/clienteValidation.js";

export default async function inserirClienteService(cliente){
    validarCamposObrigatoriosCliente(cliente);
    
    let id = await inserirCliente(cliente);
    
    return id;
}