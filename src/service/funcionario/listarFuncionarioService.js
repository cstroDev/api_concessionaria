import { listarFuncionario } from "../../repository/funcionarioRepository.js";

export default async function listarFuncionarioService() {
    let registros = await listarFuncionario();
    return registros;
}