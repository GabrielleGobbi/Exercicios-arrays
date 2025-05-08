
function contarNotasNaFaixa(vector:number[] ,average:number)  :  string  {
    if(vector.length!==50){
        throw new Error("O vetor não possui o tamanho pedido que é 50");
    }

    const tenPercent = average * 0.1;  
    const belowAverage = average - tenPercent;
    const aboveAverage = average + tenPercent;
    let count = 0; 
    for (let i = 0; i < vector.length; i++) { 
         if (vector[i] >= belowAverage && vector[i] <= aboveAverage) { 
              count++; 
         } 
    } 
    return `${count} notas estão entre ${belowAverage} e 
    ${aboveAverage}`;
 }
console.log (contarNotasNaFaixa([50, 60, 70, 80, 90,50, 60, 70, 80, 90,50, 60, 70, 80, 90,50, 60, 70, 80, 90,50, 60, 70, 80, 90,50, 60, 70, 80, 90,50, 60, 70, 80, 90,50, 60, 70, 80, 90,50, 60, 70, 80, 90,50, 60, 70, 80, 90],70));