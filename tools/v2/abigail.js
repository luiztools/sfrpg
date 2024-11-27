function AbigailSF5() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 3);
    antecedentes[1] = newCaracteristica("Contatos", 2);
    antecedentes[2] = newCaracteristica("Recursos", 1);
    const abigail =
    {
        Nome: "Abigail",
        Estilo: "Forças Especiais",
        Escola: "Mad Gear",
        Conceito: "Líder de Gangue",
        Time: "Mad Gear",
        Equipe: "Mad Gear",
        Assinatura: "Ele é muito grande!",
        Jogador: "NPC",
        Cronica: "Street Fighter 5",
        Forca: 7,
        Destreza: 2,
        Vigor: 8,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 1,
        Percepcao: 2,
        Inteligencia: 2,
        Raciocinio: 2,
        Prontidao: 2,
        Interrogacao: 1,
        Intimidacao: 5,
        Perspicacia: 0,
        Manha: 5,
        Labia: 0,
        LutaCega: 0,
        Conducao: 4,
        Lideranca: 4,
        Seguranca: 3,
        Furtividade: 2,
        Sobrevivencia: 0,
        Arena: 2,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 3,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 3,
        Foco: 2,
        Gloria: 6,
        Honra: 0,
        Chi: 7,
        ForcaVontade: 9,
        Saude: 20,
        Posto: 7,
        Divisao: "Tradicional",
        ManobrasEspeciais: "Jump, Throw, Hyper Fist, Flying Tackle, Toughskin, Head Butt, Haymaker, Widowmaker, Power Uppercut, Buffalo Punch, Face Slam, Air Smash, Backflip, Tumbling Attack, Foot Sweep, Wheel Kick, Dashing Shoulder",
        Combos: "Flying Tackle para Throw; Hyper Fist para Power Uppercut (Dizzy); Jab para Jab (Dizy); Bloqueio para Air Smash (Dizzy); Tumbling Attack para Foot Sweep",
    };
    return abigail;
}

function AbigailFF1() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 4);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Recursos", 2);
    const abigail =
    {
        Nome: "Abigail",
        Estilo: "Forças Especiais",
        Escola: "Mad Gear",
        Conceito: "Líder de Gangue",
        Time: "Mad Gear",
        Equipe: "Mad Gear",
        Assinatura: "Ele é muito grande!",
        Jogador: "NPC",
        Cronica: "Final Fight",
        Forca: 6,
        Destreza: 2,
        Vigor: 7,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 1,
        Percepcao: 2,
        Inteligencia: 2,
        Raciocinio: 2,
        Prontidao: 2,
        Interrogacao: 1,
        Intimidacao: 5,
        Perspicacia: 0,
        Manha: 4,
        Labia: 0,
        LutaCega: 0,
        Conducao: 3,
        Lideranca: 3,
        Seguranca: 2,
        Furtividade: 1,
        Sobrevivencia: 0,
        Arena: 1,
        Estilos: 0,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 2,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 2,
        Foco: 1,
        Gloria: 4,
        Honra: 0,
        Chi: 5,
        ForcaVontade: 7,
        Saude: 15,
        Posto: 5,
        Divisao: "Tradicional",
        ManobrasEspeciais: "Jump, Throw, Hyper Fist, Flying Tackle, Head Butt, Haymaker, Widowmaker, Power Uppercut, Buffalo Punch, Face Slam, Air Smash, Foot Sweep, Wheel Kick",
        Combos: "Flying Tackle para Throw; Hyper Fist para Power Uppercut (Dizzy); Jab para Jab (Dizy); Bloqueio para Air Smash (Dizzy);",
    };
    return abigail;
}

let npc;
if (getParameterByName('age') === 'sf5')
    npc = calcPC(AbigailSF5());
else
    npc = calcPC(AbigailFF1());