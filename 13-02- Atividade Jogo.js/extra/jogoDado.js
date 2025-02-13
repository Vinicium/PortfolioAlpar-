/*  
O jogador inicia com 100 pontos, e pode ganhar ou perder pontos ao "jogar" um dado de 6 faces, de acordo com as regras abaixo:
 
1 - Se o resultado do dado for ímpar, o jogador recebe 10 pontos
2 - Se o resultado do dado for par, o jogador perde 5 pontos.
3 - Se a rodada for múltipla de 3, o jogador ganha 15 pontos
4 - Se a rodada for múltipla de 4, o jogador perde 20 pontos
5 - Se a pontuação do jogador estiver negativa em qualquer momento, ele perde o dobro de pontos até a pontuação estar positiva
 
O jogo é composto por 20 rodadas, e o jogador ganha se ele chegar na 20ª rodada com uma pontuação igual ou superior a 50 pontos.
 
Vocês não podem usar arrays para a execução do desafio
Utilizem os conceitos estudados até o momento para executar
O cálculo da pontuação deverá ser exibido, assim como o número da rodada e o resultado do dado.
A pontuação final deverá ser exibida na última rodada.
Poderá ser exibido em tela avisos de ganho e perda de pontos

  */

 

let parImpar,
  pontos = 100
  ;
//console.log("Pontuação: " + pontos);

for (let i = 1; i <= 20; i++) {

    console.log("Rodada: "+ i)

    let perda = 0    

    let dado = Math.floor(Math.random() * 6) + 1;
    console.log("Valor do dado: "+dado);    

    let par

  if (dado % 2 === 0) {
    par = true;
    //console.log("É par " + par);
  } else {
    par = false;
    //console.log("É ímpar " + par);
  }

 

  if (par === true) {
    perda += 5;
    console.log("dado par perdeu 5 pontos ")
  } else {
    pontos += 10;
    console.log("dado impar ganhou 10 pontos ")
  }

/* 
  if (dado == 6 || dado == 3) {
    pontos += 15;
  }
  if (dado == 4) {
    perda += 20;
  }
  */


  if (i % 3 === 0) {
    pontos += 15;
    console.log("rodada mult. de 3 ganhou 15 pontos");
  }
 
  if (i % 4 === 0) {
    perda += 20;
    console.log("rodada mult. de 4 perdeu 20 pontos");
  }


  if (pontos < 0) {
    perda *= 2;
  }

  pontos -= perda;
 

  console.log("Pontuação: " + pontos+"\n");
}

console.log("Pontuação final: " + pontos);

if(pontos>50){

    console.log("Parabens você ganhou");

}else{
    console.log("Perdeo :(")
}

//esse foi dificil 