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
