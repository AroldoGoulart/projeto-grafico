# Dashboard Interativo

Bem-vindo ao projeto de Dashboard Interativo! Este projeto tem como objetivo fornecer uma maneira fácil e visualmente agradável para visualizar e analisar dados de diversas fontes JSON.

## Funcionalidades Principais

### 1. Seleção de Fonte de Dados
- O usuário pode escolher entre diferentes fontes de dados usando um menu suspenso. Cada fonte de dados possui sua própria estrutura, mas todas permitem operações de soma e detalhamento.

### 2. Opções de Visualização
- **Totalização de Campos:** Permite que o usuário selecione um campo específico dos dados para somar ou totalizar.
- **Detalhamento de Valores:** Permite selecionar um campo para detalhar os valores somados no eixo Y da tabela e representados por barras no gráfico.
- **Segunda Dimensão para Detalhamento:** Permite selecionar um campo adicional para detalhar os dados no eixo X da tabela e dividir as barras por cores no gráfico.

### 3. Exemplo de Uso
- **Exemplo 1:**
  - Totalização do valor numérico "Valor" detalhada pelo campo "UF".
  - Exibição dos dados em uma tabela dinâmica e em um gráfico de barras.
- **Exemplo 2:**
  - Totalização do valor numérico "Total" detalhada pelos campos "Ano" e "Benefício".
  - Exibição dos dados em uma tabela dinâmica e em um gráfico de barras.

## Como Usar

### Pré-requisitos
- Ter o Node.js instalado.
- Ter o npm ou yarn instalado.

### Passos para Rodar o Projeto

1. Clone o repositório:
   ```sh
   git clone https://github.com/snowlew/projeto-grafico.git
   cd projeto-grafico
   ```

2. Instale as dependências:
   ```sh
   npm install
   # ou
   yarn install
   ```

3. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
   # ou
   yarn dev
   ```

5. Abra o navegador e acesse `http://localhost:3000`

## Bibliotecas Utilizadas

Este projeto utiliza várias bibliotecas para facilitar o desenvolvimento e melhorar a experiência do usuário, incluindo:
- **React:** Framework para construção da interface do usuário.
- **TypeScript:** Linguagem para adicionar tipagem estática ao JavaScript.
- **Next.js:** Framework para React que permite a criação de aplicações web robustas.
- **ApexCharts:** Biblioteca para criação de gráficos interativos.

Esperamos que você aproveite usar este Dashboard Interativo tanto quanto nós aproveitamos construí-lo! Se tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato.