# Aula-06-Teste-Unidade.pptx


## Slide 1
- C14 – Engenharia de Software Teste de Unidade
- Prof. Christopher Lima
- christopher@inatel.br

## Slide 2
- Testes automatizados
- 2

## Slide 3
- 3

## Slide 4
- Testes automatizados – Anti-padrão
- 4

## Slide 5
- Testes automatizados - Escopo
- 5

## Slide 6
- São testes automatizados de pequenas unidades de código, que são testadas de forma isolada.

## Slide 7
- Como você vai definir a sua unidade?
- Uma classe?
- Um método?
- Um pacote?
- Depende do seu time!

## Slide 8
- Por padrão, adota-se uma classe como a unidade!
- Todos os seus métodos fazem parte dessa unidade

## Slide 9
- É um programa!
- Teste de unidade são escritos por programadores!

## Slide 10
- A classe C1 possui duas classes de testes, T1 e T2
- A classe C2 não possui classes de testes
- As classes C3 e C4  possuem, ambas, uma classe de teste

## Slide 11
- Normalmente as classes ficam divididas em dois pacotes:
- Funcionalidade (main)
- Teste (test)

## Slide 12
- São implementados por frameworks de teste

## Slide 13
- Kent Beck
- Erich Gamma

## Slide 14
- Testar uma Pilha

## Slide 15
- Pilha (Stack) - Revisão
- A Pilha é uma estrutura de dados do tipo LIFO (Last In First Out). O último que entra é o primeiro a sair.
- Podemos fazer as seguintes operações na pilha:
- Empilhar um elemento no topo (push)
- Desempilhar em elemento do topo (pop)
- Olhar o elemento do topo
- Verificar se está vazia
- Observe que toda a manipulação é feita no topo da pilha.

## Slide 16
- Pilha (Stack) - Revisão
- 23
- Push
- Topo
- 23
- Push
- Topo
- 13
- 23
- Push
- 13
- Topo
- 3
- 23
- Pop
- 13
- Topo

## Slide 17
- Verifica se a pilha está vazia!
- Faz o push na Pilha
- Faz o pop na Pilha. Caso esteja vazia, lança uma Exception
- ArrayList para armazenar os elementos

## Slide 18
- Seguindo a convenção do Maven, essa classe ficará no diretório src/main/java

## Slide 19
- Como vamos testar a classe Pilha?

## Slide 20
- De forma automatizada!

## Slide 21
- Por convenção, a classe de teste tem o mesmo nome da classe testada adicionando-se o sufixo  “Teste”.
- Pilha + Teste

## Slide 22
- Seguindo a convenção, essa classe ficará no diretório src/test/java

## Slide 23
- Os métodos de teste devem seguir as seguintes regras:
- Públicos
- Sem parâmetros
- retorno void (boa prática)
- Com prefixo “teste” (convenção)
- Anotados com @Test

## Slide 24
- Anotação @Test.
- void
- Pública
- Não recebe parâmetros
- Por convenção, o nome inicia com “teste”

## Slide 25
- O que é uma Anotação? (Annotation)

## Slide 26
- Linguagens como C# (Attribute) e Java (Annotation) oferecem um recurso para customizarmos metadados nos elementos de uma classe:
- Elementos: membros, métodos, a própria classe....
- Metadados: Dados que descrevem dados
- Considere um método. Quais os seus metadados?
- tipo de retorno, argumentos, modificadores de acesso, etc.
- Ou seja, dados que descrevem o método

## Slide 27
- Mas e o @Test?
- É um outro metadado do método
- Além dos metadados presentes na própria estrutura, ele também é um “método de teste”.

## Slide 28
- As anotações só fazem sentido para outro software capaz de processá-las.
- No nosso exemplo, o JUnit é capaz de processar a anotação @Test

## Slide 29
- ...voltando...

## Slide 30
- Para usar o @Test, precisamos importar a anotação.
- O Eclipse ajuda (Intellisense ou ctrl+shift+o)!
- Importando e usando @Test

## Slide 31
- É necessário que a dependência do JUnit esteja no projeto para o import.
- Veremos isso na parte prática!

## Slide 32
- E o método?
- Instanciar uma Pilha (de inteiros, nesse exemplo)
- O que se deseja testar (se a pilha esta vazia)
- Verifica se o teste passou (a variável vazia é true)?

## Slide 33
- O método de teste possui três partes!
- Primeiro o contexto do teste, chamado de fixture.
- Nela fazemos a inicialização e instanciação dos objetos.
- Instanciar uma Pilha é o que precisamos. Como o teste é sobre pilha vazia, não precisamos inserir nenhum valor.

