function inverterVetor( vectorNumber : number[]) : number[] {
      
  
    if(vectorNumber.length!==30){
        throw new Error("O vetor não possui o tamanho pedido que é 30");
    }
    const vectorNumberTwo:number[] = [];
    for(let i=vectorNumber.length - 1;i>=0;i--){
        vectorNumberTwo.push(vectorNumber[i]);
    }
    return vectorNumberTwo;
}
console.log(inverterVetor([1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]));