import inserirVendaService from "../service/venda/inserirVendaService.js";
import consultarVendaService from "../service/venda/consultarVendaService.js";
import consultarVendaPorIdService from "../service/venda/consultarVendaPorIdService.js";
import alterarVendaService from "../service/venda/alterarVendaService.js";
import deletarVendaService from "../service/venda/deletarVendaService.js";

import { Router } from "express";
const endpoints = Router();

endpoints.post('/vendas', async (req, resp) => {
    try {
        let venda = req.body;

        let id = await inserirVendaService(venda);

        resp.send({
            id: id
        });

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.get('/vendas', async (req, resp) => {
    try {
        let filtro = {
            cliente: req.query.cliente,
            funcionario: req.query.funcionario,
            veiculo: req.query.veiculo,
            dataInicio: req.query.dataInicio,
            dataFim: req.query.dataFim,
            valorMin: req.query.valorMin,
            valorMax: req.query.valorMax
        };

        let registros = await consultarVendaService(filtro);

        resp.send(registros);

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.get('/vendas/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let registros = await consultarVendaPorIdService(id);

        resp.send(registros);

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.put('/vendas/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let venda = req.body;

        await alterarVendaService(venda, id);

        resp.status(204).send();

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.delete('/vendas/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        await deletarVendaService(id);

        resp.status(204).send();

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

export default endpoints;