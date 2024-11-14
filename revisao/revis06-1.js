const readline = require('readline');

// Definindo os valores de n1 e n2
let n1 = 5;
let n2 = 5;
let operacao = 0;

// Criando a interface de leitura do terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitando o código ao usuário
rl.question("Digite seu código (1 para soma, 2 para multiplicação, 3 para divisão): ", (codigo) => {
    codigo = parseInt(codigo); // Converte a entrada para um número inteiro
    
    // Verificando o código e realizando a operação correspondente
    if (codigo === 1) {
        operacao = n1 + n2;
        console.log("A soma é: " + operacao);
    } else if (codigo === 2) {
        operacao = n1 * n2;
        console.log("A multiplicação é: " + operacao);
    } else if (codigo === 3) {
        operacao = n1 / n2;
        console.log("A divisão é: " + operacao);
    } else {
        console.log("Código inválido!");
    }
    
    // Fechando a interface de leitura
    rl.close();
});
