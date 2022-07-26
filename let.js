let formato = "retângulo";
let base = 8;
let altura = 10;
let area;

if (formato === 'retângulo'){
    area = base * altura;
} else{
    area = (base * altura) / 2;
}
console.log(area);