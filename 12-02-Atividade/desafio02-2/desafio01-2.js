/* Até o momento, a pessoa poderia ganhar um desconto randomicamente (ou não). Agora, o comprador pode colocar um cupom "PROMO15", que garante 15% de desconto no valor do produto. A pessoa pode colocar o código OU ganhar o desconto. 
 
Vamos também inserir questão de frete para o envio da compra. O comprador precisa colocar o estado em que ele está. Se for de SP, o frete custa R$10,00. Se for do RJ, o frete é R$20,00 e, para os demais estados, o frete é R$30,00
 */

function calculo() {
  var numero = parseFloat(document.getElementById("valor").value);
  var cupom = document.getElementById("cupom").value;
  var estados = document.getElementById("estados").value;
  var desconto, frete
  let resultado

  if (cupom == "PROMO15") {
    desconto = numero * 0.15;
  } else {
    desconto = numero * 0.10;
  }


  switch (estados) {
    case "sp":
      frete = 10;
      break;
    case "rj":
      frete = 20;
      break;
    case "outros":
      frete = 30;
      break;
  }


  resultado = numero - desconto + frete;

  alert("Valor original: R$ " + numero + "\nDesconto: R$ " + desconto + "\nFrete: R$ " + frete + "\nValor total: R$ " + resultado);

 
}
