function NoembeluSFZ3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 5);
    antecedentes[1] = newCaracteristica("Psycho Power", 1);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Faca", 5);
    tecnicas[1] = newCaracteristica("Arremesso", 5);

    const armas = [];
    armas[0] = "Machadinha";
    armas[1] = "Machadinha Arremessada";

    const personagem =
    {
        Nome: "Noembelu",
        Estilo: "Forças Especiais",
        Escola: "Shadaloo",
        Conceito: "Assassina",
        Assinatura: "Expressão Fria",
        Equipe: "Shadaloo",
        Time: "Dolls",
        Jogador: "NPC",
        Cronica: "Street Fighter Alpha",
        Forca: 3,
        Destreza: 5,
        Vigor: 3,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 5,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 5,
        Interrogacao: 0,
        Intimidacao: 4,
        Perspicacia: 3,
        Manha: 0,
        Labia: 3,
        LutaCega: 3,
        Conducao: 0,
        Lideranca: 1,
        Seguranca: 3,
        Furtividade: 5,
        Sobrevivencia: 3,
        Arena: 1,
        Computador: 0,
        Investigacao: 1,
        Medicina: 1,
        Misterios: 3,
        Estilos: 4,
        Soco: 4,
        Chute: 2,
        Apresamento: 3,
        Bloqueio: 2,
        Esportes: 4,
        Foco: 1,
        Armas: armas,
        NovasTecnicas: tecnicas,
        ManobrasEspeciais: "Handstand Kick, Slide Kick, Backflip Kick, Back Roll Throw, Wall Spring, Jump",
        Combos: "",
        Gloria: 5,
        Honra: 0,
        Chi: 4,
        ForcaVontade: 6,
        Saude: 13,
        Posto: 3,
        Divisao: "Duelista",
        Antecedentes: antecedentes
    };
    return personagem;
}

function NoembeluSF5() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 5);
    antecedentes[1] = newCaracteristica("Psycho Power", 1);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Faca", 5);

    const armas = [];
    armas[0] = "Machadinha";

    const personagem =
    {
        Nome: "Noembelu",
        Estilo: "Forças Especiais",
        Escola: "Shadaloo",
        Conceito: "Assassina",
        Assinatura: "Expressão Fria",
        Equipe: "Shadaloo",
        Time: "Dolls",
        Jogador: "NPC",
        Cronica: "Street Fighter 5",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 5,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 5,
        Interrogacao: 0,
        Intimidacao: 5,
        Perspicacia: 3,
        Manha: 0,
        Labia: 3,
        LutaCega: 3,
        Conducao: 0,
        Lideranca: 2,
        Seguranca: 3,
        Furtividade: 5,
        Sobrevivencia: 4,
        Arena: 2,
        Computador: 0,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 3,
        Estilos: 5,
        Soco: 4,
        Chute: 3,
        Apresamento: 4,
        Bloqueio: 3,
        Esportes: 4,
        Foco: 1,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Handstand Kick, Slide Kick, Backflip Kick, Back Roll Throw, Wall Spring, Jump",
        Combos: "",
        Gloria: 6,
        Honra: 0,
        Chi: 5,
        ForcaVontade: 7,
        Saude: 15,
        Posto: 4,
        Divisao: "Duelista",
        Antecedentes: antecedentes
    };
    return personagem;
}

let npc;
if (getParameterByName('age') === 'sfa')
    npc = NoembeluSFZ3();
else
    npc = NoembeluSF5();

npc = calcPC(npc);