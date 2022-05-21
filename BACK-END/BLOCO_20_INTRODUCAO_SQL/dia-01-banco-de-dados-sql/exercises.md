# Exercícios

1. Como Fazer pesquisa em qualquer tabela sem utilizar uma linha de código usando o MySQL Workbench:

  `Clicar com botão direito na tabela e clicar em 'select rows - limit xxxx'`

2. Como criar uma tabala sem usar código:

  `Clicar em 'create table' usando botão direito`

3. Feito isso, crie uma tabela com as seguintes restrições:

  Nome da tabela: Filme

  - FilmeId - primary key, tipo int;
  - Descrição - não permite nulos, tipo texto (varchar(100));
  - AnoLancamento - não permite nulos, tipo int;
  - Nota - permite nulos, tipo int;

4. Analise a tabela 'city' e encontre a tabela à qual a coluna 'country_id' faz referência:

  `Faz referência à tabela country`

5. Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela 'city' faz com a tabela 'country'?

  `N:1`

6. Qual tipo de relacionamento a tabela 'country' faz com a tabela 'city'?

  `1:N`

7. Abra tabela por tabela no banco sakila e encontre no mínimo 3 exemplos de um relacionamentos '1:N ou N:1':
  - store -> staff
  - country -> city
  - film -> language