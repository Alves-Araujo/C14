/* Resumo do conteúdo das aulas de C14 – Engenharia de Software.
   Blocos especiais: .def (definição), .trap (pegadinha de prova), .grid (cartões), table.cmp (comparativo). */
window.RESUMO = [
  {
    id: "fundamentos",
    titulo: "Fundamentos de Engenharia de Software",
    aula: "Aulas 01–02",
    hue: 250,
    intro: "Por que saber programar não basta, e o que torna software diferente das outras engenharias.",
    html: `
<div class="def"><b>Engenharia de Software</b> é a área da Computação que investiga os desafios e propõe soluções para desenvolver sistemas de software (principalmente os mais complexos e de maior tamanho) <b>de forma produtiva e com qualidade</b>.</div>

<h4>Origem</h4>
<p>O termo foi usado pela primeira vez na <b>Conferência da OTAN</b> (Alemanha, <b>1968</b>), a <i>Working Conference on Software Engineering</i>.</p>

<h4>Dificuldades essenciais (Frederick Brooks, <i>No Silver Bullet</i>, 1987)</h4>
<div class="grid">
  <div><b>Complexidade</b><span>Software é uma das construções mais complexas que existem.</span></div>
  <div><b>Conformidade</b><span>Precisa se adaptar a um ambiente que muda o tempo todo (ex.: leis de impostos).</span></div>
  <div><b>Facilidade de mudanças</b><span>Quanto mais bem-sucedido o sistema, mais pedidos de mudança ele recebe.</span></div>
  <div><b>Invisibilidade</b><span>É difícil visualizar o tamanho do software e estimar o esforço.</span></div>
</div>
<p><b>Não existe bala de prata</b>: nenhuma técnica, sozinha, resolve todos os problemas.</p>

<h4>Defeito × Bug × Falha</h4>
<table class="cmp">
  <tr><th>Defeito</th><td>Erro no código. Ex.: área do círculo calculada com <code>π·r³</code> em vez de <code>π·r²</code>.</td></tr>
  <tr><th>Bug</th><td>Termo informal, normalmente usado como sinônimo de defeito.</td></tr>
  <tr><th>Falha</th><td>Quando o código com defeito <b>é executado</b> e leva a um resultado incorreto.</td></tr>
</table>
<p>Falha famosa: <b>Ariane 5 (1996)</b> explodiu 30 s após o lançamento (US$ 500 mi) por causa da conversão de um real de <b>64 bits</b> para um inteiro de <b>16 bits</b>.</p>
<div class="quote">"Testes de software mostram a presença de bugs, mas não a sua ausência." <span>Edsger W. Dijkstra</span></div>

<h4>Processos: Cascata × Ágil</h4>
<p><b>Cascata (Waterfall)</b>: inspirado nas engenharias tradicionais, proposto nos anos 70 e muito usado até ~1990. <b>Ágil</b>: ciclos curtos e iterativos, com profundo impacto na indústria.</p>
<p>A Gerência de Configuração usa controle de versões (git) como <b>"fonte da verdade"</b> do código.</p>
`
  },
  {
    id: "maven",
    titulo: "Build e Dependências com Maven",
    aula: "Aula 03",
    hue: 25,
    intro: "Gerenciar dependências e automatizar a build, sem pen-drive e sem e-mail.",
    html: `
<div class="def"><b>Build</b> é o processo de geração do software como produto. Envolve normalmente: <b>teste automatizado, compilação e empacotamento</b> (ex.: <code>.jar</code>, Java ARchive).</div>

<h4>Ferramentas</h4>
<div class="chips"><span>Maven (Java)</span><span>Gradle (padrão no Android, baseado no Maven)</span><span>NuGet + MSBuild (.NET)</span><span>npm · pip</span></div>

<h4>Repositórios</h4>
<ul>
  <li><b>Repositório central</b> (<code>mvnrepository.com</code>) guarda os artefatos (jars) de bibliotecas e frameworks.</li>
  <li><b>Repositório local</b>: o Maven procura <b>primeiro no local</b> e, se não encontrar, busca no central (remoto).</li>
  <li>O XML da dependência <b>não é a biblioteca</b>, é a instrução para o Maven baixá-la. Isso é a <b>gerência de dependências</b>.</li>
</ul>

<h4>pom.xml (Project Object Model)</h4>
<p>Arquivo único com toda a configuração. O mínimo são três informações:</p>
<table class="cmp">
  <tr><th>groupId</th><td>Empresa ou grupo de projetos, segue a convenção de pacotes Java.</td></tr>
  <tr><th>artifactId</th><td>Identificação do projeto.</td></tr>
  <tr><th>version</th><td>Versão do projeto.</td></tr>
</table>
<p><code>groupId + artifactId</code> formam um nome globalmente único. As dependências ficam em <code>&lt;dependencies&gt;</code>, uma <code>&lt;dependency&gt;</code> para cada. Com <code>&lt;scope&gt;test&lt;/scope&gt;</code> (ex.: JUnit) a dependência serve só para os testes e não vai para o jar.</p>

<h4>Convention over configuration</h4>
<p>Quem segue a convenção quase não precisa configurar nada. Estrutura padrão:</p>
<pre class="tree">src/main/java        ← código principal
src/main/resources   ← configs (log4j, persistence…)
src/test/java        ← código de teste
src/test/resources</pre>

<h4><code>mvn package</code> (rodado na raiz)</h4>
<ol class="steps"><li>Compila o projeto</li><li>Executa os testes de unidade</li><li>Gera o jar em <code>target/</code> (não executável)</li></ol>
`
  },
  {
    id: "git",
    titulo: "Controle de Versão com Git",
    aula: "Aula 04",
    hue: 12,
    intro: "Manter a versão e compartilhar o código com a equipe.",
    html: `
<div class="def">Um <b>Sistema de Controle de Versões</b> resolve dois problemas: <b>manter a versão</b> (recuperar versões antigas) e <b>compartilhar</b> o código por meio de um repositório comum.</div>

<h4>Centralizado × Distribuído</h4>
<table class="cmp">
  <tr><th>Centralizado</th><td>Cliente/servidor (CVS, SVN). Um único servidor tem o repositório; os clientes buscam a versão mais recente e fazem commit direto no servidor.</td></tr>
  <tr><th>Distribuído (DVCS)</th><td>Começou nos anos 2000 (Git). <b>Cada cliente tem um repositório local completo</b>. Na prática existe um repositório central de referência e a sincronização é feita com <code>push</code>/<code>pull</code>.</td></tr>
</table>
<p><b>Vantagens do DVCS:</b> trabalhar offline, operações mais rápidas (são locais) e commits mais frequentes.</p>
<p><b>Monorepo</b> (vários projetos em um repositório) facilita reúso e tem barreira de entrada menor, mas obriga a baixar todo o código. <b>Multirepo</b> tem um repositório por projeto.</p>

<h4>As três áreas do Git</h4>
<div class="flow"><span>Working Directory</span><i>git add →</i><span>Stage</span><i>git commit →</i><span>Repositório (.git)</span><i>git push →</i><span>Central</span></div>
<ul>
  <li>Git guarda <b>snapshots</b> (uma "foto" a cada commit).</li>
  <li>Só arquivos que estão no <b>stage</b> podem ser commitados. O stage guarda o <b>conteúdo</b> do arquivo, não só o nome.</li>
  <li>Toda vez que o arquivo é modificado é preciso rodar <code>git add</code> <b>de novo</b>.</li>
</ul>

<h4>Comandos</h4>
<table class="cmp">
  <tr><th>git init</th><td>Cria um repositório vazio.</td></tr>
  <tr><th>git clone &lt;url&gt;</th><td>Copia um repositório remoto (usa init por baixo).</td></tr>
  <tr><th>git add</th><td>Coloca no stage; na primeira vez o arquivo passa a ser <i>tracked</i>.</td></tr>
  <tr><th>git commit -m</th><td>"Tira a foto" no repositório <b>local</b>. Custo baixo. Uma modificação por commit.</td></tr>
  <tr><th>git push</th><td>Envia os commits locais para o central.</td></tr>
  <tr><th>git pull</th><td>Traz os commits do central. Boa prática: fazer sempre, para evitar problemas no merge.</td></tr>
  <tr><th>git merge</th><td>Junta commits de ramos diferentes.</td></tr>
  <tr><th>branch</th><td>Ramo isolado; os commits não afetam o principal até o merge.</td></tr>
</table>
<p><b>Fork</b> <u>não é comando git</u>: é uma operação da plataforma (GitHub/GitLab) para contribuir via <b>pull request</b>. O <code>.gitignore</code> lista o que o Git deve ignorar (ex.: <code>.class</code>, <code>.jar</code>).</p>

<div class="trap"><b>Pegadinha clássica:</b> fez <code>add</code>, editou o arquivo e fez <code>commit</code>? A edição <b>não entrou</b> no commit. E o commit sozinho não chega ao central. É preciso <code>add → commit → push</code>.</div>
`
  },
  {
    id: "testes",
    titulo: "Teste de Software",
    aula: "Aula 05",
    hue: 160,
    intro: "Do teste manual no fim do projeto à automação contínua.",
    html: `
<h4>Antes × Agora</h4>
<table class="cmp">
  <tr><th>Antes</th><td>Teste manual, entediante, repetitivo, sujeito a erros, feito só no <b>final do projeto</b>, por estagiários e novatos.</td></tr>
  <tr><th>Agora</th><td>Grande parte é <b>automatizada</b>, os testes são escritos junto com a funcionalidade, protegem contra regressão e servem de <b>documentação</b>.</td></tr>
</table>

<h4>Granularidade (pirâmide)</h4>
<div class="pyramid"><div>Sistema / E2E</div><div>Integração</div><div>Unidade</div></div>
<ul>
  <li><b>Unidade</b>: pequenas unidades testadas <b>isoladamente</b>. Normalmente a unidade é uma <b>classe</b> com todos os seus métodos.</li>
  <li><b>Mock</b>: "imita" uma classe que ainda não existe ou que depende de acesso externo.</li>
  <li><b>Integração</b>: várias classes juntas, testando uma funcionalidade completa. <b>Não usa mais mocks</b>.</li>
  <li><b>Funcional</b>: verifica se funciona, sem importar a granularidade.</li>
  <li><b>End-to-End</b>: o sistema inteiro (ex.: Selenium testando o Overleaf).</li>
</ul>

<h4>Outros tipos</h4>
<div class="grid">
  <div><b>Caixa-preta</b><span>A estrutura interna não é conhecida; só importa se a saída está correta.</span></div>
  <div><b>Caixa-branca</b><span>A estrutura interna é conhecida e também é testada.</span></div>
  <div><b>Aceitação</b><span>Validação feita pelo cliente.</span></div>
  <div><b>Não-funcional</b><span>CPU, memória, segurança, tempo de execução.</span></div>
  <div><b>Exploratório</b><span>Manual, sem roteiro, o objetivo é explorar a aplicação.</span></div>
</div>
`
  },
  {
    id: "unidade",
    titulo: "Teste de Unidade com JUnit",
    aula: "Aula 06",
    hue: 140,
    intro: "Anatomia de um teste, asserts, princípios FIRST e regressão.",
    html: `
<div class="def">Teste de unidade é <b>um programa</b>, escrito por programadores, que chama métodos da classe testada e verifica se retornam o esperado. Frameworks xUnit, como o JUnit, foram criados por <b>Kent Beck</b> e <b>Erich Gamma</b>.</div>

<h4>Regras de um método de teste (JUnit 4)</h4>
<div class="chips"><span>public</span><span>sem parâmetros</span><span>retorno void</span><span>prefixo "teste" (convenção)</span><span>anotado com @Test</span></div>
<p>A classe de teste tem o nome da classe testada + "Teste" (<code>PilhaTeste</code>) e fica em <code>src/test/java</code>. A anotação <code>@Test</code> é um <b>metadado</b> que o JUnit processa.</p>

<h4>As 3 partes de um teste</h4>
<ol class="steps"><li><b>Fixture</b>: contexto do teste (instanciar objetos)</li><li><b>Executar</b> o método testado e guardar o resultado</li><li><b>Verificar</b> com asserts</li></ol>

<h4>Asserts</h4>
<table class="cmp">
  <tr><th>assertEquals(esperado, real)</th><td>Compara valores.</td></tr>
  <tr><th>assertTrue(x) / assertFalse(x)</th><td>Garante que x é true / false.</td></tr>
  <tr><th>assertSame(esperado, real)</th><td>Garante que é o <b>mesmo objeto</b> (mesma referência). É diferente de assertEquals.</td></tr>
</table>

<h4>Vocabulário</h4>
<table class="cmp">
  <tr><th>Test Method</th><td>Método com @Test, testa um comportamento.</td></tr>
  <tr><th>Fixture</th><td>Contexto e estado do sistema que será testado. Pode ficar no <code>@Before</code>, que roda <b>antes de cada teste</b>.</td></tr>
  <tr><th>Test Case</th><td>A classe com os métodos de teste.</td></tr>
  <tr><th>Suíte</th><td>O conjunto de casos de teste (tudo em <code>src/test/java</code>).</td></tr>
  <tr><th>SUT</th><td><i>System Under Test</i>, o sistema que está sendo testado.</td></tr>
</table>
<p><b>Falha ≠ erro de execução</b>: o JUnit mostra os dois separadamente.</p>

<h4>Princípios FIRST</h4>
<div class="grid first">
  <div><b>F</b>ast<span>Rodam com frequência, então precisam ser rápidos. Separe os lentos.</span></div>
  <div><b>I</b>ndependent<span>A ordem de execução não altera o resultado. Um teste não depende de outro.</span></div>
  <div><b>R</b>epeatable<span>Mesmo resultado em N execuções. Se variar, o teste é <i>flaky</i>; a principal causa é concorrência.</span></div>
  <div><b>S</b>elf-checking<span>O resultado é imediato (verde/vermelho), sem precisar analisar.</span></div>
  <div><b>T</b>imely<span>Escritos o quanto antes, ou até antes do código (TDD).</span></div>
</div>

<h4>Boas práticas</h4>
<ul>
  <li><b>Achou um bug?</b> Escreva um teste que o reproduz (vermelho), corrija o bug (verde) e a suíte ganha um teste.</li>
  <li><b>Não imprima mensagens na tela para depurar</b>: elas precisam ser <b>validadas manualmente</b> e depois são apagadas. Os testes ficam na suíte.</li>
  <li><b>Nunca</b> deixe os testes só para o final do projeto, como era no Cascata (baixa qualidade e baixa cobertura).</li>
  <li>Recomenda-se <b>uma assertiva por teste</b>, mas não ao pé da letra: às vezes várias fazem sentido.</li>
</ul>

<h4>Benefícios</h4>
<p>Encontrar bugs cedo, <b>proteger contra regressão</b> (bug introduzido em algo que já funcionava, ao refatorar, corrigir outro bug ou criar funcionalidade) e servir de <b>documentação</b>: ao chegar num código novo, estude primeiro as classes de teste.</p>

<div class="trap"><b>Pegadinha:</b> o <code>@Before</code> roda <b>antes de cada</b> <code>@Test</code>. Um teste nunca "herda" o estado do anterior. Se o segundo teste espera o resultado do primeiro, ele falha.</div>
`
  },
  {
    id: "mock",
    titulo: "Teste Mock e Injeção de Dependência",
    aula: "Aula 07",
    hue: 290,
    intro: "Isolar a classe testada trocando as dependências por objetos simulados.",
    html: `
<div class="def"><b>Objeto Mock</b>: objeto simulado que <b>imita o comportamento de objetos reais de forma controlada</b>. Quem cria o mock é quem escreve os testes de unidade, ou seja, o dev da solução.</div>

<h4>Por que usar?</h4>
<ul>
  <li>No teste de unidade a boa prática é <b>isolar</b> a classe testada.</li>
  <li>Dependências que acessam <b>banco de dados ou web service</b> são complexas de configurar, lentas e exigem controle total do ambiente externo.</li>
  <li>A dependência pode <b>ainda não existir</b>.</li>
  <li>Analogia: o boneco do teste de batida de carro também permite fazer medições.</li>
</ul>

<h4>Deixando a classe testável: injeção de dependência</h4>
<p>Se a dependência é criada com <code>new</code> dentro do método (variável local), ela fica <b>altamente acoplada</b> e não dá para trocar por um mock. A solução é <b>injetar de fora</b>:</p>
<div class="chips"><span>pelo construtor</span><span>pelo setter</span><span>como parâmetro do método</span></div>
<pre class="code-mini"><code>public BuscaInimigo(InimigoService inimigoService) {
    this.inimigoService = inimigoService; // injeção pelo construtor
}</code></pre>
<p>"Precisei fazer tudo isso só para testar?" Sim, e com isso o <b>design melhorou</b>, porque a classe ficou desacoplada.</p>

<h4>Mock manual (Parte 1)</h4>
<p>Cria-se uma classe que <b>implementa a interface</b> (<code>InimigoService</code>) e devolve uma String JSON <i>hardcoded</i>. Ela fica no <b>diretório de teste</b>. A classe testada não pode saber que está usando um objeto falso, como se fosse um disfarce. O que se testa é se, dado o JSON, a instância de <code>Inimigo</code> é criada corretamente, e <b>não</b> se o servidor responde.</p>

<h4>Mockito (Parte 2)</h4>
<ul>
  <li>Dependência <code>mockito-core</code> no pom.</li>
  <li><code>@RunWith(MockitoJUnitRunner.class)</code> na classe de teste e <code>@Mock</code> nas dependências.</li>
  <li>Configurar o comportamento: <code>when(mock.metodo()).thenReturn(valor)</code>.</li>
  <li>Um framework de mock simula comportamento (retorna valores, lança exceptions), <b>verifica invocações</b> (número, ordem, parâmetros) e dispensa criar uma classe para cada mock.</li>
</ul>

<h4>Estado × Interação</h4>
<table class="cmp">
  <tr><th>Baseado em estado</th><td>Verifica se o código devolve o resultado esperado. É o mais comum. POJOs só com getters e setters não precisam de teste próprio.</td></tr>
  <tr><th>Baseado em interação</th><td>Verifica se a classe <b>chamou</b> algum método da dependência.</td></tr>
</table>

<div class="trap"><b>Quando NÃO mockar:</b> POJOs (classes que só mantêm estado), <b>código de terceiros</b> (não controlamos o comportamento) e não mockar <b>tudo</b>.</div>
`
  },
  {
    id: "tdd",
    titulo: "TDD e Padrões para Criar Testes",
    aula: "Aulas 06 e 08",
    hue: 0,
    intro: "Teste primeiro + desenvolvimento incremental, em quatro padrões.",
    html: `
<div class="def"><b>TDD (Test Driven Development)</b> = teste primeiro + desenvolvimento incremental. Foi <b>proposto no XP</b>, mas não é ferramenta: é uma <b>metodologia/técnica</b> que guia a construção da classe de produção.</div>

<h4>Ciclo</h4>
<div class="cycle"><span class="r">Vermelho</span><i>→</i><span class="g">Verde</span><i>→</i><span class="b">Refatorar</span></div>
<ol class="steps">
  <li><b>Vermelho</b>: escrever um teste que falha, porque o código ainda não existe.</li>
  <li><b>Verde</b>: escrever o código <b>suficiente</b> para o teste passar.</li>
  <li><b>Refatorar</b> (azul): melhorar a implementação, com limpeza, legibilidade e manutenibilidade.</li>
</ol>
<p>Regra de ouro: <b>só escreva código novo se um teste automatizado falhar</b>. Objetivos do TDD: obriga a escrever testes, favorece classes com <b>alta testabilidade</b> e dá uma forma incremental de construir testes e funcionalidade. Em experimentos, aumentou produtividade, repetibilidade e precisão.</p>

<h4>Os 4 padrões</h4>
<div class="patterns">
  <div><em>1</em><b>API Definition</b><span>O primeiro teste define a <b>superfície</b> (a API), não o que tem dentro. Para um <b>método</b>, forçar um retorno trivial. Para uma <b>classe</b>, testar o comportamento logo após instanciar: a Pilha nasce vazia, o Aluno nasce vivo, o RobotConnection nasce desconectado.</span></div>
  <div><em>2</em><b>Differential Test</b><span>Adicione um teste que <b>induz um pequeno incremento</b> no código de produção. Exemplo do elevador: parado, depois sobe, depois desce. Um teste que já nasce verde não motiva mudança; um muito complexo faz perder o ritmo.</span></div>
  <div><em>3</em><b>Exceptional Limit</b><span>Cenários <b>inválidos</b> (caminho negativo): pop na pilha vazia, push na pilha cheia. Protege a classe contra mau uso. O objetivo é tratar exceções, não criar funcionalidade nova.</span></div>
  <div><em>4</em><b>Everything Working Together</b><span>Combina duas ou mais funcionalidades para verificar a <b>integração</b>. Aqui <b>não é erro o teste já nascer passando</b>.</span></div>
</div>

<div class="trap"><b>Pegadinhas:</b> (1) usar <code>assertFalse</code> não torna um teste "caminho infeliz"; <code>assertFalse(robot.isConnected())</code> é o Padrão 1. (2) As diferenças viram <b>novos testes</b>, não se acumulam num teste gigante. (3) TDD <b>facilita</b> a regressão. (4) TDD não é exclusivo do XP.</div>
`
  },
  {
    id: "devops",
    titulo: "DevOps, CI e CD",
    aula: "Aula 09",
    hue: 200,
    intro: "Do \"na minha máquina funciona\" a commits indo para produção.",
    html: `
<h4>Os três conceitos básicos</h4>
<table class="cmp">
  <tr><th>Release (Liberação)</th><td><b>Gerar</b> uma nova versão que pode ser distribuída e usada pelo cliente.</td></tr>
  <tr><th>Deploy (Implantação)</th><td>A nova versão é <b>instalada no servidor de produção</b> e fica disponível imediatamente.</td></tr>
  <tr><th>Delivery (Entrega)</th><td>Uma versão pronta para ser deployada, que alguém autoriza.</td></tr>
</table>

<div class="def"><b>DevOps</b> é o movimento que visa <b>unificar as culturas de desenvolvimento (Dev) e operações (Ops)</b> para permitir uma implantação mais ágil. Dev cuida de requisitos, análise, código, documentação e testes. Ops cuida da implantação, monitoramento e incidentes.</div>

<table class="cmp two">
  <tr><th>Modelo tradicional</th><th>Cultura DevOps</th></tr>
  <tr><td>Teste manual no final</td><td>Teste automatizado na origem</td></tr>
  <tr><td>"Na minha máquina funciona"</td><td>Ambiente similar ao de produção</td></tr>
  <tr><td>Implantação manual</td><td>Implantação automatizada</td></tr>
  <tr><td>Competição entre departamentos</td><td>Colaboração multidisciplinar</td></tr>
  <tr><td>"Acho que o problema foi…"</td><td>Fatos e dados coletados automaticamente</td></tr>
</table>
<p><b>Responsabilidades:</b> antecipar problemas de desempenho, segurança, incompatibilidade e infraestrutura, e trabalhar nos scripts de instalação e monitoramento enquanto o sistema ainda é desenvolvido. DevOps sugere <b>automatizar todos os passos</b> até a produção, o que implica testes automatizados. "Concluído" = pronto para entrega, e <b>todos</b> são responsáveis pela entrega.</p>

<h4>Integração Contínua (CI), prática do XP</h4>
<ul>
  <li>Problema: <b>feature branches</b> longos geram conflitos de integração, o chamado <b>merge hell</b>, e "donos da funcionalidade".</li>
  <li>"Se uma tarefa causa dor, faça com frequência." Integre <b>pelo menos uma vez ao dia</b>.</li>
  <li><b>Servidor de CI</b>: a cada commit ele clona o repositório, faz a build completa, roda todos os testes e notifica o resultado.</li>
  <li><b>Build quebrada? Pare tudo e corrija</b>, porque afeta toda a equipe. Causas comuns: arquivo não commitado, dependências incorretas, versão de compilador diferente.</li>
  <li>CI combina com <b>TBD (Trunk Based Development)</b>, sem branches de funcionalidade. Dá para usar branches desde que sejam integrados todo dia.</li>
  <li>Fluxo correto: <code>pull</code>, resolver conflitos <b>localmente</b>, build, <code>commit</code>, <code>push</code>. O ganho real é a <b>comunicação</b>: todos sabem que o main tem uma build que funciona (badge no README).</li>
</ul>

<h4>Continuous Deployment × Continuous Delivery</h4>
<table class="cmp">
  <tr><th>Deployment</th><td><b>Todo commit pode entrar em produção</b> automaticamente. Funciona muito bem para <b>web</b>.</td></tr>
  <tr><th>Delivery</th><td>Todo commit <i>pode</i> ir para produção, mas uma <b>pessoa autoriza</b>, e fatores comerciais podem influenciar. Serve para apps móveis, jogos, desktop e drivers, que dependem dos recursos do cliente.</td></tr>
</table>
<p><b>Vantagens do CD:</b> menos tempo de entrega, mais releases com menos funcionalidades, releases deixam de ser um "evento" com deadline na sexta-feira, feedback rápido do cliente e <b>favorece a experimentação</b>. Exige quebrar tarefas em partes pequenas. Exemplos: Facebook (2016) com 3,5 atualizações por semana; Chrome a cada 6 semanas.</p>

<h4>Feature Flags</h4>
<p>Para integrar código incompleto sem criar branch, a parte incompleta é <b>desabilitada por um booleano</b>. Também são usadas em:</p>
<div class="grid">
  <div><b>Release Canário</b><span>A funcionalidade é liberada para um grupo pequeno de usuários. Se houver bug, o prejuízo é pequeno, e depois a base é ampliada.</span></div>
  <div><b>Teste A/B</b><span>Duas versões são liberadas para verificar se a nova realmente traz valor.</span></div>
</div>

<h4>Pipeline CI/CD</h4>
<p>O "encanamento" automatizado do commit até a produção, com <b>visão clara do fluxo de valor</b>. O gatilho é <b>automático</b>. As restrições a atacar são criação de ambientes, deploy, testes e arquitetura acoplada. Para otimizar, reduza o tempo de execução. As barreiras aparecem no fim, quando muita gente está envolvida, e exigem mudança do time.</p>

<div class="trap"><b>Pegadinhas:</b> "integrar com frequência" é <b>CI</b>, não CD. TBD <b>combina</b> com CI/CD. Os testes finais rodam num <b>clone</b> da produção, não na produção. Os três pilares são <b>Release, Deploy e Delivery</b>.</div>
`
  },
  {
    id: "agil",
    titulo: "Métodos Ágeis: XP, Scrum e Kanban",
    aula: "Aula 10",
    hue: 45,
    intro: "Manifesto, histórias de usuário e os três métodos mais usados.",
    html: `
<h4>Manifesto Ágil (2001)</h4>
<div class="grid">
  <div><b>Software em funcionamento</b><span>mais que documentação abrangente</span></div>
  <div><b>Indivíduos e interações</b><span>mais que processos e ferramentas</span></div>
  <div><b>Colaboração com o cliente</b><span>mais que negociação de contratos</span></div>
  <div><b>Responder a mudanças</b><span>mais que seguir um plano</span></div>
</div>
<p>Características: ciclos <b>curtos e iterativos</b> (2 a 4 semanas), implantação gradual, começar pelo mais urgente para o cliente, menos documentação, sem big upfront design (o design evolui com o sistema), cliente sempre envolvido (PO), testes, refactoring e CI. <b>Ágil = iterativo.</b></p>

<h4>Histórias de Usuário</h4>
<div class="def"><b>História = Cartão + Conversas + Confirmação.</b> Cartão: o cliente escreve a funcionalidade em poucas frases. Conversas: o cliente explica verbalmente aos devs. Confirmação: <b>teste de aceitação</b> feito pelo cliente (não é teste automatizado).</div>
<p>Formato: <i>"Como &lt;perfil&gt;, eu quero &lt;ação&gt; para que &lt;benefício&gt;"</i>. Devem ser independentes, negociáveis, agregar valor, estimáveis, sucintas e <b>testáveis</b>.</p>
<ul>
  <li><b>Story points</b>: escala para comparar tamanho (1, 2, 3, 5, 8, 13), estimada com Planning Poker.</li>
  <li><b>Velocidade</b>: story points que o time implementa por sprint.</li>
  <li><b>Casos de uso</b> são <b>mais detalhados</b> e documentam um acordo, escritos do ponto de vista de um ator. Histórias são <b>lembretes</b> para guiar conversas.</li>
</ul>

<h4>XP (Kent Beck) = Valores + Princípios + Práticas</h4>
<p><b>Valores:</b> comunicação, simplicidade, feedback, coragem, respeito (qualidade de vida, semana de 40 h).<br>
<b>Princípios:</b> economicidade, melhorias contínuas, falhas acontecem (sem punição), <b>baby steps</b>, responsabilidade pessoal (quem implementa testa e mantém).<br>
<b>Práticas:</b> TDD, pair programming (menos bugs e mais conhecimento, porém mais custo), CI, slack, contratos de escopo aberto, ambiente com cartazes, representante do cliente no time.<br>
XP leva o bom senso ao extremo: se revisar é bom, revisa-se o tempo todo (pair programming); se testar é bom, testa-se o tempo todo.</p>

<h4>Scrum (Sutherland e Schwaber, 1995)</h4>
<table class="cmp">
  <tr><th>Papéis</th><td><b>PO</b>: escreve e prioriza histórias, define testes de aceitação e mantém o backlog. <b>Devs</b> (3 a 9). <b>Scrum Master</b>: ajuda o time a seguir o Scrum e remove impedimentos não-técnicos, <b>não é chefe</b>. Time de 5 a 11 pessoas (do tamanho de "duas pizzas"); todos no mesmo nível hierárquico.</td></tr>
  <tr><th>Eventos</th><td><b>Sprint</b> (até 1 mês, normalmente 15 dias), <b>Planejamento</b> (histórias e depois tarefas), <b>Daily</b> (15 min, em pé: o que fiz, o que farei, dificuldades), <b>Revisão/Demo</b> e <b>Retrospectiva</b>.</td></tr>
  <tr><th>Artefatos</th><td><b>Backlog do produto</b> (priorizado e dinâmico), <b>backlog do sprint</b>, Scrum Board, Burndown chart.</td></tr>
</table>
<p><b>DoD (Definition of Done)</b>: qualidade externa (testes de aceitação e não-funcionais) e interna (testes de unidade e revisão de código). <b>Time-box</b>: toda atividade tem duração definida. Scrum não é só para software, por isso não define práticas de programação.</p>

<h4>Kanban (Toyota, Taiichi Ohno, anos 50)</h4>
<ul>
  <li>Origem na manufatura Lean: reduzir desperdício, just-in-time. "Kanban" = cartão visual.</li>
  <li><b>Sistema pull</b>: cada membro "puxa" uma tarefa, conclui e move no quadro.</li>
  <li><b>Limite WIP</b>: número máximo de tarefas em um passo, criando um fluxo sustentável.</li>
  <li><b>Não tem sprints</b>, nem papéis ou eventos obrigatórios. É mais simples e indicado para times <b>mais maduros</b>.</li>
</ul>
<table class="cmp two">
  <tr><th>Scrum</th><th>Kanban</th></tr>
  <tr><td>Quadro reiniciado a cada sprint, sem WIP</td><td>Quadro contínuo, WIP é fundamental</td></tr>
  <tr><td>Objetivos fixos por sprint, papéis definidos</td><td>Ambiente dinâmico, prioridades que mudam</td></tr>
  <tr><td>Bom para projetos menos maduros</td><td>Bom para times maduros</td></tr>
</table>

<div class="trap"><b>Quando não usar ágil:</b> mercado estável e previsível, requisitos claros e estáveis desde o início, cliente indisponível, solução já conhecida, mudanças no fim caras ou impossíveis. Processos pré-ágeis: <b>Espiral</b> (Boehm, iterações de 6 a 24 meses) e <b>RUP</b> (UML + ferramentas CASE; fases Inception, Elaboração, Construção e Transição).</div>
`
  },
  {
    id: "requisitos",
    titulo: "Engenharia de Requisitos e MVP",
    aula: "Aula 11",
    hue: 330,
    intro: "O que o sistema deve fazer e sob quais restrições.",
    html: `
<table class="cmp">
  <tr><th>Funcional</th><td><b>O que</b> o sistema faz: dar play, configurar idioma, pausar vídeo.</td></tr>
  <tr><th>Não-funcional</th><td><b>Como</b> faz: desempenho (tempo de resposta, throughput), espaço, confiabilidade (disponibilidade, MTBF), robustez (MTTR), usabilidade.</td></tr>
</table>
<p>Use <b>métricas</b>: em vez de "o sistema deve ser rápido", escreva "99,99% de disponibilidade e 99% das transações em até 1 s".</p>
<p><b>Requisito de usuário</b>: alto nível, linguagem natural, sem detalhe técnico (ex.: "transferir via PIX"). Ele gera <b>requisitos de sistema</b>, que são técnicos e escritos por devs e testers.</p>

<h4>Engenharia de Requisitos</h4>
<p>Descoberta, análise, especificação e manutenção dos requisitos durante todo o ciclo de vida.</p>
<ul>
  <li><b>Elicitação</b> (feita geralmente pelo PO): entrevistas, questionários, leitura de documentos, workshops, protótipos/POCs, cenários e <b>estudos etnográficos</b> (o dev observa o cliente no ambiente de trabalho dele).</li>
  <li>Depois: documentar, verificar e validar, priorizar. Requisitos <b>mudam</b>, então documentação e código precisam ser atualizados, o que exige <b>rastreabilidade</b>.</li>
  <li>Requisitos devem ser corretos, precisos, completos, consistentes e verificáveis.</li>
</ul>

<h4>MVP (Lean Startup, Eric Ries)</h4>
<div class="def"><b>MVP</b> é um sistema funcional com o <b>mínimo de funcionalidades</b> necessário para comprovar a viabilidade de um produto ou testar uma hipótese de negócio. O maior desperdício é implementar requisitos que não serão usados.</div>
<ul>
  <li>O aprendizado validado leva a três caminhos: mais testes, market fit ou falha (desistir ou pivotar).</li>
  <li>Evite <b>métricas de vaidade</b> (ex.: views da página) e prefira <b>métricas acionáveis</b> (taxa de conversão, valor do pedido) e métricas de funil.</li>
  <li>Exemplos: <b>Zappos</b> (fotos de sapatos com processamento manual) e <b>Dropbox</b> (um vídeo simples).</li>
  <li>Não use MVP em mercado estável ou em sistema de missão crítica (UTI). MVP não é a mesma coisa que protótipo, e precisa funcionar, mesmo que minimamente.</li>
</ul>
`
  },
  {
    id: "refactoring",
    titulo: "Refactoring e Débito Técnico",
    aula: "Aula 12",
    hue: 100,
    intro: "Melhorar o código sem mudar o que ele faz.",
    html: `
<div class="def"><b>Refactoring</b>: transformações de código que <b>melhoram a manutenibilidade</b> de um sistema <b>sem afetar seu funcionamento externo</b>.</div>

<h4>Tipos de manutenção</h4>
<div class="grid">
  <div><b>Corretiva</b><span>Bugs reportados por usuários.</span></div>
  <div><b>Preventiva</b><span>Bugs latentes, que ainda não apareceram.</span></div>
  <div><b>Evolutiva</b><span>Novas funcionalidades pedidas pelo PO.</span></div>
  <div><b>Adaptativa</b><span>Mudanças de regra de negócio, versões de SO, customizações.</span></div>
  <div><b>Refactoring</b><span>Melhorias no código ou no design.</span></div>
</div>

<h4>Leis de Lehman</h4>
<ol class="steps"><li>Software deve ser mantido até que seja mais vantajoso substituí-lo.</li><li>A cada manutenção, a complexidade <b>aumenta</b> e a qualidade <b>diminui</b>, a menos que se trabalhe para evitar isso.</li></ol>

<h4>Catálogo</h4>
<table class="cmp">
  <tr><th>Extração de método</th><td>Objetivo principal: <b>eliminar duplicação</b>. Pode exigir passar parâmetros e retornar variáveis.</td></tr>
  <tr><th>Inline de método</th><td>O inverso: remove um método pequeno que traz pouco benefício. É raro.</td></tr>
  <tr><th>Movimentação</th><td>Leva o método para a classe certa (<b>Pull Up</b> sobe para a superclasse, <b>Push Down</b> desce para a subclasse). Melhora a coesão e reduz o acoplamento.</td></tr>
  <tr><th>Extração de classe</th><td>Divide uma classe que tem responsabilidades demais.</td></tr>
  <tr><th>Renomeação</th><td>O <b>mais popular</b>. O difícil é atualizar todas as referências, e a IDE ajuda (refactoring automático).</td></tr>
</table>
<p>Refactorings bem-sucedidos <b>dependem de testes</b>, principalmente de unidade. Existem dois modos: <b>oportunista</b> (no meio de uma tarefa) e <b>planejado</b> (mudanças profundas e raras).</p>

<h4>Code smells</h4>
<div class="chips"><span>Código duplicado</span><span>Métodos longos</span><span>Classes grandes</span><span>Feature Envy</span><span>Muitos parâmetros</span><span>Variáveis globais</span><span>Obsessão por primitivos</span><span>Objetos mutáveis</span><span>Classes de dados</span><span>Comentários</span></div>

<h4>Débito técnico (Ward Cunningham, 1992)</h4>
<p>Soluções de design não-ótimas que dificultam a manutenção e a evolução. Se não for "pago", a velocidade de implementação cai. Exemplos: falta de testes, falta de build automatizado, alto acoplamento e baixa coesão, ausência de histórias de usuário e casos de uso.</p>
<div class="quote">"I'm not a great programmer; I'm just a good programmer with great habits." <span>Kent Beck</span></div>
`
  }
];
