# Aula-11_Requisitos.pptx


## Slide 1
- C14 – Engenharia de Requisitos
- Prof. Christopher Lima
- christopher@inatel.br
- 1

## Slide 2
- Requisitos
- Requisitos: definem o que um sistema deve fazer e sob quais restrições.
- 2
- Requisitos Funcionais
- Requisitos Não-Funcionais

## Slide 3
- Requisitos
- Requisitos Funcionais: O que o sistema fará.
- Play no vídeo
- Configurar idioma
- Gerenciar volume
- Pausar vídeo
- Requisitos Não-Funcionais: Como o sistema fará.
- Desempenho: Transações por segundo, tempo de resposta, latência, vazão (throughput)
- Espaço: Uso de disco, RAM, cache
- Confiabilidade: % de disponibilidade, tempo médio entre falhas (MTBF)
- Robustez: Tempo para recuperar o sistema após uma falha (MTTR); probabilidade de perda de dados após uma falha
- Usabilidade: Tempo de treinamento de usuários
- 3

## Slide 4
- Requisitos – Uso de métricas
- Uso de métricas evita especificações genéricas, como “o sistema deve ser rápido e ter alta disponibilidade”.
- Define-se que deve ter 99,99% de disponibilidade e que 99% de todas as transações realizadas em qualquer janela de 5 minutos devem ter um tempo de resposta máximo de 1 segundo.
- 4

## Slide 5
- Requisitos
- Requisitos de usuário:
- Mais alto nível
- Escrito por usuário, normalmente em linguagem natural.
- Sem detalhes técnicos
- Requisitos de sistema:
- Técnicos
- Escritos pelos developers/Testers
- Requisitos Funcionais e Não-Funcionais.
- 5

## Slide 6
- Requisitos
- Suponha um sistema bancário:
- O sistema deve permitir transferências de valores para uma conta corrente de outro banco, por meio de PIX.
- 6
- Esse requisito de usuário dá origem a um conjunto de requisitos de sistema. Os quais terão detalhes técnicos.
- Ex: Protocolo de comunicação;

## Slide 7
- 7

## Slide 8
- Engenharia de Requisitos
- “Engenharia de Requisitos é o nome que se dá ao conjunto de atividades relacionadas com a descoberta, análise, especificação e manutenção dos requisitos de um sistema.”
- 8
- Essa atividade é realizada de modo sistemático, ao longo de todo ciclo de vida de um produto de software.

## Slide 9
- Engenharia de Requisitos
- Elicitação de Requisitos: descoberta (discovery) e entendimento dos requisitos de um sistema. Geralmente feito por um PO.
- No nosso contexto de software, elicitar significa falar com os clientes com o objetivo de “fazer sair” – descobrir e entender – os principais requisitos do produto de software.
- 9

## Slide 10
- 10
- Dilbert explica os requisitos de software

## Slide 11
- Engenharia de Requisitos
- Como realizar o processo de descoberta?
- Entrevistas com clientes
- Aplicação de questionários
- Leitura de documentos e formulários da organização que
- está contratando o sistema.
- Workshops
- Implementação de protótipos e POCs
- Análise de cenários de uso
- 11

## Slide 12
- Engenharia de Requisitos
- Como realizar o processo de descoberta?
- Existe também o processo de descoberta baseado em estudos etnográficos.
- Da Antropologia: estudo de cultura no seu ambiente natural.
- Requer que o desenvolvedor(a) se integre ao ambiente de trabalho do cliente e observe  — normalmente, por alguns dias — como ele desenvolve suas atividades
- 12

## Slide 13
- Engenharia de Requisitos
- O que fazer após a descoberta?
- (1) documentar,
- (2) verificar e validar,
- (3) priorizar
- 13

## Slide 14
- Engenharia de Requisitos
- No caso do desenvolvimento ágil (nosso foco):
- Documentação simplificada: histórias de usuários
- 14
- Estudamos no capítulo anterior.

## Slide 15
- Engenharia de Requisitos
- Atenção: Na documentação os requisitos devem ser:
- (1) corretos,
- (2) precisos,
- (3) completos,
- (4) consistentes,
- (5) verificáveis.
- 15

## Slide 16
- Engenharia de Requisitos
- Após documentados os requisitos devem ser:
- (1) priorizados!
- 16

## Slide 17
- Engenharia de Requisitos
- Após priorizados, o que pode acontece com os requisitos?
- (1) MUDAR!
- 17

## Slide 18
- Engenharia de Requisitos
- ...e com a documentação?
- (1) Documentação deve ser atualizada!
- 18

## Slide 19
- Engenharia de Requisitos
- ...e com o código?
- (1) Código fonte deve ser atualizado!
- 19

## Slide 20
- Engenharia de Requisitos
- ...o código deve estar bem escrito para garantir a:
- (1) rastreabilidade (traceability)
- 20

## Slide 21
- Engenharia de Requisitos
- A engenharia de requisitos é
- (1) Atividade multidisciplinar e complexa
- (2) clientes podem não colaborar
- 21

