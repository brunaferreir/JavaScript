/*4. A partir do preço à vista de um determinado produto, calcule o preço total a pagar e o
valor da prestação mensal, referentes ao pagamento parcelado. Se o pagamento for
parcelado em 3 vezes deve ser dado um acréscimo de 10% no total a ser pago. Se o
parcelamento for em 5 vezes, o acréscimo será de 20%.*/

let preco = 1000;
let parcela = 0;
let precoTotal = 0;
let valorParcela = 0;

if(parcela == 3){
  precoTotal = preco + (preco*10)/100;
  valorParcela = precoTotal/3
  console.log("Valor parcelado em 3");

}else if(parcela == 5){
    precoTotal = preco + (preco*20)/100;
    valorParcela = precoTotal/5
    console.log("Valor parcelado em 5");
}else{
    console.log("Parcela invalida!");
}

console.log("Valor total das parcelas:", precoTotal);
console.log("Valor de cada parcela:", valorParcela);
