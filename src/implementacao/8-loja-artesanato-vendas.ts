import * as readlineSync from 'readline-sync';

type product = {
    cod: string;
    price: number;
    amount: number;
    total: number;
};

function gerarRelatorioVendas(): void {
    let productsSold : product[] = [];
    let totalSales = 0;
    let commission = 0;
    let bestSellingProduct = "";
    let maxAmount = 0;

    for(let i=0; i<3;i++){
        console.log("Digite o código do produto:");
        const cod=readlineSync.question();
        console.log("Digite o preço unitário:");
        const price =+readlineSync.question();
        console.log("Digite a quantidade vendida:");
        const amount =+readlineSync.question();
        const total = price * amount;
        
        productsSold.push({cod, price, amount, total});
        totalSales += total;
        commission = totalSales * 0.05;

        if(amount > maxAmount){
            maxAmount = amount;
            bestSellingProduct = cod;
        }     
    }

    console.log("Relatório de vendas:");
    console.log("Total das vendas: R$" + totalSales.toFixed(2));
    console.log("Comissão do vendedor: R$" + commission.toFixed(2));
    console.log("Código do produto mais vendido: " + bestSellingProduct); 
    
}

gerarRelatorioVendas();
