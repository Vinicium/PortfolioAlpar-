/*Faça um programa em Javascript para calcular os valores x1 e x2 da fórmula de Bhaskara,
usando as variáveis a, b e c, e mostre os valores x1 e x2. Usando os operadores de
atribuição e aritméticos*/

let a, b, c, delta, x1, x2, raiz;
a = 4;
b = -3;
c = -1;

delta = b * b - 4 * a * c;

raiz = delta ** (1/2);


x1 = (-b + raiz) / (2 * a);
x2 = (-b - raiz) / (2 * a);

console.log("Raiz x1: "+x1);
console.log("Raiz x2: "+x2);

//console.log(raiz);
