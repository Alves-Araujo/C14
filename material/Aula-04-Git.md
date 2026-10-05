# Aula-04-Git.pptx


## Slide 1
- C14 – Engenharia de Software Controle de Versão com Git
- Prof. Christopher Lima
- christopher@inatel.br

## Slide 2
- Já sabemos que software é desenvolvido em equipe
- GTA V teve mais de 1000 pessoas envolvidas 😱

## Slide 3
- Como a equipe irá compartilhar o projeto?
- Pen drive? 🤢 E-mail? 🤢

## Slide 4
- E controlar a versão?
- Planilhas? 🤢

## Slide 5
- UMA pessoa escrevendo um documento já é problemático suficiente controlar a versão
- Fonte: Google Imagens

## Slide 6
- Imagine uma equipe gigantes...

## Slide 7
- Quais os dois problemas anteriores?
- Manter a versão
- Compartilhar os documentos

## Slide 8
- Um Sistema de Controle de Versões oferece uma solução para os problemas anteriores
- Repositório (compartilhado) para armazenar a versão mais recente do código
- Permite recuperar versões mais antigas (versionamento)

## Slide 9
- Surgiu nos anos 70
- Desenvolvido para o UNIX

## Slide 10
- Outros sistemas mais antigos
- Anos 80
- Anos 90

## Slide 11
- São sistemas centralizados e baseado em arquitetura cliente/servidor
- Único servidor com repositório e o sistema de controle de versão.
- Clientes acessam o servidor para obterem a versão mais recente.
- Clientes atualizam o servidor com o commit.

## Slide 12
- Inícios dos anos 2000 surgiram os Sistemas de Controle de Versões Distribuídos (DVCS)
- Cada cliente possui um repositório local completo
- Na teoria os clientes (peers) são funcionalmente equivalentes.
- Na prática existe uma máquina principal com uma versão de referência do código fonte.
- Repositório Central
- Clientes podem trabalhar de forma independente e off-line realizando commits no repositório local

## Slide 13
- Como sincronizar com o repositório central?
- push (enviar para o repositório central)
- pull (atualizar o repositório local)

## Slide 14
- Vantagens do DVCS (Distributed Version Control System)
- Trabalhar Offline
- A maioria das operações são mais rápidas, pois podem ser feitas localmente.
- As operações de commit são realizadas com mais frequência.

## Slide 15
- Multirepos vs Monorepos
- Um repositório por projeto - Multirepos

## Slide 16
- Multirepos vs Monorepos
- Um repositório com vários projetos- Monorepo

## Slide 17
- Monorepos
- Multirepos
- Multirepos vs Monorepos

## Slide 18
- Monorepos
- Reutilização e compartilhamento de código.
- Menor barreira de entrada.
- Necessário baixar todo código.

## Slide 19
- Git – DVCS
- Criado para gerenciar o Linux
- Código Aberto

## Slide 20
- GitHub – Serviço de Hospedagem
- Utiliza Git como DVCS
- Corporações podem contratar o GitHub para manter um repositório do tipo Git

## Slide 21
- Outros serviços de hospedagem com Git

## Slide 22
- Git
- Armazena os dados como fotografias instantâneas (snapshots)
- A cada commit uma “foto” do arquivo é tirada e uma referência é armazenada.
- Gerencia o sistema como um fluxo de fotografias
- Elas são armazenadas em um formato compacto

## Slide 23
- Git
- Maioria das operações são locais
- Podemos acessar o histórico de modificações de um arquivo localmente (outro fator que o torna rápido).
- Requer conexão apenas para sincronizar com o repositório central.

## Slide 24
- Git
- Manipula Três Áreas
- Diretório de Trabalho (Working Directory): Onde se encontra os arquivos que queremos versionar.
- O repositório propriamente dito. É um arquivo “.git” que armazena o histórico de commits
- Uma área intermediária chamada de “stage” que se armazena temporariamente os arquivos que pretendemos versionar. Esses arquivos são os “tracked files”

