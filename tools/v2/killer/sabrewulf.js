function SabrewulfKI() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 4);
    antecedentes[1] = newCaracteristica("Híbrido Animal (Lobo)", 4);
    antecedentes[2] = newCaracteristica("Recursos", 4);

    const sabrewulf = {
        Nome: "Sabrewulf",
        Estilo: "Sanbo",
        Escola: "Autodidata",
        Jogador: "NPC",
        Assinatura: "Uiva para o alto",
        Conceito: "Lobisomem",
        Cronica: "Killer Instinct",
        Forca: 5,
        Destreza: 6,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 1,
        Aparencia: 1,
        Percepcao: 6,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 6,
        Interrogacao: 0,
        Intimidacao: 6,
        Perspicacia: 5,
        Manha: 1,
        Labia: 0,
        LutaCega: 6,
        Conducao: 2,
        Lideranca: 1,
        Seguranca: 1,
        Furtividade: 5,
        Sobrevivencia: 6,
        Arena: 1,
        Computador: 1,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 4,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 6,
        Foco: 4,
        ManobrasEspeciais: "Jump, Tumbling Attack, Power Uppercut, Pounce, Spinning Clothesline, Ripping Bite, Tearing Bite, Foot Sweep, Sonic Boom",
        Combos: "Pounce para Tumbling Attack para Power Uppercut (Dizzy); Tumbling Attack para Spinning Clothesline para Power Uppercut (Dizzy); Spinning Clothesline para Tumbling Attack para Power Uppercut (Dizzy)",
        Gloria: 6,
        Honra: 5,
        Chi: 6,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 7
    };
    return sabrewulf;
}

const npc = calcPC(SabrewulfKI());