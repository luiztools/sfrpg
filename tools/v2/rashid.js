function Rashid() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 3);
    antecedentes[1] = newCaracteristica("Fama", 3);
    antecedentes[2] = newCaracteristica("Recursos", 4);
    antecedentes[3] = newCaracteristica("Staff", 3);
    antecedentes[4] = newCaracteristica("Aliados", 3);
    antecedentes[5] = newCaracteristica("Elemental (Ar)", 5);

    var rashid = {
        Nome: "Rashid",
        Estilo: "Baraqah",
        Escola: "Templo de Bagdá",
        Jogador: "NPC",
        Assinatura: "Ventos turbulentos",
        Conceito: "Geek muçulmano",
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
        Interrogacao: 2,
        Intimidacao: 0,
        Perspicacia: 3,
        Manha: 3,
        Labia: 3,
        LutaCega: 4,
        Conducao: 2,
        Lideranca: 3,
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
        Foco: 5,
        ManobrasEspeciais: "Jump, Foot Sweep, Spinning Foot Sweep, Dive Kick, Wall Spring, Drunken Monkey Roll, Criminal Upper, Spinning Back Fist, Spinning Clothesline, Turbo Spinning Clothesline, Flying Thrust Kick, Air Blast, Sense Element, Jumping Shoulder Butt, Backflip Kick, Flying Heel Stomp, Elemental Stride, Light Feet, Balance",
        Combos: "Dive Kick para Flying Thrust Kick (Dizzy); Wall Spring + Short para Flying Thrust Kick (Dizzy); Turbo Spinning Clothesline para Fierce (Dizzy)",
        Gloria: 6,
        Honra: 7,
        Chi: 9,
        ForcaVontade: 7,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 7
    };
    return calcPC(rashid);
}

const npc = Rashid();