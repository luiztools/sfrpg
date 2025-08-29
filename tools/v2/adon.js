function AdonZ3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 3);
    antecedentes[1] = newCaracteristica("Contatos", 2);
    antecedentes[2] = newCaracteristica("Fama", 2);
    antecedentes[3] = newCaracteristica("Recursos", 2);
    antecedentes[4] = newCaracteristica("Sensei", 4);

    const adon =
    {
        Nome: "Adon",
        Estilo: "Thai Kickboxe",
        Escola: "Dojô de Sagat",
        Conceito: "Desafiante",
        Assinatura: "Gargalhada",
        Jogador: "NPC",
        Cronica: "Street Fighter Alpha",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 4,
        Antecedentes: antecedentes,
        Gloria: 6,
        Honra: 3,
        Prontidao: 1,
        Interrogacao: 2,
        Intimidacao: 2,
        Perspicacia: 2,
        Manha: 2,
        Labia: 4,
        LutaCega: 0,
        Conducao: 2,
        Lideranca: 3,
        Seguranca: 0,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 3,
        Computador: 0,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 1,
        Estilos: 3,
        Soco: 4,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 4,
        Foco: 3,
        Chi: 4,
        ForcaVontade: 6,
        Divisao: "Tradicional",
        Posto: 8,
        Saude: 17,
        ManobrasEspeciais: "Jump, Foot Sweep, Wheel Kick, Elbow Smash, Throw, Tiger Knee, Double-Hit Knee, Back Roll Throw, Wall Spring, Air Throw, Flying Body Spear",
        Combos: "Elbow Smash 3x (Dizzy); Elbow Smash 2x para Tiger Knee (Dizzy)"
    };
    return adon;
}

function AdonSF4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 4);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Fama", 2);
    antecedentes[3] = newCaracteristica("Recursos", 2);
    antecedentes[4] = newCaracteristica("Sensei", 4);

    const adon =
    {
        Nome: "Adon",
        Estilo: "Thai Kickboxe",
        Escola: "Dojô de Sagat",
        Conceito: "Desafiante",
        Assinatura: "Gargalhada",
        Jogador: "NPC",
        Cronica: "Street Fighter 4",
        Forca: 4,
        Destreza: 5,
        Vigor: 5,
        Carisma: 5,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 4,
        Antecedentes: antecedentes,
        Gloria: 7,
        Honra: 4,
        Prontidao: 1,
        Interrogacao: 2,
        Intimidacao: 3,
        Perspicacia: 2,
        Manha: 3,
        Labia: 4,
        LutaCega: 0,
        Conducao: 2,
        Lideranca: 3,
        Seguranca: 0,
        Furtividade: 4,
        Sobrevivencia: 3,
        Arena: 4,
        Computador: 0,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 1,
        Estilos: 3,
        Soco: 5,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 5,
        Foco: 3,
        Chi: 5,
        ForcaVontade: 7,
        Divisao: "Tradicional",
        Posto: 9,
        Saude: 20,
        ManobrasEspeciais: "Jump, Foot Sweep, Wheel Kick, Elbow Smash, Throw,  Tiger Knee, Double-Hit Knee, Back Roll Throw, Wall Spring, Air Throw, Flying Body Spear",
        Combos: "Elbow Smash 3x (Dizzy); Elbow Smash 2x para Tiger Knee (Dizzy)"
    };
    return adon;
}

let npc;
if (getParameterByName('age') === 'sfa')
    npc = AdonZ3();
else
    npc = AdonSF4();

npc = calcPC(npc);