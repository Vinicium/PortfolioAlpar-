const pessoa = {};

pessoa.nome = ["Felipe", "Armando","Paulo"];  
pessoa.genero = "homem";
pessoa.idade = 23;

pessoa.baterPalma = () => {
  for (let i = 0; i < pessoa.nome.length; i++) { 
    console.log(pessoa.nome[i] + " bateu palma"); 
  }
};

pessoa.baterPalma();

const carro={

    modelo: "argo",
    marca: " fiat",
    portas:4,

    andar() {

            console.log(`${this.marca} ${this.modelo} esta andando`)
    }



}

function andarSemthis(){

    console.log(`${carro.marca} ${carro.modelo} esta andando`)
}


andarSemthis()

carro.andar()






function pessoa(nome, idade, email, senha){

    this.nome = nome;
    this.idade = idade;
    this.email = email;
    this.senha = senha;
    this.maiorIdade = true;
    
    if(this.idade <=12 ){

        throw new error ("menor de 13 anos")
        
    }
    if(this.idade <18 ){

     this.maiorIdade = false
        
    }

    this.login =  function(email, senha,){ //validação de email

        if(this.email == email && this.senha == senha){
            console.log("seja bem vindo ",this.nome )

        }else{
            console.log("senha incorreta " )
        }

    }
}


const pessoa1= new pessoa("felipe",25,"fe@Gmail.com","pato123")  

console.log(pessoa1)


pessoa1.login("fe@Gmail.com","pato123")


 


let i = 2

 i **= 2

console.log(i)