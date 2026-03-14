import alterarClienteService from "../service/cliente/alterarClienteService.js";
import deletarClienteService from "../service/cliente/deletarClienteService.js";
import inserirClienteService from "../service/cliente/inserirClienteService.js";
import listarClienteService from "../service/cliente/listarClienteService.js";

import { Router } from "express";
const endpoints = Router();

endpoints.post('/cliente', async (req, resp) => {
    try {
        let cliente = req.body;

        let id = await inserirClienteService(cliente);

        resp.send({
            id: id
        })
        
    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.get('/cliente', async (req, resp) => {
    try {
       let registros = await listarClienteService()

       resp.send(registros)

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.delete('/cliente/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        await deletarClienteService(id);

        resp.status(204).send()

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.put('/cliente/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let cliente = req.body;

        await alterarClienteService(cliente, id);

        resp.status(204).send();

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
})

export default endpoints;