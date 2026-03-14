import alterarFuncionarioService from "../service/funcionario/alterarFuncionarioService.js";
import deletarFuncionarioService from "../service/funcionario/deletarFuncionarioService.js";
import inserirFuncionarioService from "../service/funcionario/inserirFuncionarioService.js";
import listarFuncionarioService from "../service/funcionario/listarFuncionarioService.js";

import { Router } from "express";
const endpoints = Router();

endpoints.post('/funcionario', async (req, resp) => {
    try {
        let funcionario = req.body;

        let id = await inserirFuncionarioService(funcionario);

        resp.send({
            id: id
        })

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.get('/funcionario', async (req, resp) => {
    try {
        let registros = await listarFuncionarioService();

        resp.send(registros);

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.delete('/funcionario/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        await deletarFuncionarioService(id);

        resp.status(204).send()

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.put('/funcionario/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let funcionario = req.body;
        
        await alterarFuncionarioService(funcionario, id);

        resp.status(204).send()

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

export default endpoints;