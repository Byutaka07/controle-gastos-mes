import { describe, it, expect } from "vitest";
import { adicionarDespesa, removerDespesa } from "../src/despesas";
import type { Despesa } from "../src/tipos";
import { exec } from "node:child_process";
import { execPath } from "node:process";

const despesa1: Despesa = {
    id: 1,
    descricao: "almoço",
    valor: 30,
    categoria: "alimentação",
    mes: 1
}

const despesa2: Despesa = {
    id: 2,
    descricao: "Uber",
    valor: 35,
    categoria: "transporte",
    mes: 2,
    observacao: "Me atrasei pro trabalho e perdi o fretado"
}

describe("adicionarDespesa", () => {
    it("deve adicionar uma nova despesa", () => {
        const despesas = [despesa1];

        const resultado = adicionarDespesa(despesas, despesa2);

        expect(resultado).toHaveLength(2);
        expect(resultado[1]).toEqual(despesa2);
    });

    it("deve lançar erro quando o valor for inválido", () => {
        const despesaInvalida: Despesa = {
            id: 3,
            descricao: "despesa inválida",
            valor: 0,
            categoria: "lazer",
            mes: 3
        };

        const despesas = [despesa1];

        expect(() => {
        adicionarDespesa(despesas, despesaInvalida);
        }).toThrow();
    
    });

    it("deve lançar erro quando o mês for inválido", () => {
        const despesaInvalida2: Despesa = {
            id: 4,
            descricao: "Parque",
            valor: 40,
            categoria: "lazer",
            mes: 13
        }
        
        const despesas = [despesa1];
        expect(() => {
            adicionarDespesa(despesas, despesaInvalida2);
        }).toThrow();
    });

    it("não deve alterar o array original", () => {
        const despesas = [despesa1];
        //A função deve retornar um novo array para preservar o arry original.
        const resultado = adicionarDespesa(despesas, despesa2);

        expect(despesas).toHaveLength(1);
        expect(resultado).toHaveLength(2);
    });
    
});


describe("removerDespesa", () => {
    it("deve remover uma despesa pelo id", () => {
        const despesas = [despesa1, despesa2];

        const resultado = removerDespesa(despesas, 1);
        expect(resultado).toHaveLength(1);
        expect(resultado[0]).toEqual(despesa2);
    });
    it("deve retornar uma cópia quando o id não existir", () => {
        const despesas = [despesa1, despesa2];

        const resultado = removerDespesa(despesas, 999);
        expect(resultado).toEqual(despesas);
        expect(resultado).not.toBe(despesas);
    });
});