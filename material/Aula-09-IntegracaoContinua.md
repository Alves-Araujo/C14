# Aula-09-IntegracaoContinua.pptx


## Slide 1
- C14 – Engenharia de Software Integração e Entrega Contínua(DevOps)
- Prof. Christopher Lima
- christopher@inatel.br

## Slide 2
- Conceitos básicos do DevOps
- Depois que o código está funcionando e devidamente testado, podemos transformar em um produto!
- 2

## Slide 3
- Conceitos básicos do DevOps
- Liberação (Release)
- Implantação (Deploy)
- Entrega (Delivery)
- 3

## Slide 4
- Conceitos básicos do DevOps
- Liberação (Release)
- Gerar uma nova versão que pode ser distribuída.
- Uma release de um produto, pode ser utilizada pelo cliente.
- 4

## Slide 5
- Conceitos básicos do DevOps
- Implantação (Deploy)
- A nova versão é instalada no servidor de produção, e fica disponível imediatamente para os clientes
- 5

## Slide 6
- Conceitos básicos do DevOps
- Implantação (Deploy)
- 6

## Slide 7
- Conceitos básicos do DevOps
- 7
- Mesmo que o software esteja pronto, esse processo não é simples!
- Tipos de Dor de Cabeça
- Estresse
- Ansiedade
- Enxaqueca
- Fazer o deploy na sexta feira

## Slide 8
- Conceitos básicos do DevOps
- O que é DevOps?
- Development (Desenvolvimento)
- +
- Operations (Operações)
- 8

## Slide 9
- Conceitos básicos do DevOps
- Devs: Equipe responsável pela identificação dos requisitos com o cliente, a análise, o projeto, a codificação, a documentação e os testes.
- Operações: Equipe responsável pela implantação em produção, pelo monitoramento e pela solução de incidentes e problemas.
- 9

## Slide 10
- Conceitos básicos do DevOps
- Devs: desenvolvedores(as), programadores(as), analistas, arquitetos(as), testers, etc.
- Operações: Administradores de rede, administradores de bancos de dados, técnicos de suporte, técnicos de infraestrutura, etc.
- 10

## Slide 11
- Conceitos básicos do DevOps
- A área de operações tomava conhecimento da nova versão (release) na véspera da sua implantação (deploy), e consequentemente.....
- 11

## Slide 12
- Conceitos básicos do DevOps
- O deploy, tradicionalmente, ocorria em uma sexta-feira.
- 12

## Slide 13
- Conceitos básicos do DevOps
- Problema clássico:
- 13
- Na minha máquina funciona
- Devs
- A infra está 100% disponível
- Ops
- Clientes

## Slide 14
- Conceitos básicos do DevOps
- Developers + Operations = DevOps
- 14

## Slide 15
- Conceitos básicos do DevOps
- DevOps: É comum descrever DevOps como um movimento que visa unificar as culturas de desenvolvimento (Dev) e de operação (Ops), visando permitir a implantação mais  ágil de um sistema.
- 15

## Slide 16
- Conceitos básicos do DevOps
- 16
- Modelo Tradicional
- Cultura DevOps
- Teste manual no final
- Teste automatizado na origem
- Tudo funciona na minha máquina
- Ambiente similar de produção
- Implantação manual
- Implantação automatizada
- Competição entre departamentos
- Colaboração multidisciplinar
- Acho que o problema foi xxx
- Fatos e dados coletados automaticamente

## Slide 17
- Divisão Tradicional – Não é     	baseada em DevOps

## Slide 18
- DevOps
- Aproximação entre as equipes

## Slide 19
- Responsabilidades do DevOps
- Antecipar problemas de desempenho, segurança, incompatibilidades com outros sistemas, etc.

## Slide 20
- Responsabilidades do DevOps
- Trabalhar nos scripts de instalação, administração e monitoramento do sistema em produção, enquanto ainda é desenvolvido.

## Slide 21
- DevOps sugere a automatização de todos os passos necessários para colocar um sistema em produção.
- Isso implica na adoção de práticas como testes automatizados.

## Slide 22
- Mas também adiciona novas práticas e ferramentas
- como Integração Contínua (Continuous Integration) e Deployment Contínuo (Continuous Deployment)

## Slide 23
- “Concluído” significa pronto para entrega. Com frequência, desenvolvedores dizem que uma nova funcionalidade está pronta. Porém, ao serem questionados se ela pode entrar em produção, surgem pequenas pendências
- Falta testar?
- Falta instalar no ambiente real?
- Então não está pronta!!

## Slide 24
- Todos são responsáveis pela entrega do software.

## Slide 25
- Integração Contínua (CI)

## Slide 26
- Tradicionalmente, os desenvolvedores criavam
- suas funcionalidade em branches.
- Sub-diretório interno e virtual, gerenciado pelo sistema de controle de versões

## Slide 27
- O branch principal é conhecido como master (Quando se usa o Git)
- Main

## Slide 28
- Cada desenvolvedor poderia implementar uma nova funcionalidade em um seu próprio branch, chamado de feature branch.
- E poderiam ficar muito tempo commitando no seu branch local

