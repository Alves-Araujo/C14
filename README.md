<p align="center">
  <img src="./assets/banner.svg" width="100%" alt="C14 · Estudos" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-0D1117?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript" />
  <img src="https://img.shields.io/badge/HTML5-0D1117?style=for-the-badge&logo=html5&logoColor=E34F26" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-0D1117?style=for-the-badge&logo=css&logoColor=1572B6" alt="CSS3" />
</p>

<p align="center">
  <a href="https://alves-araujo.github.io/C14/">
    <img src="https://img.shields.io/badge/%E2%86%92_Acessar_o_site-ff3ee0?style=for-the-badge&labelColor=0D1117" alt="Acessar o site" />
  </a>
</p>

> **Do commit ao deploy, em 130 questões e um resumo.**

Site de estudo para **C14 — Engenharia de Software** (Inatel), montado a partir das
12 aulas e das 3 listas de exercícios da disciplina. Cada questão tem o gabarito e
um comentário explicando por que a resposta é aquela.

Sem back-end, sem login e sem build: HTML, CSS e JavaScript puro, servido direto
pelo GitHub Pages.

## O que tem dentro

O site tem três seções no topo: **Listas**, **Resumo** e **Exercícios**.

### Listas

As 3 listas do professor, com correção na hora e gabarito comentado.

| Lista | Assunto | Questões |
| --- | --- | ---: |
| 1 | Git, testes automatizados, mocks e build | 18 |
| 2 | TDD e padrões para criação de testes | 15 |
| 3 | DevOps, CI/CD e pipeline | 20 |
| | **Total** | **53** |

### Resumo e exercícios

As 12 aulas condensadas em 11 tópicos. Cada tópico tem exercícios inéditos e
flashcards próprios.

| Tópico | Aula | Exercícios | Flashcards |
| --- | --- | ---: | ---: |
| Fundamentos de Engenharia de Software | 01–02 | 5 | 2 |
| Build e dependências com Maven | 03 | 6 | 4 |
| Controle de versão com Git | 04 | 7 | 3 |
| Teste de software | 05 | 4 | 2 |
| Teste de unidade com JUnit | 06 | 9 | 7 |
| Teste mock e injeção de dependência | 07 | 7 | 5 |
| TDD e padrões para criar testes | 06 e 08 | 6 | 5 |
| DevOps, CI e CD | 09 | 8 | 6 |
| Métodos ágeis: XP, Scrum e Kanban | 10 | 11 | 6 |
| Engenharia de requisitos e MVP | 11 | 6 | 3 |
| Refactoring e débito técnico | 12 | 8 | 3 |
| **Total** | | **77** | **46** |

Somando as listas, são **130 questões**.

## Como se estuda nele

| Recurso | O que faz |
| --- | --- |
| **📋&nbsp;Listas** | Clicou, corrigiu: a alternativa certa fica verde, a errada vermelha, e o comentário aparece logo abaixo. O botão **Mostrar gabarito** abre todas as respostas de uma vez. |
| **📖&nbsp;Resumo** | Um tópico por aula, com índice que acompanha a rolagem, busca no texto e as pegadinhas de prova destacadas. |
| **✍️&nbsp;Praticar** | Os exercícios inéditos filtrados por tópico, no seu ritmo, com barra de progresso e placar de certas e erradas. |
| **🎯&nbsp;Simulado** | 10, 20, 30 ou todas as questões, sorteadas e uma por vez. No fim mostra a nota e revisa o que você errou. Atalhos: `A`–`E` respondem e `Enter` avança. |
| **🧠&nbsp;Flashcards** | 46 cartões que viram com clique, `espaço` ou swipe. `←` `→` trocam de cartão. |
| **⚠️&nbsp;Questões&nbsp;marcadas** | Quatro questões das listas são ambíguas e têm um aviso de **Atenção** no gabarito, explicando as duas leituras possíveis. |
| **📊&nbsp;Progresso** | Os anéis da página inicial acompanham cada lista e os exercícios. Fica no `localStorage` do navegador; nada é enviado para lugar nenhum. |

O tema claro/escuro tem um botão no topo, e o layout funciona no celular. As
animações são desligadas se o sistema estiver com `prefers-reduced-motion`.

## Rodar localmente

Basta abrir o `index.html` no navegador. Para servir por HTTP:

```bash
python3 -m http.server 8000
```

E acessar <http://localhost:8000>.

## Publicar sua própria cópia

O site é estático, então basta apontar o GitHub Pages para a raiz do repositório:
**Settings → Pages → Source: Deploy from a branch → Branch `main` / `(root)`**.

> O arquivo `.nojekyll` já vem incluso para o GitHub não processar nada com o Jekyll.

## Estrutura

```
.
├── index.html
├── assets/banner.svg        → banner deste README
├── css/style.css
├── js/
│   ├── app.js               → rotas, quiz, simulado e flashcards
│   └── data/
│       ├── listas.js        → listas do professor + gabarito comentado
│       ├── resumo.js        → resumo por tópico (HTML)
│       └── exercicios.js    → exercícios inéditos + flashcards
├── lista1.md … lista3.md    → as listas em texto
├── material/                → as aulas em Markdown
└── .nojekyll
```

## Onde mexer nas questões

Tudo fica em `js/data/`. Para adicionar uma questão, basta incluir um objeto no
arquivo correspondente:

```js
// exercicios.js
{ topico: "git",                       // id de um tópico do RESUMO
  enunciado: "texto (aceita <b>HTML</b>)",
  opcoes: ["alt A", "alt B", "alt C"],
  correta: 1,
  explicacao: "comentário do gabarito" }

// flashcards, no mesmo arquivo
{ topico: "git", frente: "pergunta", verso: "resposta" }
```

- `correta` é o **índice** da alternativa certa, começando em `0`.
- Questões verdadeiro/falso usam `opcoes: VF`, com `correta: V` ou `correta: F`.
- Nas listas, o campo `atencao` mostra o aviso amarelo de questão ambígua.

## Limites conhecidos

- **As respostas salvas são guardadas por posição** (o índice da questão no array).
  Se você reordenar ou apagar questões, quem já respondeu vê as respostas nas
  questões erradas. Acrescentar no fim do array não tem esse problema.

## Aviso

O gabarito e os comentários **não são oficiais**. As questões marcadas com
**Atenção** dependem de como o professor encara o enunciado: confira com ele antes
da prova.

Conteúdo baseado nas aulas do **Prof. Christopher Lima** (Inatel) e no livro
[Engenharia de Software Moderna](https://engsoftmoderna.info), de Marco Tulio
Valente. Material de estudo pessoal, sem fins comerciais.
