import con from "./connection.js";

export async function inserirVenda(venda) {
    let comando = `
        INSERT INTO tb_vendas (id_cliente, id_funcionario, id_veiculo, dt_venda, vl_venda, ds_forma_pagamento, ds_observacoes)
        VALUES (?,?,?,?,?,?,?)
    `;

    let resposta = await con.query(comando, [venda.idCliente, venda.idFuncionario, venda.idVeiculo, venda.dataVenda, venda.valorVenda, venda.formaPagamento, venda.observacoes]);
    let info = resposta[0];

    return info.insertId;
}

export async function consultarVenda(filtro) {
    let comando = `
        SELECT id_venda             id,
               id_cliente           idCliente,
               id_funcionario       idFuncionario,
               id_veiculo           idVeiculo,
               dt_venda             dataVenda,
               vl_venda             valorVenda,
               ds_forma_pagamento   formaPagamento,
               ds_observacoes       observacoes,
               dt_criado_em         criado_em,
               dt_alterado_em       alterado_em
        FROM   tb_vendas
        WHERE 1=1
    `;

    let parametros = [];

    if (filtro.cliente) {
        comando += ` AND id_cliente = ?`;
        parametros.push(filtro.cliente);
    }

    if (filtro.funcionario) {
        comando += ` AND id_funcionario = ?`;
        parametros.push(filtro.funcionario);
    }

    if (filtro.veiculo) {
        comando += ` AND id_veiculo = ?`;
        parametros.push(filtro.veiculo);
    }

    if (filtro.dataInicio) {
        comando += ` AND dt_venda >= ?`;
        parametros.push(filtro.dataInicio);
    }

    if (filtro.dataFim) {
        comando += ` AND dt_venda <= ?`;
        parametros.push(filtro.dataFim);
    }

    if (filtro.valorMin) {
        comando += ` AND vl_venda >= ?`;
        parametros.push(filtro.valorMin);
    }

    if (filtro.valorMax) {
        comando += ` AND vl_venda <= ?`;
        parametros.push(filtro.valorMax);
    }

    let resposta = await con.query(comando, parametros);
    let registros = resposta[0];

    return registros;
}

export async function consultarVendaPorId(id) {
    let comando = `
        SELECT id_venda             id,
               id_cliente           idCliente,
               id_funcionario       idFuncionario,
               id_veiculo           idVeiculo,
               dt_venda             dataVenda,
               vl_venda             valorVenda,
               ds_forma_pagamento   formaPagamento,
               ds_observacoes       observacoes,
               dt_criado_em         criado_em,
               dt_alterado_em       alterado_em
        FROM   tb_vendas
        WHERE id_venda = ?
    `

    let resposta = await con.query(comando, [id]);
    let registros = resposta[0];

    return registros;
}

export async function alterarVenda(venda, id) {
    let comando = `
        UPDATE tb_vendas
        SET    id_cliente = ?,
               id_funcionario = ?,
               id_veiculo = ?,
               dt_venda = ?,
               vl_venda = ?,
               ds_forma_pagamento = ?,
               ds_observacoes = ?
        WHERE  id_venda = ?
    `;

    let resposta = await con.query(comando, [venda.idCliente, venda.idFuncionario, venda.idVeiculo, venda.dataVenda, venda.valorVenda, venda.formaPagamento, venda.observacoes, id]);
    let info = resposta[0];

    return info.affectedRows;
}

export async function deletarVenda(id) {
    let comando = `
        DELETE FROM tb_vendas
        WHERE id_venda = ?
    `;

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}