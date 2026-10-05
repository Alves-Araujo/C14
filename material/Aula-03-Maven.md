# Aula-03-Maven.pptx


## Slide 1
- C14 – Engenharia de Software Gerência de Dependências e Automatização da Build com Maven
- Prof. Christopher Lima
- christopher@inatel.br

## Slide 2
- Considere o desenvolvimento de um software (Qualquer)

## Slide 3

## Slide 4
- Você pode fazer o download dessas bibliotecas uma por uma.
- E se alguma é atualizada? Uma nova versão com melhorias. Será necessário fazer o download novamente.

## Slide 5
- E sua equipe? Alguém vai baixar a dependência
- nova e enviar por e-mail para os demais?

## Slide 6
- Ou pior.......vai usar pen-drive?

## Slide 7
- E pra fazer o build? Com todas essas dependências?

## Slide 8
- Build é o processo de geração do software como produto. Envolve, geralmente, as etapas de: teste automatizado, compilação e empacotamento.

## Slide 9
- Build – Fases para a construção do software:
- Programas pequenos, apenas compilar é o suficiente!
- Exemplo: “Hello World”

## Slide 10
- Software real requer  mais etapas para “construir” com qualidade.

## Slide 11
- Empacotar!
- Gerar um pacote com tudo necessário para instalação do software.
- Exemplo: Jar (Java ARchive)

## Slide 12

## Slide 13
- Tem como automatizar esse processo?

## Slide 14
- Gerenciar dependências e Automatizar a build.

## Slide 15

## Slide 16
- O Gradle é cross-platform e pode ser usado com diversas linguagens, inclusive Java.
- Ele é totalmente baseado no Maven, e compartilham várias características!
- É o padrão em projetos Android.

## Slide 17
- O Visual Studio já esta totalmente integrado com o Nuget (gerenciador de pacotes) e o MSBuild (automatização da build)

## Slide 18
- Para nosso curso (Teórica) usaremos...

## Slide 19
- Vamos explorar dois aspectos do Maven!
- Dependências!
- Fazer a build!
- Começando pelas dependências.
- Onde elas ficam?
- O que fazem?
- Como achamos?
- Como usamos?

## Slide 20
- Bem vindo ao repositório central!
- O repositório central é um local onde estão armazenados todos os artefatos (jar) de software disponibilizados pelo Maven

## Slide 21
- É onde se encontram as bibliotecas, frameworks, ferramentas e qualquer outro software que desejamos utilizar em nossas próprias soluções.
- Acessamos por https://mvnrepository.com

## Slide 22
- E como podemos buscar algum artefato nesse repositório?
- Considere que queremos utilizar uma biblioteca capaz de converter instâncias Java para objetos JSON.

## Slide 23
- Já existe uma biblioteca para isso, chamada GSON. Vamos usar o Maven para gerenciar essa dependência!
- Vamos acessar o repositório e buscar por GSON

## Slide 24
- Normalmente escolhemos a última versão. A menos que exista alguma restrição de compatibilidade com o seu projeto
- Nesse exemplo vamos usar a versão 2.8.6 da biblioteca GSON

## Slide 25
- Assim que clicarmos na versão desejada, aparecem as opções para incluirmos a biblioteca no nosso projeto! Observe que podemos clicar na aba Gradle, e também outras ferramentas de build automatizada.
- Para o Maven, ele nos mostra um XML.
- Mas o que faremos com isso?
- O que é esse XML?

## Slide 26
- Vamos entender como o Maven funciona!

## Slide 27
- Toda a configuração do Maven é feita através de um único arquivo chamado pom.xml
- POM -> Project Object Model
- Nesse arquivo iremos definir tudo que precisamos que o Maven cuide para a build automatizada do nosso projeto. Inclusive a gerência das dependências

## Slide 28
- Podemos configurar:
- As dependências (outros software)
- O nome do jar
- O tipo de empacotamento (jar, war)
- Escopo das dependências (algumas podem ser necessárias apenas para teste)
- Executar apenas os testes
- ...

## Slide 29
- O arquivo pom.xml mais simples possível
- possui no mínimo 3 informações
- groupId -> Identificação da empresa, ou grupo de projetos. Segue a convenção para nomear pacotes em Java
- artifactId -> Identificação do projeto
- version -> Versão do projeto
- O groupId + artifactId deve fornecer um nome global único para seu projeto!

## Slide 30
- Onde iremos colocar as dependências nesse arquivo pom?
- Colocaremos nossas dependências
- Colocaremos as instruções para o build (compilação, empacotamento, etc..)

## Slide 31
- Vamos resgatar a dependência do GSON que vimos no repositório central do Maven
- Vamos colocá-la no pom

## Slide 32
- Onde iremos colocar as nossas dependências nesse arquivo pom?
- E agora? O que o Maven faz?
- Colocamos dentro da tag <dependencies> (plural).
- Cada dependência ficará na sua própria tag <dependency>

## Slide 33
- Com a dependência no pom, o Maven sabe que necessita baixar a biblioteca GSON para nosso projeto. Ele irá buscar essa dependência (Jar do GSON) no repositório central do maven!

## Slide 34
- Observe que o XML que colocamos não é a biblioteca GSON propriamente dita. O que ele representa são instruções para o Maven, de fato, fazer o download da biblioteca para nós!
- Isso é a gerência de dependências!

## Slide 35
- O Maven cria um repositório local e coloca todas as dependências antes de ir buscar no repositório central.
- Assim, o Maven busca a dependência primeiro no repositório local. Caso não encontre, então ele busca no repositório central (remoto).

## Slide 36
- O Maven utiliza o conceito de convention over configuration. Isto é, se seguirmos a convenção não precisamos de muitas configurações

## Slide 37
- Como convenção, o Maven possui uma estrutura de diretórios para colocarmos nossas classes Java
- src/main/java
- src/main/resources
- src/test/java
- src/test/resources
- Os “resources” podem
- ser arquivos de configurações:
- log4j (Logger)
- persistence (JPA)
- ...
- Colocaremos nosso código principal
- Colocaremos nosso código de teste

## Slide 38
- É assim que usamos o Maven para gerenciar as dependências!

## Slide 39
- E a build?

## Slide 40
- Sem nenhuma configuração adicional, com o comando: 	mvn package, o Maven irá:
- Compilar o projeto
- Executar os testes de unidade (que estiverem em src/main/test)
- Gerar o jar (e colocar no diretório target, mas não será um executável)
- O comando deve ser executado na raiz

## Slide 41
- O Maven possui integração com diversas IDEs e editor de texto para facilitar ainda mais seu uso.

## Slide 42
- Mas nada impede de utilizar o terminal
- Durante o curso faremos uma abordagem híbrida

## Slide 43
- Vamos criar um programa capaz de converter instâncias de músicas em JSON com os campos nome e duração.

## Slide 44
- JSON gerado!

## Slide 45

## Slide 46
- Material Complementar
- Instalando Maven no Windows:
- Tutorial: https://mkyong.com/maven/how-to-install-maven-in-windows/
- Necessário configurar JAVA_HOME e MAVEN_HOME
- Instalando no Mac
- brew install maven
- Instalando no Linux (Ubuntu/Debian)
- apt-get install maven

## Slide 47
- Implementações
- https://github.com/chrislima-inatel/C214