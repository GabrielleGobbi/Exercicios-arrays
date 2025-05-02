function separarPositivosNegativos(arrayNumber:number[]) : {arrayPositiveNumber:number[] ,arrayNegativeNumber:number[]} {
    
    if(arrayNumber.length!==8){
        throw new Error("O array é diferente do tamanho pedido que é 8");
    }
  
    const arrayPositiveNumber:number[] = [];
    const arrayNegativeNumber:number[] = [];
  
    for(let i=0;i<8;i++){
        if (arrayNumber[i]>0) {
            arrayPositiveNumber.push(arrayNumber[i]);
        } else {
            arrayNegativeNumber.push(arrayNumber[i]);
        }
    }
  
    return  {arrayPositiveNumber,arrayNegativeNumber};
  
  }