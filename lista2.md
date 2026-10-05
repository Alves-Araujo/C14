# Lista 2 — TDD (15 questões)

## 1 (5 pts)
No TDD, *API Definition*, significa testar retornos triviais de métodos e/ou injetar dependências ao instanciar uma classe.
- a) Falso.
- b) Verdadeiro.

## 2 (5 pts)
Um teste unitário feito com TDD pode ser incrementado com diferenças. Essas diferenças devem ser colocadas no mesmo teste para que se tenha um teste complexo ao final.
- a) Falso.
- b) Verdadeiro.

## 3 (10 pts)
Em relação ao desenvolvimento dirigido a testes, *Test-Driven Development* (TDD), assinale abaixo a alternativa **INCORRETA**.
- a) o TDD é uma abordagem para o desenvolvimento de programas em que se intercalam testes e desenvolvimento de código. Essencialmente, é desenvolvido um código de forma incremental, em conjunto com um teste para esse incremento.
- b) no TDD, em princípio, todo segmento de código deve ter pelo menos um teste associado, pois cada código é testado enquanto está sendo escrito.
- c) um ambiente de testes automatizados, como o ambiente JUnit, que suporta o teste de programa Java, é essencial para o TDD.
- d) uma das características do TDD é a dificuldade em realizar testes de regressão.
- e) um argumento a favor do TDD é que ele ajuda os programadores a compreender o que um segmento de código supostamente deve fazer, pois, para escrever um teste, é necessário entender a que ele se destina.

## 4 (5 pts)
A prática de definir e codificar os testes a partir das regras de negócio antes mesmo de implementar a solução denomina-se:
- a) BDD.
- b) CMMI.
- c) DTD.
- d) TDD.
- e) Kanban.

## 5 (5 pts)
O TDD não deve ser usado para guiar o desenvolvimento de uma aplicação. Deve ser usado somente para escrita de testes negativos e integração.
- a) Verdadeiro.
- b) Falso.

## 6 (5 pts)
TDD é uma técnica específica do processo XP (*Extreme Programming*), portanto, só pode ser utilizada em modelos de processo ágeis de desenvolvimento de *software*.
- a) Verdadeiro.
- b) Falso.

## 7 (5 pts)
Após criar um teste com TDD e utilizar o padrão 1, deve-se criar novo teste que induz um pequeno incremento no código de produção sendo criado (Padrão 2).
- a) Falso.
- b) Verdadeiro.

## 8 (10 pts)
É preciso construir *mocks* manuais para testar classes de terceiros, as quais não temos controle sobre o comportamento.
- a) Falso.
- b) Verdadeiro.

## 9 (5 pts)
O ciclo do *TDD - Test Driven Development*, consiste em:
- a) refatorar, executar teste unitário e implementar a funcionalidade.
- b) implementar teste unitário falho, refatorar e tornar o teste bem-sucedido.
- c) implementar a funcionalidade, executar teste unitário e refatorar.
- d) implementar a funcionalidade, refatorar e tornar o teste bem-sucedido.
- e) implementar teste unitário falho, tornar o teste bem-sucedido e refatorar.

## 10 (10 pts)
Pode-se afirmar que este é um teste de caminho infeliz (ou caminho negativo) já que utiliza um ***assertFalse*** para realizar a verificação.

```java
@Test
public void testaRoboDesconectado() {
    RobotConnection robot = new RobotConnection();
    assertFalse(robot.isConnected());
}
```
- a) Verdadeiro.
- b) Falso.

## 11 (5 pts)
Pelo padrão 1 (*API Definition*) deve-se testar o comportamento esperado assim que o objeto é instanciado, caso o padrão seja aplicado para testar uma classe.
- a) Verdadeiro.
- b) Falso.

## 12 (5 pts)
O processo de refatoração que faz parte do TDD deve ser focando em limpeza de código, legibilidade e manutibilidade.
- a) Verdadeiro.
- b) Falso.

## 13 (5 pts)
Podemos citar 3 objetivos principais ao aplicar TDD em um sistema de software:
I - Força a escrita de testes unitários.
II - Favorece a escrita de classes (funcionalidade) com alta testabilidade!
III - Fornece uma maneira incremental de construir testes e funcionalidade.
- a) Verdadeiro.
- b) Falso.

## 14 (10 pts)
Um teste que utiliza o padrão 4 (Tudo funcionando junto) pode ser concebido passando, mesmo utilizando TDD. Isso acontece já que o objetivo foi integrar, e não adicionar nova funcionalidade.
- a) Verdadeiro.
- b) Falso.

## 15 (10 pts)
Considere as seguintes afirmações sobre Desenvolvimento Guiado por Testes (TDD).
I - Uma das regras simples do TDD é que será escrito um código novo apenas se falhar um teste automatizado.
II - Os padrões que podemos utilizar para criar um teste unitário com TDD são: Definição da interface, teste diferencial, teste excepcional e integração.
III - Vermelho-Verde-Refatorar é o "mantra" que resume o ciclo geral de TDD: vermelho – escrever um pequeno teste que não funcione e que talvez nem mesmo compile inicialmente; verde – fazer rapidamente o teste funcionar, mesmo incorrendo em alguma infração necessária; refatorar – eliminar todo código "sujo" criado, para que apenas o teste funcione.

Marque a opção correta.
- a) I, II e III.
- b) Apenas II e III.
- c) Apenas I e II.
- d) Apenas I.
- e) Apenas I e III.
