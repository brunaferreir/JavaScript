// ex de uma função que nao retorna nada função void
function ola(){
    console.log("Seja bem vindo! ")
};

ola();

// função que retorna, e nao executa mais nada depois do return
function welcome(){
    return "Olá mundo!"
    console.log("Seja bem vindo! ")
};

welcome();

//função que retorna o valor - resultado nao importa o nome, é passado por referencia
function soma(valor1, valor2){
    let resultado = valor1 + valor2;
    return resultado;
}
let n1 = 5
let n2 = 5

console.log(soma(n1, n2));



