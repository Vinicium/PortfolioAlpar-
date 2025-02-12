/* Melhore o programa de Bhaskara do desafio anterior, adicionando IFs para verificar se:
a) A variável “a” é válida (não pode ser zero);
b) Se não existem raízes reais, e informar;
c) Se existe apenas uma raiz real, e informar essa raiz;
d) Se existem duas raízes reais, e as informar. */

let a, b, c, delta, x1, x2, raiz;
a = 1;
b = 5;
c = 6;

/* a = 1;
   b = 2;
   c = ;
*/

delta = b * b - 4 * a * c;

raiz = delta ** (1 / 2);

if (delta < 0 || a == 0){
    console.log("Nao existem raizes reais");
} else {

    x1 = (-b + raiz) / (2 * a);
    x2 = (-b - raiz) / (2 * a);
    
    if (delta === 0) {
        console.log("A raiz real é: "+ x1)
      } else {
        console.log("As raizes x1 e x2 sao reais");
        console.log("x1: " + x1);
        console.log("x2: " + x2);
      }
   
} 




