function Alexander() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 3);

    const alexander = {
        Nome: "Alexander",
        Estilo: "Pankration",
        Escola: "Grécia",
        Jogador: "NPC",
        Assinatura: "Mãos na cintura, peito pra fora!",
        Conceito: "Protótipo de Herói",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 4,
        Destreza: 2,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 1,
        Aparencia: 5,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 3,
        Intimidacao: 2,
        Perspicacia: 3,
        LutaCega: 2,
        Conducao: 1,
        Lideranca: 3,
        Furtividade: 1,
        Sobrevivencia: 2,
        Arena: 1,
        Medicina: 1,
        Misterios: 3,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 3,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 3,
        Foco: 2,
        ManobrasEspeciais: "Power Uppercut, Haymaker, Spinning Knuckle, Triple Strike, Air Throw, Grappling Defense, Flying Heel Stomp, Flying Head Butt, Vertical Rolling Attack, Rolling Attack",
        Gloria: 2,
        Honra: 4,
        Chi: 1,
        ForcaVontade: 6,
        Saude: 13,
        Divisao: "Estilo Livre",
        Posto: 5
    };
    return alexander;
}

let npc = Alexander();

npc = calcPC(npc);