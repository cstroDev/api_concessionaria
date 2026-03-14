import { horaAtual } from "./dateTime.js";

global.logErro = function logErro(err) {
    console.log(horaAtual() + ' ERROR ----> ' + err.message);
}

global.criarErro = function criarErro(err) {
    let obj = {
        error: err.message
    }

    return obj;
}