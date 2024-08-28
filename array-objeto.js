//array list
let nomes = ["Carlos", 
    "Rafael",
    [1,2,3,4]
];

//acessar nome na lista, pela posição
console.log(nomes[1])

//acessar lista de numeros dentro da lista de nomes pela posição
console.log(nomes[2])

//acessar valor 4 na lista de numeros
console.log(nomes[2][3]);


//array-lista e objeto
let dados = [
    {"nome": "Carlos", "media": 5}, //objeto chave-valor
    {"nome": "Zoe", "media": 7},
    {"nome": "Bruna", "media": 9}
];
console.log(dados);

// acesar media do aluno posição 1- zoe
console.log(dados[1].media);

//Utilizamos o json porque foi o padrão mais proximo da liguagem humana



