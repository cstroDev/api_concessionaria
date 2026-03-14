import con from "./connection.js";

export async function inserirFuncionario(funcionario) {
    let comando = `
        INSERT INTO tb_funcionarios (nm_nome, ds_email, ds_senha, nr_telefone)
        VALUES (?,?,?,?);
    `
    let resposta = await con.query(comando, [funcionario.nome, funcionario.email, funcionario.senha, funcionario.telefone]);
    let info = resposta[0];

    return info.insertId
}

export async function listarFuncionario() {
    let comando = `
        SELECT id_funcionario       id,
               nm_nome              nome,
               ds_email             email,
               ds_senha             senha,
               ds_cargo             cargo,
               nr_telefone          telefone,
               bt_ativo             ativo,
               dt_criado_em         criado_em,
               dt_alterado_em       alterado_em
        FROM   tb_funcionarios
    `
    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}

export async function deletarFuncionario(id) {
    let comando = `
        DELETE FROM tb_funcionarios
        WHERE id_funcionario = ?
    `
    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}

export async function alterarFuncionario(funcionario, id) {
    
    let comando = `
        UPDATE tb_funcionarios
        SET    nm_nome = ?,
               ds_email = ?,
               ds_senha = ?,
               ds_cargo = ?,
               nr_telefone = ?,
               bt_ativo = ?
        WHERE  id_funcionario = ?
    `
    let resposta = await con.query(comando, [funcionario.nome, funcionario.email, funcionario.senha, funcionario.cargo, funcionario.telefone, funcionario.ativo, id]);
    let info = resposta[0];

    return info.affectedRows;
}