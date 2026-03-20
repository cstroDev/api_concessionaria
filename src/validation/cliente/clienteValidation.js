export function validarCamposObrigatoriosCliente(cliente) {
    if(!cliente.nome)
        throw new Error("Nome do cliente obrigatório.");

    if(!cliente.cpf)
        throw new Error("Cpf do cliente obrigatório.");

    if(!cliente.telefone)
        throw new Error("Telefone do cliente obrigatório.");

    if(!cliente.email)
        throw new Error("Email do cliente obrigatório.");

    if(!cliente.endereco)
        throw new Error("Endereço do cliente obrigatório.");
}