## Slide 29
- Com sua funcionalidade terminada, ela deveria ser integrada ao branch principal, isto é, o main branch.
- Feito através do git merge

## Slide 30
- Na realidade essa situação só traz conflitos e problemas, conhecidos como:
- Conflitos de integração
- Conflitos de Merge
- Merge Hell

## Slide 31
- Branching ocorrendo

## Slide 32
- O que poderia dar errado?

## Slide 33
- Ambos poderiam estar atuando no mesmo arquivo.

## Slide 34
- Cada um em sua cópia local!
- Dev1 poderia apagar uma função, que a Dev2 estava usando!
- Dev2 poderia modificar uma função de outro arquivo comum para os dois

## Slide 35
- Depois de 40 dias qual seria o resultado da integração?

## Slide 36
- A resolução de conflitos é uma tarefa manual, portanto é muito custosa!

## Slide 37
- Branches com longa duração criam “donos da funcionalidade”

## Slide 38
- Devs podem passar a utilizar suas próprias:
- convenções
- nomenclatura
- leitura e escrita de dados
- etc..

## Slide 39
- Como esse problema se escala para uma equipe maior?

## Slide 40
- Como resolver?

## Slide 41
- Integração Contínua!

## Slide 42
- É uma prática de desenvolvimento
- proposta por Extreme Programming (XP).

## Slide 43
- Se uma tarefa causa dor, não podemos deixar que
- ela acumule.
- Devemos realiza-la de forma frequente para que a dor 	seja menor!

## Slide 44
- Grandes integrações são muito dolorosas.
- Devemos  integrar o código de forma frequente, isto é,
- contínua.
- Assim, as integrações serão pequenas e irão gerar menos conflitos.

## Slide 45
- Não há consenso no que seria uma pequena integração e qual a frequência que ela deve ocorrer para ser considerada contínua!
- A recomendação é que seja ao menos uma vez ao dia.

## Slide 46
- Com CI, a master é constantemente atualizada

## Slide 47
- Como saber que está tudo certo na master?
- Através de algum Servidor de CI

## Slide 48
- Servidor de CI

## Slide 49
- Após um novo commit, o servidor de CI clona o repositório e executa uma build completa do sistema, bem como roda todos os testes.
- Após a execução do build e dos testes, o servidor notifica os contribuidores do projeto com o resultado.

## Slide 50
- O objetivo é evitar a integração de código com problemas. Quando a build falha, dizemos que ela quebrou

## Slide 51
- Com frequência, a build na máquina do desenvolvedor  é concluída com sucesso. Mas ao ser executado no servidor de CI, ela pode falhar.

## Slide 52
- Desenvolvedor esquece de realizar o commit de algum arquivo.
- Dependências incorretas
- Incompatibilidade de versão de compilador

## Slide 53
- Se o servidor de CI notificar uma build quebrada, é necessário parar tudo e providenciar a correção.
- Isso é importante porque uma build quebrada impacta o 	trabalho de toda a equipe

## Slide 54
- É possível fazer CI e usar branches?

## Slide 55
- Sim, desde que os branches sejam integrados no master frequentemente,
- via de regra, todo dia.

## Slide 56
- Assim, ao utilizar CI, é comum as empresas adotarem o desenvolvimento baseado no trunk (TBD – Trunk Based Development)
- Não existem branches para novas funcionalidades e correção de bugs

## Slide 57
- Grandes empresas costumam adotar o TBD

## Slide 58
- Minimiza esforço para integração
- Identifica problemas de integração
- Torna o desenvolvimento mais rápido

## Slide 59
- Por que um Servidor CI é tão importante?
- Uma ferramenta de build automatizada já não executa os testes?

## Slide 60
- Além disso, sempre resolvemos
- os conflitos localmente e não
- no branch master.

## Slide 61
- Ou seja, fazemos um push de
- uma build que funciona!

## Slide 62
- Exemplo:
- A Apolônia deseja integrar seu código ao main

## Slide 63
- Primeiro ela faz um git pull, de
- uma build que ela sabe está ok
- git pull

## Slide 64
- Ela resolve os conflitos
- localmente, e em seguida faz a 	build!

## Slide 65
- Finalmente ela faz um git commit
- e git push. Ela sabe que a build
- esta OK e que irá passar no Servidor CI
- git push

## Slide 66
- Sem surpresas, ela vê que a
- build passou

## Slide 67
- Qual foi o ganho real? O que realmente está aprimorado?
- A comunicação!
- Todos sabem que o repositório central possui uma build que funciona

## Slide 68
- Se a aplicação for open-source
- e o README contiver a badge, 	qualquer um que acessar o 	repositório, saberá que aquela 	build está passando

## Slide 69
- Deployment Contínuo

## Slide 70
- Com CI, sempre temos código funcionando na master.
- Funcionando Localmente
- Faz o push para o master
- Servidor CI garante a build/Testes

