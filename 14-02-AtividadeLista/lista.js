/*   Crie um programa simples que simula um gerenciador de lista de compras. O usuário
poderá adicionar itens à lista, remover itens e visualizar a lista de compras. O programa
deve usar vetores (arrays) e funções para organizar o código.
Instalando e Usando o Prompt no Node.js:
Como estamos usando o Node.js, não temos o prompt() nativo do navegador. Para capturar
a entrada do usuário no terminal, podemos usar a biblioteca prompt-sync.
Passo 1: Instalar o prompt-sync
Abra o terminal na pasta do projeto e execute o seguinte comando:
npm install prompt-sync
Passo 2: Importar o módulo no código
No início do arquivo .js, importe o prompt-sync:
const prompt = require("prompt-sync")();
Agora podemos capturar a entrada do usuário com:
let nome = prompt("Digite seu nome: ");
console.log(`Olá, ${nome}!`);
Regras:
1. O programa deve ter um array chamado listaDeCompras que começa vazio.
2. Deve oferecer as seguintes opções ao usuário:
o Adicionar um item à lista.
o Remover um item da lista.
o Exibir os itens da lista.
o Sair do programa.
3. O programa deve rodar até que o usuário escolha sair.
4. As funções devem ser utilizadas para organizar as operações principais:
o adicionarItem(item): Adiciona um item ao array.
o removerItem(item): Remove um item do array (se existir).
o exibirLista(): Mostra todos os itens da lista no console.
Dicas:
 Use console.log() para exibir mensagens.
 Para manter o programa rodando, utilize um loop while e um switch-case para as
opções.
 Você pode pesquisar na internet como usar ou como fazer alguma parte do
programa, mas tente não usar IA para resolver o desafio, não engane a si mesmo   */

const prompt = require("prompt-sync")();

const listaDeCompras = [];

function adicionar() {
  console.log("\nDigite um item para adicionar:");
  item = prompt();
  listaDeCompras.push(item);

  console.log("\nItem '" + item + "' adicionado!\n");

  menu();
}

function exibir() {
  console.log(" ");

  if (listaDeCompras.length > 0) {
    for (let i = 0; i < listaDeCompras.length; i++) {
      console.log(i + 1 + " - " + listaDeCompras[i]);
    }
  } else {
    console.log("\nNenhum item na lista.");
  }

  menu();
}

function remover() {
  console.log("\nDigite o nome de um item para removelo: \n");
  let itemRemover = prompt();

  let position = listaDeCompras.lastIndexOf(itemRemover);

  if (position != -1) {
    listaDeCompras.splice(position, 1);
    console.log("\nItem " + itemRemover + " removido com sucesso.");
  } else {
    console.log("Nenhum item com esse nome encontrado");
  }

  menu();
}

menu();

function menu() {
  let menu = 0;

  //aparentemente se o texto no prompt for muito longo ele se repete
  console.log(
    "\nEscolha uma opção para proseguir:\n1 - Adicionar item\n2 - Remover item\n3 - Exibir lista\n4 - Sair\n"
  );
  menu = parseInt(prompt());

  if (menu > 4 || menu < 1) {
    console.log("Digite uma opção valida.\n");
  } else {
    switch (menu) {
      case 1:
        adicionar();
        break;
      case 2:
        remover();
        break;
      case 3:
        exibir();
        break;
      case 4:
        console.log("\nbye");
        return;
        break;
    }
  }
}
