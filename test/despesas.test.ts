import { describe, it, expect } from "vitest";
import { adicionarDespesa, removerDespesa, despesasDaCategoria, totalGasto, maiorDespesa } from "../src/despesas";
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

const despesa3: Despesa = {
    id: 3,
    descricao: "Pizza",
    valor: 50,
    categoria: "alimentação",
    mes: 3
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

describe("despesasDaCategoria", () => {
    it("deve retornar somente despesas da categoria informada", () => {
        const despesas = [despesa1, despesa2, despesa3];

        const resultado = despesasDaCategoria(despesas, "alimentação");

        expect(resultado).toHaveLength(2);
        expect(resultado).toEqual([despesa1, despesa3]);
    });

    it("deve retornar um array vazio quando não houver despesas da categoria", () => {
        const despesas = [despesa1, despesa2, despesa3];
        const resultado = despesasDaCategoria(despesas, "moradia");

        expect(resultado).toEqual([]);
    });
});

describe("totalGasto", () => {
    it("deve retornar o total gasto", () => {
    const despesas = [despesa1, despesa2, despesa3];

    const resultado = totalGasto(despesas);

    expect(resultado).toBe(115);
    });

    it("deve retornar zero quando a lista estiver vazia", () => {
    const despesas: Despesa[] = [];

    const resultado = totalGasto(despesas);

    expect(resultado).toBe(0);
    });
});


describe("maiorDespesa", () => {
    it("deve retornar a despesa de maior valor", () => {
    const despesas = [despesa1, despesa2, despesa3];

    const resultado = maiorDespesa(despesas);

    expect(resultado).toEqual(despesa3);
    });

    it("deve retornar undefined quando a lista estiver vazia", () => {
    const despesas: Despesa[] = [];
    
    const resultado = maiorDespesa(despesas);

    expect(resultado).toBeUndefined();
    });
});