## Slide 71
- DevOps propõe mais uma etapa conhecida como Deployment Contínuo – CD.
- Com CD, todo novo commit pode entrar em produção.

## Slide 72
- Funcionando Localmente
- Faz o push para o master
- Servidor CI garante a build/Testes
- Disponível para o cliente (CD - Deployment)

## Slide 73
- Vantagens?

## Slide 74
- Reduz o tempo de entrega de novas funcionalidades.

## Slide 75
- Cria-se mais releases com menos funcionalidades. (Não é tudo feito na sexta-feira).

## Slide 76
- Não é necessário esperar terminar
- um longo ciclo de desenvolvimento!

## Slide 77
- As novas releases deixam de ser
- um “evento” com deadline e prazos.

## Slide 78
- A equipe de desenvolvimento
- recebe um feedback rápido do cliente

## Slide 79
- CD favorece experimentação:
- Com feedback rápido, podemos ter:
- Novas funcionalidades
- Mudanças
- Até mesmo cancelamento

## Slide 80
- Mundo Real

## Slide 81
- Facebook (2016)
- 3.5 atualizações por semana 92 linhas modificadas e ou adicionadas

## Slide 82
- Considerações Finais do Deployment Contínuo

## Slide 83
- Requer atualizações com pequenas modificações.

## Slide 84
- É necessário desenvolver a habilidade de quebrar tarefas em partes menores

## Slide 85
- Continuous Deployment é só festa?

## Slide 86
- Funciona muito bem com aplicações web...

## Slide 87
- ...mas nem tanto com outros software como: App móveis, jogos, App desktop, drivers, etc.

## Slide 88
- ...essas aplicações dependem
- dos recursos disponíveis no cliente.

## Slide 89
- Nesses sistemas, podemos utilizar e Entrega Continua
- Continuous Delivery
- Deploy fraco

## Slide 90
- Todo commit pode entrar em produção imediatamente.

## Slide 91
- Porém, existe uma figura manual que irá autorizar ou não entrar em produção.

## Slide 92
- Além de decisões técnicas, fatores comerciais podem influenciar na decisão!

## Slide 93
- Deployment – Libera nova versão para o usuário
- Delivery – Libera uma nova versão que pode ser deployada

## Slide 94
- Mundo Real
- Sistemas não-web

## Slide 95
- Google Chrome tem uma nova versão a cada 6 semanas.

## Slide 96
- IDE Eclipse tem uma nova release a cada 13 semanas

## Slide 97
- Aplicativo móvel do Facebook lança nova versão 1 vez por semana

## Slide 98
- O software não precisa estar pronto,
- ainda assim, é possível entrar em produção.

## Slide 99
- De acordo com CD, todo commit deve considerar a possibilidade de entrar em produção

## Slide 100
- Criar branch é uma solução?

## Slide 101
- Se criarmos branches perdemos a possibilidade de usar CI e TBD (trunk based development)

## Slide 102
- A solução é fazer a integração parcial, desabilitando a parte incompleta!

## Slide 103
- Feature flags

## Slide 104
- A parte desabilitada pode ser controlada por um booleano, chamado Feature Flag

## Slide 105
- Exemplo 1: Código com feature flag

## Slide 106
- Mundo Real
- Feature Flags

## Slide 107
- Estudo com 39 releases do Chrome, revelaram mais de 2400 feature flags.
- 1˚ Release: 263 flags
- 39˚ Release: 2409 flags

## Slide 108
- Feature flags podem ser mantidos no código de produção por duas razões:
- Release Canário
- Testes A/B

## Slide 109
- Release Canário

## Slide 110
- Mantém uma funcionalidade guardada por um feature flag para um conjunto pequeno de usuários.

## Slide 111
- Em caso de bugs, os prejuízos são minimizados.

## Slide 112
- Em seguida pode se ampliar a base de usuários com acesso a nova funcionalidade

## Slide 113
- Testes A/B

## Slide 114
- Libera-se duas versões de uma funcionalidade para verifica se a nova funcionalidade realmente traz valor para o sistema

## Slide 115
- Como gerenciar Feature Flags?
- Existem bibliotecas dedicadas para gerenciar feature flags.
- As flags podem ser controladas externamente ao código, através de arquivos de configuração.
- Com variável booleana.

## Slide 116
- ...então, temos:

## Slide 117
- Terminologia:
- CI/CD: Continuous Integration / Continuous Delivery/Deployment
- Pipeline: Encanamento/Canal

## Slide 118
- Pipeline: Encanamento/Canal – CI/CD Pipeline

## Slide 119
- Quais são as barreiras para adotar CI/CD?
- Inicialmente é fácil utilizar frameworks para criar automação.
- As barreiras aparecem no final do processo, quando muitas pessoas estão envolvidas.
- Exige do time muitas mudanças.

## Slide 120
- Referência
- Capítulo 10 do livro Engenharia de Software Moderna
- DevOps
- Items 10.1, 10.3 e 10.4
- https://engsoftmoderna.info/cap10.html
- Capítulo 1 do livro Jornada Ágil DevOps
- Conceitos básicos do DevOps