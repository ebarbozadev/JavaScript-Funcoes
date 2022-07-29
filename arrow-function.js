function apresentacao(nome){
    return `Meu nome é ${nome}`;
}
// function "normal"

const apresentarArrow = nome => `meu nome é ${nome}`;
// "nome" é o parâmetro
// como é apenas uma linha de código, não precisa colocar o return, pode ser direto

const soma = (num1, num2) => num1 + num2;
// quando formos usar mais de um parâmetro colocamos o parênteses

const somaNumerosPequenos = (num1, num2) => {
	if (num1 || num2 > 10){
			return "Somente números de 1 a 9";
	} else{
		return num1 + num2;
	}
}
// exemplo de como fazemos caso for uma arrow function com mais de uma linha de código, abrimos chave e o começo é igual, aí teremos que colocar return.