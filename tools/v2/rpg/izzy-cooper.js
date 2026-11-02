function IzzyCooper() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Empresário", 3);
    antecedentes[1] = newCaracteristica("Apoio", 4);
    antecedentes[2] = newCaracteristica("Sensei", 3);
    antecedentes[3] = newCaracteristica("Staff", 4);
    const izzy = {
        Nome: "Izzy Cooper",
        Estilo: "Forças Especiais",
        Escola: "Exército dos EUA",
        Jogador: "NPC",
        Assinatura: "Palmas e vivas",
        Conceito: "Moleque",
        Cronica: "",
        Forca: 3,
        Destreza: 4,
        Vigor: 3,
        Carisma: 2,
        Manipulacao: 1,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 5,
        Raciocinio: 4,
        Prontidao: 2,
        Intimidacao: 1,
        Perspicacia: 2,
        Manha: 2,
        Labia: 3,
        LutaCega: 1,
        Conducao: 2,
        Lideranca: 2,
        Seguranca: 3,
        Furtividade: 3,
        Sobrevivencia: 3,
        Arena: 3,
        Computador: 5,
        Investigacao: 4,
        Medicina: 2,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 3,
        Bloqueio: 4,
        Apresamento: 2,
        Esportes: 3,
        Foco: 3,
        ManobrasEspeciais: "Hyper Fist, Jump, Power Uppercut, Spinning Back Fist, Head Butt, Foot Sweep, Wounded Knee, Kick Defense, Deflecting Punch, Knee Basher",
        Combos: "Roundhouse para Spinning Back Fist para Foot Sweep (Dizzy); Wounded Knee para Wounded Knee para Head Butt (Dizzy)",
        Gloria: 3,
        Honra: 4,
        Chi: 2,
        ForcaVontade: 7,
        Saude: 10,
        Divisao: "Estilo Livre",
        Posto: 3
    };
    return izzy;
}

let npc = IzzyCooper();

npc = calcPC(npc);