const PreçoDoProduto = 100;
const TipoDePagamento = 1;

const VistaDebito = PreçoDoProduto - 10% PreçoDoProduto;
const DinheiroAndPix = PreçoDoProduto - 15% PreçoDoProduto;
const EmDuasVezes = PreçoDoProduto;
const AcimaDeDuasVezes = PreçoDoProduto + 10% PreçoDoProduto;

if(TipoDePagamento === 1){
    console.log(VistaDebito);
}else if(TipoDePagamento === 2){
    console.log(DinheiroAndPix);
}else if(TipoDePagamento === 3){
    console.log(EmDuasVezes);
}else if(TipoDePagamento === 4){
    console.log(AcimaDeDuasVezes);
}else{
    console.log('insira sua forma de pagamento')
}
