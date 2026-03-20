import con from "./connection.js";

export async function inserirVeiculo(veiculo) {
    let comando = `
        INSERT INTO tb_veiculos (nm_marca, nm_modelo, nr_ano, ds_cor, nr_quilometragem, vl_preco, cd_placa, ds_combustivel, ds_cambio, st_veiculo, ds_descricao)
        VALUES (?,?,?,?,?,?,?,?,?,?,?)
    `;

    let resposta = await con.query(comando, [veiculo.marca, veiculo.modelo, veiculo.ano, veiculo.cor, veiculo.quilometragem, veiculo.preco, veiculo.placa, veiculo.combustivel, veiculo.cambio, veiculo.status, veiculo.descricao]);
    let info = resposta[0];

    return info.insertId;
}

export async function consultarVeiculo(filtro) {
    let comando = `
        SELECT id_veiculo           id,
               nm_marca             marca,
               nm_modelo            modelo,
               nr_ano               ano,
               ds_cor               cor,
               nr_quilometragem     quilometragem,
               vl_preco             preco,
               cd_placa             placa,
               ds_combustivel       combustivel,
               ds_cambio            cambio,
               st_veiculo           status,
               ds_descricao         descricao
        FROM   tb_veiculos
        WHERE 1=1
    `;

    let parametros = [];

    if (filtro.marca) {
        comando += ` AND nm_marca LIKE ?`;
        parametros.push("%" + filtro.marca + "%");
    }

    if (filtro.modelo) {
        comando += ` AND nm_modelo LIKE ?`;
        parametros.push("%" + filtro.modelo + "%");
    }

    if (filtro.precoMin) {
        comando += ` AND vl_preco >= ?`;
        parametros.push(filtro.precoMin);
    }

    if (filtro.precoMax) {
        comando += ` AND vl_preco <= ?`;
        parametros.push(filtro.precoMax);
    }

    if (filtro.ano) {
        comando += ` AND nr_ano = ?`;
        parametros.push(filtro.ano);
    }

    if (filtro.combustivel) {
        comando += ` AND ds_combustivel = ?`;
        parametros.push(filtro.combustivel);
    }

    if (filtro.status) {
        comando += ` AND st_veiculo = ?`;
        parametros.push(filtro.status);
    }

    if (filtro.quilometragem) {
        comando += ` AND nr_quilometragem = ?`;
        parametros.push(filtro.quilometragem);
    }

    if (filtro.cambio) {
        comando += ` AND ds_cambio = ?`;
        parametros.push(filtro.cambio);
    }

    let resposta = await con.query(comando, parametros);
    let registros = resposta[0];

    return registros;
}

export async function consultarVeiculoPorId(id) {
    let comando = `
        SELECT id_veiculo           id,
               nm_marca             marca,
               nm_modelo            modelo,
               nr_ano               ano,
               ds_cor               cor,
               nr_quilometragem     quilometragem,
               vl_preco             preco,
               cd_placa             placa,
               ds_combustivel       combustivel,
               ds_cambio            cambio,
               st_veiculo           status,
               ds_descricao         descricao
        FROM   tb_veiculos
        WHERE id_veiculo = ?
    `;

    let resposta = await con.query(comando, [id]);
    let registros = resposta[0];

    return registros;
}

export async function alterarVeiculo(veiculo, id) {
    let comando = `
        UPDATE tb_veiculos
        SET    nm_marca = ?,
               nm_modelo = ?,
               nr_ano = ?,
               ds_cor = ?,
               nr_quilometragem = ?,
               vl_preco = ?,
               cd_placa = ?,
               ds_combustivel = ?,
               ds_cambio = ?,
               st_veiculo = ?,
               ds_descricao = ?
        WHERE  id_veiculo = ?
    `;

    let resposta = await con.query(comando, [veiculo.marca, veiculo.modelo, veiculo.ano, veiculo.cor, veiculo.quilometragem, veiculo.preco, veiculo.placa, veiculo.combustivel, veiculo.cambio, veiculo.status, veiculo.descricao, id]);
    let info = resposta[0];

    return info.affectedRows;
}

export async function alterarStatusVeiculo(idVeiculo, status) {
    let comando = `
        UPDATE tb_veiculos
        SET st_veiculo = ?
        WHERE id_veiculo = ?
    `;

    let resposta = await con.query(comando, [status, idVeiculo]);
    let info = resposta[0];

    return info.affectedRows;
}

export async function deletarVeiculo(id) {
    let comando = `
        DELETE FROM tb_veiculos
        WHERE id_veiculo = ?
    `;

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}