## Slide 34
- O método de teste possui três partes!
- Segundo, precisamos executar o método que vamos testar e armazenar o resultado em uma variável.
- Chama o método pilhaVazia() e armazena o resultado na variável booleana “vazia”.

## Slide 35
- O método de teste possui três partes!
- Terceiro, verificamos se o teste passou/falhou.
- O JUnit oferece os “asserts” para essa validação
- Assegure que a variável “vazia” é verdadeira. assertTrue()

## Slide 36
- Tipos de assertivas do JUnit
- assertEquals(expectativa,realidade)

## Slide 37
- Expectativa = valor esperado
- Realidade = valor calculado (sendo testado)
- Assegure que o resultado é 5!

## Slide 38
- assertTrue(variável)
- Usamos no método de teste da pilha vazia
- Assegure que “variável” é true!

## Slide 39
- assertFalse(variável)
- Assegure que  “variável” é falsa!

## Slide 40
- assertSame(expectativa, realidade)

## Slide 41
- Assegura que “expectativa” é o mesmo objeto que “realidade”.
- Apontam para o mesmo lugar!
- assertSame é diferente de assertEquals

## Slide 42
- Como executamos esse teste?
- Clique com o botão direito em qualquer lugar da classe -> Run as -> JUnit Test

## Slide 43
- Uma nova aba à esquerda irá aparecer. Ela contém as informações sobre os testes
- Resultados numérico dos testes. Repare que nenhum falhou e também não houve erro de execução (são coisas diferentes)
- Detalhes de cada teste. Observe que apenas um método de teste foi executado e ele passou (está verde). O “testePilhaVazia”

## Slide 44
- Vamos falhar!

## Slide 45
- Vamos criar um método para testar se a pilha não está vazia. Mas não faremos nenhum push.
- Para esse teste, a expectativa é que a variável “vazia” seja false! Pois a pilha não deveria estar vazia

## Slide 46
- Após a execução ele falhou! Pois a variável “vazia” não está “false”.
- Houve uma falha
- Foi o teste “testePilhaPush”
- Como nunca fizemos um push na pilha, ela continua vazia. Por isso o teste falhou!

## Slide 47
- Vamos criar criar mais testes para a Pilha!
- Lembre-se de usar o Maven para gerenciar a dependência!

## Slide 48
- Acesse o Maven Central Repository, e procure JUnit
- Escolha a última versão (estamos usando o JUnit 4)

## Slide 49
- Copie o XML para o pom do seu projeto
- Observe a “tag” <scope>, informando que essa dependência é para teste. Ou seja, o JUnit não precisa ser “empacotado” no “jar”.

## Slide 50
- Definições

## Slide 51
- Teste -> Comportamento
- Método que implementa o teste
- Test Method
- São anotados com @Test (JUnit)

## Slide 52
- Fixture
- Contexto do teste
- Estado do sistema que será testado

## Slide 53
- Caso de Teste (Test Case)
- Classe com os métodos de teste
- Usualmente possuem o sufixo “Teste”

## Slide 54
- Suíte de Testes
- Conjunto de casos de teste.
- Podemos ver como todos as classes de teste dentro de src/teste/java

## Slide 55
- SUT -> System Under Test
- Sistema que está sendo testado
- Termo Genérico (não é apenas para teste de unidade)
- É importante sabermos o sistema que está sendo testado (SUT) para definirmos a melhor ferramenta para teste.

## Slide 56
- Quando criar teste de unidade?

## Slide 57
- Criar a funcionalidade primeiro (Ex: Pilha) e depois criar uma classe para testar (Ex: PilhaTeste). É uma abordagem Intuitiva.
- Cria a Pilha
- Cria o Teste para a Pilha

## Slide 58
- Outra abordagem é criar o teste primeiro e depois a funcionalidade
- Cria a Pilha
- Cria o Teste para a Pilha

## Slide 59
- TDD – Test Driven Development
- Uma das maneiras mais eficazes para garantir que haja testes automatizados confiáveis.
- “TDD – Teste primeiro + Desenvolvimento Incremental”
- TDD não é uma ferramenta.
- TDD é uma metodologia para desenvolvimento de testes.
- 59

## Slide 60
- TDD – Test Driven Development
- Vermelho: Escrever um testes que vai falhar porque não existe código.
- Verde: Escrever o código suficiente para o teste passar.
- Azul: Incrementar o desenvolvimento para melhorar a implementação feita.
- 60

## Slide 61
- TDD – Test Driven Development
- Ideal para a pessoa desenvolvedora da solução fazer testes unitários. Necessita acesso ao código fonte.
- Respostas de experimentos observados em equipes de software:
- Aumento da produtividade
- Repetibilidade.
- Precisão dos resultados.
- 61

