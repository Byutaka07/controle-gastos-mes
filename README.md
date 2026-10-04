# Controle de Gastos do Mês
 
Projeto individual desenvolvido em TypeScript com o objetivo de registrar despesas e gerar um relatório de gastos organizado por categoria.

O projeto utiliza conceitos de TypeScript, funções, módulos, arrays, matrizes, interfaces e testes automatizados com Vitest.

## Como executar o projeto
 
### Instalar as dependências

Depois que você terminar de clonar o repositório, execute no terminal:

npm install

Esse comando instala as dependências utilizadas pelo projeto.

### Executar os testes

Para executar todos os testes:

npm test

Os testes são executados com Vitest uma vez e encerram automaticamente.
 
### Executar o programa

Para executar o arquivo principal:

npm run dev

O programa utiliza as despesas cadastradas no "index.ts" e exibe o relatório no terminal.
 
### Verificar o TypeScript

Para verificar se existem erros de Typescript sem gerar arquivos compilados:

npx tsc --noEmit
 
## Arquivos de configuração
 
### package.json

Contém as informações do projeto, as dependências de desenvolvimento e os scripts utilizados para executar os testes e iniciar o programa.
 
### package-lock.json

Registra as versões exatas das dependências instaladas, auxiliando a manter a mesma configuração
quando o projeto for instalado em outro computador.

### tsconfig.json

Contém as configurações do compilador TypeScript. O projeto utiliza strict: true para realizar uma verificação mais rigorosa dos tipos.  
 
### .gitignore

Define os arquivos e pastas que não devem ser enviados para o repositório Git. No projeto realizado, as respectivas pastas
foram: 'node_modules/' e 'dist/'. Ou seja, essas pastas foram ignoradas.
 
## Registro de uso de IA

O projeto foi desenvolvido utilizando o modo Par. Para cada função, primeiro escrevi a assinatura e os testes. Depois executei os
testes para confirmar a falha e fiz o commit dos testes. Somente depois disso solicitei à IA a implementação da função. Após receber o código,
revisei a implementação, revi as ferramentas utilizadas, busquei entender como o código funcionava e executei novamente os testes e só então
aceitei ou ajustei o código.

| Função | Uso da IA | Revisão realizada| 
|---|---|---|
| `adicionarDespesa` | A IA gerou a implementação após os testes serem escritos e commitados. | Revisei as validações de valor e mês e confirmei que o array original não era alterado. |
| `removerDespesa` | A IA sugeriu uma implementação utilizando `filter`. | Revisei o funcionamento do `filter` e confirmei que um novo array era retornado. |
| `despesasDaCategoria` | A IA gerou a implementação utilizando `filter`. | Confirmei que somente as despesas da categoria informada eram retornadas. |
| `totalGasto` | A IA gerou a implementação utilizando um laço para somar os valores. | Revisei o acumulador e confirmei que uma lista vazia retornava zero. |
| `maiorDespesa` | A IA gerou a lógica para encontrar a despesa de maior valor. | Foi necessário ajustar o acesso ao primeiro elemento devido ao `noUncheckedIndexedAccess`. |
| `descricaoCategoria` | A IA gerou a implementação depois dos testes. | Confirmei o uso obrigatório de `switch` e os nomes exibidos para cada categoria. |
| `matrizCategoriaMes` | A IA gerou a construção e o preenchimento da matriz. | Revisei os índices das categorias e meses e foram feitas verificações para acessos que poderiam ser `undefined`. |
| `formatarRelatorio` | A IA gerou a implementação com base nos testes escritos anteriormente. | Revisei os totais por categoria, total geral, maior despesa e a formatação do texto. |
 
## Reflexão sobre o uso de IA

A IA ajudou principalmente na implementação das funções depois que os testes já estavam escritos e commitados. 
Foi importante revisar o código gerado em vez de aceitar diretamente todas as sugestões. Pois consegui compreender o que estava
acontecendo no código, o por que ele foi escrito assim e como isso ia impactar no meu projeto.
Na função `maiorDespesa`, foi necessário ajustar o acesso ao primeiro elemento do array por causa da opção `noUncheckedIndexedAccess` do TypeScript.
Na função `matrizCategoriaMes`, também foi necessário tratar possíveis valores `undefined` ao acessar linhas e colunas da matriz.
Os testes ajudaram a verificar se as implementações realmente atendiam o que se esperava do código.
Também utilizei testes para confirmar que `adicionarDespesa` não modificava o array original.
Esse processo ajudou a entender melhor arrays, `filter`, laços, matrizes, interfaces, módulos e validações em TypeScript. Além disso,
consegui complementar meus conhecimentos sobre Typescript que pude aprender ao decorrer das aulas.

