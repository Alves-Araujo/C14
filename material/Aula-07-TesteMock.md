# Aula-07-TesteMock.pptx


## Slide 1
- C14 – Engenharia de Software Teste Mock
- Prof. Christopher Lima
- christopher@inatel.br

## Slide 2
- Considere uma classe capaz de instanciar objetos do tipo “dog”. Uma espécie de fábrica!

## Slide 3
- Entretanto, essa fábrica precisa acessar outra classe para recuperar informações dos dogs.
- Muitas classes, para que possam executar suas funcionalidades, precisam chamar outras classes!

## Slide 4
- ...relembrando:
- 4

## Slide 5
- Como podemos escrever um teste de unidade para a classe que cria instâncias de “dog?”

## Slide 6
- Classe Testada!
- Dependência

## Slide 7
- Classe Testada!
- Devemos incluir tudo no teste de unidade?
- Dependência

## Slide 8
- Durante o teste de unidade, é uma boa prática isolarmos as classes que estão sendo testadas.

## Slide 9
- Classe Testada!
- Devemos também verificar se a classe testada chama as suas dependências!
- Dependência

## Slide 10
- Nem toda classe altera o estado.
- Muitas apenas chamam outras classes!

## Slide 11
- Como isolar a classe testada?

## Slide 12
- Classe Testada!
- Devemos substituir as dependências por Objetos Mock

## Slide 13
- Objeto Mock
- Objetos simulados que “imitam” o comportamento de objetos reais de forma controlada

## Slide 14
- Por que usar Objeto Mock?

## Slide 15
- Teste de batida de carro!
- Além do aspecto humano, ao utilizarmos um Objeto Mock, conseguimos fazer medidas.

## Slide 16
- Acesso a recursos externos
- Algumas dependências podem representar acesso a banco de dados ou um web service

## Slide 17
- Acesso a recursos externos
- Pode ser complexo para configurar, lento e requer controle total do ambiente externo

## Slide 18
- Quem cria Objetos Mock?
- O criador(a) dos testes unitários (dev da solução)

## Slide 19
- Sua classe está preparada para receber objetos mock?

## Slide 20
- Como podemos mockar essa chamada?

## Slide 21
- Essa variável não está muito acessível
- Variável local
- Sem acesso externo
- Altamente acoplada

## Slide 22
- Vamos injetar os objetos externamente!
- Injeção de dependências!

## Slide 23
- Usando injeção pelo construtor!

## Slide 24
- Usando injeção pelo setter!

## Slide 25
- Parâmetro do método!

## Slide 26
- Classe de Teste
- Agora conseguimos injetar o objeto mock!
- Classe Testada

## Slide 27
- Precisei fazer tudo isso apenas para fazer um teste?
- Que trabalheira

## Slide 28

## Slide 29
- Estamos aprimorando o nosso código.
- Fizemos um desacoplamento na classe.
- Ter adequado a classe para ser testável aprimorou seu design
- Estamos sendo Engenheiros e Engenheiras de Software

## Slide 30
- Parte - 1

## Slide 31
- Considere o seguinte problema.
- Desejamos testar uma classe responsável por adquirir novos tipos de Inimigos de um servidor remoto.
- O retorno é em um JSON em formato String
- Mas não queremos incluir a busca no servidor durante os teste de unidade

## Slide 32
- O JSON no formato string:
- "{\"nome\":\"nome_do_inimigo\",\"vida\":\"vida_do_inimigo\",\"arma\":\"arma_do_inimigo\"}“
- O JSON completo

## Slide 33

## Slide 34
- O serviço externo é uma dependência.
- Injetada pelo construtor
- Estamos usando a biblioteca GSON para gerarmos um JSON a partir da String retornada. Portanto precisamos adicionar essa dependência no pom.xml

## Slide 35
- O método buscaInimigo() devolve uma instância de “Inimigo”.
- O que queremos testar é se a instância foi criada corretamente a partir de JSON.
- Assim, iremos mockar a classe que devolve o JSON.

## Slide 36
- A classe TesteBuscaInimigo fará o teste da classe BuscaInimigo.
- Queremos testar se o inimigo Skeleton  é construído corretamente.

## Slide 37
- Aqui é o método que queremos testar
- Qual serviço criaremos aqui?

## Slide 38
- Como vamos mockar a classe InimigoService

## Slide 39
- A classe que irá utilizar o mock não pode saber que está usando um objeto falso.
- É como se fosse um disfarce

## Slide 40
- Uma vez que a classe BuscaInimigo já está devidamente refatorada para ter a dependência injetada. Basta criarmos uma classe que implemente InimigoService e seus métodos de forma trivial!
- Como classes Mock só fazem sentido para o teste, elas também são criadas no diretório de teste!

## Slide 41
- Implementamos a interface necessária
- Nome da classe Mock
- Precisamos criar o comportamento trivial dentro desse método

## Slide 42
- Sabemos que o serviço remoto devolve uma String, assim podemos criar uma classe que já possui essa String hardcoded.

## Slide 43
- Basta fazer o objeto mock devolver a String
- Devolve a String que está hardcoded

## Slide 44
- Com o mock pronto, terminamos a classe de teste para InimigoBusca
- Cria-se o mock
- Injeta o mock
- Fazemos as assertivas

