import { inserirFuncionario } from "../../repository/funcionarioRepository.js";
import { validarCamposObrigatoriosFuncionario } from "../../validation/funcionario/funcionarioValidation.js";

export default async function inserirFuncionarioService(funcionario) {
    validarCamposObrigatoriosFuncionario(funcionario);

    let id = await inserirFuncionario(funcionario);
    return id;
}