/*5. Faça um algoritmo que leia o nome e as três notas de uma disciplina de um aluno e ao
final escreva o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média
para aprovação é igual ou superior a 8.*/

let nome = "Bruna";
let nota1 = 5;
let nota2 = 3;
let nota3 = 3;
let media  = (nota1 + nota2 + nota3)/3

if(media >= 8){
    console.log(nome, "Sua media foi", media, "você esta Aprovado(a)!!")
}
else if(media >= 5 && media <= 7){
    console.log(nome, "Sua media foi", media, "você esta de Recuperação!!")
}
else if(media < 5){
    console.log(nome, "Sua media foi", media, "você esta Rprovado(a)!!")
}


