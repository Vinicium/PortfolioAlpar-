/* 
Criar uma calculadora de impostos.
 
A calculadora precisa conter 3 variáveis: uma que recebe um preço de um produto(em decimal, por favor), uma que informe se o produto tem direito a desconto 
(desconto de 10%), e o ICMS (que pode variar entre 12 e 25%)
 
O ICMS deverá ser calculado após o produto receber (ou não desconto). 
 
O progama deverá retornar o valor do produto original, se ele teve desconto, o valor do produto com desconto e o valor do produto com o imposto aplicado. 
 
Pra tornar as coisas mais interessantes, como o valor do imposto é variável, vamos brincar de loteria e deixar o valor do imposto randômico (entre os valores informados.... 12 a 25%)
*/

function getrandomint(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}

function calcImposto(){

    valorProd = Number(document.getElementById("prodValue").value)
    desc = document.getElementById("descProd").checked
    let imposto = getrandomint(12, 25)

    if (desc == true){
        let descValor = valorProd - (valorProd * 0.1) 
        let icsmsValor = valorProd* (imposto / 100)
        alert(`Valor do produto com desconto: ${descValor.toFixed(2)}\nValor do imposto ${icsmsValor.toFixed(2)}\nValor do produto final ${(descValor - icsmsValor).toFixed(2)}`)
    } else{
        console.log(`Valor do produto sem desconto: ${valorProd}`)
        let icsmsValor = valorProd * (imposto / 100)
        console.log(`Valor do Imposto: ${icsmsValor} com ICMS de: ${imposto}%`)
        console.log(`Valor do produto final ${valorProd - icsmsValor}\n`)
    }
}




