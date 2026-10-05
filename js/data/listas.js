/* Listas de exercícios passadas pelo professor — com gabarito comentado.
   correta = índice (0 = A). Campo `atencao` marca questões ambíguas. */
window.LISTAS = [
  {
    id: "l1",
    titulo: "Lista 1",
    tema: "Git, testes automatizados, mocks e build",
    questoes: [
      {
        pts: 5, tag: "Git",
        enunciado: "Um desenvolvedor está atuando em um arquivo <code>Lanche.java</code> e implementou algumas funcionalidades. A fim de enviar o arquivo ao repositório central, executou o comando <b>git add Lanche.java</b>. Porém, antes de executar o <b>git commit</b>, observou que faltava um recurso na classe para lidar com lanches vegetarianos. Assim, fez a modificação necessária e em seguida executou o <b>git commit</b>. Entretanto, a modificação não chegou ao repositório central. O que o desenvolvedor precisa fazer para enviar a modificação para o repositório central após o \"git commit\"?",
        opcoes: [
          "Executar \"git pull\" para trazer as alterações do repositório central e, em seguida, \"git commit\" novamente.",
          "Executar o \"git add\" para adicionar as modificações e depois executar \"git commit\" e \"git push\" para enviar o commit local para o repositório central.",
          "Excluir o arquivo \"Lanche.java\" e criar um novo com as alterações desejadas.",
          "Nada, as alterações são automaticamente enviadas para o repositório central após o \"git commit\"."
        ],
        correta: 1,
        explicacao: "O <code>git add</code> guarda no <i>stage</i> o conteúdo do arquivo <b>naquele momento</b>. A modificação feita depois do add ficou fora do stage, então não entrou no commit. E o commit é <b>local</b>: só o <code>git push</code> envia ao repositório central. Sequência: <code>add → commit → push</code>."
      },
      {
        pts: 5, tag: "Testes",
        enunciado: "Quais são algumas das vantagens do teste automatizado em comparação com o teste manual?",
        opcoes: [
          "O teste automatizado é mais barato e fácil de implementar.",
          "O teste automatizado pode ser mais eficiente para testes repetitivos e de regressão.",
          "O teste manual é mais flexível e adaptável a mudanças no software.",
          "O teste automatizado não pode ser usado para testar interfaces de usuário."
        ],
        correta: 1,
        explicacao: "A suíte automatizada pode ser executada após <b>qualquer</b> mudança, e isso é o teste de regressão. (A) é falsa porque automatizar tem custo de escrita. (C) não é vantagem do automatizado. (D) é falsa porque ferramentas como o Selenium testam interfaces (end-to-end)."
      },
      {
        pts: 2, tag: "Build",
        enunciado: "Quais são algumas das etapas comuns envolvidas na automatização da build?",
        opcoes: [
          "Nenhuma etapa é necessária na automatização da build.",
          "Apenas a escrita de código-fonte.",
          "Compilação e distribuição manual de arquivos executáveis.",
          "Tarefas como compilação, teste, empacotamento e distribuição.",
          "Nenhuma das alternativas fornecidas."
        ],
        correta: 3,
        explicacao: "Build é o processo de gerar o software como produto: <b>compilar, rodar os testes automatizados e empacotar</b> (ex.: <code>.jar</code>) para distribuir. É o que o <code>mvn package</code> faz."
      },
      {
        pts: 5, tag: "Testes",
        enunciado: "O que é teste automatizado no contexto de desenvolvimento de software?",
        opcoes: [
          "É um processo de testar um software sem a necessidade de ser um desenvolvedor.",
          "É o uso de testes realizados por robôs e máquinas para garantir que o software funcione corretamente.",
          "É a prática de utilizar ferramentas e scripts para executar testes de software de forma programada e repetitiva.",
          "É a realização de testes por uma equipe de testadores manuais."
        ],
        correta: 2,
        explicacao: "São <b>programas</b> (ex.: classes JUnit) que chamam o código testado e verificam o resultado de forma programada e repetível. \"Robôs\" é pegadinha."
      },
      {
        pts: 5, tag: "Git",
        enunciado: "Qual é a importância do rastreamento de alterações em um sistema de controle de versões?",
        opcoes: [
          "Garantir que o software seja desenvolvido apenas por um único desenvolvedor.",
          "Registrar todas as modificações feitas em um projeto de software ao longo do tempo.",
          "Evitar a necessidade de backup de código-fonte.",
          "Substituir completamente versões antigas por novas."
        ],
        correta: 1,
        explicacao: "O sistema de controle de versões guarda o histórico (cada commit é uma \"foto\") e permite <b>recuperar versões antigas</b>. Por isso (D) está errada: nada é substituído para sempre."
      },
      {
        pts: 5, tag: "Mock",
        enunciado: "Em quais situações é interessante utilizar objetos mock em testes de software?",
        opcoes: [
          "Quando se deseja testar apenas a interface do usuário.",
          "Quando componentes externos, como serviços web ou bancos de dados, são lentos/custosos de usar em testes.",
          "Quando não há tempo suficiente para escrever testes automatizados.",
          "Quando se quer testar apenas o código-fonte sem simular comportamentos externos."
        ],
        correta: 1,
        explicacao: "Dependências com banco de dados ou web service podem ser <b>complexas de configurar, lentas e exigem controle do ambiente externo</b>. Também usamos mock quando a dependência ainda não foi implementada."
      },
      {
        pts: 5, tag: "Testes",
        enunciado: "Qual é a principal diferença entre teste automatizado e teste manual?",
        opcoes: [
          "O teste automatizado é mais demorado que o teste manual.",
          "O teste manual envolve a execução de testes por humanos, enquanto o teste automatizado utiliza scripts e ferramentas.",
          "O teste manual é mais preciso que o teste automatizado.",
          "O teste automatizado é geralmente usado apenas em projetos de grande escala."
        ],
        correta: 1,
        explicacao: "Teste manual é executado por pessoas e por isso é entediante, repetitivo e sujeito a erros. O automatizado é executado por scripts e ferramentas."
      },
      {
        pts: 5, tag: "Mock",
        enunciado: "O que são objetos mock no contexto de testes de software?",
        opcoes: [
          "São objetos reais que simulam interações com componentes externos.",
          "São objetos criados para simular o comportamento de componentes reais.",
          "São objetos usados apenas em testes manuais.",
          "São objetos que substituem completamente os objetos reais em produção."
        ],
        correta: 1,
        explicacao: "Definição da aula: <i>objetos simulados que \"imitam\" o comportamento de objetos reais de forma controlada</i>. (A) erra ao dizer \"reais\" e (D) erra porque mock só existe no teste, nunca em produção."
      },
      {
        pts: 5, tag: "Git",
        enunciado: "Por que um sistema de controle de versões é utilizado no desenvolvimento de software?",
        opcoes: [
          "Para melhorar a eficiência da CPU.",
          "Para evitar o uso de software proprietário.",
          "Para resolver problemas de rastreamento de alterações e backup/recuperação.",
          "Para criar automaticamente documentação de código."
        ],
        correta: 2,
        explicacao: "Os dois problemas que o controle de versões resolve: <b>manter a versão</b> (histórico e recuperação) e <b>compartilhar</b> o código com a equipe."
      },
      {
        pts: 5, tag: "Mock",
        enunciado: "Quais são alguns dos benefícios de utilizar objetos mock em testes de software?",
        opcoes: [
          "Melhorar o desempenho do software em produção.",
          "Isolar o código sendo testado, tornando os testes mais rápidos.",
          "Substituir completamente os componentes externos em produção.",
          "Reduzir a necessidade de testes de regressão."
        ],
        correta: 1,
        explicacao: "No teste de unidade a boa prática é <b>isolar</b> a classe testada. O mock troca a dependência lenta por uma resposta imediata e controlada."
      },
      {
        pts: 15, tag: "JUnit",
        enunciado: "Considere o código abaixo. É uma classe de teste para a classe <code>CarrinhoCompra</code>. Existem dois testes: um para validar a compra de dois jogos e um para validar a adição de um terceiro jogo. Marque a alternativa <b>incorreta</b>.",
        codigo: `public class CarrinhoCompraTeste {

  private CarrinhoCompra carrinho;
  private BoardGame bg1;
  private BoardGame bg2;
  private BoardGame bg3;

  @Before
  public void setUp() {
    carrinho = new CarrinhoCompra();
    bg1 = new BoardGame("Sagrada", 6, true, 150); //Sagrada custa 150
    bg2 = new BoardGame("Azul", 4, false, 100); //Azul custa 100
    bg3 = new BoardGame("Ticket to Ride", 4, false, 200); //Ticket to Ride custa 200
  }

  @Test
  public void testSomaTotalCompraDoisJogos() {
    carrinho.adiciona(bg1);
    carrinho.adiciona(bg2);
    //Verifica o valor total da compra do bg1 e bg2 deve ser 250
    assertEquals(250, carrinho.somaTotal(), 0.01);
  }

  @Test
  public void testSomaTotalCompraTresJogos() {
    carrinho.adiciona(bg3);
    //Verifica o valor total da compra adicionando tambem o bg3
    assertEquals(450, carrinho.somaTotal(), 0.01);
  }
}`,
        opcoes: [
          "O primeiro teste passará.",
          "A <i>fixture</i> está sendo criada no método <b>setUp()</b>.",
          "O teste <b>testSomaTotalCompraTresJogos()</b> assume que existe uma dependência entre os testes.",
          "A assertiva no segundo teste deveria considerar o valor 200 e não 450 para que o teste passe.",
          "A suíte de testes irá passar."
        ],
        correta: 4,
        explicacao: "O <code>@Before</code> roda antes de <b>cada</b> teste e recria um carrinho vazio, então os testes são independentes (o \"I\" do FIRST). No segundo teste o carrinho só tem o bg3, <code>somaTotal()</code> devolve 200 e o <code>assertEquals(450, …)</code> falha. A, B, C e D são verdadeiras. A <b>incorreta é a E</b>, porque a suíte não passa."
      },
      {
        pts: 5, tag: "Git",
        enunciado: "Qual é um dos principais benefícios do uso de um sistema de controle de versões no desenvolvimento de software?",
        opcoes: [
          "Aumentar a complexidade do código.",
          "Facilitar a criação de software proprietário.",
          "Melhorar a comunicação entre a equipe de desenvolvimento.",
          "Eliminar a necessidade de testes de software."
        ],
        correta: 2,
        explicacao: "O repositório central é a \"fonte da verdade\" do código e todos sabem o que mudou, quando e quem mudou. Na aula de CI o professor diz que o ganho real é <b>a comunicação</b>."
      },
      {
        pts: 5, tag: "Build",
        enunciado: "Por que é importante automatizar a build no desenvolvimento de software?",
        opcoes: [
          "Não é importante; a compilação manual é suficiente.",
          "A automatização economiza tempo e reduz erros humanos.",
          "A automatização torna o processo de desenvolvimento mais lento.",
          "A automatização não tem impacto na qualidade do software."
        ],
        correta: 1,
        explicacao: "Com muitas dependências e etapas (testar, compilar, empacotar), fazer a build à mão é lento e propenso a erro. Maven/Gradle resolvem isso."
      },
      {
        pts: 3, tag: "Build",
        enunciado: "O que é automatização da build no desenvolvimento de software?",
        opcoes: [
          "É um processo de compilação manual de código-fonte.",
          "É um processo que não está relacionado ao desenvolvimento de software.",
          "É a automação das etapas necessárias para compilar e construir um software.",
          "É a etapa final de desenvolvimento antes do lançamento do produto."
        ],
        correta: 2,
        explicacao: "Automatizar as etapas de construção do software (teste, compilação, empacotamento) com uma ferramenta, como o <code>mvn package</code>."
      },
      {
        pts: 10, tag: "Mock",
        enunciado: "Analisando a figura que mostra a classe <code>BuscaInimigo</code>, o que está acontecendo no construtor?",
        codigo: `InimigoService inimigoService;

public BuscaInimigo(InimigoService inimigoService) {
    this.inimigoService = inimigoService;
}`,
        opcoes: [
          "Gerenciamento de dependências.",
          "Teste de interface gráfica.",
          "Teste unitário.",
          "Injeção de dependência."
        ],
        correta: 3,
        explicacao: "A dependência <code>InimigoService</code> vem <b>de fora</b>, pelo construtor: é <b>injeção de dependência pelo construtor</b>. Isso permite injetar um mock no teste. \"Gerenciamento de dependências\" é o que o Maven faz com bibliotecas, e é a pegadinha da questão."
      },
      {
        pts: 5, tag: "Testes",
        enunciado: "Que benefício uma suíte de testes frequentemente executada traz para o desenvolvimento de software?",
        opcoes: [
          "Aumenta o custo do desenvolvimento.",
          "Torna os desenvolvedores menos produtivos.",
          "Ajuda a identificar erros e regressões de forma rápida, permitindo correções imediatas.",
          "Substitui completamente a necessidade de revisão de código."
        ],
        correta: 2,
        explicacao: "Esse é o teste de regressão: se algum erro foi introduzido, testes falham e <b>apontam o local com precisão</b>."
      },
      {
        pts: 5, tag: "Git",
        enunciado: "Qual é a principal diferença entre sistemas de controle de versões centralizados e distribuídos?",
        opcoes: [
          "Sistemas centralizados não permitem colaboração entre desenvolvedores.",
          "Sistemas distribuídos não têm rastreamento de alterações.",
          "Em sistemas centralizados, todos os desenvolvedores compartilham um único repositório, enquanto em sistemas distribuídos, cada desenvolvedor tem uma cópia completa do repositório.",
          "Sistemas distribuídos são mais lentos do que sistemas centralizados."
        ],
        correta: 2,
        explicacao: "Os centralizados (cliente/servidor, como CVS e SVN) têm um único servidor. No DVCS (Git) cada cliente tem um <b>repositório local completo</b>, pode trabalhar offline e a maioria das operações é <b>mais rápida</b> por ser local."
      },
      {
        pts: 5, tag: "JUnit",
        enunciado: "Por que imprimir mensagens na tela durante a execução do software não pode ser considerado um teste automatizado?",
        opcoes: [
          "Porque é uma prática obsoleta e não mais utilizada por programadores.",
          "Porque requer a intervenção manual do desenvolvedor para verificar as mensagens.",
          "Porque não fornece uma verificação objetiva e repetitiva do comportamento do software.",
          "Porque é uma técnica exclusiva de testes de regressão."
        ],
        correta: 1,
        explicacao: "Slide da Aula 06: <i>\"Mensagens na tela precisam ser validadas manualmente e depois serão apagadas. Os testes permanecerão na suíte.\"</i> Teste automatizado é <b>auto-verificável</b> (Self-checking do FIRST).",
        atencao: "A alternativa C também descreve um problema real. A resposta segue a justificativa do material, que é a validação manual."
      }
    ]
  },
  {
    id: "l2",
    titulo: "Lista 2",
    tema: "TDD e padrões para criação de testes",
    questoes: [
      {
        pts: 5, tag: "Padrões",
        enunciado: "No TDD, <i>API Definition</i> significa testar retornos triviais de métodos e/ou injetar dependências ao instanciar uma classe.",
        opcoes: ["Falso.", "Verdadeiro."],
        correta: 0,
        explicacao: "Padrão 1 (API Definition): para um <b>método</b>, forçar um retorno trivial; para uma <b>classe</b>, testar o comportamento esperado assim que o objeto é instanciado (ex.: a Pilha nasce vazia). \"Injetar dependências\" não faz parte da definição.",
        atencao: "A primeira metade da frase (retornos triviais) está certa. O erro está em \"injetar dependências\"."
      },
      {
        pts: 5, tag: "Padrões",
        enunciado: "Um teste unitário feito com TDD pode ser incrementado com diferenças. Essas diferenças devem ser colocadas no mesmo teste para que se tenha um teste complexo ao final.",
        opcoes: ["Falso.", "Verdadeiro."],
        correta: 0,
        explicacao: "Padrão 2 (Differential Test): cada diferença vira um <b>novo teste pequeno</b>. Um teste muito complexo faz perder ritmo e o feedback rápido. A complexidade surge naturalmente dos pequenos passos."
      },
      {
        pts: 10, tag: "TDD",
        enunciado: "Em relação ao desenvolvimento dirigido a testes, <b><i>Test-Driven Development</i></b> (TDD), assinale abaixo a alternativa <b>INCORRETA</b>.",
        opcoes: [
          "O TDD é uma abordagem para o desenvolvimento de programas em que se intercalam testes e desenvolvimento de código. Essencialmente, é desenvolvido um código de forma incremental, em conjunto com um teste para esse incremento.",
          "No TDD, em princípio, todo segmento de código deve ter pelo menos um teste associado, pois cada código é testado enquanto está sendo escrito.",
          "Um ambiente de testes automatizados, como o ambiente JUnit, que suporta o teste de programa Java, é essencial para o TDD.",
          "Uma das características do TDD é a dificuldade em realizar testes de regressão.",
          "Um argumento a favor do TDD é que ele ajuda os programadores a compreender o que um segmento de código supostamente deve fazer, pois, para escrever um teste, é necessário entender a que ele se destina."
        ],
        correta: 3,
        explicacao: "É o contrário: com TDD todo código nasce com teste e forma uma suíte que roda a cada mudança. Isso <b>facilita</b> a regressão."
      },
      {
        pts: 5, tag: "TDD",
        enunciado: "A prática de definir e codificar os testes a partir das regras de negócio antes mesmo de implementar a solução denomina-se:",
        opcoes: ["BDD.", "CMMI.", "DTD.", "TDD.", "Kanban."],
        correta: 3,
        explicacao: "Escrever o teste <b>antes</b> do código da funcionalidade é a definição de TDD. CMMI é modelo de maturidade, Kanban é método ágil e BDD é uma variação focada em comportamento (Given/When/Then)."
      },
      {
        pts: 5, tag: "TDD",
        enunciado: "O TDD não deve ser usado para guiar o desenvolvimento de uma aplicação. Deve ser usado somente para escrita de testes negativos e integração.",
        opcoes: ["Verdadeiro.", "Falso."],
        correta: 1,
        explicacao: "O nome já diz: desenvolvimento <b>guiado</b> por testes. O professor reforça que TDD é uma técnica que ajuda a construir a classe de produção."
      },
      {
        pts: 5, tag: "TDD",
        enunciado: "TDD é uma técnica específica do processo XP (<i>Extreme Programming</i>), portanto, só pode ser utilizada em modelos de processo ágeis de desenvolvimento de <i>software</i>.",
        opcoes: ["Verdadeiro.", "Falso."],
        correta: 1,
        explicacao: "O TDD foi <b>proposto</b> no XP, mas é uma técnica de desenvolvimento que pode ser usada em qualquer processo. O \"só pode\" torna a frase falsa."
      },
      {
        pts: 5, tag: "Padrões",
        enunciado: "Após criar um teste com TDD e utilizar o padrão 1, deve-se criar novo teste que induz um pequeno incremento no código de produção sendo criado (Padrão 2).",
        opcoes: ["Falso.", "Verdadeiro."],
        correta: 1,
        explicacao: "Definição literal do Padrão 2 (Differential Test): <i>adicione um teste que induz um pequeno incremento no código de produção sendo criado.</i>"
      },
      {
        pts: 10, tag: "Mock",
        enunciado: "É preciso construir <i>mocks</i> manuais para testar classes de terceiros, as quais não temos controle sobre o comportamento.",
        opcoes: ["Falso.", "Verdadeiro."],
        correta: 0,
        explicacao: "Há dois erros. (1) O material diz para <b>não mockar código de terceiros</b>, porque não controlamos o comportamento deles. (2) Não é preciso mock manual: frameworks como o <b>Mockito</b> criam mocks com <code>@Mock</code>."
      },
      {
        pts: 5, tag: "TDD",
        enunciado: "O ciclo do <i>TDD - Test Driven Development</i> consiste em:",
        opcoes: [
          "refatorar, executar teste unitário e implementar a funcionalidade.",
          "implementar teste unitário falho, refatorar e tornar o teste bem-sucedido.",
          "implementar a funcionalidade, executar teste unitário e refatorar.",
          "implementar a funcionalidade, refatorar e tornar o teste bem-sucedido.",
          "implementar teste unitário falho, tornar o teste bem-sucedido e refatorar."
        ],
        correta: 4,
        explicacao: "<b>Vermelho → Verde → Refatorar.</b> Primeiro o teste que falha, depois o código mínimo para passar, por último a melhoria do código."
      },
      {
        pts: 10, tag: "Padrões",
        enunciado: "Pode-se afirmar que este é um teste de caminho infeliz (ou caminho negativo) já que utiliza um <b><i>assertFalse</i></b> para realizar a verificação.",
        codigo: `@Test
public void testaRoboDesconectado() {

    RobotConnection robot = new RobotConnection();
    assertFalse(robot.isConnected());
}`,
        opcoes: ["Verdadeiro.", "Falso."],
        correta: 1,
        explicacao: "Esse é o exemplo do <b>Padrão 1 (API Definition)</b>: assim que o <code>RobotConnection</code> é instanciado, ele ainda não está conectado. Caminho infeliz seria um cenário inválido (Padrão 3, Exceptional Limit). Usar <code>assertFalse</code> não torna o teste negativo."
      },
      {
        pts: 5, tag: "Padrões",
        enunciado: "Pelo padrão 1 (<i>API Definition</i>) deve-se testar o comportamento esperado assim que o objeto é instanciado, caso o padrão seja aplicado para testar uma classe.",
        opcoes: ["Verdadeiro.", "Falso."],
        correta: 0,
        explicacao: "Exemplos do slide: o Aluno nasce vivo, o RobotConnection nasce desconectado e a Pilha nasce vazia."
      },
      {
        pts: 5, tag: "Refactoring",
        enunciado: "O processo de refatoração que faz parte do TDD deve ser focado em limpeza de código, legibilidade e manutenibilidade.",
        opcoes: ["Verdadeiro.", "Falso."],
        correta: 0,
        explicacao: "Refactoring = transformações que <b>melhoram a manutenibilidade</b> sem alterar o comportamento externo."
      },
      {
        pts: 5, tag: "TDD",
        enunciado: "Podemos citar 3 objetivos principais ao aplicar TDD em um sistema de software:<br><br><b>I</b> - Força a escrita de testes unitários.<br><b>II</b> - Favorece a escrita de classes (funcionalidade) com alta testabilidade!<br><b>III</b> - Fornece uma maneira incremental de construir testes e funcionalidade.",
        opcoes: ["Verdadeiro.", "Falso."],
        correta: 0,
        explicacao: "Os três objetivos estão corretos: escrever o teste primeiro obriga a ter teste, obriga a classe a ser testável e o desenvolvimento acontece em pequenos incrementos."
      },
      {
        pts: 10, tag: "Padrões",
        enunciado: "Um teste que utiliza o padrão 4 (Tudo funcionando junto) pode ser concebido passando, mesmo utilizando TDD. Isso acontece já que o objetivo foi integrar, e não adicionar nova funcionalidade.",
        opcoes: ["Verdadeiro.", "Falso."],
        correta: 0,
        explicacao: "Slide da Aula 08: <i>\"Nessa etapa, não é um equívoco que o teste já nasce passando. O objetivo foi integrar, e não adicionar nova funcionalidade.\"</i>"
      },
      {
        pts: 10, tag: "TDD",
        enunciado: "Considere as seguintes afirmações sobre Desenvolvimento Guiado por Testes (TDD).<br><br><b>I</b> - Uma das regras simples do TDD é que será escrito um código novo apenas se falhar um teste automatizado.<br><b>II</b> - Os padrões que podemos utilizar para criar um teste unitário com TDD são: Definição da interface, teste diferencial, teste excepcional e integração.<br><b>III</b> - Vermelho-Verde-Refatorar é o \"mantra\" que resume o ciclo geral de TDD: vermelho – escrever um pequeno teste que não funcione e que talvez nem mesmo compile inicialmente; verde – fazer rapidamente o teste funcionar, mesmo incorrendo em alguma infração necessária; refatorar – eliminar todo código \"sujo\" criado, para que apenas o teste funcione.<br><br>Marque a opção correta.",
        opcoes: ["I, II e III.", "Apenas II e III.", "Apenas I e II.", "Apenas I.", "Apenas I e III."],
        correta: 0,
        explicacao: "<b>I</b> é a regra clássica de Kent Beck. <b>II</b> são os 4 padrões da Aula 08 (API Definition, Differential, Exceptional Limit, Everything Working Together). <b>III</b> é a descrição do mantra adaptada do livro do Kent Beck: o refatorar elimina o código \"sujo\" criado só para o teste passar.",
        atencao: "A redação da III é confusa (\"para que apenas o teste funcione\"), mas segue a tradução clássica do livro de Beck."
      }
    ]
  },
  {
    id: "l3",
    titulo: "Lista 3",
    tema: "DevOps, CI/CD e pipeline",
    questoes: [
      { pts: 5, tag: "CI/CD", enunciado: "CD sugere que se integre código de forma frequente, ou seja, contínua.", opcoes: ["Falso.", "Verdadeiro."], correta: 0,
        explicacao: "Quem sugere integrar com frequência é a <b>CI</b> (Integração Contínua). O CD (Deployment/Delivery) trata de colocar cada commit em produção. Compare com a questão 6, que é a mesma frase com \"CI\"." },
      { pts: 5, tag: "CI/CD", enunciado: "É possível utilizar uma <i>feature flag</i> para impedir que código entre em produção, mesmo com um processo automático de CI/CD.", opcoes: ["Falso.", "Verdadeiro."], correta: 1,
        explicacao: "A feature flag é um booleano que <b>desabilita</b> a parte incompleta. O código vai para o main e para a produção, mas a funcionalidade fica desligada." },
      { pts: 5, tag: "CI/CD", enunciado: "Desenvolvimento baseado em <i>trunk</i> (TBD) não permite a utilização de CI/CD.", opcoes: ["Falso.", "Verdadeiro."], correta: 0,
        explicacao: "É o contrário: ao usar CI, as empresas costumam adotar o <b>TBD</b> (sem branches de funcionalidade). Criar branches longos é que atrapalha a CI." },
      { pts: 5, tag: "DevOps", enunciado: "DevOps sugere a automatização de todos os passos necessários para colocar um sistema em produção. Isso implica na adoção de práticas como testes automatizados.", opcoes: ["Falso.", "Verdadeiro."], correta: 1,
        explicacao: "Frase literal do slide 21 da Aula 09." },
      { pts: 5, tag: "DevOps", enunciado: "A cultura DevOps indica que para o desenvolvimento de software, caso o software esteja funcionando corretamente na máquina local e testes manuais sejam feitos ao final do desenvolvimento, tudo está correndo bem.", opcoes: ["Verdadeiro.", "Falso."], correta: 1,
        explicacao: "\"Na minha máquina funciona\" e \"teste manual no final\" descrevem o <b>modelo tradicional</b>. A cultura DevOps pede teste automatizado na origem e ambiente parecido com o de produção." },
      { pts: 5, tag: "CI/CD", enunciado: "CI sugere que se integre código de forma frequente, ou seja, contínua.", opcoes: ["Verdadeiro.", "Falso."], correta: 0,
        explicacao: "\"Se uma tarefa causa dor, não podemos deixar que ela acumule.\" A recomendação é integrar <b>pelo menos uma vez por dia</b>." },
      { pts: 5, tag: "DevOps", enunciado: "DevOps pode ser descrito como um movimento que visa unificar as culturas de desenvolvimento (Dev) e operações (Ops).", opcoes: ["Verdadeiro.", "Falso."], correta: 0,
        explicacao: "Definição do slide 15 da Aula 09, que completa: <i>visando permitir a implantação mais ágil de um sistema</i>." },
      { pts: 5, tag: "DevOps", enunciado: "Dentre as atribuições de um time de DevOps, pode-se mencionar:", opcoes: [
          "Não automatizar processos de <i>builds</i>.",
          "Antecipar problemas de desempenho, segurança, incompatibilidades e infraestrutura.",
          "Desenvolver testes como ponto principal da função.",
          "Antecipar problemas com o processo de desenvolvimento ágil."
        ], correta: 1,
        explicacao: "Responsabilidades do DevOps: antecipar problemas de desempenho, segurança e incompatibilidade, e trabalhar nos scripts de instalação e monitoramento <b>enquanto o sistema ainda é desenvolvido</b>." },
      { pts: 5, tag: "Pipeline", enunciado: "É possível encontrar restrições para criar um pipeline. Conhecer essas restrições é muito importante. Uma restrição que pode fazer parte da criação de um <i>pipeline</i> é a demora para criar e configurar ambientes (produção e/ou pré-produção).", opcoes: ["Falso.", "Verdadeiro."], correta: 1,
        explicacao: "As restrições clássicas do pipeline são criação de ambientes, deploy de código, preparação e execução de testes e arquitetura muito acoplada." },
      { pts: 5, tag: "DevOps", enunciado: "Instalar uma nova versão de um software em um servidor de produção e permitir a disponibilidade imediata para o cliente, é:", opcoes: [
          "<i>Release.</i>", "CI/CD com testes unitários.", "Entrega de uma nova versão de software.", "Processo de implantação (<i>Deploy</i>)."
        ], correta: 3,
        explicacao: "<b>Deploy (implantação)</b>: a nova versão é instalada no servidor de produção e fica disponível imediatamente. Já <b>Release</b> é <i>gerar</i> uma nova versão que pode ser distribuída." },
      { pts: 5, tag: "CI/CD", enunciado: "Uma das grandes vantagens da utilização de CD é que as <i>releases</i> deixam de ser um \"evento\" com <i>deadline</i> e prazos apertados na sexta-feira.", opcoes: ["Falso.", "Verdadeiro."], correta: 1,
        explicacao: "Com CD são feitas mais releases, cada uma com menos funcionalidades, e não é preciso esperar um ciclo longo." },
      { pts: 5, tag: "CI/CD", enunciado: "(ESAF) Entre as melhores práticas da Integração Contínua <u>não</u> se encontra:", opcoes: [
          "garanta que o Build seja rápido.",
          "mantenha um repositório de fontes unificado.",
          "execute os testes finais no ambiente de produção.",
          "cada modificação salva deve gerar um Build automaticamente.",
          "automatize o processo de Build."
        ], correta: 2,
        explicacao: "A boa prática (Martin Fowler) é testar em um <b>clone</b> do ambiente de produção (staging), não executar os testes finais na própria produção." },
      { pts: 5, tag: "Pipeline", enunciado: "O gatilho de um <i>pipeline</i> deve ser executado manualmente.", opcoes: ["Falso.", "Verdadeiro."], correta: 0,
        explicacao: "O gatilho é <b>automático</b>: cada commit ou push faz o servidor de CI clonar o repositório, fazer a build e rodar os testes." },
      { pts: 5, tag: "DevOps", enunciado: "Gerar uma nova versão que pode ser distribuída e utilizada pelo cliente, também conhecido como:", opcoes: [
          "<i>Release.</i>", "<i>Deploy.</i>", "<i>Delivery.</i>", "CI/CD."
        ], correta: 0,
        explicacao: "<b>Release (liberação)</b>: gerar uma nova versão que pode ser distribuída. Compare com a questão 10 (Deploy)." },
      { pts: 5, tag: "CI/CD", enunciado: "CD não favorece a experimentação já que é um processo altamente acoplado.", opcoes: ["Verdadeiro.", "Falso."], correta: 1,
        explicacao: "Slide 79 da Aula 09: <i>\"CD favorece experimentação\"</i>. Com feedback rápido dá para lançar novas funcionalidades, fazer mudanças e até cancelar." },
      { pts: 5, tag: "DevOps", enunciado: "Existem três pilares trabalhados quando se fala em DevOps. Quais são eles?", opcoes: [
          "Teste unitário, TDD e Teste Mock.", "CI e CD.", "Implantação, entrega e desenvolvimento.", "Release, Deploy e Delivery."
        ], correta: 3,
        explicacao: "Aula 09, \"Conceitos básicos do DevOps\": <b>Liberação (Release), Implantação (Deploy) e Entrega (Delivery)</b>. A alternativa C troca a liberação por \"desenvolvimento\"." },
      { pts: 5, tag: "Pipeline", enunciado: "Atacar as restrições/problemas existentes durante a criação de um <i>pipeline</i> é o mesmo que automatizar os processos.", opcoes: ["Falso.", "Verdadeiro."], correta: 1,
        explicacao: "As restrições do pipeline (criação de ambientes, deploy, testes) são atacadas principalmente <b>automatizando</b> esses processos.",
        atencao: "Esse conteúdo não está nos slides enviados (vem do livro <i>Jornada Ágil DevOps</i>). Confira com o professor." },
      { pts: 5, tag: "Pipeline", enunciado: "Uma forma de otimizar um <i>pipeline</i> é:", opcoes: [
          "Não automatizar processos.", "Aumentar o gerenciamento manual de processos.", "Reduzir o tempo de execução.", "Garantir 100% de entrega."
        ], correta: 2,
        explicacao: "Pipeline rápido significa feedback rápido, como no princípio Fast do FIRST e na regra \"garanta que o build seja rápido\"." },
      { pts: 5, tag: "DevOps", enunciado: "(CESPE / CEBRASPE) Microsserviços separa a aplicação em serviços e pode ser criada e implantada de maneira independente, o que permite executar no DevOps o continuous integration / continuous delivery (CI/CD).", opcoes: ["Falso.", "Verdadeiro."], correta: 1,
        explicacao: "Serviços independentes podem ter build, teste e deploy independentes, o que combina com CI/CD." },
      { pts: 5, tag: "Pipeline", enunciado: "Um <i>pipeline</i> permite a visão clara e automatizada do fluxo de valor.", opcoes: ["Falso.", "Verdadeiro."], correta: 1,
        explicacao: "O pipeline (\"encanamento\") mostra cada etapa do commit até a produção: build, testes, deploy." }
    ]
  }
];
