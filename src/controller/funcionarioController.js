import inserirFuncionarioService from "../service/funcionario/inserirFuncionarioService.js";
import consultarFuncionarioService from "../service/funcionario/consultarFuncionarioService.js";
import consultarFuncionarioPorIdService from "../service/funcionario/consultarFuncionarioPorIdService.js";
import alterarFuncionarioService from "../service/funcionario/alterarFuncionarioService.js";
import deletarFuncionarioService from "../service/funcionario/deletarFuncionarioService.js";

import { Router } from "express";
const endpoints = Router();

endpoints.post('/funcionarios', async (req, resp) => {
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

endpoints.get('/funcionarios', async (req, resp) => {
    try {
        let registros = await consultarFuncionarioService();

        resp.send(registros);

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.get('/funcionarios/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let funcionario = await consultarFuncionarioPorIdService(id);

        resp.send(funcionario);

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.delete('/funcionarios/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        await deletarFuncionarioService(id);

        resp.status(204).send()

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.put('/funcionarios/:id', async (req, resp) => {
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