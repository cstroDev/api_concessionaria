import funcionarioController from "./controller/funcionarioController.js";
import clienteController from "./controller/clienteController.js";
import veiculoController from "./controller/veiculoController.js"
import vendasController from "./controller/vendasController.js";

export default function adicionarRotas(servidor) {
    servidor.use(funcionarioController);
    servidor.use(clienteController);
    servidor.use(veiculoController);
    servidor.use(vendasController);
}