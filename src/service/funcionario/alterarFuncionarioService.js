import { alterarFuncionario } from "../../repository/funcionarioRepository.js";
import { validarCamposObrigatoriosFuncionarioAlteracao } from "../../validation/funcionario/funcionarioValidation.js";

export default async function alterarFuncionarioService(funcionario, id) {
    validarCamposObrigatoriosFuncionarioAlteracao(funcionario);

    let linhasAfetadas = await alterarFuncionario(funcionario, id);
    if (linhasAfetadas == 0) {
        throw new Error("Nenhum funcionário foi alterado.");
    }
}