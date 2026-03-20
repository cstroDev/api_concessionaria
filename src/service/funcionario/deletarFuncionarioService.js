import { deletarFuncionario } from "../../repository/funcionarioRepository.js";

export default async function deletarFuncionarioService(id) {
    let linhasAfetadas = await deletarFuncionario(id);

    if (linhasAfetadas == 0)
        throw new Error("Nenhum funcionário removido.");
}