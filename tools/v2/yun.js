function YunSF4() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Sensei", 5);
    antecedentes[3] = newCaracteristica("Staff", 3);
    antecedentes[4] = newCaracteristica("Recursos", 2);

    var yun =
    {
        Nome: "Yun Lee",
        Conceito: "Líder Comunitário",
        Escola: "Dojô de Gen",
        Estilo: "Kung Fu",
        Assinatura: "Skatista",
        Jogador: "NPC",
        Cronica: "Street Fighter 4",
        Forca: 5,
        Destreza: 6,
        Vigor: 4,
        Carisma: 5,
        Manipulacao: 4,
        Aparencia: 5,
        Percepcao: 2,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 5,
        Interrogacao: 1,
        Intimidacao: 3,
        Perspicacia: 2,
        Manha: 5,
        Labia: 3,
        LutaCega: 5,
        Conducao: 1,
        Lideranca: 5,
        Seguranca: 3,
        Furtividade: 3,
        Sobrevivencia: 1,
        Arena: 4,
        Computador: 1,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 5,
        Foco: 2,
        Gloria: 9,
        Honra: 7,
        Chi: 4,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Tradicional",
        Posto: 9,
        ManobrasEspeciais: "Back Throw, Body Roll, Dive Kick, Flying Twin Kick, Foot Sweep, Knee Basher, Palm Press, Shoulder Blast, Spring Punch, Throw",
        Combos: "Foot Sweep para Roundhouse; Body Roll para Shoulder Blast; Throw para Spring Punch para Palm Press (Dizzy)"
    };
    return yun;
}

function YunZ3() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Contatos", 2);
    antecedentes[2] = newCaracteristica("Sensei", 5);
    antecedentes[3] = newCaracteristica("Staff", 2);
    antecedentes[4] = newCaracteristica("Recursos", 2);

    var yun =
    {
        Nome: "Yun Lee",
        Conceito: "Líder Comunitário",
        Escola: "Dojô de Gen",
        Estilo: "Kung Fu",
        Assinatura: "Skatista",
        Jogador: "NPC",
        Cronica: "Street Fighter Alpha",
        Forca: 5,
        Destreza: 5,
        Vigor: 4,
        Carisma: 5,
        Manipulacao: 4,
        Aparencia: 5,
        Percepcao: 2,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 1,
        Intimidacao: 3,
        Perspicacia: 2,
        Manha: 5,
        Labia: 3,
        LutaCega: 4,
        Conducao: 1,
        Lideranca: 4,
        Seguranca: 3,
        Furtividade: 3,
        Sobrevivencia: 1,
        Arena: 4,
        Computador: 1,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 5,
        Foco: 2,
        Gloria: 8,
        Honra: 6,
        Chi: 3,
        ForcaVontade: 9,
        Saude: 18,
        Divisao: "Tradicional",
        Posto: 7,
        ManobrasEspeciais: "Back Throw, Body Roll, Dive Kick, Flying Twin Kick, Foot Sweep, Knee Basher, Palm Press, Shoulder Blast, Spring Punch, Throw",
        Combos: "Foot Sweep para Roundhouse; Body Roll para Shoulder Blast;"
    };
    return yun;
}

var npc;
if (getParameterByName('age') === 'sfa')
    npc = YunZ3();
else
    npc = YunSF4();

npc = calcPC(npc);