import type { Despesa } from "./tipos";
import { adicionarDespesa, removerDespesa } from "./despesas";
import { formatarRelatorio } from "./relatorio";


const despesas: Despesa[] = [
    {
        id: 1, 
        descricao: "Almoço",
        valor: 35,
        categoria: "alimentação",
        mes: 1
    },
    {
        id: 2,
        descricao: "Uber",
        valor: 25,
        categoria: "transporte",
        mes: 1
    },
    {
        id: 3,
        descricao: "Cinema",
        valor: 50,
        categoria: "lazer",
        mes: 2
    },
    {
        id: 4,
        descricao: "Aluguel",
        valor: 1200,
        categoria: "moradia",
        mes: 2
    },
    {
        id: 5,
        descricao: "Pizza",
        valor: 60,
        categoria: "alimentação",
        mes: 3
    },
    {
        id: 6,
        descricao: "Ônibus",
        valor: 12,
        categoria: "transporte",
        mes: 3
    },
    {
        id: 7,
        descricao: "Parque",
        valor: 30,
        categoria: "lazer",
        mes: 4
    },
    {
        id: 8,
        descricao: "Conta de luz",
        valor: 180,
        categoria: "moradia",
        mes: 4,
        observacao: "Conta referente ao mês de abril"
    }
];

const despesasComCafe = adicionarDespesa(despesas, {
    id: 9,
    descricao: "Café",
    valor: 8,
    categoria: "alimentação",
    mes: 4
});

const despesasFinais = removerDespesa(despesasComCafe, 2);

const relatorio = formatarRelatorio(despesasFinais);

console.log(relatorio);