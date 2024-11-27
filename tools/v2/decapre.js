function DecapreSF4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Arena", 3);
    antecedentes[2] = newCaracteristica("Contatos", 4);
    antecedentes[3] = newCaracteristica("Apoio", 5);
    antecedentes[4] = newCaracteristica("Psycho Power", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Faca", 5);
    tecnicas[1] = newCaracteristica("Armas de Fogo", 3);

    const armas = [];
    armas[0] = "Katar";

    const decapre = {
        Nome: "Decapre",
        Estilo: "Ler Drit",
        Escola: "QG da Shadaloo",
        Jogador: "NPC",
        Assinatura: "Máscara e adaga",
        Conceito: "Assassina de Elite",
        Cronica: "Street Fighter 4",
        Time: "Dolls",
        Equipe: "Shadaloo",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 1,
        Manipulacao: 3,
        Aparencia: 1,
        Percepcao: 5,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 4,
        Intimidacao: 4,
        Perspicacia: 3,
        Manha: 3,
        Labia: 4,
        LutaCega: 2,
        Conducao: 4,
        Lideranca: 4,
        Seguranca: 4,
        Furtividade: 5,
        Sobrevivencia: 5,
        Arena: 3,
        Computador: 2,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 3,
        Estilos: 4,
        Antecedentes: antecedentes,
        NovasTecnicas: tecnicas,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 5,
        Foco: 5,
        Armas: armas,
        ManobrasEspeciais: "Jump, Throw, Air Throw, Psycho Crusher, Foot Sweep, Handstand Kick, Haymaker, Suplex, Widowmaker, Thigh Press, Flying Body Spear, Slide Kick, Ducking Fierce, Sonic Boom, Psychokinetic Channeling",
        Combos: "Movimento para Slide Kick; Jab para Strong para Fierce (Dizzy); ",
        Gloria: 5,
        Honra: 0,
        Chi: 6,
        ForcaVontade: 7,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 6
    };
    return decapre;
}

function DecapreSFZ3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Arena", 3);
    antecedentes[2] = newCaracteristica("Contatos", 5);
    antecedentes[3] = newCaracteristica("Apoio", 5);
    antecedentes[4] = newCaracteristica("Psycho Power", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Faca", 5);
    tecnicas[1] = newCaracteristica("Armas de Fogo", 3);

    const armas = [];
    armas[0] = "Katar";

    const decapre = {
        Nome: "Decapre",
        Estilo: "Forças Especiais",
        Escola: "QG da Shadaloo",
        Jogador: "NPC",
        Assinatura: "Máscara e adaga",
        Conceito: "Assassina de Elite",
        Cronica: "Street Fighter Alpha",
        Time: "Dolls",
        Equipe: "Shadaloo",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 1,
        Manipulacao: 3,
        Aparencia: 1,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 4,
        Intimidacao: 3,
        Perspicacia: 3,
        Manha: 3,
        Labia: 4,
        LutaCega: 2,
        Conducao: 4,
        Lideranca: 3,
        Seguranca: 4,
        Furtividade: 5,
        Sobrevivencia: 5,
        Arena: 2,
        Computador: 2,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 2,
        Estilos: 3,
        Antecedentes: antecedentes,
        NovasTecnicas: tecnicas,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 5,
        Foco: 4,
        Armas: armas,
        ManobrasEspeciais: "Jump, Throw, Air Throw, Foot Sweep, Handstand Kick, Haymaker, Suplex, Widowmaker, Thigh Press, Flying Body Spear, Slide Kick, Ducking Fierce, Psychokinetic Channeling",
        Combos: "Movimento para Slide Kick; Jab para Strong para Fierce (Dizzy); ",
        Gloria: 4,
        Honra: 0,
        Chi: 5,
        ForcaVontade: 6,
        Saude: 18,
        Divisao: "Duelistas",
        Posto: 5
    };
    return decapre;
}

let npc;
if (getParameterByName('age') === 'sfa')
    npc = DecapreSFZ3();
else
    npc = DecapreSF4();

npc = calcPC(npc);