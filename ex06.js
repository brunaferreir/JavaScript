/*6. Escreva um algoritmo que receba dois números reais e um código de seleção do usuário.
Se o código digitado for 1, faça o algoritmo adicionar os dois números previamente
digitados e mostrar o resultado; se o código de seleção for 2, os números deverão ser
multiplicados; se o código de seleção for 3, o primeiro número deve ser dividido pelo
segundo.*/
let n1 = 5;
let n2 = 5;
let operacao = 0;


let codigo = prompt("Digite seu codigo: ");
if(codigo == 1){
    operacao = n1 + n2;
    alert("A soma é " + operacao);
}else if(codigo == 2){
    operacao = n1 * n2;
    alert("A multiplicação é " + operacao);
}else if(codigo == 3){
    operacao = n1 / n2;
    alert("A divisão é " + operacao);
}else{
    alert("Codigo invalido!!");
}


