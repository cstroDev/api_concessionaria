import { consultarFuncionario } from "../../repository/funcionarioRepository.js";

export default async function consultarFuncionarioService() {
    let registros = await consultarFuncionario();

    if (registros.length == 0)
        throw new Error("Nenhum funcionário encontrado.");

    return registros;
}