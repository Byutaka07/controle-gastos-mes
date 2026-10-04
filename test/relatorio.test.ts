import {describe, it, expect } from "vitest";
import { descricaoCategoria, matrizCategoriaMes, formatarRelatorio } from "../src/relatorio";
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

describe("formatarRelatorio", () => {
    it("deve conter o título do relatório em maiúsculas", () => {
        const despesas: Despesa[] = [
            {
                id: 1,
                descricao: "Almoço",
                valor: 30,
                categoria: "alimentação",
                mes: 1
            }
        ];
        const resultado = formatarRelatorio(despesas);

        expect(resultado).toContain("RELATÓRIO DE GASTOS");
    });


    it("deve mostrar o total por categoria", () => {
        const despesas: Despesa[] = [
        {
                id: 1,
                descricao: "Almoço",
                valor: 30,
                categoria: "alimentação",
                mes: 1
        },
        {
                id: 2,
                descricao: "Pizza",
                valor: 45,
                categoria: "alimentação",
                mes: 2
        }
        ];
        
        const resultado = formatarRelatorio(despesas);
        
        expect(resultado).toContain("Alimentação");
        expect(resultado).toContain("75.00");
    });

    it("deve mostrar o total geral e a maior despesa", () => {
        const despesas: Despesa[] = [
            {
                id: 1,
                descricao: "Almoço",
                valor: 30,
                categoria: "alimentação",
                mes: 1
            },
            {
                id: 2,
                descricao: "Uber",
                valor: 35,
                categoria: "transporte",
                mes: 2
            }
        ];
        const resultado = formatarRelatorio(despesas);
        expect(resultado).toContain("65.00");
        expect(resultado).toContain("Uber");
    });

    it("deve formatar o relatório quando não houver despesas", () => {
        const despesas: Despesa[] = [];

        const resultado = formatarRelatorio(despesas);

        expect(resultado).toContain("0.00");
    });
});