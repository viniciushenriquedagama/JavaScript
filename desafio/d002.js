const PreçoEtarnol = 3.42;
const PreçoGasolina = 5.85;
const CombustivoDoCarro = 'gasolina';
const GastoPorKm = 10;
const DistaciaKm = 100;

const ValorTotalGasolina = (PreçoGasolina * GastoPorKm * DistaciaKm);
const ValorTotalEtarnol = (PreçoEtarnol * GastoPorKm * DistaciaKm)


if (CombustivoDoCarro === 'etarnol') {
    console.log('etarnol');
    console.log(ValorTotalEtarnol);
} else if (CombustivoDoCarro === 'gasolina') {
    console.log('gasolina');
    console.log(ValorTotalGasolina);
} else {
    console.log('coloque o seu tipo de combustivo')
}