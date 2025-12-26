function Urien() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 5);
    antecedentes[1] = newCaracteristica("Arena", 3);
    antecedentes[2] = newCaracteristica("Elemental", 5);
    antecedentes[3] = newCaracteristica("Recursos", 4);

    const urien =
    {
        Nome: "Urien",
        Estilo: "Pankration",
        Escola: "Illuminati",
        Equipe: "Illuminati",
        Time: "Illuminati",
        Conceito: "Usurpador",
        Assinatura: "Grito de Vitória",
        Jogador: "NPC",
        Cronica: "Street Fighter 5",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 1,
        Aparencia: 5,
        Manipulacao: 5,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 3,
        Interrogacao: 4,
        Intimidacao: 6,
        Perspicacia: 4,
        Manha: 3,
        Labia: 4,
        LutaCega: 4,
        Conducao: 2,
        Lideranca: 5,
        Seguranca: 0,
        Furtividade: 3,
        Sobrevivencia: 4,
        Arena: 4,
        Computador: 2,
        Investigacao: 4,
        Medicina: 1,
        Misterios: 4,
        Estilos: 4,
        Soco: 5,
        Chute: 5,
        Bloqueio: 6,
        Apresamento: 4,
        Esportes: 5,
        Foco: 6,
        Gloria: 7,
        Honra: 2,
        Chi: 8,
        ForcaVontade: 9,
        Divisao: "Estilo Livre",
        Antecedentes: antecedentes,
        ManobrasEspeciais: "Accuracy, Jump, Air Throw, Power Uppercut, Wheel Kick, Foot Sweep, Throw, Air Smash, Stone, Flying Knee Thrust, Head Butt, Haymaker, Hyper Tackle, Wall, Elemental Skin, Maka Wara, Condensed Energy, Missile Reflection, Energy Reflection",
        Combos: "Stone para Flying Knee Thrust (dizzy); Jab para Haymaker (dizzy); Short para Foot Sweep; Stone para Hyper Tackle (dizzy)",
        Saude: 20,
        Posto: 9
    };
    return calcPC(urien);
}

const npc = Urien();