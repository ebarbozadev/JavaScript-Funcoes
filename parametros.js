function soma(num1, num2){
    return num1 + num2;
}

console.log(soma(1, 2));
console.log(soma(10, 20));
console.log(soma(1, -2));

function nomeCompleto(nome, sobrenome){
    return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto("Emanuel", "Barboza"));
console.log(nomeCompleto("Marcos", "Emanuel"));

function multiplicacao(numero1, numero2){
    return numero1 * numero2;
}

console.log(multiplicacao(soma(1, 1), soma(2, 8)));

function multiplicacao2(numero1 = 2, numero2 = 3){
// Deixamos um argumento preenchido para que possa ser passado apenas um valor, quem sabe até dá para fazer uns projetos
    return numero1 * numero2;
}

console.log(multiplicacao2(soma(2, 8)));
// Passando o primeiro parâmetro