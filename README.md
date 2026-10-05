# C14 · Estudos

Site de estudos para **C14 – Engenharia de Software** (Inatel). Estático, sem build: é só abrir o `index.html` ou publicar no GitHub Pages.

## O que tem

- **Listas**: as 3 listas de exercícios da disciplina (53 questões), com correção na hora e gabarito comentado.
  - Lista 1: Git, testes automatizados, mocks e build
  - Lista 2: TDD e padrões para criação de testes
  - Lista 3: DevOps, CI/CD e pipeline
- **Resumo**: as 12 aulas condensadas em 11 tópicos, com busca, índice que acompanha a rolagem e as pegadinhas de prova destacadas.
- **Exercícios**: 77 questões inéditas baseadas no material, em três modos:
  - *Praticar*: filtrar por tópico e responder no seu ritmo
  - *Simulado*: questões sorteadas, uma por vez, com nota e revisão dos erros no final
  - *Flashcards*: 46 cartões que viram com clique, espaço ou swipe
- Tema claro e escuro, layout para celular e progresso salvo no navegador (`localStorage`).

## Rodar localmente

```bash
python3 -m http.server 8000
```

Depois é só abrir http://localhost:8000. Abrir o `index.html` direto também funciona.

## Publicar no GitHub Pages

1. Suba o repositório para o GitHub.
2. Vá em **Settings → Pages**, escolha **Deploy from a branch**, a branch `main` e a pasta `/ (root)`.
3. O site fica em `https://<seu-usuario>.github.io/<nome-do-repo>/`.

## Estrutura

```
index.html
css/style.css
js/app.js               # interface: rotas, quiz, simulado, flashcards
js/data/listas.js       # listas do professor + gabarito comentado
js/data/resumo.js       # resumo por tópico (HTML)
js/data/exercicios.js   # exercícios inéditos + flashcards
```

Para adicionar uma questão, basta incluir um objeto no arquivo de dados correspondente (`enunciado`, `opcoes`, `correta` com o índice da alternativa começando em 0, e `explicacao`).

## Observações

- Algumas questões das listas são ambíguas e estão marcadas com **Atenção** no gabarito.
- Material de referência: aulas do Prof. Christopher Lima e o livro [Engenharia de Software Moderna](https://engsoftmoderna.info) (Marco Tulio Valente).
