function YangSF4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Arena", 3);
    antecedentes[2] = newCaracteristica("Fama", 1);
    antecedentes[3] = newCaracteristica("Sensei", 3);

    const yang =
    {
        Nome: "Yang Lee",
        Conceito: "Líder Comunitário",
        Escola: "Dojô de Gen",
        Estilo: "Kung Fu",
        Assinatura: "Cabelo estiloso",
        Jogador: "NPC",
        Cronica: "Street Fighter 4",
        Forca: 5,
        Destreza: 6,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 3,
        Intimidacao: 2,
        Perspicacia: 4,
        Manha: 3,
        Labia: 2,
        LutaCega: 4,
        Conducao: 1,
        Lideranca: 2,
        Seguranca: 2,
        Furtividade: 4,
        Sobrevivencia: 2,
        Arena: 3,
        Computador: 2,
        Investigacao: 3,
        Medicina: 4,
        Misterios: 3,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 6,
        Bloqueio: 6,
        Apresamento: 4,
        Esportes: 6,
        Foco: 3,
        Gloria: 6,
        Honra: 8,
        Chi: 6,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Tradicional",
        Posto: 9,
        ManobrasEspeciais: "Jump, Kobokushi, Foot Sweep, Senkju Tai, Knee Basher, Dive Kick, Back Roll Throw, Throw, Flying Heel Stomp, Drunken Monkey Roll, Gekiro, Rekka Ken, Kippup",
        Combos: "Drunkey Monkey Roll para Gekiro; Senkju Tai para Kobokushi (Dizzy); Bloqueio para Knee Basher (Dizzy); Short para Forward para Kobokushi"
    };
    return yang;
}

function YangZ3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Arena", 2);
    antecedentes[2] = newCaracteristica("Sensei", 3);

    const yang =
    {
        Nome: "Yang Lee",
        Conceito: "Estudante",
        Escola: "Dojô de Gen",
        Estilo: "Kung Fu",
        Assinatura: "Cabelo estiloso",
        Jogador: "NPC",
        Cronica: "Street Fighter Alpha",
        Forca: 4,
        Destreza: 5,
        Vigor: 3,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 2,
        Interrogacao:2,
        Intimidacao: 1,
        Perspicacia: 3,
        Manha: 2,
        Labia: 1,
        LutaCega: 3,
        Conducao: 0,
        Lideranca: 1,
        Seguranca: 1,
        Furtividade: 3,
        Sobrevivencia: 1,
        Arena: 2,
        Computador: 1,
        Investigacao: 2,
        Medicina: 3,
        Misterios: 2,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 5,
        Foco: 2,
        Gloria: 5,
        Honra: 7,
        Chi: 5,
        ForcaVontade: 7,
        Saude: 18,
        Divisao: "Tradicional",
        Posto: 8,
        ManobrasEspeciais: "Jump, Kobokushi, Foot Sweep, Senkju Tai, Knee Basher, Dive Kick, Back Roll Throw, Throw, Flying Heel Stomp, Drunken Monkey Roll, Gekiro, Rekka Ken, Kippup",
        Combos: "Drunkey Monkey Roll para Gekiro; Senkju Tai para Kobokushi (Dizzy); Bloqueio para Knee Basher (Dizzy);"
    };
    return yang;
}

let npc;
if (getParameterByName('age') === 'sfa')
    npc = YangZ3();
else
    npc = YangSF4();

npc = calcPC(npc);