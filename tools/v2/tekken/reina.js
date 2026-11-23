function ReinaTk8() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Devil Gene", 4);
    antecedentes[3] = newCaracteristica("Recursos", 3);
    antecedentes[4] = newCaracteristica("Sensei", 5);

    return {
        Nome: "Reina",
        Estilo: "Karatê Shotokan",
        Escola: "Heihachi Mishima",
        Equipe: "Mishima Zaibatsu",
        Jogador: "NPC",
        Assinatura: "Sorri com desdém, ajeita as luvas e diz que a luta acabou antes de começar",
        Conceito: "Herdeira oculta dos Mishima",
        Cronica: "Tekken 8",
        Forca: 5,
        Destreza: 5,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 5,
        Aparencia: 4,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 2,
        Intimidacao: 3,
        Perspicacia: 4,
        Manha: 3,
        Labia: 4,
        LutaCega: 3,
        Conducao: 2,
        Lideranca: 3,
        Seguranca: 3,
        Furtividade: 4,
        Sobrevivencia: 2,
        Arena: 3,
        Computador: 2,
        Investigacao: 3,
        Medicina: 1,
        Misterios: 3,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 6,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 5,
        Foco: 5,
        ManobrasEspeciais: "Jump, Kippup, Throw, Light Feet, Empty Step, Esquives, Displacement, Double Hit Punch, Lunging Punch, Knife Hand Strike, Spinning Back Fist, Power Uppercut, Dragon Punch, Double Hit Kick, Cartwheel Kick, Backflip Kick, Ax Kick, Hurricane Kick, Foot Sweep, Punch Defense, Kick Defense, Deflecting Punch, Block And Grab, Psychokinetic Channeling",
        Combos: "Light Feet para Power Uppercut, Double Hit Punch para Double Hit Kick para Foot Sweep, Displacement para Cartwheel Kick, Punch Defense para Block And Grab, Foot Sweep para Dragon Punch (Dizzy)",
        Gloria: 6,
        Honra: 4,
        Chi: 9,
        ForcaVontade: 9,
        Saude: 18,
        Divisao: "Livre",
        Posto: 8
    };
}

let npc = ReinaTk8();
npc = calcPC(npc);
