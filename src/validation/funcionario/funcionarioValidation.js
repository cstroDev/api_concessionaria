export function validarCamposObrigatoriosFuncionario(funcionario) {
    if (!funcionario.nome)
        throw new Error("Nome do funcionário obrigatório.")

    if (!funcionario.email)
        throw new Error("Email do funcionário obrigatório.")

    if (!funcionario.senha)
        throw new Error("Senha do funcionário obrigatório.")

    if (!funcionario.telefone)
        throw new Error("Telefone do funcionário obrigatório.")
}

export function validarCamposObrigatoriosFuncionarioAlteracao(funcionario) {
    if (!funcionario.nome)
        throw new Error("Nome do funcionário obrigatório.")

    if (!funcionario.email) 
        throw new Error("Email do funcionário obrigatório.")

    if (!funcionario.senha)
        throw new Error("Senha do funcionário obrigatório.")

    if (!funcionario.cargo) 
        throw new Error("Cargo do funcionário obrigatório.")

    if (!funcionario.telefone)
        throw new Error("Telefone do funcionário obrigatório.")

    if (!funcionario.ativo) 
        throw new Error("Status do funcionário obrigatório.")
}

export function validarFuncionarioUnico(registros) {
    if(registros.length == 0)
        throw new Error("Funcionário não encontrado.");
}  