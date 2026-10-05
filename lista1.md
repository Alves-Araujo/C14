# Lista 1 (18 questões)

## 1 (5 pts)
Um desenvolvedor está atuando em um arquivo Lanche.java e implementou algumas funcionalidades. A fim de enviar o arquivo ao repositório central, executou o comando **git add Lanche.java**. Porém, antes de executar o **git commit**, observou que faltava um recurso na classe Lanche.java para lidar com lanches vegetarianos. Assim, fez a modificação necessária e em seguida executou o **git commit**. Entretanto, a modificação não chegou ao repositório central. O que o desenvolvedor precisa fazer para enviar a modificação para o repositório central após o "git commit"?
- a) Executar "git pull" para trazer as alterações do repositório central e, em seguida, "git commit" novamente.
- b) Executar o "git add" para adicionar as modificações e depois executar "git commit" e "git push" para enviar o commit local para o repositório central.
- c) Excluir o arquivo "Lanche.java" e criar um novo com as alterações desejadas.
- d) Nada, as alterações são automaticamente enviadas para o repositório central após o "git commit".

## 2 (5 pts)
Quais são algumas das vantagens do teste automatizado em comparação com o teste manual?
- a) O teste automatizado é mais barato e fácil de implementar.
- b) O teste automatizado pode ser mais eficiente para testes repetitivos e de regressão.
- c) O teste manual é mais flexível e adaptável a mudanças no software.
- d) O teste automatizado não pode ser usado para testar interfaces de usuário.

## 3 (2 pts)
Quais são algumas das etapas comuns envolvidas na automatização da build?
- a) Nenhuma etapa é necessária na automatização da build.
- b) Apenas a escrita de código-fonte.
- c) Compilação e distribuição manual de arquivos executáveis.
- d) Tarefas como compilação, teste, empacotamento e distribuição.
- e) Nenhuma das alternativas fornecidas.

## 4 (5 pts)
O que é teste automatizado no contexto de desenvolvimento de software?
- a) É um processo de testar um software sem a necessidade de ser um desenvolvedor.
- b) É o uso de testes realizados por robôs e máquinas para garantir que o software funcione corretamente.
- c) É a prática de utilizar ferramentas e scripts para executar testes de software de forma programada e repetitiva.
- d) É a realização de testes por uma equipe de testadores manuais.

## 5 (5 pts)
Qual é a importância do rastreamento de alterações em um sistema de controle de versões?
- a) Garantir que o software seja desenvolvido apenas por um único desenvolvedor.
- b) Registrar todas as modificações feitas em um projeto de software ao longo do tempo.
- c) Evitar a necessidade de backup de código-fonte.
- d) Substituir completamente versões antigas por novas.

## 6 (5 pts)
Em quais situações é interessante utilizar objetos mock em testes de software?
- a) Quando se deseja testar apenas a interface do usuário.
- b) Quando componentes externos, como serviços web ou bancos de dados, são lentos/custosos de usar em testes.
- c) Quando não há tempo suficiente para escrever testes automatizados.
- d) Quando se quer testar apenas o código-fonte sem simular comportamentos externos.

## 7 (5 pts)
Qual é a principal diferença entre teste automatizado e teste manual?
- a) O teste automatizado é mais demorado que o teste manual.
- b) O teste manual envolve a execução de testes por humanos, enquanto o teste automatizado utiliza scripts e ferramentas.
- c) O teste manual é mais preciso que o teste automatizado.
- d) O teste automatizado é geralmente usado apenas em projetos de grande escala.

## 8 (5 pts)
O que são objetos mock no contexto de testes de software?
- a) São objetos reais que simulam interações com componentes externos.
- b) São objetos criados para simular o comportamento de componentes reais.
- c) São objetos usados apenas em testes manuais.
- d) São objetos que substituem completamente os objetos reais em produção.

## 9 (5 pts)
Por que um sistema de controle de versões é utilizado no desenvolvimento de software?
- a) Para melhorar a eficiência da CPU.
- b) Para evitar o uso de software proprietário.
- c) Para resolver problemas de rastreamento de alterações e backup/recuperação.
- d) Para criar automaticamente documentação de código.

## 10 (5 pts)
Quais são alguns dos benefícios de utilizar objetos mock em testes de software?
- a) Melhorar o desempenho do software em produção.
- b) Isolar o código sendo testado, tornando os testes mais rápidos.
- c) Substituir completamente os componentes externos em produção.
- d) Reduzir a necessidade de testes de regressão.

