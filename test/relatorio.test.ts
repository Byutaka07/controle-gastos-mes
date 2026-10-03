import {describe, it, expect } from "vitest";
import { descricaoCategoria } from "../src/relatorio";

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