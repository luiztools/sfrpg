function AzazelTk6() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Devil Gene", 5);
    antecedentes[1] = newCaracteristica("Híbrido Animal", 5);
    antecedentes[2] = newCaracteristica("Elemental (Terra)", 7);

    return {
        Nome: "Azazel",
        Estilo: "Jeet Kune Dô",
        Escola: "Templo de Azazel",
        Jogador: "NPC",
        Assinatura: "Ruge enquanto cristais brotam do chão ao seu redor",
        Conceito: "Deus demoníaco ancestral",
        Cronica: "Tekken 6",
        Forca: 7,
        Destreza: 5,
        Vigor: 7,
        Carisma: 3,
        Manipulacao: 5,
        Aparencia: 0,
        Percepcao: 7,
        Inteligencia: 7,
        Raciocinio: 7,
        Prontidao: 5,
        Interrogacao: 0,
        Intimidacao: 5,
        Perspicacia: 5,
        Manha: 0,
        Labia: 2,
        LutaCega: 5,
        Conducao: 0,
        Lideranca: 4,
        Seguranca: 0,
        Furtividade: 0,
        Sobrevivencia: 5,
        Arena: 0,
        Computador: 0,
        Investigacao: 0,
        Medicina: 0,
        Misterios: 5,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 7,
        Chute: 4,
        Bloqueio: 7,
        Apresamento: 5,
        Esportes: 3,
        Foco: 7,
        ManobrasEspeciais: "Flight, Kippup, Throw, Claw, Tail Slash, Horn, Dragons Tail, Upper Tail Strike, Double Hit Punch, Spinning Back Fist, Power Uppercut, Head Butt, Grappling Defense, Punch Defense, Kick Defense, Toughskin, Psychokinetic Channeling, Sonic Boom, Improved Fireball, Wall, Envelop, Stunning Shout",
        Combos: "Double Hit Punch para Claw para Horn (Dizzy), Spinning Back Fist para Improved Fireball (Dizzy), Dragons Tail para Sonic Boom, Envelop para Wall, Punch Defense para Throw",
        Gloria: 7,
        Honra: 0,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 9
    };
}

let npc = AzazelTk6();
npc = calcPC(npc);
