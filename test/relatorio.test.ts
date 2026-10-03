import {describe, it, expect } from "vitest";
import { descricaoCategoria, matrizCategoriaMes } from "../src/relatorio";
import type { Despesa } from "../src/tipos";

describe("descricaoCategoria", () => {
    it("deve retornar o nome de exibição da categoria", () => {
    const resultado = descricaoCategoria("alimentação");

    expect(resultado).toBe("Alimentação");
    });

    it("deve retornar corretamente outra categoria válida", () => {
    const resultado = descricaoCategoria("moradia");

    expect(resultado).toBe("Moradia");
    });
});

describe("matrizCategoriaMes", () => {
    it("deve organizar os gastos por categoria e mês", () =>{
        const despesa1: Despesa = {
            id: 1,
            descricao: "Almoço",
            valor: 30,
            categoria: "alimentação",
            mes: 1
        }
        const despesa2: Despesa = {
            id: 2,
            descricao: "Uber",
            valor: 35,
            categoria: "transporte",
            mes: 2
        }
        const despesas = [despesa1, despesa2];
        const resultado = matrizCategoriaMes(despesas);

        expect(resultado[0]![0]).toBe(30);
        expect(resultado[1]![1]).toBe(35);
    });

    it("deve retornar uma matriz zerada quando não houver despesas", () => {
        const despesas: Despesa[] = [];

        const resultado = matrizCategoriaMes(despesas);
        expect(resultado).toHaveLength(4);
        expect(resultado[0]).toHaveLength(12);
        expect(resultado[0]![0]).toBe(0);
    });
});