## 11 (15 pts)
Considere o código na Figura 1. É uma classe de teste para a classe CarrinhoCompra. Existem dois testes. Um para validar a compra de dois jogos, e um para validar a adição de um terceiro jogo. Marque a alternativa **incorreta**.

```java
public class CarrinhoCompraTeste {
  private CarrinhoCompra carrinho;
  private BoardGame bg1;
  private BoardGame bg2;
  private BoardGame bg3;

  @Before
  public void setUp() {
    carrinho = new CarrinhoCompra();
    bg1 = new BoardGame("Sagrada", 6, true, 150);   // Sagrada custa 150
    bg2 = new BoardGame("Azul", 4, false, 100);     // Azul custa 100
    bg3 = new BoardGame("Ticket to Ride", 4, false, 200); // Ticket to Ride custa 200
  }
  @Test
  public void testSomaTotalCompraDoisJogos() {
    carrinho.adiciona(bg1);
    carrinho.adiciona(bg2);
    // Verifica o valor total da compra do bg1 e bg2 deve ser 250
    assertEquals(250, carrinho.somaTotal(), 0.01);
  }
  @Test
  public void testSomaTotalCompraTresJogos() {
    carrinho.adiciona(bg3);
    // Verifica o valor total da compra adicionando tambem o bg3
    assertEquals(450, carrinho.somaTotal(), 0.01);
  }
}
```
- a) O primeiro teste passará.
- b) A *fixture* está sendo criada no método setUp().
- c) O teste testSomaTotalCompraTresJogos() assume que existe uma dependência entre os testes.
- d) A assertiva no segundo teste deveria considerar o valor 200 e não 450 para que o teste passe.
- e) A suíte de testes irá passar.

## 12 (5 pts)
Qual é um dos principais benefícios do uso de um sistema de controle de versões no desenvolvimento de software?
- a) Aumentar a complexidade do código.
- b) Facilitar a criação de software proprietário.
- c) Melhorar a comunicação entre a equipe de desenvolvimento.
- d) Eliminar a necessidade de testes de software.

## 13 (5 pts)
Por que é importante automatizar a build no desenvolvimento de software?
- a) Não é importante; a compilação manual é suficiente.
- b) A automatização economiza tempo e reduz erros humanos.
- c) A automatização torna o processo de desenvolvimento mais lento.
- d) A automatização não tem impacto na qualidade do software.

## 14 (3 pts)
O que é automatização da build no desenvolvimento de software?
- a) É um processo de compilação manual de código-fonte.
- b) É um processo que não está relacionado ao desenvolvimento de software.
- c) É a automação das etapas necessárias para compilar e construir um software.
- d) É a etapa final de desenvolvimento antes do lançamento do produto.

## 15 (10 pts)
Analisando a Figura que mostra a classe BuscaInimigo, o que está acontecendo no construtor?

```java
InimigoService inimigoService;

public BuscaInimigo(InimigoService inimigoService) {
    this.inimigoService = inimigoService;
}
```
- a) Gerenciamento de dependências.
- b) Teste de interface gráfica.
- c) Teste unitário.
- d) Injeção de dependência.

## 16 (5 pts)
Que benefício uma suíte de testes frequentemente executada traz para o desenvolvimento de software?
- a) Aumenta o custo do desenvolvimento.
- b) Torna os desenvolvedores menos produtivos.
- c) Ajuda a identificar erros e regressões de forma rápida, permitindo correções imediatas.
- d) Substitui completamente a necessidade de revisão de código.

## 17 (5 pts)
Qual é a principal diferença entre sistemas de controle de versões centralizados e distribuídos?
- a) Sistemas centralizados não permitem colaboração entre desenvolvedores.
- b) Sistemas distribuídos não têm rastreamento de alterações.
- c) Em sistemas centralizados, todos os desenvolvedores compartilham um único repositório, enquanto em sistemas distribuídos, cada desenvolvedor tem uma cópia completa do repositório.
- d) Sistemas distribuídos são mais lentos do que sistemas centralizados.

## 18 (5 pts)
Por que imprimir mensagens na tela durante a execução do software não pode ser considerado um teste automatizado?
- a) Porque é uma prática obsoleta e não mais utilizada por programadores.
- b) Porque requer a intervenção manual do desenvolvedor para verificar as mensagens.
- c) Porque não fornece uma verificação objetiva e repetitiva do comportamento do software.
- d) Porque é uma técnica exclusiva de testes de regressão.
