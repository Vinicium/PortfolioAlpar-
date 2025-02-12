// Criar uma calculadora de impostos.

// A calculadora precisa conter 3 variáveis: uma que recebe um preço de um produto(em decimal, por favor), uma que informe se o produto tem direito a desconto (desconto de 10%), e o ICMS (que pode variar entre 12 e 25%)

// O ICMS deverá ser calculado após o produto receber (ou não desconto).

// O progama deverá retornar o valor do produto original, se ele teve desconto, o valor do produto com desconto e o valor do produto com o imposto aplicado.

// Pra tornar as coisas mais interessantes, como o valor do imposto é variável, vamos brincar de loteria e deixar o valor do imposto randômico (entre os valores informados.... 12 a 25%)


  let desconto, valor, icms;

  valor = 22.4;

  desconto = Math.random() < 0.5;

  icms = Math.floor(Math.random() * (25 - 12 + 1)) + 12;
  console.log(icms);

  if (desconto == true) {
    valor -= valor * (10 / 100);

    valor -= valor * (icms / 100);

    console.log("Valor com 10% de desconto e " + icms + "% de icms: " + valor);
  } else {
    valor -= valor * (icms / 100);

    console.log("Valor com " + icms + "% de icms: " + valor);
  }
 
