const Peso = 100;
const altura = 2.20;

const imc = Peso / (Math.pow(altura, 2));

console.log(imc.toFixed(2));

if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc <= 25) {
    console.log('Peso Normal');
} else if (imc > 25 && imc <= 30) {
    console.log('Acima do Peso');
} else if (imc > 30 && imc <= 40) {
    console.log('Obeso');
} else if (imc > 40) {
    console.log('Obesidade Gravida')
} else {
    console.log('digite seu peso e altura')
}
