function BirdieZ3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 1);
    antecedentes[1] = newCaracteristica("Aliados", 5);
    antecedentes[2] = newCaracteristica("Contatos", 4);
    antecedentes[3] = newCaracteristica("Fama", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Chicote", 5);
    tecnicas[1] = newCaracteristica("Faca", 4);

    const armas = [];
    armas[0] = "Corrente";
    armas[1] = "Faca";

    const birdie = {
        Nome: "Birdie",
        Estilo: "Wrestling",
        Escola: "Becos da  Inglaterra",
        Jogador: "NPC",
        Assinatura: "Moicano loiro",
        Conceito: "Leão-de-Chácara",
        Cronica: "Street Fighter Alpha",
        Forca: 6,
        Destreza: 3,
        Vigor: 6,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 4,
        Prontidao: 2,
        Interrogacao: 2,
        Intimidacao: 5,
        Perspicacia: 0,
        Manha: 5,
        Labia: 1,
        Conducao: 2,
        Lideranca: 2,
        Seguranca: 2,
        Furtividade: 1,
        Sobrevivencia: 0,
        Arena: 2,
        Computador: 0,
        Investigacao: 0,
        Medicina: 1,
        Misterios: 0,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 3,
        Bloqueio: 4,
        Apresamento: 5,
        Esportes: 2,
        Foco: 2,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Foot Sweep, Buffalo Punch, Head Butt, Bull Head, Back Breaker, Throw, Bandit Chain, Head Butt Hold, Air Throw",
        Combos: "Buffalo Punch para Bull Head (Dizzy)",
        Gloria: 7,
        Honra: 3,
        Chi: 2,
        ForcaVontade: 9,
        Saude: 18,
        Divisao: "Duelistas",
        Posto: 8
    };
    return birdie;
}

function BirdieSF5() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 2);
    antecedentes[1] = newCaracteristica("Aliados", 5);
    antecedentes[2] = newCaracteristica("Contatos", 5);
    antecedentes[3] = newCaracteristica("Fama", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Chicote", 5);
    tecnicas[1] = newCaracteristica("Faca", 5);

    const armas = [];
    armas[0] = "Corrente";
    armas[1] = "Faca";

    const birdie = {
        Nome: "Birdie",
        Estilo: "Wrestling",
        Escola: "Becos da  Inglaterra",
        Jogador: "NPC",
        Assinatura: "Moicano loiro",
        Conceito: "Leão-de-Chácara",
        Cronica: "Street Fighter 5",
        Forca: 6,
        Destreza: 3,
        Vigor: 6,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 4,
        Prontidao: 2,
        Interrogacao: 2,
        Intimidacao: 5,
        Perspicacia: 0,
        Manha: 5,
        Labia: 2,
        Conducao: 3,
        Lideranca: 2,
        Seguranca: 3,
        Furtividade: 1,
        Sobrevivencia: 1,
        Arena: 3,
        Computador: 0,
        Investigacao: 0,
        Medicina: 1,
        Misterios: 0,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 3,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 3,
        Foco: 2,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Foot Sweep, Buffalo Punch, Head Butt, Bull Head, Back Breaker, Throw, Bandit Chain, Head Butt Hold, Air Throw",
        Combos: "Buffalo Punch para Bull Head (Dizzy)",
        Gloria: 8,
        Honra: 3,
        Chi: 2,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 9
    };
    return birdie;
}

let npc;
if (getParameterByName('age') === 'sfa')
    npc = BirdieZ3();
else
    npc = BirdieSF5();

npc = calcPC(npc);