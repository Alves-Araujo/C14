/* Exercícios "qual refactoring foi aplicado?" — catálogo da Aula 12:
   extração de método, inline, movimentação (outra classe, Pull Up, Push Down), extração de classe, renomeação.
   Cada exercício diz só o tipo certo; as alternativas são montadas com os tipos mais fáceis de confundir. */
(() => {
  const NOMES = {
    extracao: "Extração de método.",
    inline: "Inline de método.",
    mover: "Movimentação de método (para outra classe).",
    pullup: "Pull Up Method.",
    pushdown: "Push Down Method.",
    extClasse: "Extração de classe.",
    rename: "Renomeação.",
    naoRef: "Não é refactoring: o comportamento externo mudou."
  };
  // distratores mais parecidos com cada tipo
  const CONFUSAO = {
    extracao: ["inline", "extClasse", "mover", "rename"],
    inline: ["extracao", "pushdown", "rename", "mover"],
    mover: ["pullup", "pushdown", "extClasse", "extracao"],
    pullup: ["pushdown", "mover", "extracao", "extClasse"],
    pushdown: ["pullup", "mover", "inline", "extClasse"],
    extClasse: ["extracao", "mover", "pullup", "rename"],
    rename: ["extracao", "inline", "mover", "naoRef"],
    naoRef: ["extracao", "rename", "inline", "mover"]
  };
  const GRUPO = { extracao: "extinl", inline: "extinl", mover: "mov", pullup: "mov", pushdown: "mov", extClasse: "classe", rename: "rename", naoRef: "nao" };

  const EXERCICIOS = [
    /* ---------- Extração de método ---------- */
    { tipo: "extracao", codigo: `// ANTES
void imprimeBoleto(Pedido p) {
  System.out.println("==== LOJA C14 ====");
  System.out.println("CNPJ 00.000/0001-00");
  System.out.println("Cliente: " + p.getCliente());
  System.out.println("Total: " + p.getTotal());
}

// DEPOIS
void imprimeBoleto(Pedido p) {
  imprimeCabecalho();
  System.out.println("Cliente: " + p.getCliente());
  System.out.println("Total: " + p.getTotal());
}

void imprimeCabecalho() {
  System.out.println("==== LOJA C14 ====");
  System.out.println("CNPJ 00.000/0001-00");
}`,
      explicacao: "Um pedaço do método virou um <b>método novo</b> (<code>imprimeCabecalho</code>), chamado no lugar de onde saiu. Isso é <b>extração de método</b>." },
    { tipo: "extracao", codigo: `// ANTES
void cadastra(Usuario u) {
  if (u.email == null || !u.email.contains("@"))
    throw new IllegalArgumentException("e-mail inválido");
  repo.salva(u);
}
void atualiza(Usuario u) {
  if (u.email == null || !u.email.contains("@"))
    throw new IllegalArgumentException("e-mail inválido");
  repo.atualiza(u);
}

// DEPOIS
void validaEmail(Usuario u) {
  if (u.email == null || !u.email.contains("@"))
    throw new IllegalArgumentException("e-mail inválido");
}
void cadastra(Usuario u) {
  validaEmail(u);
  repo.salva(u);
}
void atualiza(Usuario u) {
  validaEmail(u);
  repo.atualiza(u);
}`,
      explicacao: "O <b>mesmo trecho</b> estava em dois métodos e foi extraído para um só. É o caso clássico: o objetivo principal da extração é <b>eliminar duplicação</b>." },
    { tipo: "extracao", codigo: `// ANTES
double total(Carrinho c) {
  double soma = 0;
  for (Jogo j : c.getJogos()) {
    soma += j.getPreco();
  }
  if (soma > 300) soma = soma * 0.9;
  return soma;
}

// DEPOIS
double total(Carrinho c) {
  double soma = somaPrecos(c.getJogos());
  if (soma > 300) soma = soma * 0.9;
  return soma;
}

double somaPrecos(List<Jogo> jogos) {
  double soma = 0;
  for (Jogo j : jogos) {
    soma += j.getPreco();
  }
  return soma;
}`,
      explicacao: "O laço virou o método <code>somaPrecos</code>. Repare que foi preciso <b>passar parâmetro</b> e <b>retornar a variável</b>: o slide diz que a extração pode exigir esses ajustes para manter o funcionamento." },
    { tipo: "extracao", codigo: `// ANTES
void processaPedido(Pedido p) {
  // valida
  if (p.getItens().isEmpty()) throw new PedidoVazioException();
  // calcula o total
  double t = 0;
  for (Item i : p.getItens()) t += i.getPreco();
  p.setTotal(t);
  // salva
  repo.salva(p);
}

// DEPOIS
void processaPedido(Pedido p) {
  valida(p);
  calculaTotal(p);
  repo.salva(p);
}
void valida(Pedido p) { ... }
void calculaTotal(Pedido p) { ... }`,
      explicacao: "De <b>um</b> método longo foram extraídos <b>vários</b> (g1, g2… de f). Os comentários viraram nomes de métodos, o que também resolve os code smells \"método longo\" e \"comentários\"." },
    { tipo: "extracao", codigo: `// ANTES (classe de teste)
@Test public void testeTamanho() {
  Pilha<Integer> p = new Pilha<>();
  p.push(1); p.push(2); p.push(3);
  assertEquals(3, p.tamanho());
}
@Test public void testeTopo() {
  Pilha<Integer> p = new Pilha<>();
  p.push(1); p.push(2); p.push(3);
  assertEquals(3, (int) p.topo());
}

// DEPOIS
private Pilha<Integer> pilhaCom123() {
  Pilha<Integer> p = new Pilha<>();
  p.push(1); p.push(2); p.push(3);
  return p;
}
@Test public void testeTamanho() { assertEquals(3, pilhaCom123().tamanho()); }
@Test public void testeTopo()    { assertEquals(3, (int) pilhaCom123().topo()); }`,
      explicacao: "Refactoring vale também para código de teste. A montagem repetida da pilha virou o método <code>pilhaCom123()</code>: <b>extração de método</b>." },

    /* ---------- Inline de método ---------- */
    { tipo: "inline", codigo: `// ANTES
double precoComTaxa(double preco) {
  return preco + taxa(preco);
}
double taxa(double preco) {
  return preco * 0.05;
}

// DEPOIS
double precoComTaxa(double preco) {
  return preco + preco * 0.05;
}`,
      explicacao: "O método <code>taxa</code> <b>sumiu</b> e o corpo dele foi colocado no lugar da chamada. É o <b>inline</b>, sentido contrário da extração." },
    { tipo: "inline", codigo: `// ANTES
private boolean semEstoque(Produto p) {
  return p.getQuantidade() == 0;
}
void vende(Produto p) {
  if (semEstoque(p)) throw new SemEstoqueException();
  p.baixa();
}

// DEPOIS
void vende(Produto p) {
  if (p.getQuantidade() == 0) throw new SemEstoqueException();
  p.baixa();
}`,
      explicacao: "Método pequeno, que trazia pouco benefício de reúso e legibilidade, removido e \"colado\" no lugar da chamada: <b>inline</b>. É bem mais raro que a extração." },
    { tipo: "inline", codigo: `// ANTES
class Pedido {
  double getTotal() { return calculaTotal(); }
  private double calculaTotal() { return subtotal + frete; }
}

// DEPOIS
class Pedido {
  double getTotal() { return subtotal + frete; }
}`,
      explicacao: "<code>calculaTotal</code> só repassava a conta. O corpo foi para dentro de <code>getTotal</code> e o método foi removido: <b>inline</b>. Cuidado com a direção: se o DEPOIS tivesse um método <b>a mais</b>, seria extração." },

    /* ---------- Movimentação para outra classe ---------- */
    { tipo: "mover", codigo: `// ANTES
class RelatorioPedido {
  String enderecoCompleto(Cliente c) {
    return c.getRua() + ", " + c.getNumero() + " - " + c.getCidade();
  }
}

// DEPOIS
class Cliente {
  String enderecoCompleto() {
    return rua + ", " + numero + " - " + cidade;
  }
}
class RelatorioPedido {
  // agora chama cliente.enderecoCompleto()
}`,
      explicacao: "O método estava na classe errada: só usava dados de <code>Cliente</code> (code smell <b>Feature Envy</b>). Ele foi <b>movido para outra classe</b>, que não é super nem subclasse. Isso melhora a coesão e reduz o acoplamento." },
    { tipo: "mover", codigo: `// ANTES
class Carrinho {
  List<Jogo> jogos;
  boolean jogoEhCaro(Jogo j) {
    return j.getPreco() > 200 && !j.isPromocao();
  }
}

// DEPOIS
class Jogo {
  boolean ehCaro() {
    return preco > 200 && !promocao;
  }
}
class Carrinho {
  List<Jogo> jogos;
  // usa j.ehCaro()
}`,
      explicacao: "A lógica dependia só de <code>Jogo</code>, então foi <b>movida</b> de <code>Carrinho</code> para <code>Jogo</code>. Não há herança entre as duas classes, então não é Pull Up nem Push Down." },
    { tipo: "mover", codigo: `// ANTES
class Aluno {
  List<Nota> notas;
}
class Secretaria {
  double media(Aluno a) {
    double s = 0;
    for (Nota n : a.getNotas()) s += n.getValor();
    return s / a.getNotas().size();
  }
}

// DEPOIS
class Aluno {
  List<Nota> notas;
  double media() {
    double s = 0;
    for (Nota n : notas) s += n.getValor();
    return s / notas.size();
  }
}
class Secretaria {
  // usa aluno.media()
}`,
      explicacao: "O método tinha mais dependências em <code>Aluno</code> do que em <code>Secretaria</code> (slide 21: \"o método movimentado pode ter mais dependências em uma classe A do que na classe B\"). É <b>movimentação de método</b>." },
    { tipo: "mover", codigo: `// ANTES
class BuscaInimigo {
  boolean estaVivo(Inimigo i) {
    return i.getVida() > 0;
  }
}

// DEPOIS
class Inimigo {
  boolean estaVivo() {
    return vida > 0;
  }
}`,
      explicacao: "<code>estaVivo</code> só olha a vida do inimigo, então o lugar certo é a classe <code>Inimigo</code>. O método foi <b>movido para outra classe</b>." },

    /* ---------- Pull Up / Push Down ---------- */
    { tipo: "pullup", codigo: `// ANTES
class Professor extends Pessoa {
  String getNomeCompleto() { return nome + " " + sobrenome; }
}
class Aluno extends Pessoa {
  String getNomeCompleto() { return nome + " " + sobrenome; }
}

// DEPOIS
class Pessoa {
  String getNomeCompleto() { return nome + " " + sobrenome; }
}
class Professor extends Pessoa { }
class Aluno extends Pessoa { }`,
      explicacao: "O método idêntico nas <b>subclasses subiu</b> para a <b>superclasse</b> <code>Pessoa</code>: <b>Pull Up Method</b>." },
    { tipo: "pullup", codigo: `// ANTES
class Skeleton extends Inimigo {
  void recebeDano(int d) { vida -= d; }
}
class Aranha extends Inimigo {
  void recebeDano(int d) { vida -= d; }
}
class Dragao extends Inimigo {
  void recebeDano(int d) { vida -= d; }
}

// DEPOIS
abstract class Inimigo {
  void recebeDano(int d) { vida -= d; }
}
class Skeleton extends Inimigo { }
class Aranha extends Inimigo { }
class Dragao extends Inimigo { }`,
      explicacao: "Três subclasses com o mesmo método. Ele <b>subiu</b> para <code>Inimigo</code>, a superclasse: <b>Pull Up</b>. Dica: <i>up</i> = para cima, na direção do pai." },
    { tipo: "pushdown", codigo: `// ANTES
class Veiculo {
  void abrirPortaMalas() { ... }   // moto não tem porta-malas
}
class Carro extends Veiculo { }
class Moto extends Veiculo { }

// DEPOIS
class Veiculo { }
class Carro extends Veiculo {
  void abrirPortaMalas() { ... }
}
class Moto extends Veiculo { }`,
      explicacao: "O método estava na <b>superclasse</b>, mas só fazia sentido para uma filha. Ele <b>desceu</b> para <code>Carro</code>: <b>Push Down Method</b>." },
    { tipo: "pushdown", codigo: `// ANTES
class Inimigo {
  void cuspirFogo() { ... }   // só o Dragão usa
}
class Dragao extends Inimigo { }
class Aranha extends Inimigo { }

// DEPOIS
class Inimigo { }
class Dragao extends Inimigo {
  void cuspirFogo() { ... }
}
class Aranha extends Inimigo { }`,
      explicacao: "Da superclasse para a subclasse que realmente usa: <b>Push Down</b>. Dica: <i>down</i> = para baixo, na direção do filho." },

    /* ---------- Extração de classe ---------- */
    { tipo: "extClasse", codigo: `// ANTES
class Cliente {
  String nome;
  String cpf;
  String rua;
  int numero;
  String cidade;
  String cep;
  String enderecoCompleto() { ... }
}

// DEPOIS
class Cliente {
  String nome;
  String cpf;
  Endereco endereco;
}
class Endereco {
  String rua;
  int numero;
  String cidade;
  String cep;
  String enderecoCompleto() { ... }
}`,
      explicacao: "Um <b>grupo de atributos e métodos</b> relacionados saiu de uma classe grande e formou uma <b>classe nova</b> (<code>Endereco</code>). Isso é <b>extração de classe</b>. Se fosse só um método indo para uma classe que já existe, seria movimentação." },
    { tipo: "extClasse", codigo: `// ANTES
class Jogador {
  String nome;
  int vida;
  String armaNome;
  int armaDano;
  int armaDurabilidade;
  void atacar() { ... armaDano ... }
}

// DEPOIS
class Jogador {
  String nome;
  int vida;
  Arma arma;
  void atacar() { ... arma.getDano() ... }
}
class Arma {
  String nome;
  int dano;
  int durabilidade;
}`,
      explicacao: "Os atributos <code>arma…</code> eram uma responsabilidade à parte e viraram a classe nova <code>Arma</code>: <b>extração de classe</b>. Ataca o code smell \"classes grandes\"." },
    { tipo: "extClasse", codigo: `// ANTES
class Pedido {
  List<Item> itens;
  double total() { ... }
  double freteSedex(String cep) { ... }
  double fretePac(String cep) { ... }
  int prazoEntrega(String cep) { ... }
}

// DEPOIS
class Pedido {
  List<Item> itens;
  double total() { ... }
}
class CalculadoraFrete {
  double sedex(String cep) { ... }
  double pac(String cep) { ... }
  int prazo(String cep) { ... }
}`,
      explicacao: "Toda a responsabilidade de frete saiu de <code>Pedido</code> e formou a classe <b>nova</b> <code>CalculadoraFrete</code>: <b>extração de classe</b>." },

    /* ---------- Renomeação ---------- */
    { tipo: "rename", codigo: `// ANTES
double x = p.getPreco() * q;
if (x > 1000) aplicaDesconto();

// DEPOIS
double valorTotal = p.getPreco() * quantidade;
if (valorTotal > 1000) aplicaDesconto();`,
      explicacao: "Só os <b>nomes das variáveis</b> mudaram (<code>x → valorTotal</code>, <code>q → quantidade</code>). A lógica é idêntica: <b>renomeação</b>." },
    { tipo: "rename", codigo: `// ANTES
class Gerenciador {
  void processa(Pedido p) { ... }
}
// usado em outras 12 classes:
Gerenciador g = new Gerenciador();

// DEPOIS
class ProcessadorDePedidos {
  void processa(Pedido p) { ... }
}
// usado em outras 12 classes:
ProcessadorDePedidos g = new ProcessadorDePedidos();`,
      explicacao: "A <b>classe</b> foi renomeada. Como diz o slide, o difícil não é renomear, é <b>atualizar as 12 referências</b>, e a IDE faz isso automaticamente." },
    { tipo: "rename", codigo: `// ANTES
class Inimigo {
  int v;
  int getV() { return v; }
}

// DEPOIS
class Inimigo {
  int vida;
  int getVida() { return vida; }
}`,
      explicacao: "Atributo e método ganharam nomes melhores: <b>renomeação</b>, o refactoring <b>mais popular</b> (Murphy-Hill et al.)." },
    { tipo: "rename", codigo: `// ANTES
@Test
public void teste1() {
  new Pilha<Integer>().pop();
}

// DEPOIS
@Test
public void testePopPilhaVaziaLancaExcecao() {
  new Pilha<Integer>().pop();
}`,
      explicacao: "Só o <b>nome do método de teste</b> mudou, para dizer o que ele testa: <b>renomeação</b>." },

    /* ---------- Não é refactoring ---------- */
    { tipo: "naoRef", codigo: `// ANTES
double area(double r) {
  return Math.PI * r * r * r;
}

// DEPOIS
double area(double r) {
  return Math.PI * r * r;
}`,
      explicacao: "Corrigir o <code>r³</code> muda o resultado: é <b>correção de bug</b> (manutenção corretiva), não refactoring. Refactoring <b>não altera o funcionamento externo</b>." },
    { tipo: "naoRef", codigo: `// ANTES
class Pilha<T> {
  void push(T e) { ... }
  T pop() { ... }
}

// DEPOIS
class Pilha<T> {
  void push(T e) { ... }
  T pop() { ... }
  T topo() { ... }   // novo
}`,
      explicacao: "Ganhou uma funcionalidade nova (<code>topo()</code>): é <b>manutenção evolutiva</b>, não refactoring." },
    { tipo: "naoRef", codigo: `// ANTES
boolean freteGratis(double total) {
  return total >= 200;
}

// DEPOIS
boolean freteGratis(double total) {
  return total >= 150;
}`,
      explicacao: "Mudou a <b>regra de negócio</b>: uma compra de R$ 160 passa a ter frete grátis. É manutenção (adaptativa), não refactoring." },
    { tipo: "naoRef", codigo: `// ANTES
double total() {
  double t = subtotal + frete;
  return t;
}

// DEPOIS
double total() {
  return subtotal + calculaFrete();
}
double calculaFrete() {
  return frete * 1.1;   // +10%
}`,
      explicacao: "<b>Pegadinha:</b> parece extração de método, mas o frete passou a ter <b>+10%</b>, então o total mudou. Se o resultado muda, não é refactoring. Sempre confira se a lógica ficou idêntica." }
  ];

  window.REFACTOR_NOMES = {
    extracao: "Extração de método", inline: "Inline", mover: "Movimentação", pullup: "Pull Up", pushdown: "Push Down",
    extClasse: "Extração de classe", rename: "Renomeação", naoRef: "Não é refactoring"
  };

  window.REFACTOR_QUIZ = EXERCICIOS.map((e) => ({
    grupo: GRUPO[e.tipo],
    termo: e.tipo,
    enunciado: "Compare o <b>ANTES</b> e o <b>DEPOIS</b>. Qual refactoring foi aplicado?",
    codigo: e.codigo,
    opcoes: [e.tipo, ...CONFUSAO[e.tipo]].map((t) => NOMES[t]),
    correta: 0,
    explicacao: e.explicacao
  }));
})();
