console.log('Preço da Viagem')

const preço_do_combustivo = 5.85;

console.log( 'Preço do combustivo:', preço_do_combustivo)

const gasto_médio_por_km = 18;

console.log('gasto médio de combustivo do carro por KM:', gasto_médio_por_km)

const distacia_km = 1896;

console.log('distacia pecorrida do carro:', distacia_km)

const ValorGasto =( preço_do_combustivo * distacia_km/gasto_médio_por_km);

console.log('Valor Gasto:', preço_do_combustivo, '*', gasto_médio_por_km, '/', distacia_km, '=', ValorGasto .toFixed(2));