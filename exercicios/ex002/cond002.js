const numero = 50;

const NumeroDivididioPorCinco = numero % 5 === 0;

if(numero === 0){
    console.log('Numero é invalido');
}else if(numero === 5){
    console.log('Numero é invalido');
}
else if(NumeroDivididioPorCinco){
        console.log('yes');
}else{
    console.log('no');
};
console.log(NumeroDivididioPorCinco)
