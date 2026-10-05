# Aula-01_02-ApresentacaoC14-Engenharia de Software.pptx


## Slide 1
- C14 – Engenharia de Software
- Prof. Christopher Lima
- christopher@inatel.br

## Slide 2
- Informações Gerais
- Disciplina: C14 – Engenharia de Software
- Carga horária semanal: 5h -> 4h teóricas + 2h de laboratório quinzenal
- Carga horária total: 100h
- Atendimento: Quinta 17:30 – 19:10
- Local: Prédio 3 – 2º Andar – Sala 17
- 2

## Slide 3
- NP1: Prova (0.5) + Listas de Exercícios (0.5)
- NP2: Projeto prático com defesa oral e presencial
- NPL: Projeto prático e atividades ao longo do semestre.
- Teórica: 50% da nota final
- Prática: 50% da nota final
- NPT = (NP1 + NP2) / 2 >= 60
- NPL >= 60NPA = (NPT * 0.6) + (NPL * 0.4) >= 60
- NFA = NPA
- NPA < 30 -> reprovado(a)
- NPA <= 60 -> Faz NP3
- NFA = NP3 + NPA >= 50 -> aprovado(a)

## Slide 4
- Por que Engenharia de Software? Indo além do código

## Slide 5
- Basta conhecer as notas musicais para compor boas músicas?

## Slide 6
- Basta conhecer a mistura de cores e segurar o pincel corretamente para pintar um quadro bonito?

## Slide 7
- Basta saber programar para criar programas robustos e flexíveis?

## Slide 8
- Certamente precisamos saber programar!
- Mas não é o suficiente!

## Slide 9
- É viável simplesmente sair criando código para adicionar novas funcionalidades?

## Slide 10
- Quais são as dificuldades essenciais encontradas para construir um software?
- Complexidade:
- Software é uma das mais desafiadoras e complexas construções existentes.
- Engenharia tradicional cada vez mais dependente de software.

## Slide 11
- ...
- Conformidade:
- Software tem que se adaptar ao seu ambiente, que muda a todo momento.
- Leis de recolhimento de imposto mudam e os sistemas precisam se adaptar rapidamente a nova legislação.

## Slide 12
- ...
- Facilidade de mudanças:
- Incorporar novas funcionalidades.
- Quanto mais bem sucedido for um sistema de software, mais demanda por mudanças ele recebe.

## Slide 13
- ...
- Invisibilidade:
- Pode ser difícil visualizar o tamanho de um software e estimar o esforço de construir um sistema.

## Slide 14
- “Engenharia de Software trata da aplicação de abordagens sistemáticas, disciplinadas e quantificáveis para desenvolver, operar, manter e evoluir software. Ou seja, Engenharia de Software é a área da Computação que se preocupa em propor e aplicar princípios de engenharia na construção de software.”

## Slide 15
- Engenharia de Software (C14)
- Qualidade de Software
- Engenharia de Produtode Software
- Gerência de Configuração e Evolução de Software (DevOps)
- Testes unitários/Teste Mock/TDD
- Métodos Ágeis
- CI/CDGitHub Actions
- Automatização, Compilação e Gerência de Dependências.Controle de Versão – Git e GitHubProgramação

## Slide 16
- 16

## Slide 17
- 17

## Slide 18
- 18

## Slide 19
- 19

## Slide 20
- 20

## Slide 21
- 21
- Ranking Tiobe – Jul/2024

## Slide 22
- Conferência da OTAN (Alemanha, 1968)
- 1a vez que o termo Engenharia de Software foi usado
- Working Conference on Software Engineering
- 22

## Slide 23
- Comentário de participante da Conferência da OTAN
- "Certos sistemas estão colocando demandas que estão além das nossas capacidades… Estamos tendo dificuldades com grandes aplicações."
- 23

## Slide 24
- Definição de Engenharia de Software
- “Área da Computação destinada a investigar os desafios e propor soluções que permitam desenvolver sistemas de software — principalmente aqueles mais complexos e de maior tamanho — de forma produtiva e com qualidade”
- 24

