# Aula-05-Teste_Software.pptx


## Slide 1
- C14 – Engenharia de Software Teste de Software
- Prof. Christopher Lima
- christopher@inatel.br

## Slide 2

## Slide 3
- Software é complexo
- Sujeito a falhas e erros
- Erros podem causar desconforto, prejuízos e até mesmo catástrofes

## Slide 4
- Desconforto!
- Catástrofe
- Prejuízo

## Slide 5
- Desconforto!
- Um bug em World of Warcraft fez com que uma doença se espalhasse de forma desenfreada.
- Vários jogadores ficaram impossibilitados de jogarem.

## Slide 6
- Prejuízo!
- Em 1990 a AT&T sofre prejuízo de U$ 60 Milhões devido a uma linha de código.

## Slide 7
- Catástrofe

## Slide 8
- Testar era considerado chato. Depois de tantos problemas, as coisas mudaram!

## Slide 9
- Testar era algo manual!
- Entediante
- Cansativo
- Repetitivo
- Sujeito a erros

## Slide 10
- Os testes só ocorriam no final do projeto
- Pouco tempo pra testar
- Testers eram culpados se erros chegassem no cliente
- Estagiários e novatos eram os testers

## Slide 11

## Slide 12
- Grande parte dos testes passaram a ser automatizados

## Slide 13
- Testes são implementados enquanto as funcionalidades são desenvolvidas

## Slide 14
- Testes não são mais um instrumento exclusivo para detecção de bugs. Garantir que uma classe continuará funcionando após um bug ser corrigido em uma outra parte do sistema.

## Slide 15
- Testes são também usados como documentação para o código de produção.

## Slide 16
- Granularidade dos Testes

## Slide 17
- Teste de Sistema
- Teste de Integração
- Teste de Unidade
- Escopo dos Testes

## Slide 18
- Teste de Unidade
- São testes automatizados de pequenas unidades de código, que são testadas de forma isolada.
- Mas como definir unidade?
- Uma classes?
- Um método?
- Algumas classes?
- Normalmente uma unidade é uma classe (e todos os seus métodos).

## Slide 19
- Teste de Unidade
- É um programa que chama métodos de uma classe (sendo testada) e verifica se eles retornam os resultados esperados.
- O código de um sistema pode ser dividido em:
- Um conjunto de classes com os requisitos
- Um conjunto de classes de testes
- Lembre-se da estrutura de diretórios do Maven

## Slide 20
- Teste Mock
- Como testar uma classe que depende de outra classe que ainda não foi implementada  ou depende de acesso externo?
- Podemos usar os mock objects para “imitar” outras classes

## Slide 21
- Teste Mock
- Considere que você deseja criar instâncias de dados.
- Os dados se encontram em um servidor remoto.
- Ainda não temos a conexão com esse serviço. Mas conhecemos o JSON que é retornado

## Slide 22
- Teste Mock
- Assim, podemos “imitar” esse serviço e devolver, de forma trivial, um JSON com dados.
- Com esse retorno, podemos seguir testando a nossa classe responsável por ler o JSON e criar a instância

## Slide 23
- Teste de Integração
- Estamos interessados em testar várias classes do software, a fim de testar uma funcionalidade completa.
- Não é claro “quantas classes” devem estar integradas para se chamar “teste de integração”
- Um conceito importante é que não seu usa mais os Mocks (já queremos o sistema real)

## Slide 24
- Teste de Integração
- Alguns desenvolvedores consideram “teste de integração” apenas quando as classes testadas se encontram em pacotes diferentes

## Slide 25
- Teste Funcional
- Verifica se funciona
- Não importa a granularidade
- Muitos desenvolvedores(as)/testers usam o termo “Teste Funcional” para generalizar testes de unidade, integração, mock, e qualquer outro a nível de código.

## Slide 26
- TDD – Test Driven Development
- Técnica de desenvolvimento proposta na metodologia ágil XP (Extreme Programming)
- O código de teste é escrito antes do código da funcionalidade
- Eita!

## Slide 27
- TDD – Test Driven Development

## Slide 28
- Teste End-to-End (Ponta a ponta)
- Exemplo de teste automatizado da aplicação Overleaf com o framework Selenium.

## Slide 29

## Slide 30
- Teste de Caixa Preta
- Não é conhecida a estrutura interna
- A saída está correta?
- Entrada
- Saída

## Slide 31
- Teste de Caixa Branca
- A estrutura interna é conhecida
- A estrutura é testada também
- Entrada
- Saída

## Slide 32
- Teste de Aceitação

## Slide 33
- Teste Não-Funcional
- Uso de CPU
- É seguro?
- Uso de memória
- Tempo para executar uma operação.

## Slide 34
- Teste Exploratório.
- Sem roteiros.
- Objetivo é explorar a aplicação
- É manual.

## Slide 35
- Referência
- Capítulo 8 do livro Engenharia de Software Moderna
- https://engsoftmoderna.info/cap8.html