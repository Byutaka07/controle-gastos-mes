import type { Categoria, Despesa } from "./tipos";
import { CATEGORIAS } from "./tipos";
import { totalGasto, maiorDespesa } from "./despesas";

export function descricaoCategoria(
    categoria: Categoria
): string{
   switch (categoria) {
        case "alimentação":
            return "Alimentação";
        
        case "transporte":
            return "Transporte";
        
        case "lazer":
            return "Lazer";
        
        case "moradia":
            return "Moradia";
            
    }
}

export function matrizCategoriaMes(
    despesas: Despesa[]
): number[][]{
        const matriz: number[][] = [];

    for (let i = 0; i < 4; i++) {
        const linha: number[] = [];

        for (let j = 0; j < 12; j++) {
            linha.push(0);
        }

        matriz.push(linha);
    }

    for (const despesa of despesas) {
        let linhaCategoria = 0;

    switch (despesa.categoria) {
        case "alimentação":
            linhaCategoria = 0;
            break;
        case "transporte":
            linhaCategoria = 1;
            break;
        case "lazer":
            linhaCategoria = 2;
            break;
        case "moradia":
            linhaCategoria = 3;
            break;
    }

    const colunaMes = despesa.mes - 1;

  const linha = matriz[linhaCategoria];

    if (linha !== undefined) {
        const valorAtual = linha[colunaMes];

        if (valorAtual !== undefined) {
            linha[colunaMes] = valorAtual + despesa.valor;
        }
    }
}

    return matriz;
}


export function formatarRelatorio(
    despesas: Despesa[]
): string{
    const matriz = matrizCategoriaMes(despesas);

    let relatorio = "Relatório de gastos".toUpperCase() + "\n\n";

    for (let i = 0; i < CATEGORIAS.length; i++) {
        let totalCategoria = 0;
        const linha = matriz[i];

        if (linha !== undefined) {
            for (let mes = 0; mes < 12; mes++) {
                const valor = linha[mes];

                if (valor !== undefined) {
                    totalCategoria += valor;
            }
        }
    }

    const categoria = CATEGORIAS[i];

    if (categoria !== undefined) {
        const nome = descricaoCategoria(categoria);
        relatorio += nome.padEnd(15) + totalCategoria.toFixed(2) + "\n";
        }
    }

    const total = totalGasto(despesas);
    const maior = maiorDespesa(despesas);

    relatorio += "\n" + "Total geral:".padEnd(15) + total.toFixed(2) + "\n";

    if (maior !== undefined) {
        relatorio +=
        "Maior despesa: " +
        maior.descricao +
        " - " +
        maior.valor.toFixed(2);
    } else {
        relatorio += "Maior despesa: nenhuma";
    }

    return relatorio;
    }


