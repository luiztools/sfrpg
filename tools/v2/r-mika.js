function RMikaZ3() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 1);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Empresário", 3);
    antecedentes[3] = newCaracteristica("Fama", 3);
    antecedentes[4] = newCaracteristica("Recursos", 3);
    antecedentes[5] = newCaracteristica("Sensei", 3);
    antecedentes[6] = newCaracteristica("Staff", 3);
    var mika =
    {
        Nome: "Rainbow Mika",
        Estilo: "Luta Livre",
        Escola: "Dojô de Yoko",
        Conceito: "Estrela da Luta Livre",
        Assinatura: "Levanta os braços!",
        Jogador: "NPC",
        Cronica: "Street Fighter Alpha",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 7,
        Percepcao: 2,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 2,
        Intimidacao: 3,
        Manha: 3,
        Labia: 3,
        LutaCega: 1,
        Conducao: 2,
        Lideranca: 3,
        Furtividade: 1,
        Arena: 2,
        Investigacao: 1,
        Misterios: 1,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 3,
        Bloqueio: 4,
        Apresamento: 5,
        Esportes: 4,
        Foco: 1,
        ManobrasEspeciais: "Jump, Foot Sweep, Back Breaker, Suplex, Air Throw, Air Suplex, Head Butt, Air Smash, Butt Crush, Thigh Press, Breakfall, Grappling Defense, Pin",
        Combos: "Jump + Roundhouse para Back Breaker para Pin (Dizzy), Jab para Short para Butt Crush (dizzy), Butt Crush para Head Butt (Dizzy)",
        Chi: 2,
        ForcaVontade: 9,
        Saude: 20,
        Posto: 6,
        Gloria: 7,
        Honra: 3,
        Divisao: "Tradicional"
    };
    return mika;
}

function RMikaSF5() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 2);
    antecedentes[1] = newCaracteristica("Aliados", 3);
    antecedentes[2] = newCaracteristica("Empresário", 4);
    antecedentes[3] = newCaracteristica("Fama", 4);
    antecedentes[4] = newCaracteristica("Recursos", 3);
    antecedentes[5] = newCaracteristica("Sensei", 3);
    antecedentes[6] = newCaracteristica("Staff", 3);
    var mika =
    {
        Nome: "Rainbow Mika",
        Estilo: "Luta Livre",
        Escola: "Dojô de Yoko",
        Conceito: "Estrela da Luta Livre",
        Assinatura: "Levanta os braços!",
        Jogador: "NPC",
        Cronica: "Street Fighter 5",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 5,
        Manipulacao: 3,
        Aparencia: 7,
        Percepcao: 2,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 2,
        Intimidacao: 3,
        Manha: 3,
        Labia: 4,
        LutaCega: 1,
        Conducao: 2,
        Lideranca: 3,
        Furtividade: 1,
        Arena: 3,
        Investigacao: 1,
        Misterios: 1,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 3,
        Bloqueio: 4,
        Apresamento: 5,
        Esportes: 5,
        Foco: 1,
        ManobrasEspeciais: "Jump, Foot Sweep, Back Breaker, Suplex, Air Throw, Air Suplex, Head Butt, Air Smash, Butt Crush, Thigh Press, Breakfall, Grappling Defense, Pin, Power Up",
        Combos: "Jump + Roundhouse para Back Breaker para Pin (Dizzy), Jab para Short para Butt Crush (dizzy), Butt Crush para Head Butt (Dizzy)",
        Chi: 3,
        ForcaVontade: 10,
        Saude: 20,
        Posto: 9,
        Gloria: 8,
        Honra: 4,
        Divisao: "Tradicional"
    };
    return mika;
}

var npc;
if (getParameterByName('age') === 'sfa')
    npc = RMikaZ3();
else
    npc = RMikaSF5();

npc = calcPC(npc);