## Slide 62
- Ao detectar um bug
- Escrever um teste que reproduz o bug
- O teste deverá falhar
- Corrigir o bug 😎
- O teste deverá passar
- A suíte ganhou um novo teste 

## Slide 63
- Ao debugar (depurar, passo-a-passo)
- É muito comum imprimirmos mensagens na tela durante o processo.

## Slide 64

## Slide 65
- Ao invés de imprimir mensagens na tela, escreva testes de unidade.
- Mensagens na tela precisam ser validadas manualmente e depois serão apagadas.
- Os testes permanecerão na suíte

## Slide 66
- Em hipótese alguma os testes devem ser executados apenas no final do projeto!
- Isso era comum na metodologia Waterfall (Cascata)
- Isso resultava em testes com
- Baixa qualidade
- Baixa cobertura
- Pode nem ser implementado

## Slide 67
- Metodologia Ágil nos encoraja a fazer testes durante todo o desenvolvimento
- O tester de uma classe precisa ser o próprio desenvolvedor.

## Slide 68
- Quais são os benefícios de testes unitários?

## Slide 69
- Encontrar bugs no início de desenvolvimento.......

## Slide 70
- .......antes de entrar em produção

## Slide 71
- Protege contra regressão de código
- Regressão ocorre se um bug for introduzido no código ao:
- Refatorar
- Corrigir outro bug
- Nova funcionalidade
- Isto é, foi introduzido um erro em uma parte do código que já funcionava.
- Regrediu!

## Slide 72
- Quando existe uma suíte de testes automatizados, o desenvolvedor pode executá-la após qualquer modificação.
- Chamamos de teste de regressão.
- Se algum erro foi introduzido no código, alguns testes irão falhar indicando o local do erro de forma precisa.

## Slide 73
- Teste Unitário é uma ótima forma de documentação.
- Analisando as classes de teste, o desenvolvedor pode compreender o que as classes testadas fazem.
- Ao se aproximar de um código novo, é boa prática que o desenvolvedor estude primeiro as classes de teste!

## Slide 74
- Testes Unitários são amplamente utilizados nas grandes empresas!

## Slide 75
- Princípios
- FIRST

## Slide 76
- FIRST
- Fast (Rápido)
- São executados com frequência, assim é importante que que sejam rápidos.
- Uma alternativa é separar a suíte de teste em dois grupos: Que executam rapidamente, e o mais lentos.
- Os mais lentos serão executados com menos frequência.

## Slide 77
- FIRST
- Independente
- A ordem de execução dos testes não deve alterar o resultado.
- Isto é, os testes não podem alterar o estado global do sistema.
- Não podem depender de outros testes.

## Slide 78
- FIRST
- Repeatable (Repetível)
- Devem ter sempre o mesmo resultado.
- Se executado N vezes, deve ter o mesmo resultado em todas as N execuções.
- Se isso não ocorrer temos testes do tipo Flaky (Intermitentes)

## Slide 79
- FIRST
- Repeatable (Repetível)
- Concorrência é o principal responsável por comportamento intermitente.

## Slide 80
- FIRST
- Self-Checking (Auto-Verificáveis)
- O resultado deve ser imediato
- O desenvolvedor não deve gastar tempo identificando o resultado dos testes
- IDEs, normalmente, oferecem componentes visuais para auxiliar a verificação dos testes (falhou/passou)

## Slide 81
- FIRST
- Timely (Quanto Antes)
- Como já visto exaustivamente, devem ser escritos o quanto antes!
- Ou até mesmo antes do antes (???)

## Slide 82
- Qual o número de assertivas por teste?

## Slide 83
- Existe uma recomendação padrão de uma assertiva por teste!

## Slide 84
- O código abaixo não é recomendado pois é menos legível.
- Além de dificultar verificar qual assertiva falhou!

## Slide 85
- Mas.....não leve ao pé da letra
- É preciso que cada desenvolvedor(a) faça a análise.
- Em várias situações, é importante termos várias assertivas!

## Slide 86
- Agora é só codar!
- Crie testes para:
- Fazer pop na pilha vazia (deve lançar a Exception)
- Verificar que um elemento foi inserido (teste do push)
- Testar o retorno do pop (elemento foi buscado corretamente)
- Testar se pop diminui tamanho da pilha

## Slide 87
- Referência
- Capítulo 8 do livro Engenharia de Software Moderna
- Item 8.2 – Teste de Unidade
- Item 8.3 – Princípios e Smells
- Item 8.4 – Cobertura de Testes
- Item 8.5 - Testabilidade
- https://engsoftmoderna.info/cap8.html

## Slide 88
- Implementações
- https://github.com/chrislima-inatel/C214