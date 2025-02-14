/* Crie um programa que simula um jogo de adivinhação. O programa deve gerar um número
aleatório entre 1 e 100 e permitir que o usuário tente adivinhar o número. O programa
deve informar se o palpite é maior ou menor que o número secreto até que o usuário
acerte.
Regras:
1. O número secreto deve ser gerado aleatoriamente entre 1 e 100.
2. O usuário pode fazer quantas tentativas quiser até acertar.
3. Após cada tentativa, o programa deve exibir se o número é maior ou menor que o
palpite.
4. Quando o usuário acertar, o programa deve exibir uma mensagem de parabéns e o
número de tentativas usadas.
Dica:
Para gerar um número aleatório em Javascript, você pode usar o código:
Math.round(Math.random() * 100);
Math.random() é uma função que gera um número aleatório entre 0 e 1, e multiplicando
por um número, você pode obter valores entre 0 e o número escolhido;
Math.round() arredonda um número para inteiro, 5.4 é arredondado para 5, e 5.5 é
arredondado para 6 */

let numeroSecreto = Math.round(Math.random() * 100);
let tentativas = 0;
let acertou = false;

while (!acertou) {
  let chute = prompt("Digite um número entre 1 e 100:");

  if (chute === null) {
    alert("Jogo cancelado.");
    break;
  }

  chute = Number(chute);

  /* isNaN(chute)verifica se é numero */
  if (isNaN(chute) || chute < 1 || chute > 100) {
    alert("Número inválido.");
    continue;
  }

  tentativas++;

  if (chute === numeroSecreto) {
    acertou = true;
    alert(
      `Parabéns! Você acertou o número secreto (${numeroSecreto}) em ${tentativas} tentativas.`
    );
  } else if (chute > numeroSecreto) {
    alert("Tente um número mais baixo.");
  } else {
    alert("Tente um número mais alto.");
  }
}
