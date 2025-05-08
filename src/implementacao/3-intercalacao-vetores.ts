function twoVectors(vectorOne:number[],vectorTwo:number[]) : number[] {
    if(vectorOne.length!==10 || vectorTwo.length!==10){
        throw new Error("Os vetores não possuem o tamanho pedido que é 10");
    }
    const vectorThree:number[] = [];
    for(let i=0;i<10;i++){ 
        vectorThree.push(vectorOne[i],vectorTwo[i]);
    }
    return vectorThree; 
}