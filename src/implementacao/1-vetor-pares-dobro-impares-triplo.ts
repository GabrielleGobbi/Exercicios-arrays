function gerarVetorParesDobroImparesTriplo(numberList:number[]) :number [] {
    //Implemente um método que leia um vetor de 30 números 
    if(numberList[30]!==undefined){//se for diferente de um arrey de 30 de tamanho
        throw new Error( "O Array é maior que 30 ");//throw = lançar uma exceção (erro) , seria legal usar o try catch pra tratar, mas não usaremos por enquanto 
    }
    let numberListUpdate :number[] = [];
    for(let i=0; i<30;i++){//inicia o laço na posição 0 , e roda enquanto i for < que 30 , a cada rodada ela incrementa 1 em i
        if(i%2===0){// par é divisivel por 2 sem resto 
            numberListUpdate[i]=numberList[i] *2;//queremos pegar o valor que esta no indice i e multiplicar por 2
        }
        else{ // se não for par , ele é impar , para um numero ser impar ele quando dividido por 2 vai ter resto , por exemplo numeros primos como o 7 e 13 são impar 
            numberListUpdate[i]=numberList[i]* //
        }

    }
    return numberListUpdate ;
}
/**O problema:

Implemente um método que leia um vetor de 30 números inteiros e gere um segundo vetor. As posições pares devem ser o dobro do vetor original, e as ímpares, o triplo.

O método deve percorrer os 30 números inteiros do vetor.
Se a posição for par, o valor será multiplicado por 2.
Se a posição for ímpar, o valor será multiplicado por 3.
Exemplo:
Quando a entrada for [1, 2, 3, 4, 5], a saída deve ser [3, 4, 9, 8, 15].
 */