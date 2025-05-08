function separarPositivosNegativos(arrayNumber:number[]) : {positive:number[] ,negative:number[]} {
    
    if(arrayNumber.length!==8){
        throw new Error("O array é diferente do tamanho pedido que é 8");
    }
  
    const positive:number[] = [];
    const negative:number[] = [];
  
    for(let i=0;i<8;i++){
        if (arrayNumber[i]>0) {
           positive.push(arrayNumber[i]);
        } else {
            negative.push(arrayNumber[i]);
        }
    }
  
    return  {positive,negative};
    
  }