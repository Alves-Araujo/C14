# Aula-08-PadrõesParaCriarTestes.pptx


## Slide 1
- C14 – Engenharia de Software Padrões para criação de testes
- Prof. Christopher Lima
- christopher@inatel.br

## Slide 2
- Padrão 1 – API Definition
- Definição da API.
- Como começar a testar algo?

## Slide 3
- O primeiro teste é pra definir a superfície, não o que tem dentro.
- Em outras palavras, a API!

## Slide 4
- Como introduzir um novo elemento de programação?

## Slide 5
- Criar o cenário mais simples possível e fazer a implementação trivial!
- O objetivo é definir como os clientes irão utilizar a classe!

## Slide 6
- Padrão 1 – API Definition
- Método
- Classe
- Forçar um retorno trivial
- Testar o comportamento esperado assim que o objeto é instanciado

## Slide 7
- Considere uma classe que, dado o fully-qualified-name retorna o simple name da classe.
- Caso trivial seria tratar o nome simples!

## Slide 8
- Criação de uma instância Aluno.
- Assim que o “Aluno” é instanciado, deve estar vivo.

## Slide 9
- Criação de uma instância RobotConnection.
- Assim que o “RobotConnection” é instanciado, ele ainda não está conectado!

## Slide 10
- Criação de uma instância Pilha.
- Assim que a “Pilha” é instanciada, deve estar vazia.

## Slide 11
- Conforme se avança na sessão de testes modifique o cenário, adicionando diferenças!
- Inclusive diferenças falsas!
- Cenários negativos são importantes!
- Exemplo: Para um método que recebe quatro parâmetros, alterne o valor dos parâmetros, e crie novos cenários de teste

## Slide 12
- Padrão 2 – Diferential Test
- Definir o passo básico!
- Considere o teste de um elevador

## Slide 13
- Qual é o primeiro teste?
- Se não apertarmos nada, ele precisa ficar parado

## Slide 14
- Em seguida é necessário mudar alguma coisa. Precisa ser diferente! Testar “para cima” por exemplo

## Slide 15
- Depois “para baixo”

## Slide 16
- Quão diferente?
- Se escrevermos um novo teste, que já está verde, não motiva mudanças no código fonte. Ou seja, pode não representar um avanço no desenvolvimento do código.
- Por outro lado, se escrevermos um teste muito complexo, perderemos ritmo e feedback rápido que o teste nos traz.

## Slide 17
- Como incrementar uma funcionalidade?

## Slide 18
- Adicione um teste que induz um pequeno incremento no código de produção sendo criado.
- Objetivo: Seguir adiante, incrementando uma funcionalidade

## Slide 19
- Teste Anterior
- (assertTrue)
- Incremento
- (assertFalse)
- 1˚ Cenário
- 2˚ Cenário
- Incrementa com

## Slide 20
- Crie uma situação para motivar a muda-lo

## Slide 21
- Exemplo da Pilha!

## Slide 22
- Padrão 1 – API Definition
- Definimos que existe um método boolean isVazia()
- Padrão 2 – Diferential Test
- Força o método anterior a devolver uma condição diferente

## Slide 23

## Slide 24
- Busque os cenários triviais e force alguma modificação!
- Isto é, crie testes que motive essas modificações

## Slide 25
- É possível chegar em cenários complexos só com pequenos passos?
- Com pequenos incrementos, o cenário se torna complexo naturalmente

## Slide 26
- O próximo andar de um prédio é criado somente com a estrutura adequada para acessá-lo.

## Slide 27
- Padrão 3 – Exceptional Limit

## Slide 28
- É necessário pensar em cenários onde se deve lançar erros!
- Proteger a classe contra mau uso pelos clientes!!!

## Slide 29
- Como definir quando a classe não funciona? Cenários inválidos?

## Slide 30
- Crie um teste que introduz um cenário inválido, e verifique se a classe sabe lidar com essa situação.
- O objetivo é adicionar capacidade para tratar situações excepcionais, e não uma nova funcionalidade!

## Slide 31
- Para a classe Pilha criamos dois cenários de erro.
- Remover da pilha vazia
- Inserir na pilha cheia

## Slide 32

## Slide 33
- Seguindo a filosofia de testes, esses cenários só surgem se criarmos testes de forma explícita.
- Caso contrário, surgirá como bug!

## Slide 34
- Padrão 4 – Everything Working Together

## Slide 35
- Ao criar testes unitários, estamos sempre preocupados com as funcionalidades individuais

## Slide 36
- Porém, o software é integrado!
- Muitas funcionalidades possuem interseções

## Slide 37
- Como saber se as funcionalidade estão funcionando integradas?

## Slide 38
- Adicione um cenário de teste onde duas ou mais funcionalidades são combinadas!
- O objetivo é verificar a integração, e não adicionar uma nova funcionalidade

## Slide 39
- Exemplo: Horário/Sala de atendimento

## Slide 40
- Exemplo: Carrinho de Compra

## Slide 41
- Diferential Test

## Slide 42

## Slide 43
- Nessa etapa, não é um equívoco que o teste já “nasce passando”.
- O objetivo foi integrar, e não adicionar nova funcionalidade

## Slide 44
- Exercício - 1
- Calculadora

## Slide 45
- Exercício - 1
- Utilizar os padrões 1, 2, 3 e 4 para construir uma calculadora.
- Utilize @Before
- Crie pelo menos 2 cenário negativo (Padrão 3).

## Slide 46
- Exercício 2 – Loja de Brownies (Carrinho de Compras)
- Utilizar os padrões 1, 2, 3 e 4 para construir uma loja de brownies. (Sistema hipotético de vendas).
- Crie 6 cenários diferentes que guie o desenvolvimento da aplicação.
- Crie pelo menos 2 cenários negativos (Padrão 3).
- Crie 1 cenário de integração (Padrão 4)
- Não esqueça de garantir a testabilidade.
- É preciso testar os comportamentos do carrinho de compra!

## Slide 47
- Exercício – 3
- Pilha!

## Slide 48
- Implementar uma pilha com testes

## Slide 49
- Quais são alguns requisitos iniciais que queremos verificar na pilha?
- Não é necessário pensar em todos!

## Slide 50
- Verificar se a pilha está vazia
- Fazer push de um elemento
- Fazer push de dois elementos
- Fazer pop de um elemento
- Fazer pop com a pilha vazia
- Fazer push com a pilha cheia

## Slide 51
- Com essas definições de teste, estamos desenvolvendo a API da classe.
- Reforçando que o teste/TDD é uma técnica que nos ajuda a construir a classe de produção.

## Slide 52
- Exercício – 4
- Testes com Mockito – Sistema de Conquistas

## Slide 53
- Implementações
- https://github.com/chrislima-inatel/C214

## Slide 54
- Referência
- Capítulo 8 do livro Engenharia de Software Moderna
- Item 8.7 – Desenvolvimento Dirigido por Testes
- https://engsoftmoderna.info/cap8.html
- Step Patterns
- dl.acm.org/doi/abs/10.5555/2821679.2831289?download=true