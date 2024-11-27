function YangSF4() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Sensei", 5);
    antecedentes[3] = newCaracteristica("Staff", 3);
    antecedentes[4] = newCaracteristica("Recursos", 2);

    var yang =
    {
        Nome: "Yang Lee",
        Conceito: "Líder Comunitário",
        Escola: "Dojô de Gen",
        Estilo: "Kung Fu",
        Assinatura: "Calmaria",
        Jogador: "NPC",
        Cronica: "Street Fighter 4",
        Forca: 5,
        Destreza: 6,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 5,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 5,
        Interrogacao: 1,
        Intimidacao: 3,
        Perspicacia: 4,
        Manha: 4,
        Labia: 5,
        LutaCega: 5,
        Conducao: 1,
        Lideranca: 5,
        Seguranca: 3,
        Furtividade: 3,
        Sobrevivencia: 1,
        Arena: 4,
        Computador: 2,
        Misterios: 1,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 5,
        Foco: 3,
        Gloria: 6,
        Honra: 9,
        Chi: 8,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Tradicional",
        Posto: 9,
        ManobrasEspeciais: "Back Roll Throw, Body Roll, Dive Kick, Foot Sweep, Handstand Kick, Knee Basher, Mach Slide, Palm Press, Power Uppercut, Rekka Ken, Spinning Foot Sweep, Spring Kick, Drunken Monkey Roll, Reverse Waterfall",
        Combos: "Body Roll para Fierce; Strong para Strong para Fierce (Dizzy); Jump para Spring Kick; Mach Slide para Throw"
    };
    return yang;
}

function YangZ3() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Contatos", 2);
    antecedentes[2] = newCaracteristica("Sensei", 5);
    antecedentes[3] = newCaracteristica("Staff", 2);
    antecedentes[4] = newCaracteristica("Recursos", 2);

    var yun =
    {
        Nome: "Yang Lee",
        Conceito: "Líder Comunitário",
        Escola: "Dojô de Gen",
        Estilo: "Kung Fu",
        Assinatura: "Calmaria",
        Jogador: "NPC",
        Cronica: "Street Fighter Alpha",
        Forca: 5,
        Destreza: 5,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 5,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 1,
        Intimidacao: 3,
        Perspicacia: 4,
        Manha: 4,
        Labia: 5,
        LutaCega: 5,
        Conducao: 1,
        Lideranca: 4,
        Seguranca: 3,
        Furtividade: 3,
        Sobrevivencia: 1,
        Arena: 4,
        Computador: 2,
        Misterios: 1,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 5,
        Foco: 3,
        Gloria: 5,
        Honra: 8,
        Chi: 7,
        ForcaVontade: 9,
        Saude: 18,
        Divisao: "Tradicional",
        Posto: 7,
        ManobrasEspeciais: "Back Roll Throw, Body Roll, Dive Kick, Foot Sweep, Handstand Kick, Knee Basher, Mach Slide, Palm Press, Power Uppercut, Rekka Ken, Spinning Foot Sweep, Spring Kick, Drunken Monkey Roll, Reverse Waterfall",
        Combos: "Body Roll para Fierce; Strong para Strong para Fierce (Dizzy); Jump para Spring Kick;"
    };
    return yang;
}

var npc;
if (getParameterByName('age') === 'sfa')
    npc = YangZ3();
else
    npc = YangSF4();

npc = calcPC(npc);