## Slide 25
- Aulas
- Vamos dar uma primeira visão de cada área
- Objetivo: entendimento horizontal do que é ES
- No resto do curso, vamos aprofundar em algumas áreas
- 25

## Slide 26
- E também cuidado: Não Existe Bala de Prata
- 26
- Frederick Brooks. No Silver Bullet - Essence and Accidents of Software Engineering. IEEE Computer, 1987. Imagem de: https://twitter.com/zeljko_obren/status/909014656802574336

## Slide 27
- Motivo: Dificuldades Essenciais
- Complexidade
- Conformidade
- Facilidade de Mudanças
- Invisibilidade
- 27
- Tornam Engenharia
- de Software diferente
- de outras engenharias

## Slide 28
- Testes de Software
- Verificam se um programa apresenta um resultado esperado ao ser executado com casos de teste
- Podem ser:
- Manuais
- Automatizados (nosso foco)
- 28

## Slide 29
- Frase famosa
- Testes de software mostram a presença de bugs, mas não a sua ausência. -- Edsger W. Dijkstra
- 29

## Slide 30
- ...existem diversos tipos de testes.
- Teste de unidade (nosso foco).
- Teste de integração.
- Teste de performance.
- Teste de usabilidade.
- 30

## Slide 31
- Defeito
- Bug
- Falha
- 31
- Três conceitos relacionados a testes

## Slide 32
- Esse código possui um defeito, pois a área de um círculo é pi vezes raio ao quadrado, e não ao cubo.
- 32
- ...suponha o exemplo

## Slide 33
- Bug é um termo mais informal, usado com objetivos às vezes diversos. Mas o uso mais comum é como sinônimo de defeito.
- 33
- Por fim, uma falha ocorre quando um código com defeito for executado — por exemplo, a condição do if do programa anterior for verdadeira — e, com isso, levar o programa a apresentar um resultado incorreto.

## Slide 34
- Outra observação importante
- 34

## Slide 35
- Falha Famosa:
- Explosão do
- Ariane 5 (1996)
- 35

## Slide 36
- 30 segundos depois
- 36
- Custo do foguete e satélite:
- US$ 500 milhões
- Photo of Ariane 501 Flight, a few seconds after explosion  (Credits ESA 1996)

## Slide 37
- Relatório do Comitê de Investigação
- Explosão foi causada por uma falha de software
- Conversão de um real de 64 bits para um inteiro de 16 bits
- Como o real não "cabia" em 16 bits, a conversão falhou
- 37

## Slide 38
- Gerência de Configuração
- Todo software é desenvolvido usando um sistema de controle de versões (exemplo: git)
- Atua como uma "fonte da verdade" sobre o código
- Permite recuperar versões antigas
- Leitura recomendada: apêndice sobre git
- 38

## Slide 39
- Processos de Desenvolvimento de Software
- Processo de software: define as atividades que devem ser seguidas para construir um sistema de software
- Dois principais modelos:
- Waterfall ("cascata")
- Ágil
- 39

## Slide 40
- Modelo em Cascata
- Inspirado em processos de engenharias tradicionais, como Civil, Mecânica, Elétrica, etc
- Proposto na década de 70 e muito usado até ~1990
- 40

## Slide 41
- Modelo em Cascata
- 41

## Slide 42
- Desenvolvimento Ágil
- Profundo impacto na indústria de software
- Hoje, tudo é ágil… Talvez adjetivo até desgastado
- 42
- Março 2019
- Maio 2020

## Slide 43
- Fizemos a seguinte pergunta para 415 devs brasileiros
- 43
- Fonte: Surveying the Impacts of COVID-19 on the Perceived Productivity of Brazilian Software Developers. SBES 2020

## Slide 44
- Referência
- Engenharia de Software Moderna
- https://engsoftmoderna.info
- Versão HTML disponível gratuitamente, sem custo adicional e frete grátis
- Autor: Marco Túlio Valente
- Ano: 2020
- 44

## Slide 45
- Implementações
- https://github.com/chrislima-inatel/C214
- https://chrislima.github.io/profchrislima/
- 45

## Slide 46
- Material Complementar
- Apostila Caelum FJ-11
- Java e Orientação a Objetos
- 46