import { consultarFuncionarioPorId } from "../../repository/funcionarioRepository.js";
import { validarFuncionarioUnico } from "../../validation/funcionario/funcionarioValidation.js";

export default async function consultarFuncionarioPorIdService(id) {
    let registros = await consultarFuncionarioPorId(id);
    
    validarFuncionarioUnico(registros);

    let funcionario = registros[0];
    
    return funcionario;
}