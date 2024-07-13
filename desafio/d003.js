const FirstBimestre = 10;
const SecoundBimestre = 10;
const thirdBimestre = 10;

const Media = (FirstBimestre + SecoundBimestre + thirdBimestre) /3;

if(Media < 5){
    console.log('reprovação');
}else if(Media >= 5 && Media <= 7){
    console.log('recuperação');
}else{
    console.log('aprovado');
}


console.log(Media .toFixed(2));