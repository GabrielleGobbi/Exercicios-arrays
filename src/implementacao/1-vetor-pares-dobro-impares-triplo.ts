function gerarVetorParesDobroImparesTriplo(numberList:number[]) :number [] {
    if(numberList[30]!==undefined){
        throw new Error( "O Array é maior que 30 ");
    }
    let numberListUpdate :number[] = [];
    for(let i=0; i<30;i++){
        if(i%2===0){
            numberListUpdate[i]=numberList[i] *2;
        }
        else{ 
            numberListUpdate[i]=numberList[i]*3 //
        }

    }
    return numberListUpdate ;
}
module.exports=gerarVetorParesDobroImparesTriplo;

console.log(gerarVetorParesDobroImparesTriplo([1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,21,22,23,24,25,26,27,28,29,30]) )
