function MarisaSF6() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Arena", 4);
    antecedentes[2] = newCaracteristica("Fama", 1);
    antecedentes[3] = newCaracteristica("Mascote", 3);
    antecedentes[4] = newCaracteristica("Recursos", 1);

    const personagem = {
        Nome: "Marisa Rossetti",
        Estilo: "Pankration",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Cabelo estiloso",
        Conceito: "Guerreira",
        Cronica: "Street Fighter 6",
        Forca: 7,
        Destreza: 3,
        Vigor: 6,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 2,
        Intimidacao: 5,
        Perspicacia: 3,
        Manha: 2,
        Labia: 2,
        LutaCega: 1,
        Conducao: 1,
        Lideranca: 4,
        Seguranca: 0,
        Furtividade: 1,
        Sobrevivencia: 3,
        Arena: 4,
        Computador: 1,
        Investigacao: 1,
        Medicina: 2,
        Misterios: 2,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 4,
        Foco: 2,
        ManobrasEspeciais: "Jump, Triple Strike, Haymaker, Widowmaker, Lunging Punch, Flying Knee Thrust, Brain Cracker, Power Uppercut, Fist Sweep, Double Hit Knee, Wounded Knee, Toughskin",
        Combos: "Flying Knee Thrust para Widowmaker (Dizzy); Bloqueio para Brain Cracker; Lunging Punch para Haymaker (Dizzy); Bloqueio para Wounded Knee",
        Gloria: 7,
        Honra: 7,
        Chi: 6,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 7
    };
    return personagem;
}

let npc = MarisaSF6();

npc = calcPC(npc);