## Slide 45
- O teste passou!
- Mas o que realmente testamos?

## Slide 46
- O teste de unidade foi feito na classe InimigoBusca, especificamente no método buscaInimigo(), de forma isolada.
- Não era objetivo testar se o servidor está devolvendo a requisição corretamente.
- O teste foi verificar se, dado o JSON, a instância da classe Inimigo foi criada corretamente!

## Slide 47
- E as assertivas? Podemos colocar mais de uma por teste? Quando fizer sentido sim!.
- Queremos testar se a instância Inimigo está correta. Assim, faz sentido verificar se todos os campos estão corretos.

## Slide 48
- Contexto (Fixture) do teste!
- Fixture no @Before

## Slide 49
- Caso o id (do inimigo) seja inválido, o servidor devolve o inimigo padrão. Nesse exemplo é a Aranha
- Passando o id = -10

## Slide 50
- Exercício
- Modifique o exemplo anterior para
- Aceitar somente IDs positivos para inimigos.
- IDs negativos para inimigos devem retornar um Inimigo Inexistente em um JSON no formato String. (Todos os valores são “Inexistente” ou 0).
- Todos os Ids dos possíveis Inimigos devem ser inseridos em uma estrutura ArrayList. Para isso, crie um novo método no objeto Mock capaz de fazer essa operação.

## Slide 51
- Exercício continuação
- Crie os seguintes testes unitários no exemplo anterior:
- Inimigo de id 20 que possui:
- Nome: Dragao Vida: 100 Arma: Fogo
- Inimigo “Padrao” que possui:
- Nome: Aranha Vida: 20 Arma: Teia
- Inimigo inexistente (ID negativo)
- Nome: Inexistente Vida: 0 Arma: Inexistente
- Verificar se um inimigo válido qualquer existe no ArrayList de inimigo.
- Verificar se um inimigo inválido qualquer não existe no ArrayList de inimigo.

## Slide 52
- Ok. Já entendi que deixar a classe testável melhora seu design!
- Mas preciso criar Mock manual o tempo todo?

## Slide 53
- A criação de diversos objetos Mock pode ser algo complexo, exigindo um grande esforço para a criação.
- Classes podem possuir várias dependências.
- Teremos de “mockar” todas manualmente?

## Slide 54
- Para isso utilizamos frameworks de criação de objetos Mock

## Slide 55
- O que se espera de um framework para Mocks?

## Slide 56
- Simular o comportamento da dependência que desejamos “mockar”.
- Retornar valores
- Lançar exceptions
- Modificar parâmetros

## Slide 57
- Verificar se as invocações foram corretas
- Número de invocação
- Ordem de invocação
- Parâmetros.
- Expectativa de como o objeto seria chamado pela classe.

## Slide 58
- Permite que tudo isso seja feito no método de teste
- Não requer criar uma classe para mock
- Facilita a legibilidade do código de teste
- Reduz complexidade quando o serviço externo é muito complexo.

## Slide 59
- Parte - 2

## Slide 60
- Usando o Mockito
- Não se esqueça de adicionar a dependência do mockito no pom!
- Usamos o mockito-core

## Slide 61
- Usando abordagem baseada em annotations!
- Usamos @Mock nas nossas dependências e assim o próprio Mockito trata de criar as instâncias
- Devemos também indicar ao JUNit que iremos usar o Mockito através da anotação @RunWith com o parâmetro MockitoJUnitRunner.class

## Slide 62
- Vamos o repetir os testes da classe TesteInimigo utilizando o Mockito.
- Observe como o Mockito irá facilitar a criação desses objetos mock simplesmente com a anotação @Mock
- Não será necessário criar outras classes apenas para essa função

## Slide 63
- E para verificar retorno de valores?
- Usamos o mockito para configurar o comportamento das nossas dependências que estão mockadas!
- Usamos o método when(metódo).thenReturn(o que quero)

## Slide 64
- Considere a nova classe TesteBuscaInimigo
- Configuramos como a variável mockada irá se comportar

## Slide 65

## Slide 66
- O framework mockito possui muitas outras funções.
- Verifique a documentação de acordo com a necessidade!

## Slide 67
- Definições!

## Slide 68
- Teste Baseado em Estado
- Verifica se o código devolve o resultado esperado. Isto é, se houve mudança de estado.

## Slide 69
- Teste Baseado em Estado
- Se a classe em questão for um POJO com apenas getters e setters não há necessidade de teste de unidade (Inimigo.java)
- Se o estado dessa classe pode ser alterado por outras classes, as outras classes que serão testadas, e o getter/construtor do POJO será invocado também.

## Slide 70
- Teste Baseado em Interação
- Verifica se a classe chamou algum método

## Slide 71
- Na maioria dos casos, fazemos teste baseado no estado da classe. Para testar a classe BuscaInimigo, houve interações com outras classes. Porém o objetivo foi verificar se uma instância de Inimigo retornou corretamente.

## Slide 72
- Quando não fazer mock!

## Slide 73
- Não mockar POJOs (classes que apenas mantém estado)
- Não mockar códigos de terceiros (não temos controle sobre o comportamento)
- Não mockar tudo 

## Slide 74
- Referência
- Capítulo 8 do livro Engenharia de Software Moderna
- Item 8.6 – Teste Mock
- https://engsoftmoderna.info/cap8.html