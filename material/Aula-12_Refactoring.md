# Aula-12_Refactoring.pptx


## Slide 1
- C14 - Refactoring
- Prof. Christopher Lima
- christopher@inatel.br
- 1

## Slide 2
- Refactoring
- Agora que já sabemos como criar um produto de software...
- Como vamos modificar esse produto?
- Modificar quer dizer: facilitar o entendimento e/ou evoluir o produto de software!
- 2
- Refatorar (Refactoring)

## Slide 3
- Refactoring
- Sabemos que todo produto de SW precisa ser testado!
- Precisamos também manter o produto -> manutenção!
- Quando um BUG é detectado
- Manutenção corretiva
- Quando um PO solicita uma nova feature
- Manutenção evolutiva
- Quando uma regra de negócio ou tecnologia muda
- Manutenção adaptativa
- 3

## Slide 4
- Manutenção de Software
- Preventiva: bugs latentes (não aparentes).
- Corretiva: bugs reportados por usuários
- Evolutiva: novas funcionalidades
- Adaptativa: customizações, novas versões de SO/Regras de negócio
- Refactoring: melhorias no código ou design
- 4

## Slide 5
- Refactoring
- ... o software também envelhece.
- Meir Lehman observou esse fenômeno e criou 2 leis (leis de Lehman): empíricas sobre evolução de software.
- 5

## Slide 6
- Refactoring
- (1) “Software deve ser continuamente mantido até que se torne mais vantajoso substituí-lo por um software novo.”
- (2) “Ao realizar manutenções no software, sua complexidade interna aumenta e a qualidade diminui. A não ser que um trabalho seja feito para estabilizar ou evitar tal fenômeno.”
- 6
- Refatorar (Refactoring)

## Slide 7
- Transformações de código que melhoram a manutenibilidade de um sistema mas sem afetar o seu funcionamento externo
- 7
- Refactoring

## Slide 8
- Refactoring
- Conceito tornou-se bastante popular ...
- 8
- 2018
- 2000
- 1999

## Slide 9
- Refactoring
- Refactoring = refatoração
- Não vamos traduzir… termo em inglês é muito usado
- 9

## Slide 10
- Refactoring
- 10

## Slide 11
- Catálogo de Refactorings
- Extração de Métodos
- Inline de Métodos
- Movimentação de Métodos
- Extração de Classes
- Renomeação
- Quando devo fazer um refactor?
- 11

## Slide 12
- Extração de Método
- 12

## Slide 13
- Extração de Método
- 13
- Pode-se extrair vários métodos g1, g2, ..., gn de um método f.
- Pode-se extrair o mesmo código g de vários métodos f1, f2, ..., fn.
- Objetivo principal: Eliminar duplicação de código!
- Mudanças devem ser feitas para garantir o funcionamento:
- Passar parâmetros
- Retornar variáveis
- ...

## Slide 14
- 14

## Slide 15
- Extração de Método
- 15
- Pesquisa realizada em (link) para entender a motivação para extração de método:

## Slide 16
- Inline de Método
- 16

## Slide 17
- Inline de Método
- 17
- Sentido contrário de uma extração de método.
- Um método pequeno que em termos de reúso e legibilidade proporciona pouco benefício -> Pode ser removido do sistema.
- Esse refactor é bem mais raro de acontecer e menos importante que a extração.

## Slide 18
- Movimentação de método
- 18

## Slide 19
- Movimentação de método
- 19
- Pull Up Method

## Slide 20
- Movimentação de método
- 20
- Push Down Method

## Slide 21
- Movimentação de método
- 21
- Usado para refatorar métodos implementados na classe errada.
- O método movimentado pode ter mais dependências em uma classe A do que na classe B.
- Melhora a coesão das classes.
- Diminui o acoplamento entre classes.
- Melhora a modularização de um sistema.

## Slide 22
- Extração de Classes
- 22

## Slide 23
- Dar bons nomes a variáveis é um dos problemas mais difíceis em programação!
- 23

## Slide 24
- Renomeação
- 24
- Segundo Phil Karlton, dar nome às coisas é uma parte difícil da computação.
- Refactoring pode ser utilizado para renomear elementos de código:
- Variável
- Função
- Método
- Parâmetro
- Atributo
- Classe
- ...
- Elementos podem mudar com o tempo, a escolha pode não ter sido boa, etc.

## Slide 25
- Renomeação
- 25
- ...o problema não é renomear o elemento, mas atualizar os pontos do código em que ele é referenciado.
- Se um método f é renomeado para g, todas as chamadas de f devem ser atualizadas.
- Se f for muito usado:

## Slide 26
- 26
- Renomeação é o refactoring mais popular
- Murphy-Hill, et al. How We Refactor, and How We Know It. IEEE TSE 2012.

## Slide 27
- Refactoring
- Refactoring bem sucedidos dependem da existência de testes. Principalmente testes de unidade.
- Existem 2 modos de refactoring:
- Refactoring oportunistas:
- Realizados no meio de uma tarefa de desenvolvimento.
- Refactoring planejados:
- Mudanças mais profundas, demoradas e complexas. Não vale a pena encaixar no meio de outra tarefa. São planejadas. Devem ser raros.
- 27

## Slide 28
- Refactoring automático: A própria IDE oferece o suporte para realizar refactoring:
- 28

## Slide 29
- Como saber se devo fazer um refactoring?
- Alguns indicativos podem ajudar:
- Code Smells
- Código Duplicado
- Métodos Longos
- Classes Grandes
- Feature Envy (Inveja)
- Métodos com Muitos Parâmetros
- Variáveis Globais
- Obsessão por Tipos Primitivos
- Objetos Mutáveis
- Classes de Dados
- Comentários
- 29

## Slide 30
- Antes de terminar...
- Débito Técnico
- 30

## Slide 31
- Débito Técnico
- Metáfora para explicar a importância de boas práticas e princípios de Engenharia de Software
- Proposto por Ward Cunningham (1992)
- Soluções não-ótimas de design que dificultam a manutenção e evolução de um sistema
- 31

## Slide 32
- 32

## Slide 33
- 33
- Projeto no qual TD não foi pago
- Projeto no qual TD foi sendo pago
- Speed = velocidade de implementação de novas funcionalidades

## Slide 34
- Exemplos de Débito Técnico
- Ausência de testes
- Ausência de builds automatizado
- Problemas arquiteturais
- Alto acoplamento e baixa coesão
- Ausência completa de US/UC.
- Ausência de adaptação a mudanças
- 34

## Slide 35
- 35

## Slide 36
- Refactoring
- I'm not a great programmer; I'm just a good programmer with great habits. – Kent Beck
- 36

## Slide 37
- Engenharia de Software (C14 – Indo além do código)
- Qualidade de Software
- Engenharia de Produtode Software
- Gerência de Configuração e Evolução de Software (DevOps)
- Testes unitários/Teste Mock/TDD
- Métodos Ágeis
- CI/CDGitHub Actions
- Automatização, Compilação e Gerência de Dependências.Controle de Versão – Git e GitHubProgramação

## Slide 38
- C14 - Refactoring
- Prof. Christopher Lima
- christopher@inatel.br
- 38