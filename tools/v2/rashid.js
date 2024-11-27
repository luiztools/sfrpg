function Rashid() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 3);
    antecedentes[1] = newCaracteristica("Fama", 3);
    antecedentes[2] = newCaracteristica("Recursos", 4);
    antecedentes[3] = newCaracteristica("Staff", 3);
    antecedentes[4] = newCaracteristica("Aliados", 3);
    antecedentes[5] = newCaracteristica("Elemental", 4);

    var rashid =
    {
        Nome: "Rashid",
        Estilo: "Baraqah",
        Escola: "Templo de Bagdá",
        Conceito: "Geek muçulmano",
        Assinatura: "Ventos turbulentos",
        Jogador: "NPC",
        Cronica: "Street Fighter 5",
        Forca: 4,
        Destreza: 6,
        Vigor: 5,
        Carisma: 5,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 5,
        Intimidacao: 2,
        Perspicacia: 5,
        Manha: 2,
        Labia: 3,
        LutaCega: 4,
        Conducao: 2,
        Lideranca: 2,
        Furtividade: 5,
        Sobrevivencia: 4,
        Arena: 3,
        Computador: 5,
        Investigacao: 4,
        Medicina: 3,
        Misterios: 3,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 6,
        Foco: 3,
        Divisao: "Estilo Livre",
        Posto: 9,
        Gloria: 9,
        Honra: 7,
        Chi: 9,
        ForcaVontade: 8,
        Saude: 20,
        ManobrasEspeciais: "Jump, Foot Sweep, Spinning Foot Sweep, Dive Kick, Wall Spring, Drunken Monkey Roll, Criminal Upper, Light Feet, Spinning Clothesline, Turbo Spinning Clothesline, Bushin Sempu Kyaku, Flying Thrust Kick, Sonic Boom, Hurricane Kick, Air Hurricane Kick, Spinning Back Fist, spinning knuckle, Heel Stamp, Flying Heel Stomp, Reverse Waterfall",
        Combos: "Light Feet para spinning clothesline (Dizzy); Light Feet para Turbo Spinning Clothesline (Dizzy); Jump + Short para Flying Thrust kick (Dizzy); Bloqueio para Reverse Waterfall; Wall Spring + Short para Flying Thrust Kick (Dizzy);"
    };
    return calcPC(rashid);
}

const npc = Rashid();