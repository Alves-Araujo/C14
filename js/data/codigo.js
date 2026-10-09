/* Treino de análise de código: toda questão traz um trecho para ler.
   Baseado nos exemplos das aulas (Pilha, BuscaInimigo, RobotConnection, elevador, carrinho).
   grupo: junit | asserts | mock | tdd | refactor | build. termo: conceito cobrado (estatística de erros). */
(() => {
  const VF = ["Verdadeiro.", "Falso."];
  const V = 0, F = 1;
  const PADROES = ["Padrão 1 – API Definition.", "Padrão 2 – Differential Test.", "Padrão 3 – Exceptional Limit.", "Padrão 4 – Everything Working Together."];
  const DI = ["Injeção pelo construtor.", "Injeção pelo setter.", "Injeção por parâmetro do método.", "Gerenciamento de dependências (Maven)."];
  const REFAT = ["Extração de método.", "Inline de método.", "Pull Up Method.", "Push Down Method.", "Renomeação."];

  window.CODIGO_QUIZ = [
    /* ---------- Fluxo do teste: @Before, independência, regras ---------- */
    { grupo: "junit", termo: "before",
      enunciado: "Considere que a classe <code>Contador</code> está correta e começa em 0. O que acontece ao rodar a suíte?",
      codigo: `public class ContadorTeste {
  private Contador c;

  @Before
  public void setUp() {
    c = new Contador(); // começa em 0
  }

  @Test
  public void testeIncrementaUmaVez() {
    c.incrementa();
    assertEquals(1, c.getValor());
  }

  @Test
  public void testeIncrementaDuasVezes() {
    c.incrementa();
    assertEquals(2, c.getValor());
  }
}`,
      opcoes: ["Os dois testes passam.", "<code>testeIncrementaUmaVez</code> passa e <code>testeIncrementaDuasVezes</code> falha.", "Os dois falham.", "Depende da ordem em que o JUnit executar os testes."], correta: 1,
      explicacao: "O <code>@Before</code> roda <b>antes de cada</b> <code>@Test</code> e cria um contador novo, em 0. No segundo teste há só um <code>incrementa()</code>, então o valor é 1, e o <code>assertEquals(2, …)</code> falha. Não depende da ordem justamente porque o estado é recriado." },
    { grupo: "junit", termo: "first",
      enunciado: "No código abaixo, o autor do <code>testeB</code> achou que ele rodaria depois do <code>testeA</code>. Qual princípio FIRST ele desrespeitou?",
      codigo: `@Before
public void setUp() {
  carrinho = new CarrinhoCompra();
}

@Test
public void testeA() {
  carrinho.adiciona(new Jogo("Azul", 100));
  assertEquals(100, carrinho.somaTotal(), 0.01);
}

@Test
public void testeB() {
  carrinho.adiciona(new Jogo("Catan", 250));
  // espera que o "Azul" do testeA ainda esteja lá
  assertEquals(350, carrinho.somaTotal(), 0.01);
}`,
      opcoes: ["Fast.", "Independent.", "Repeatable.", "Timely."], correta: 1,
      explicacao: "Um teste <b>não pode depender de outro</b> (Independent). Além disso, o <code>@Before</code> recria o carrinho, então o <code>testeB</code> encontra 250, não 350, e falha. É a mesma ideia da questão do <code>CarrinhoCompraTeste</code> da Lista 1." },
    { grupo: "junit", termo: "first",
      enunciado: "O contador agora é <code>static</code> e não há <code>@Before</code>. O que se pode afirmar?",
      codigo: `public class ContadorTeste {
  private static Contador c = new Contador(); // começa em 0

  @Test
  public void testeA() {
    c.incrementa();
    assertEquals(1, c.getValor());
  }

  @Test
  public void testeB() {
    c.incrementa();
    assertEquals(2, c.getValor());
  }
}`,
      opcoes: ["Os dois sempre passam.", "O <code>testeB</code> sempre falha.", "O resultado depende da ordem de execução, o que viola o princípio Independent.", "Não compila porque falta o <code>@Before</code>."], correta: 2,
      explicacao: "O estado é <b>compartilhado</b> entre os testes. Se o A rodar primeiro, os dois passam; se o B rodar primeiro, os dois falham. O JUnit não garante a ordem, então os testes não são independentes." },
    { grupo: "junit", termo: "fixture",
      enunciado: "Neste teste, qual trecho é a <b>fixture</b>?",
      codigo: `public class AlunoTeste {
  private Aluno aluno;

  @Before
  public void setUp() {
    aluno = new Aluno("Ana");
  }

  @Test
  public void testeAlunoNasceVivo() {
    assertTrue(aluno.isVivo());
  }
}`,
      opcoes: ["O método <code>setUp()</code>, que cria o aluno antes de cada teste.", "A linha <code>assertTrue(aluno.isVivo())</code>.", "A classe <code>AlunoTeste</code> inteira, que é a suíte.", "O método <code>isVivo()</code>, que é o SUT."], correta: 0,
      explicacao: "Fixture = o <b>contexto/estado inicial</b> do teste (objetos instanciados). Aqui ela está no <code>@Before</code>. A classe é o Test Case, e o SUT é a classe <code>Aluno</code>." },
    { grupo: "junit", termo: "regras",
      enunciado: "Quais problemas este método de teste do JUnit 4 tem?",
      codigo: `@Test
private int testeSoma(int a, int b) {
  Calculadora calc = new Calculadora();
  return calc.soma(a, b);
}`,
      opcoes: ["Nenhum, está correto.", "Apenas o nome, que deveria começar com \"test\" em inglês.", "É <code>private</code>, recebe parâmetros, não é <code>void</code> e não tem nenhuma assertiva.", "Apenas falta o <code>@Before</code>."], correta: 2,
      explicacao: "Regras: <b>public</b>, <b>sem parâmetros</b>, retorno <b>void</b>, anotado com <code>@Test</code>. E sem assert ele não verifica nada." },
    { grupo: "junit", termo: "selfcheck",
      enunciado: "Suponha que <code>soma(2, 3)</code> esteja com defeito e devolva 7. O que acontece com este teste?",
      codigo: `@Test
public void testeSoma() {
  Calculadora calc = new Calculadora();
  int r = calc.soma(2, 3);
  System.out.println("Resultado: " + r);
}`,
      opcoes: ["Falha, porque o resultado está errado.", "Passa, porque não há nenhuma assertiva; o resultado teria que ser conferido manualmente.", "Não compila.", "Lança uma exceção."], correta: 1,
      explicacao: "Sem <code>assert</code>, o teste <b>sempre passa</b> (se não lançar exceção). Mensagem na tela precisa ser validada manualmente: viola o <b>Self-checking</b>." },
    { grupo: "junit", termo: "before",
      enunciado: "Quantas vezes o método <code>setUp()</code> é executado ao rodar esta classe?",
      codigo: `public class PilhaTeste {
  private Pilha<Integer> pilha;

  @Before
  public void setUp() { pilha = new Pilha<>(); }

  @Test
  public void testePilhaVazia() { assertTrue(pilha.pilhaVazia()); }

  @Test
  public void testePush() {
    pilha.push(10);
    assertFalse(pilha.pilhaVazia());
  }

  @Test
  public void testeTamanho() {
    pilha.push(1);
    pilha.push(2);
    assertEquals(2, pilha.tamanho());
  }
}`,
      opcoes: ["1 vez.", "2 vezes.", "3 vezes.", "Nenhuma, só se for chamado."], correta: 2,
      explicacao: "O <code>@Before</code> roda <b>uma vez antes de cada</b> <code>@Test</code>. São 3 testes, logo 3 execuções." },
    { grupo: "junit", termo: "before",
      enunciado: "Quantos testes passam?",
      codigo: `@Before
public void setUp() { pilha = new Pilha<>(); }

@Test
public void testePush() {
  pilha.push(10);
  assertFalse(pilha.pilhaVazia());
}

@Test
public void testePop() {
  int valor = pilha.pop();
  assertEquals(10, valor);
}`,
      opcoes: ["Os dois passam.", "Só o <code>testePush</code>; o <code>testePop</code> encontra a pilha vazia.", "Só o <code>testePop</code>.", "Nenhum."], correta: 1,
      explicacao: "No <code>testePop</code> a pilha é <b>nova e vazia</b>: o 10 do outro teste não existe ali. O <code>pop()</code> lança exceção e o teste falha." },

    /* ---------- Asserts ---------- */
    { grupo: "asserts", termo: "assertSame",
      enunciado: "Quais linhas passam?",
      codigo: `String a = new String("C14");
String b = new String("C14");

assertEquals(a, b);   // linha 1
assertSame(a, b);     // linha 2`,
      opcoes: ["As duas.", "Só a linha 1.", "Só a linha 2.", "Nenhuma."], correta: 1,
      explicacao: "<code>assertEquals</code> compara o <b>valor</b> (\"C14\" = \"C14\"). <code>assertSame</code> exige o <b>mesmo objeto</b>, e foram criados dois com <code>new</code>." },
    { grupo: "asserts", termo: "assertSame",
      enunciado: "Quais linhas passam?",
      codigo: `Pilha<Integer> p1 = new Pilha<>();
Pilha<Integer> p2 = p1;
p2.push(5);

assertSame(p1, p2);            // linha 1
assertFalse(p1.pilhaVazia());  // linha 2`,
      opcoes: ["As duas.", "Só a linha 1.", "Só a linha 2.", "Nenhuma."], correta: 0,
      explicacao: "<code>p2 = p1</code> não cria pilha nova: as duas variáveis apontam para o <b>mesmo objeto</b>. Por isso o push em p2 aparece em p1." },
    { grupo: "asserts", termo: "assertEquals",
      enunciado: "Considerando uma pilha correta (LIFO), o que acontece?",
      codigo: `@Test
public void testePilhaComDoisElementos() {
  pilha.push(1);
  pilha.push(2);
  assertEquals(2, pilha.tamanho());   // assert 1
  int topo = pilha.pop();
  assertEquals(1, topo);              // assert 2
}`,
      opcoes: ["Passa.", "Falha no assert 1.", "Falha no assert 2, porque o pop devolve 2.", "Lança exceção de pilha vazia."], correta: 2,
      explicacao: "Pilha é <b>LIFO</b>: o último que entrou (2) é o primeiro a sair. O assert 2 espera 1 e recebe 2." },
    { grupo: "asserts", termo: "assertEquals",
      enunciado: "O que significa o terceiro parâmetro (<code>0.01</code>) no assert abaixo?",
      codigo: `@Test
public void testeSomaTotal() {
  carrinho.adiciona(new Jogo("Azul", 100));
  carrinho.adiciona(new Jogo("Catan", 250));
  assertEquals(350, carrinho.somaTotal(), 0.01);
}`,
      opcoes: ["A tolerância (delta) aceita ao comparar valores <code>double</code>.", "Um desconto de 1% aplicado na soma.", "O tempo máximo do teste, em segundos.", "O número de casas decimais impressas."], correta: 0,
      explicacao: "Números <code>double</code> podem ter pequenos erros de arredondamento. O delta diz que 349,995 ou 350,004 também contam como 350." },
    { grupo: "asserts", termo: "assertEquals",
      enunciado: "Na assinatura <code>assertEquals(esperado, real)</code>, qual chamada está na ordem correta?",
      codigo: `int resultado = calc.soma(2, 3);

assertEquals(resultado, 5);   // A
assertEquals(5, resultado);   // B`,
      opcoes: ["A.", "B.", "As duas são equivalentes e igualmente corretas.", "Nenhuma: deveria ser assertTrue."], correta: 1,
      explicacao: "Primeiro o <b>esperado</b>, depois o <b>real</b>. Os dois passam se o valor for 5, mas, se a soma estivesse errada e desse 7, a ordem A geraria a mensagem invertida \"esperado 7, mas foi 5\"." },
    { grupo: "asserts", termo: "excecao",
      enunciado: "Quando este teste <b>passa</b>?",
      codigo: `@Test(expected = PilhaVaziaException.class)
public void testePopPilhaVazia() {
  Pilha<Integer> p = new Pilha<>();
  p.pop();
}`,
      opcoes: ["Sempre, porque não tem assert.", "Quando <code>pop()</code> lança <code>PilhaVaziaException</code>.", "Quando <code>pop()</code> devolve <code>null</code>.", "Nunca, porque a pilha está vazia."], correta: 1,
      explicacao: "Com <code>expected</code>, o JUnit 4 espera aquela exceção. Se ela <b>não</b> for lançada, o teste falha." },
    { grupo: "asserts", termo: "assertEquals",
      enunciado: "\"Este teste tem duas assertivas, logo está errado: a regra é sempre uma assertiva por teste.\"",
      codigo: `@Test
public void testeBuscaSkeleton() {
  Inimigo i = busca.buscaInimigo(10);
  assertEquals("Skeleton", i.getNome());
  assertEquals(50, i.getVida());
  assertEquals("Espada", i.getArma());
}`,
      opcoes: VF, correta: F,
      explicacao: "A recomendação de uma assertiva por teste <b>não é ao pé da letra</b>. Para validar se a instância <code>Inimigo</code> foi criada corretamente, faz sentido verificar todos os campos (slide 47 da Aula 07)." },

    /* ---------- Mock e injeção de dependência ---------- */
    { grupo: "mock", termo: "di",
      enunciado: "Por que é difícil fazer um teste de <b>unidade</b> do método <code>busca()</code>?",
      codigo: `public class BuscaInimigo {
  public Inimigo busca(int id) {
    InimigoService service = new InimigoServiceRemoto();
    String json = service.buscaInimigo(id);
    return Inimigo.fromJson(json);
  }
}`,
      opcoes: ["Porque o método é público.", "Porque a dependência é criada com <code>new</code> dentro do método: está acoplada e não dá para trocá-la por um mock.", "Porque <code>Inimigo.fromJson</code> é estático.", "Não é difícil: basta rodar o teste com o servidor ligado."], correta: 1,
      explicacao: "A variável local deixa a classe <b>altamente acoplada</b> ao serviço remoto. A solução é <b>injetar</b> a dependência (construtor, setter ou parâmetro)." },
    { grupo: "mock", termo: "di",
      enunciado: "O que está acontecendo neste código?",
      codigo: `InimigoService inimigoService;

public BuscaInimigo(InimigoService inimigoService) {
  this.inimigoService = inimigoService;
}`,
      opcoes: DI, correta: 0,
      explicacao: "A dependência vem <b>de fora, pelo construtor</b>. \"Gerenciamento de dependências\" é o que o Maven faz com bibliotecas, e é a pegadinha da Lista 1." },
    { grupo: "mock", termo: "di",
      enunciado: "Que tipo de injeção de dependência é usado aqui?",
      codigo: `public class BuscaInimigo {
  private InimigoService service;

  public void setService(InimigoService service) {
    this.service = service;
  }
}`,
      opcoes: DI, correta: 1,
      explicacao: "Um método <code>set…</code> recebe a dependência: <b>injeção pelo setter</b>." },
    { grupo: "mock", termo: "di",
      enunciado: "Que tipo de injeção de dependência é usado aqui?",
      codigo: `public Inimigo busca(int id, InimigoService service) {
  return Inimigo.fromJson(service.buscaInimigo(id));
}`,
      opcoes: DI, correta: 2,
      explicacao: "A dependência chega como <b>parâmetro do próprio método</b>." },
    { grupo: "mock", termo: "mockManual",
      enunciado: "Sobre esta classe, é correto afirmar:",
      codigo: `public class InimigoServiceMock implements InimigoService {
  @Override
  public String buscaInimigo(int id) {
    return "{'nome':'Skeleton','vida':50,'arma':'Espada'}";
  }
}`,
      opcoes: ["Acessa o servidor real para buscar o inimigo.", "É um mock manual: implementa a interface e devolve um JSON fixo (hardcoded). Deve ficar no diretório de teste.", "Deve ficar em <code>src/main/java</code>, pois será usada em produção.", "É um teste de integração."], correta: 1,
      explicacao: "Mock manual = classe que <b>implementa a interface</b> com comportamento trivial. Mock só faz sentido para teste, então fica em <code>src/test/java</code>." },
    { grupo: "mock", termo: "mockito",
      enunciado: "O que este teste <b>realmente</b> verifica?",
      codigo: `@RunWith(MockitoJUnitRunner.class)
public class TesteBuscaInimigo {

  @Mock
  InimigoService service;

  @Test
  public void testeBuscaSkeleton() {
    when(service.buscaInimigo(10))
        .thenReturn("{'nome':'Skeleton','vida':50,'arma':'Espada'}");

    BuscaInimigo busca = new BuscaInimigo(service);
    Inimigo i = busca.buscaInimigo(10);

    assertEquals("Skeleton", i.getNome());
    assertEquals(50, i.getVida());
  }
}`,
      opcoes: ["Se o servidor remoto devolve o inimigo certo.", "Se, dado o JSON, a classe <code>BuscaInimigo</code> cria o <code>Inimigo</code> corretamente.", "Se o Mockito está instalado.", "Se o banco de dados tem o inimigo de id 10."], correta: 1,
      explicacao: "O servidor foi <b>substituído pelo mock</b>. O teste isola a classe e verifica só a conversão do JSON em <code>Inimigo</code> (slide 46 da Aula 07)." },
    { grupo: "mock", termo: "mockito",
      enunciado: "No teste do Mockito, o que faz a linha destacada?",
      codigo: `when(service.buscaInimigo(10))
    .thenReturn("{'nome':'Skeleton','vida':50,'arma':'Espada'}");`,
      opcoes: ["Chama o servidor real e guarda a resposta.", "Configura o mock: quando <code>buscaInimigo(10)</code> for chamado, ele devolve essa String.", "Verifica se <code>buscaInimigo(10)</code> foi chamado.", "Cria a classe <code>InimigoServiceMock</code>."], correta: 1,
      explicacao: "<code>when(...).thenReturn(...)</code> <b>configura o comportamento</b> da dependência mockada." },
    { grupo: "mock", termo: "mockito",
      enunciado: "Ao rodar este teste ocorre <code>NullPointerException</code> na linha do <code>when</code>. O que falta?",
      codigo: `public class TesteBuscaInimigo {

  @Mock
  InimigoService service;

  @Test
  public void testeBusca() {
    when(service.buscaInimigo(10)).thenReturn("{...}");
    // ...
  }
}`,
      opcoes: ["Um <code>@Before</code> vazio.", "A anotação <code>@RunWith(MockitoJUnitRunner.class)</code> na classe, para o Mockito criar os <code>@Mock</code>.", "Trocar <code>@Mock</code> por <code>@Test</code>.", "Nada, o erro é do servidor."], correta: 1,
      explicacao: "Sem o runner do Mockito, ninguém processa o <code>@Mock</code> e <code>service</code> fica <code>null</code>. Lembre também da dependência <code>mockito-core</code> no pom." },
    { grupo: "mock", termo: "interacao",
      enunciado: "Este teste é baseado em:",
      codigo: `@Test
public void testeEnviaEmailAoFinalizar() {
  pedido.finaliza();
  verify(emailService).envia("ana@inatel.br");
}`,
      opcoes: ["Estado.", "Interação.", "Aceitação.", "Integração."], correta: 1,
      explicacao: "Ele verifica se a classe <b>chamou</b> um método da dependência, e não um valor devolvido. Isso é teste baseado em <b>interação</b>." },
    { grupo: "mock", termo: "interacao",
      enunciado: "Este teste é baseado em:",
      codigo: `@Test
public void testeTotalComDesconto() {
  carrinho.adiciona(new Jogo("Azul", 100));
  carrinho.aplicaCupom("C14"); // 10%
  assertEquals(90, carrinho.total(), 0.01);
}`,
      opcoes: ["Estado.", "Interação.", "Aceitação.", "Exploratório."], correta: 0,
      explicacao: "Verifica o <b>resultado</b> devolvido: teste baseado em <b>estado</b>, o mais comum." },
    { grupo: "mock", termo: "naoMockar",
      enunciado: "O que há de errado neste teste, segundo o material?",
      codigo: `@Mock
Endereco endereco; // classe só com getters e setters

@Test
public void testeCliente() {
  when(endereco.getCidade()).thenReturn("Santa Rita");
  Cliente c = new Cliente("Ana", endereco);
  assertEquals("Santa Rita", c.getCidade());
}`,
      opcoes: ["Nada.", "Está mockando um POJO, que só mantém estado; basta criar um <code>Endereco</code> de verdade.", "Faltou o <code>verify</code>.", "Deveria usar mock manual em vez de Mockito."], correta: 1,
      explicacao: "Não se mocka <b>POJO</b>, <b>código de terceiros</b> nem <b>tudo</b>. Um objeto simples de criar não precisa de mock." },

    /* ---------- Padrões do TDD ---------- */
    { grupo: "tdd", termo: "p1",
      enunciado: "Qual padrão de criação de testes este exemplo segue?",
      codigo: `@Test
public void testaRoboDesconectado() {
  RobotConnection robot = new RobotConnection();
  assertFalse(robot.isConnected());
}`,
      opcoes: PADROES, correta: 0,
      explicacao: "Testa o comportamento <b>logo após instanciar</b>: o robô nasce desconectado. Usar <code>assertFalse</code> <b>não</b> o torna um teste negativo." },
    { grupo: "tdd", termo: "p1",
      enunciado: "Qual padrão de criação de testes este exemplo segue?",
      codigo: `@Test
public void testePilhaNasceVazia() {
  Pilha<Integer> p = new Pilha<>();
  assertTrue(p.pilhaVazia());
}`,
      opcoes: PADROES, correta: 0,
      explicacao: "A Pilha <b>nasce vazia</b>: define a API (existe um <code>pilhaVazia()</code>) e o estado inicial." },
    { grupo: "tdd", termo: "p2",
      enunciado: "O primeiro teste já existia. O segundo foi escrito em seguida. Qual padrão o segundo segue?",
      codigo: `@Test
public void testeElevadorParado() {
  assertEquals("PARADO", elevador.getEstado());
}

@Test
public void testeElevadorSobe() {
  elevador.aperta(5);
  assertEquals("SUBINDO", elevador.getEstado());
}`,
      opcoes: PADROES, correta: 1,
      explicacao: "Muda um detalhe para <b>induzir um pequeno incremento</b> no código de produção: parado → sobe → desce." },
    { grupo: "tdd", termo: "p2",
      enunciado: "Depois do teste \"pilha nasce vazia\", o desenvolvedor escreveu este. Qual padrão?",
      codigo: `@Test
public void testePushDeixaPilhaNaoVazia() {
  Pilha<Integer> p = new Pilha<>();
  p.push(10);
  assertFalse(p.pilhaVazia());
}`,
      opcoes: PADROES, correta: 1,
      explicacao: "Força o <code>pilhaVazia()</code> a devolver uma condição <b>diferente</b> (antes true, agora false): Differential Test." },
    { grupo: "tdd", termo: "p3",
      enunciado: "Qual padrão de criação de testes este exemplo segue?",
      codigo: `@Test(expected = PilhaCheiaException.class)
public void testePushPilhaCheia() {
  Pilha<Integer> p = new Pilha<>(2); // capacidade 2
  p.push(1);
  p.push(2);
  p.push(3);
}`,
      opcoes: PADROES, correta: 2,
      explicacao: "Cenário <b>inválido</b> (push na pilha cheia), protegendo a classe contra mau uso. O objetivo é tratar exceção, não criar funcionalidade." },
    { grupo: "tdd", termo: "p4",
      enunciado: "Qual padrão de criação de testes este exemplo segue?",
      codigo: `@Test
public void testeCompraComCupomEFrete() {
  carrinho.adiciona(new Jogo("Azul", 100));
  carrinho.aplicaCupom("C14");          // 10% de desconto
  carrinho.calculaFrete("37540-000");   // + 15
  assertEquals(105, carrinho.total(), 0.01);
}`,
      opcoes: PADROES, correta: 3,
      explicacao: "Combina várias funcionalidades já existentes (adicionar, cupom, frete) para testar a <b>integração</b>. Aqui não é erro o teste já nascer passando." },
    { grupo: "tdd", termo: "ciclo",
      enunciado: "A classe <code>Calculadora</code> ainda não existe. Em que fase do TDD estamos e qual o próximo passo?",
      codigo: `@Test
public void testeSoma() {
  Calculadora c = new Calculadora();
  assertEquals(5, c.soma(2, 3));
}
// Calculadora.java ainda não foi criada`,
      opcoes: ["Verde; agora refatorar.", "Vermelho; escrever o código mínimo para o teste passar.", "Refatorar; agora escrever outro teste.", "Nenhuma: no TDD o código vem antes do teste."], correta: 1,
      explicacao: "Teste escrito primeiro e falhando (nem compila) = <b>vermelho</b>. Próximo passo: <b>verde</b>, com o mínimo de código." },
    { grupo: "tdd", termo: "ciclo",
      enunciado: "Para fazer o teste <code>assertEquals(5, c.soma(2, 3))</code> passar, o desenvolvedor escreveu isto. No TDD, isso é:",
      codigo: `public int soma(int a, int b) {
  return 5;
}`,
      opcoes: ["Errado: o código precisa estar completo desde o início.", "Aceitável na fase verde (código mínimo); um próximo teste diferente, como soma(1, 1), vai forçar a generalizar.", "Uma refatoração.", "Um teste de integração."], correta: 1,
      explicacao: "Retornar um valor trivial é o <b>Padrão 1</b> para métodos. O <b>Padrão 2</b> (Differential Test) com outro cenário obriga a escrever <code>return a + b</code>." },

    /* ---------- Refactoring ---------- */
    { grupo: "refactor", termo: "extracao",
      enunciado: "Qual refactoring foi aplicado?",
      codigo: `// ANTES
void imprimeNota(Aluno a) {
  double media = (a.n1 + a.n2) / 2;
  System.out.println(a.nome + ": " + media);
}
void verificaAprovacao(Aluno a) {
  double media = (a.n1 + a.n2) / 2;
  if (media >= 60) aprova(a);
}

// DEPOIS
double media(Aluno a) {
  return (a.n1 + a.n2) / 2;
}
void imprimeNota(Aluno a) {
  System.out.println(a.nome + ": " + media(a));
}
void verificaAprovacao(Aluno a) {
  if (media(a) >= 60) aprova(a);
}`,
      opcoes: REFAT, correta: 0,
      explicacao: "O mesmo trecho estava em dois métodos e virou um método novo: <b>extração de método</b>, cujo objetivo principal é <b>eliminar duplicação</b>." },
    { grupo: "refactor", termo: "inline",
      enunciado: "Qual refactoring foi aplicado?",
      codigo: `// ANTES
boolean maiorDeIdade(int idade) {
  return idade >= 18;
}
void cadastra(int idade) {
  if (maiorDeIdade(idade)) salva();
}

// DEPOIS
void cadastra(int idade) {
  if (idade >= 18) salva();
}`,
      opcoes: REFAT, correta: 1,
      explicacao: "O corpo do método pequeno foi colocado no lugar da chamada: <b>inline</b>, o contrário da extração. É raro." },
    { grupo: "refactor", termo: "pullup",
      enunciado: "Qual refactoring foi aplicado?",
      codigo: `// ANTES
class Gato extends Animal     { void dormir() { ... } }
class Cachorro extends Animal { void dormir() { ... } }

// DEPOIS
class Animal { void dormir() { ... } }
class Gato extends Animal     { }
class Cachorro extends Animal { }`,
      opcoes: REFAT, correta: 2,
      explicacao: "O método <b>subiu</b> das subclasses para a superclasse: <b>Pull Up</b>." },
    { grupo: "refactor", termo: "pushdown",
      enunciado: "Qual refactoring foi aplicado?",
      codigo: `// ANTES
class Funcionario {
  double comissao() { ... }   // só vendedor usa
}
class Vendedor extends Funcionario { }

// DEPOIS
class Funcionario { }
class Vendedor extends Funcionario {
  double comissao() { ... }
}`,
      opcoes: REFAT, correta: 3,
      explicacao: "O método <b>desceu</b> para a única subclasse que o usa: <b>Push Down</b>." },
    { grupo: "refactor", termo: "rename",
      enunciado: "Qual refactoring foi aplicado (e é o mais popular)?",
      codigo: `// ANTES
int calc(int x) {
  return x > 100 ? x / 10 : 0;
}

// DEPOIS
int calculaDesconto(int valorCompra) {
  return valorCompra > 100 ? valorCompra / 10 : 0;
}`,
      opcoes: REFAT, correta: 4,
      explicacao: "Só mudaram os nomes: <b>renomeação</b>. O difícil é atualizar todas as referências, e a IDE faz isso automaticamente." },
    { grupo: "refactor", termo: "naoRefactor",
      enunciado: "A mudança abaixo é um refactoring?",
      codigo: `// ANTES
boolean aprovado(double media) {
  return media >= 60;
}

// DEPOIS
boolean aprovado(double media) {
  return media >= 70;
}`,
      opcoes: ["Sim, é uma extração de método.", "Sim, é uma renomeação.", "Não: o comportamento externo mudou (um aluno com 65 deixa de ser aprovado).", "Sim, porque o código ficou mais legível."], correta: 2,
      explicacao: "Refactoring melhora o código <b>sem alterar o funcionamento externo</b>. Mudar a regra de negócio é manutenção (adaptativa/evolutiva)." },

    /* ---------- Maven e Git ---------- */
    { grupo: "build", termo: "pom",
      enunciado: "O que a tag <code>&lt;scope&gt;test&lt;/scope&gt;</code> indica?",
      codigo: `<dependency>
  <groupId>junit</groupId>
  <artifactId>junit</artifactId>
  <version>4.13.2</version>
  <scope>test</scope>
</dependency>`,
      opcoes: ["Que o JUnit só é baixado quando um teste falha.", "Que a dependência é usada só nos testes e não vai para o jar.", "Que a dependência é opcional.", "Que o Maven vai testar a biblioteca antes de baixá-la."], correta: 1,
      explicacao: "O JUnit serve para rodar os testes, mas não precisa ser <b>empacotado</b> no produto final." },
    { grupo: "build", termo: "pom",
      enunciado: "Neste <code>pom.xml</code>, quais tags formam um nome globalmente único para o projeto?",
      codigo: `<project>
  <modelVersion>4.0.0</modelVersion>
  <groupId>br.inatel.c14</groupId>
  <artifactId>pilha</artifactId>
  <version>1.0</version>
</project>`,
      opcoes: ["<code>groupId</code> + <code>artifactId</code>.", "<code>modelVersion</code> + <code>version</code>.", "Apenas <code>version</code>.", "<code>project</code> + <code>version</code>."], correta: 0,
      explicacao: "O mínimo do pom é groupId, artifactId e version. <b>groupId + artifactId</b> formam o nome único, e version identifica a versão." },
    { grupo: "build", termo: "git",
      enunciado: "Qual versão de <code>Lanche.java</code> chega ao repositório central?",
      codigo: `$ git add Lanche.java
# (edita Lanche.java de novo: adiciona lanche vegetariano)
$ git commit -m "Lanche"
$ git push`,
      opcoes: ["A versão com o lanche vegetariano.", "A versão do momento do <code>git add</code>, sem a última edição.", "Nenhuma, porque o commit apaga o stage.", "As duas versões, em dois commits."], correta: 1,
      explicacao: "O stage guarda o <b>conteúdo</b> do arquivo no momento do <code>add</code>. A edição posterior ficou de fora. Seria preciso outro <code>git add</code> antes do commit." },
    { grupo: "build", termo: "git",
      enunciado: "Você rodou os comandos abaixo, mas seu colega deu <code>git pull</code> e não recebeu a mudança. Por quê?",
      codigo: `$ git add .
$ git commit -m "Nova tela de login"`,
      opcoes: ["Porque faltou o <code>git push</code>: o commit é local.", "Porque o <code>git add .</code> não adiciona arquivos novos.", "Porque o colega precisa fazer fork.", "Porque faltou o <code>git merge</code>."], correta: 0,
      explicacao: "No Git (distribuído), o <b>commit grava só no repositório local</b>. Quem envia ao central é o <code>git push</code>." },
    { grupo: "build", termo: "git",
      enunciado: "Qual é a sequência recomendada para integrar sem quebrar a build no servidor de CI?",
      codigo: `# opção A
$ git commit -m "feature" && git push && git pull

# opção B
$ git pull
# resolve conflitos localmente e roda a build/testes
$ git commit -m "feature"
$ git push`,
      opcoes: ["A.", "B.", "As duas são equivalentes.", "Nenhuma: deve-se resolver os conflitos direto no main."], correta: 1,
      explicacao: "Os conflitos são resolvidos <b>localmente</b>, e só depois da build verde se faz o push." }
  ];

  window.CODIGO_NOMES = {
    before: "@Before", first: "FIRST", fixture: "Fixture", regras: "Regras do @Test", selfcheck: "Self-checking",
    assertSame: "assertSame × Equals", assertEquals: "assertEquals", excecao: "Exceções",
    di: "Injeção de dependência", mockManual: "Mock manual", mockito: "Mockito", interacao: "Estado × Interação", naoMockar: "Quando não mockar",
    p1: "Padrão 1", p2: "Padrão 2", p3: "Padrão 3", p4: "Padrão 4", ciclo: "Ciclo do TDD",
    extracao: "Extração de método", inline: "Inline", pullup: "Pull Up", pushdown: "Push Down", rename: "Renomeação", naoRefactor: "O que é refactoring",
    pom: "pom.xml", git: "Git"
  };
})();
