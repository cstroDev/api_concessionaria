import con from "./connection.js";

export async function consultarVenda() {
    let comando = `
        SELECT id_venda             id,
               id_cliente           idCliente,
               id_funcionario       idFuncionario,
               id_veiculo           idVeiculo,
               dt_venda             dataVenda,
               vl_venda             valorVenda,
               ds_forma_pagamento   formaPagamento,
               ds_observacoes       observacoes
        FROM   tb_vendas
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}

export async function inserirVenda(venda) {
    let comando = `
        INSERT INTO tb_vendas (id_cliente, id_funcionario, id_veiculo, dt_venda, vl_venda, ds_forma_pagamento, ds_observacoes)
        VALUES (?,?,?,?,?,?,?)
    `;

    let resposta = await con.query(comando, [venda.idCliente, venda.idFuncionario, venda.idVeiculo, venda.dataVenda, venda.valorVenda, venda.formaPagamento, venda.observacoes]);
    let info = resposta[0];

    return info.insertId;
}