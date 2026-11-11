function AbigailSF5() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 3);
    antecedentes[1] = newCaracteristica("Contatos", 2);
    antecedentes[2] = newCaracteristica("Recursos", 1);
    const abigail = {
        Nome: "Abigail",
        Estilo: "Wrestling",
        Escola: "Mad Gear",
        Jogador: "NPC",
        Assinatura: "Ele é muito grande!",
        Conceito: "Líder de Gangue",
        Cronica: "Street Fighter 5",
        Equipe: "Mad Gear",
        Time: "Mad Gear",
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
        ManobrasEspeciais: "Jump, Throw, Hyper Fist, Flying Tackle, Toughskin, Head Butt, Haymaker, Widowmaker, Power Uppercut, Buffalo Punch, Face Slam, Air Smash, Backflip, Tumbling Attack, Foot Sweep, Wheel Kick, Hyper Tackle",
        Combos: "Flying Tackle para Throw; Hyper Fist para Power Uppercut (Dizzy); Jab para Jab (Dizy); Bloqueio para Air Smash (Dizzy); Tumbling Attack para Foot Sweep",
        Gloria: 6,
        Honra: 0,
        Chi: 7,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Tradicional",
        Posto: 7
    };
    return abigail;
}

function AbigailFF1() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 4);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Recursos", 2);
    const abigail = {
        Nome: "Abigail",
        Estilo: "Wrestling",
        Escola: "Mad Gear",
        Jogador: "NPC",
        Assinatura: "Ele é muito grande!",
        Conceito: "Líder de Gangue",
        Cronica: "Final Fight",
        Equipe: "Mad Gear",
        Time: "Mad Gear",
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
        ManobrasEspeciais: "Jump, Throw, Hyper Fist, Flying Tackle, Head Butt, Haymaker, Widowmaker, Power Uppercut, Buffalo Punch, Face Slam, Air Smash, Foot Sweep",
        Combos: "Flying Tackle para Throw; Hyper Fist para Power Uppercut (Dizzy); Jab para Jab (Dizy); Bloqueio para Air Smash (Dizzy);",
        Gloria: 4,
        Honra: 0,
        Chi: 5,
        ForcaVontade: 7,
        Saude: 15,
        Divisao: "Tradicional",
        Posto: 5
    };
    return abigail;
}

let npc;
if (getParameterByName('age') === 'sf5' || getParameterByName('age') === 'sf3')
    npc = calcPC(AbigailSF5());
else
    npc = calcPC(AbigailFF1());