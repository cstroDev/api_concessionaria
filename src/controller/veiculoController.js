import deletarVeiculoService from "../service/veiculo/deletarVeiculoService.js";
import consultarVeiculoService from "../service/veiculo/consultarVeiculoService.js";
import consultarVeiculoPorIdService from "../service/veiculo/consultarVeiculoPorIdService.js";
import inserirVeiculoService from "../service/veiculo/inserirVeiculoService.js";
import alterarVeiculoService from "../service/veiculo/alterarVeiculoService.js";

import { Router } from "express";
const endpoints = Router();

endpoints.get('/veiculos', async (req, resp) => {
    try {
        let filtro = {
            marca: req.query.marca,
            modelo: req.query.modelo,
            precoMin: req.query.precoMin,
            precoMax: req.query.precoMax,
            ano: req.query.ano,
            combustivel: req.query.combustivel,
            status: req.query.status,
            quilometragem: req.query.quilometragem,
            cambio: req.query.cambio
        };

        let registros = await consultarVeiculoService(filtro);

        resp.send(registros);

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err))
    }
});

endpoints.get('/veiculos/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let registros = await consultarVeiculoPorIdService(id);

        resp.send(registros);

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
})

endpoints.post('/veiculos', async (req, resp) => {
    try {
        let veiculo = req.body;
        
        let id = await inserirVeiculoService(veiculo);

        resp.send({
            id: id
        })

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.delete('/veiculos/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        await deletarVeiculoService(id);

        resp.status(204).send();

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.put('/veiculos/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let veiculo = req.body;

        await alterarVeiculoService(veiculo, id);

        resp.status(204).send();

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

export default endpoints;