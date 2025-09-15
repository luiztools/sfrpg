function YunSF4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Arena", 3);
    antecedentes[2] = newCaracteristica("Fama", 1);
    antecedentes[3] = newCaracteristica("Sensei", 3);

    const yun =
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
        Carisma: 4,
        Manipulacao: 4,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 4,
        Intimidacao: 3,
        Perspicacia: 3,
        Manha: 3,
        Labia: 4,
        LutaCega: 2,
        Conducao: 3,
        Lideranca: 4,
        Seguranca: 3,
        Furtividade: 3,
        Sobrevivencia: 0,
        Arena: 3,
        Computador:2,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 1,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 6,
        Bloqueio: 6,
        Apresamento: 4,
        Esportes: 6,
        Foco: 3,
        Gloria: 8,
        Honra: 6,
        Chi: 7,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Tradicional",
        Posto: 9,
        ManobrasEspeciais: "Jump, Kobokushi, Foot Sweep, Senkju Tai, Knee Basher, Dive Kick, Back Roll Throw, Throw, Flying Heel Stomp, Drunken Monkey Roll, Gekiro, Rekka Ken, Kippup",
        Combos: "Drunken Monkey Roll para Gekiro; Senkju Tai para Kobokushi (Dizzy); Bloqueio para Knee Basher (dizzy); Short para Forward para Kobokushi"
    };
    return yun;
}

function YunZ3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Arena", 2);
    antecedentes[2] = newCaracteristica("Sensei", 3);

    const yun =
    {
        Nome: "Yun Lee",
        Conceito: "Estudante",
        Escola: "Dojô de Gen",
        Estilo: "Kung Fu",
        Assinatura: "Skatista",
        Jogador: "NPC",
        Cronica: "Street Fighter Alpha",
        Forca: 4,
        Destreza: 5,
        Vigor: 3,
        Carisma: 4,
        Manipulacao: 4,
        Aparencia: 4,
        Percepcao: 2,
        Inteligencia: 1,
        Raciocinio: 3,
        Prontidao: 2,
        Interrogacao: 3,
        Intimidacao: 2,
        Perspicacia: 2,
        Manha: 2,
        Labia: 3,
        LutaCega: 1,
        Conducao: 2,
        Lideranca: 3,
        Seguranca: 2,
        Furtividade: 2,
        Sobrevivencia: 0,
        Arena: 2,
        Computador:1,
        Investigacao: 2,
        Medicina: 1,
        Misterios: 0,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 5,
        Foco: 2,
        Gloria: 7,
        Honra: 5,
        Chi: 6,
        ForcaVontade: 7,
        Saude: 18,
        Divisao: "Tradicional",
        Posto: 8,
        ManobrasEspeciais: "Jump, Kobokushi, Foot Sweep, Senkju Tai, Knee Basher, Dive Kick, Back Roll Throw, Throw, Flying Heel Stomp, Drunken Monkey Roll,  Gekiro, Rekka Ken, Kippup",
        Combos: "Drunken Monkey Roll para Gekiro; Senkju Tai para Kobokushi (Dizzy); Bloqueio para Knee Basher (dizzy);"
    };
    return yun;
}

var npc;
if (getParameterByName('age') === 'sfa')
    npc = YunZ3();
else
    npc = YunSF4();

npc = calcPC(npc);