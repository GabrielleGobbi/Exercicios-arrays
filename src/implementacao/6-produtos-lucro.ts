type Product = {
    name:string;
    cost:number;
    salePrice:number;
}

function calcularLucros( vectorProduct : Product[] ) : number[] {
  if (vectorProduct.length!==50){
      throw new Error("O vetor não possui o tamanho pedido que é 50");
  }
  const profitBelowTen:number[] = [];
  const profitBetweenTenAndThirty:number[] = [];
  const profitAboveThirty:number[] = [];

  for(let i=0;i<50;i++){
      if (vectorProduct[i].salePrice<vectorProduct[i].cost){
          //throw new Error("O preço de venda não pode ser menor que o custo");
          console.log("O preço de venda não pode ser menor que o custo");
          i++; //pular o produto que não tem lucro 
      }

      const profit = (vectorProduct[i].salePrice - vectorProduct[i].cost) / vectorProduct[i].cost * 100;
      if (profit<10)
          profitBelowTen.push(vectorProduct[i].salePrice);
      else if (profit>=10 && profit<=30)
          profitBetweenTenAndThirty.push(vectorProduct[i].salePrice);
      else if (profit>30)
          profitAboveThirty.push(vectorProduct[i].salePrice);
      
  }
  
  return [profitBelowTen.length,profitBetweenTenAndThirty.length,profitAboveThirty.length]; //retorna o tamanho dos vetores
  
}
