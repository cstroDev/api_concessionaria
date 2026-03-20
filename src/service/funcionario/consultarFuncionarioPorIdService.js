import { consultarFuncionarioPorId } from "../../repository/funcionarioRepository.js";

export default async function consultarFuncionarioPorIdService(id) {
    let registros = await consultarFuncionarioPorId(id);

    if (registros.length == 0)
        throw new Error("Funcionário não encontrado.");

    let funcionario = registros[0];

    return funcionario;
}