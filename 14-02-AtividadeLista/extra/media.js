/* 
Vocês vão criar um sistema de análise de desempenho de uma equipe. 
 
A quantidade de membros da equipe fica de acordo com o gosto de vocês, desde que seja um mínimo de 3 pessoas. 
 
Cada pessoa receberá uma pontuação com base na quantidade de tarefas que forem completadas e, para considerar a nota final, deverão ser levados em conta os seguintes critérios:
 
1) Cada tarefa recebe uma pontuação de 0 a 10
2) o número de tarefas varia entre 5 e 10, por pessoa da equipe.
 
A pontuação final de cada membro é feita de acordo com a média ponderada. Ou seja, tarefas ímpares recebem peso 2, enquanto tarefas pares recebem peso 1. 
 
Caso a média ponderada de um membro seja maior que 8, ele recebe um bônus de 2 pontos. 
 
O sistema precisa retornar o nome e a média de cada pessoa do time, quem teve o melhor desempenho, e quem teve o pior desempenho */
 



function numeroAleatorio(min, max) { //dava pra usar pra fazer nomes aleatorios tbm
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



function numeroEquipe(nomes) {
  let equipe = nomes.map(nome => {
      let numTarefas = numeroAleatorio(5, 10); //gera quantidade de tarefas entre 5 e 10
      let pontuacoes = Array.from({ length: numTarefas }, () => numeroAleatorio(0, 10)); //gera a nota das tarefas 
      return { nome, pontuacoes };
  });
  return equipe;
}



function calcularMedia(pontuacoes) {
  let somaPesos = 0;
  let somaPonderada = 0;

  pontuacoes.forEach((nota, i) => {
      let peso = (i + 1) % 2 === 0 ? 1 : 2; // verifica se é par ou impar
      somaPonderada += nota * peso;
      somaPesos += peso;
  });

  let media = somaPonderada / somaPesos;
  return media > 8 ? media + 2 : media;
}



function analisarDesempenho(equipe) {
  let resultados = equipe.map(membro => {
      let media = calcularMedia(membro.pontuacoes);
      return { nome: membro.nome, media: media.toFixed(2) };//tofixed limita as casas decimais
  });

  resultados.sort((a, b) => b.media - a.media);

  console.log("Desempenho da equipe:");
  resultados.forEach(function(membro) {//foreach roda por todos os itens do array
      console.log(membro.nome + ": Média " + membro.media);
  });
  
  console.log("Melhor desempenho: " + resultados[0].nome +" "+ resultados[0].media );
  console.log("Pior desempenho: " + resultados[resultados.length - 1].nome +" "+ resultados[resultados.length - 1].media );
  
}



let equipeNomes = ["Diego", "Macelo", "Kevin"];
let equipe = numeroEquipe(equipeNomes, 3);  

analisarDesempenho(equipe);

 //console.log(equipe[0].pontuacoes)