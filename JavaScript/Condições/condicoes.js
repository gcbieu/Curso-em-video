/*
========================================
        CONDIÇÕES EM JAVASCRIPT
========================================


1. CONDIÇÃO SIMPLES

Tem somente o IF.

        condição
           ↓
       ┌── if ──┐
       ↓
     código

Estrutura:
*/

if (condição) {
    // executa se a condição for verdadeira
}


/*
----------------------------------------

2. CONDIÇÃO COMPOSTA

Tem IF e ELSE.
Existem dois caminhos.

           condição
          /       \
       true       false
        ↓           ↓
       IF          ELSE
        \           /
         └────┬────┘
              ↓

Estrutura:
*/

if (condição) {
    // verdadeiro
} else {
    // falso
}


/*
----------------------------------------

3. CONDIÇÃO ANINHADA

Uma condição fica dentro/encadeada com outra.
Usamos IF, ELSE IF e ELSE.

             condição
            /       \
         true       false
          ↓           ↓
        código     outra condição
                   /          \
                true          false
                 ↓              ↓
               código         código

Estrutura:
*/

if (condição1) {

    // caminho 1

} else if (condição2) {

    // caminho 2

} else {

    // caminho 3
}


/*
----------------------------------------

4. CONDIÇÃO MÚLTIPLA

Uma expressão pode levar a VÁRIOS caminhos.

                 expressão
              /    |    |    \
             ↓     ↓    ↓     ↓
           caso1 caso2 caso3 caso4
             \     |    |     /
              \    |    |    /
                   ↓

Usamos SWITCH / CASE.
break são obrigatorio

Estrutura:
*/

switch (expressão) {

    case valor1:
        // código
        break

    case valor2:
        // código
        break

    case valor3:
        // código
        break

    default:
        // nenhum dos casos anteriores
        break
}


/*
========================================
              RESUMÃO
========================================

SIMPLES
→ if


COMPOSTA
→ if / else


ANINHADA
→ if / else if / else


MÚLTIPLA
→ switch / case


========================================
*/