## Slide 22
- O que acontece no mundo real? (Resultados obtidos em (link))
- Requisitos incompletos ou não-documentados (48%)
- Falhas de comunicação entre membros do time e os clientes (41%)
- Requisitos em constante mudança (33%)
- Requisitos especificados de forma abstrata (33%)
- Restrições de tempo (32%)
- Problemas de comunicação entre os próprios membros do time (27%)
- Stakeholders com dificuldades de separar requisitos e soluções (25%)
- Falta de apoio dos clientes (20%)
- Requisitos inconsistentes (19%)
- Falta de acesso às necessidades dos clientes ou do negócio (18%)
- 22

## Slide 23
- Engenharia de Requisitos
- Requistios são a “ponte” entre problema e solução de software.
- 23

## Slide 24
- Engenharia de Requisitos
- ...vimos 2 abordagens até agora para “traduzir” do mundo real para o software.
- 24

## Slide 25
- Engenharia de Requisitos
- (1) Documentos simplificados de especificação:
- 25
- Histórias de Usuários

## Slide 26
- Engenharia de Requisitos
- (2) Especificação de requisitos mais detalhadas:
- 26
- Casos de Uso

## Slide 27
- Engenharia de Requisitos
- ...uma terceira situação pode acontecer:
- Não sabemos se o problema é de fato um problema.
- Mercados incertos ou desconhecidos.
- 27

## Slide 28
- Engenharia de Requisitos
- ...uma terceira situação pode acontecer:
- Não sabemos se o problema é de fato um problema.
- 28

## Slide 29
- Engenharia de Requisitos
- (3) Construção de um Produto Mínimo Viável (MVP)
- 29

## Slide 30
- Engenharia de Requisitos
- “MVP é um sistema funcional, que possui apenas o conjunto mínimo de funcionalidades necessárias para comprovar a viabilidade de um produto”.
- 30

## Slide 31
- Produto Mínimo Viável (MVP)
- Popularizado no livro Lean Startup de Eric Ries (link)
- Inpirado nos princípios de Manufatura Lean (Toyota) -> Kanban
- ...relembrando: Eliminar desperdícios!!
- 31

## Slide 32
- Produto Mínimo Viável (MVP)
- Qual o maior desperdício que pode existir no desenvolvimento de produtos de software?
- 32
- Levantar e implementar requisitos que não serão usados!!

## Slide 33
- Produto Mínimo Viável (MVP)
- O melhor a se fazer é perceber a falha do sistema rapidamente:
- Por não ter sucesso!
- Por não ter usuários!
- Por não resolver um problema adequadamente!
- ...
- 33

## Slide 34
- Produto Mínimo Viável (MVP)
- Objetivos do MVP:
- Testar a viabilidade de continuar investindo em um produto.
- Testar uma hipótese de negócio.
- 34

## Slide 35
- Produto Mínimo Viável (MVP)
- Lean startup propõe:
- Método sistemático e científico para construção e validação de MVPs.
- 35
- As métricas coletadas e analisadas geram o: Aprendizado validado!

## Slide 36
- Produto Mínimo Viável (MVP)
- ...com o aprendizado, pode-se concluir que:
- (1) São necessários mais testes
- (2) Testes bem sucedidos, achou-se o mercado para o produto (market fit).
- (3) Falhou
- (3.1) Desistir do produto
- (3.2) Abandonar a ideia origial e tentar um novo MVP.
- 36

## Slide 37
- Produto Mínimo Viável (MVP)
- Cuidado com as métricas de vaidade (vanity metrics)
- Exemplo: número de visualizações de uma página em um site de comércio eletrônico.
- Bastante acesso, mas os produtos são comprados?
- 37

## Slide 38
- Produto Mínimo Viável (MVP)
- É melhor utilizar as métricas acionáveis (actionable metrics) (resultados concretos)
- Exemplo: Percentual de visitantes de uma página de comércio eletrônico que fecharam as compras, valor de cada ordem, número de itens comprados, etc.
- 38

## Slide 39
- Para avaliar MVPs que incluem vendas de produtos, costuma-se usar métricas de funil (funnel metrics)
- 39

## Slide 40
- Exemplos de MVPs
- Zappos – 1999
- Fotos de sapatos em uma página WEB muito simples.
- Processamento todo era feito manualmente.
- Ideia foi validada e Amazon comprou Zappos por mais de U$ 1 bilhão
- 40

## Slide 41
- Exemplos de MVPs
- Dropbox
- Vídeo simples gravado para mostrar a ideia.
- Software básico com arquivos dummy.
- Interesse passou de 5k para 75k (early adopters)
- 41

## Slide 42
- Quem deve usar MVPs?
- É uma mecanisno para lidar com incerteza. Qualquer organização, privada, pública, pequenas, médias ou grandes, dos mais diversos setores.
- 42

## Slide 43
- Quando não usar MVPs?
- Quando o mercado de um produto de software foi estável e conhecido.
- Sistemas de missão crítica.
- Está fora de cogitação construir um MVP para pacientes de UTIs.
- 43

## Slide 44
- MVP = Protótipo?
- Protótipo não são necessariamente produtos mínimos.
- Protótipo não são necessariamente para testar a viabilidade de um produto.
- 44

## Slide 45
- MVPs são de baixa qualidade?
- A qualidade precisa ser a mínima para que o produto mínimo funcione.
- A viabilidade precisa ser testada, portanto, o produto precisa funcionar mesmo que seja minimamente.
- 45

## Slide 46
- 46

## Slide 47
- C14 – Engenharia de Requisitos
- Prof. Christopher Lima
- christopher@inatel.br
- 47