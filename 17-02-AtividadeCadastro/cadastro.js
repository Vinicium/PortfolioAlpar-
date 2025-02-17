/* Crie um programa simples que permite ao usuário gerenciar um cadastro de pessoas.
Cada pessoa terá um nome, idade e e-mail armazenados como um objeto dentro de um
array. O usuário poderá adicionar, remover e listar os cadastros.
Regras:
1. O programa deve armazenar os usuários em um array de objetos, onde cada
objeto representa uma pessoa com as propriedades:
o nome
o idade
o email
2. O usuário poderá escolher entre as seguintes opções:
o Adicionar um novo usuário.
o Remover um usuário pelo email.
o Listar todos os usuários cadastrados.
o Sair do programa.
3. O programa deve rodar até que o usuário escolha sair.
4. Não pode haver mais de um usuário com o mesmo e-mail. */

const prompt = require("prompt-sync")();

const dados = [];

function pessoa(nome, idade, email) {
  this.nome = nome;
  this.idade = idade;
  this.email = email;
}

function adicionar() {
  console.log("\nDigite o nome :");
  const nome = prompt();

  console.log("\nDigite a idade :");
  const idade = prompt();

  console.log("\nDigite o email:");
  const email = prompt();

  const usuario = new pessoa(nome, idade, email);

  if (vericaEmail(usuario) == true) {
    dados.push(usuario);
  } else {
    console.log("\nemail já cadastrado");
  }

  menu();
}

function vericaEmail(usuario) {
  for (const fpessoa of dados) {
    if (fpessoa.email === usuario.email) {
      return false;
    }
  }
  return true;
}

function remover() {
  console.log("\nDigite o email para remover o usuario: \n");
  let itemRemover = prompt();

  const usuario = dados.find((item) => item.email === itemRemover);

  if (usuario) {
    const index = dados.indexOf(usuario);
    dados.splice(index, 1);
    console.log("\nUsuário removido com sucesso!");
  } else {
    console.log("\nUsuário não encontrado.");
  }

  menu();
}

function exibir() {
  if (dados.length > 0 > 0) {
    dados.forEach((usuario) => {
      console.log(
        "\nNome: " +
          usuario.nome +
          " Idade: " +
          usuario.idade +
          " Email: " +
          usuario.email
      );
    });
  } else {
    console.log("\nNenhum usuario registrado");
  }

  menu();
}

menu();

function menu() {
  let menu = 0;

  //aparentemente se o texto no prompt for muito longo ele se repete
  console.log(
    "\nEscolha uma opção para proseguir:\n1 - Adicionar usuario\n2 - Remover usuario\n3 - Listar usuarios\n4 - Sair\n"
  );
  menu = parseInt(prompt());

  if (menu > 4 || menu < 1) {
    console.log("\nDigite uma opção valida.\n");
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
