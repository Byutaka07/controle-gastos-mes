import { error } from "node:console";
import type { Despesa } from "./tipos";

export function adicionarDespesa(
despesas: Despesa[],
nova: Despesa
): Despesa[] {
    if(nova.valor <= 0){
        throw new Error("O valor da despesa deve ser maior que zero.");
    }
    if(nova.mes < 1 || nova.mes > 12){
        throw new Error("O mês deve estar entre 1 e 12.");
    }

    return[...despesas, nova];
}

export function removerDespesa(
    despesas: Despesa[],
    id:number
): Despesa[] {
    //o filter cria um novo array contendo as despesas que passaram pela condição
    return despesas.filter((despesa) => despesa.id !==id);
}
