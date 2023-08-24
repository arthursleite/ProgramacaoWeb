let num1 = 1; //Resultado = 1
let num2 = -1.1; //Resultado = -1.1
let num3 = Number(); //Resultado = 0
let num4 = Number(1.0); //Resultado = 1
let num5 = Number(undefined); //Resultado = NaN
let num6 = Number(null); //Resultado = 0
let num7 = Number(""); //Resultado = 0
let num8 = Number(false); //Resultado = 0

let n1 = 5;
let n2 = 7;
let soma = n1 + n2;

console.log('Resultado da soma entre', n1, 'e', n2, 'é igual a', soma);
console.log('Resultado da soma entre ' + n1 + ' e ' + n2 + ' é igual a ' + soma);
console.log(`Resultado da soma entre ${n1} e ${n2} é igual a ${soma}`);

// PROPRIEDADES
console.log(Number.NaN)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.EPSILON)
console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)

// MÉTODOS
const num_B = 2000.5557
console.log(num_B); //Number()
console.log(num_B.toString()); //String()

console.log(num_B.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})); //String formatada 
console.log(num_B.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})); //String formatada 
console.log(num_B.toLocaleString('en-US', {style: 'currency', currency: 'USD'})); //String formatada

console.log(num_B.toExponential(2))
console.log(num_B.toFixed(2))
console.log(num_B.toPrecision(5))
console.log(num_B.valueOf())

console.log(Number.isNaN(num_B))
console.log(Number.isInteger(num_B))
console.log(Number.isFinite(num_B))