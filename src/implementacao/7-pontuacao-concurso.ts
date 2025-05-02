type person= {
    name : string;
    score : number;
}

function listarAprovados( participantes : person [])  : string[] {
    let aprovados : string [] = [];
    for (let i = 0; i<participantes.length ; i++) {
        if(participantes[i].score>70)  
            aprovados.push(`Nome : ${participantes[i].name} \n Pontuação : ${participantes[i].score} \n`); 
    }

    return aprovados; 
}


const candidatos: person[] = [
    { name: "João", score: 75 },
    { name: "Ana", score: 68 },
    { name: "Carlos", score: 82 },
    { name: "Bianca", score: 59 }
];

console.log(listarAprovados(candidatos));
/**
 * Crie um método que leia a pontuação final de 25 provas de um concurso e os nomes dos respectivos participantes. O método deve retornar os participantes que obtiveram mais de 70 pontos.

O método deve percorrer as pontuações e listar os nomes dos participantes que atingiram mais de 70 pontos.
Exemplo:
Quando a entrada for:
Nome: João
Pontuação: 75
A saída deve ser João obteve mais de 70 pontos.
 */