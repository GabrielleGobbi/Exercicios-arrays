function contarNotasNaFaixa(vector:number[] ,average:number)  :  string  {
    if(vector.length!==50){
        throw new Error("O vetor não possui o tamanho pedido que é 50");
    }
    const vectorTwo:number[] = [];
    const tenPercent = average * 0.1;  
    const belowAverage = average - tenPercent;
    const aboveAverage = average + tenPercent;
    for(let i=0;i<50;i++ ) //percorrer o vetor
        //se o valor do vetor estiver entre 10% abaixo e 10% acima da média
        if(vector[i]>=belowAverage && vector[i]<=aboveAverage){
            vectorTwo.push(vector[i]);
            
        }
    
      return `${vectorTwo.length} estão entre ${belowAverage} e ${aboveAverage} `;
 }
console.log (contarNotasNaFaixa([50, 60, 70, 80, 90,50, 60, 70, 80, 90,50, 60, 70, 80, 90,50, 60, 70, 80, 90,50, 60, 70, 80, 90,50, 60, 70, 80, 90,50, 60, 70, 80, 90,50, 60, 70, 80, 90,50, 60, 70, 80, 90,50, 60, 70, 80, 90],70));
