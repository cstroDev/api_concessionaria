import funcionarioController from "./controller/funcionarioController.js";
import clienteController from "./controller/clienteController.js"

export default function adicionarRotas(servidor) {
    servidor.use(funcionarioController);
    servidor.use(clienteController);
}