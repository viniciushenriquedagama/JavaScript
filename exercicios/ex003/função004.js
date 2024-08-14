function icrementajuros(valor, percentualjuros){
    const ValorDeAcresimo = (percentualjuros/100) * valor;
    return valor + ValorDeAcresimo
}
console.log(icrementajuros(100, 10));
console.log(icrementajuros(200, 10));