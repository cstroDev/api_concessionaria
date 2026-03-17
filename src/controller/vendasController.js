import inserirVendaService from "../service/venda/inserirVendaService.js";
import consultarVendaService from "../service/venda/consultarVenda.js";

import { Router } from "express";
const endpoints = Router();

endpoints.get('/vendas', async (req, resp) => {
    try {
        let registros = await consultarVendaService();

        resp.send(registros);

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.post('/vendas', async (req, resp) => {
    try {
        let venda = req.body;

        let id = await inserirVendaService(venda);

        resp.send({
            id: id
        })

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
})

export default endpoints;