## Slide 25
- Git
- Desenvolvedor(a) acessa apenas o diretório de trabalho (é um diretório comum) e este pode conter diversos arquivos.
- Apenas os arquivos adicionados a área de “Stage” serão gerenciados pelo git. O comando “add” adiciona arquivo ao “Stage”
- A área de “Stage” também armazena o conteúdo dos arquivos (além de uma lista com o nome dos arquivos).
- Apenas arquivos que estão na “Stage” podem ser “commitados”.

## Slide 26
- Como começamos a usar o git?

## Slide 27
- Init
- git init
- Cria um repositório vazio
- Clone
- git clone <url>
- Copia os commits de um repositório remoto para um repo local
- Usa “git init” nos bastidores

## Slide 28
- Commit
- git commit –m “Mensagem”
- Usado para “tirar a foto” dos arquivos sendo “commitados” no repositório local.
- Devem ser realizados periodicamente, após mudanças importantes no código (nova funcionalidades, correção de bug, refatoração, etc.)
- O custo é pequeno, pois é local.
- Não se deve realizar um único commit que contempla mais de uma modificação.

## Slide 29
- Add
- git add <arquivo>
- Usado para adicionar <arquivo> a área de “stage”. Quando executado pela primeira vez, o arquivo passa a ser “tracked”. Isto é, agora o Git sabe que ele existe.
- Toda vez que um arquivo é modificado, é necessário executar o “add” novamente para que ele possa ser “commitado”

## Slide 30
- Push
- git push
- Serve para “empurar” os commits que se encontram no repositório local para o repositório central

## Slide 31
- Pull
- git pull
- Serve para “puxar” os commits que se encontram no repositório central para o repositório local.
- É boa prática sempre fazer um “git pull” para se manter sincronizado e evitar problemas no “merge”

## Slide 32
- Merge
- git merge
- Serve para “intercalar” os commits que se encontram em dois ou mais ramos diferentes.

## Slide 33
- Branch
- Desenvolvedores podem criar “branch” de um repositório.
- Isso significa que eles podem trabalhar de forma isolada do repositório principal (os commits não irão afetar)
- Posteriormente é possível unificar esse branch através do “git merge”

## Slide 34
- Git Merge -> Expectativa

## Slide 35
- Git Merge -> Realidade

## Slide 36
- Como contribuo num projeto open-source?
- Aqui entra o conceito de FORK
- Não é um comando git
- É uma operação feita na plataforma de hospedagem (GitHub, GitLab)
- Permite fazer modificações de forma independente e enviar contribuições ao projeto original por meio de pull requests

## Slide 37
- Vamos criar um repositório no GitHub para um projeto Java com duas classes
- Crie uma conta no GitHub
- https://github.com

## Slide 38
- Acesse a área com seus repositórios
- Crie um novo repositório

## Slide 39
- Dê um nome e uma descrição
- Marque com público ou privado (requer privilégios no GitHub)

## Slide 40
- Opcionalmente inicialize o README(Leia-Me)
- É boa prática!
- Será visto no Lab como importar um repo já existente
- Podemos gerar um arquivo .gitignore
- É importante verificar as licenças para adicionar a mais adequada ao seu projeto

## Slide 41
- Observe que foi gerado um arquivo “.gitignore” de um template para Java.
- As extensões que se encontram nesse arquivo serão ignoradas  pelo git.
- Observe na linha 2, que arquivos com extensão “.class” serão ignorados pelo git.
- Várias outras extensões, .jar por exemplo, também serão ignoradas.
- O desenvolvedor pode, a seu critério, modificar esse arquivo.

## Slide 42

## Slide 43
- Material Complementar
- Instalando Git for Windows:
- https://gitforwindows.org/

## Slide 44
- Implementações
- https://github.com/chrislima-inatel/C214

## Slide 45
- Referência
- Capítulo 10 do livro Engenharia de Software Moderna
- Item 10.2 – Controle de Versões
- https://engsoftmoderna.info/cap10.html
- Apêndice A: Git
- https://engsoftmoderna.info/capAp.html