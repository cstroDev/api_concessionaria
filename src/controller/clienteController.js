import consultarClientePorIdService from "../service/cliente/consultarClientePorIdService.js";
import alterarClienteService from "../service/cliente/alterarClienteService.js";
import deletarClienteService from "../service/cliente/deletarClienteService.js";
import inserirClienteService from "../service/cliente/inserirClienteService.js";
import consultarClienteService from "../service/cliente/consultarClienteService.js";

import { Router } from "express";
const endpoints = Router();

endpoints.post('/clientes', async (req, resp) => {
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

endpoints.get('/clientes/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let cliente = await consultarClientePorIdService(id);

        resp.send(cliente);

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.get('/clientes', async (req, resp) => {
    try {
        let filtros = {
            nome: req.query.nome,
            cpf: req.query.cpf,
            telefone: req.query.telefone,
            email: req.query.email,
            endereco: req.query.endereco
        };

        let registros = await consultarClienteService(filtros);
        

        resp.send(registros);

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.delete('/clientes/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        await deletarClienteService(id);

        resp.status(204).send()

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.put('/clientes/:id', async (req, resp) => {
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