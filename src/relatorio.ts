import type { Categoria, Despesa } from "./tipos";

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
    throw new Error("não implementado");
}

