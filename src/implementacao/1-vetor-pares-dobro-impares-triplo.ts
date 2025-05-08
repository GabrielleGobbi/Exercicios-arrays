function gerarVetorParesDobroImparesTriplo(numberList:number[]) :number [] {
    if (numberList.length !== 30) { 
        throw new Error("O vetor deve conter exatamente 30 números."); 
        }
    let vetorResult :number[] = [];
    for(let i=0; i<30;i++){
        if(i%2===0){
            vetorResult[i]=numberList[i] *2;
        }
        else{ 
            vetorResult[i]=numberList[i]*3 //
        }

    }
    return vetorResult ;
}
module.exports=gerarVetorParesDobroImparesTriplo;

console.log(gerarVetorParesDobroImparesTriplo([1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,21,22,23,24,25,26,27,28,29,30]) )
