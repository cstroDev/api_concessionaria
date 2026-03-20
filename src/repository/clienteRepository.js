import con from "./connection.js";

export async function inserirCliente(cliente) {
    let comando = `
        INSERT INTO tb_clientes (nm_nome, ds_cpf, nr_telefone, ds_email, ds_endereco)
        VALUES (?,?,?,?,?)
    `;

    let resposta = await con.query(comando, [cliente.nome, cliente.cpf, cliente.telefone, cliente.email, cliente.endereco]);
    let info = resposta[0];

    return info.insertId;
}

export async function consultarCliente(filtro) {
    let comando = `
        SELECT id_cliente       id,
               nm_nome          nome,
               ds_cpf           cpf,
               nr_telefone      telefone,
               ds_email         email,
               ds_endereco      endereco,
               dt_criado_em     criado_em,
               dt_alterado_em   alterado_em
        FROM   tb_clientes
        WHERE 1=1
    `;

    let parametros = [];

    if (filtro.nome) {
        comando += ` AND nm_nome LIKE ?`;
        parametros.push("%" + filtro.nome + "%");
    }

    if (filtro.cpf) {
        comando += ` AND ds_cpf LIKE ?`;
        parametros.push(filtro.cpf);
    }

    if (filtro.telefone) {
        comando += ` AND nr_telefone LIKE ?`;
        parametros.push(filtro.telefone);
    }

    if (filtro.email) {
        comando += ` AND ds_email LIKE ?`;
        parametros.push("%" + filtro.email + "%");
    }

    if (filtro.endereco) {
        comando += ` AND ds_endereco LIKE ?`;
        parametros.push("%" + filtro.endereco + "%");
    }

    let resposta = await con.query(comando, parametros);
    let registros = resposta[0];

    return registros;
}

export async function consultarClientePorId(id) {
    let comando = `
        SELECT id_cliente       id,
               nm_nome          nome,
               ds_cpf           cpf,
               nr_telefone      telefone,
               ds_email         email,
               ds_endereco      endereco,
               dt_criado_em     criado_em,
               dt_alterado_em   alterado_em
        FROM   tb_clientes
        WHERE id_cliente = ?
    `;

    let resposta = await con.query(comando, [id]);
    let registros = resposta[0];

    return registros;
}

export async function alterarCliente(cliente, id) {
    let comando = `
        UPDATE tb_clientes
        SET    nm_nome = ?,
               ds_cpf = ?,
               nr_telefone = ?,
               ds_email = ?,
               ds_endereco = ?
        WHERE  id_cliente = ?
    `;

    let resposta = await con.query(comando, [cliente.nome, cliente.cpf, cliente.telefone, cliente.email, cliente.endereco, id]);
    let info = resposta[0];

    return info.affectedRows;
}

export async function deletarCliente(id) {
    let comando = `
        DELETE FROM tb_clientes
        WHERE id_cliente = ?
    `;

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}