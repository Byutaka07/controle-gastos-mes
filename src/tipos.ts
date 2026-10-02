// Union type porque a categoria só pode ter um destes quatro valores.
export type Categoria =
    | "alimentação"
    | "transporte"
    | "lazer"
    | "moradia";

export interface Despesa {
    // readonly porque o identificador não pode mudar depois de criado.
    readonly id: number;
    descricao: string;
    valor: number;
    categoria: Categoria;
    mes: number;

    // Opcional porque uma despesa pode ou não possuir uma observação.
    observacao?: string;
}

// A ordem será utilizada posteriormente na matriz do relatório.
export const CATEGORIAS: Categoria[] = [
    "alimentação",
    "transporte",
    "lazer",
    "moradia"
];