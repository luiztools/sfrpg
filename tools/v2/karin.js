function KarinZ3() {

    var antecedentes = [8];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Apoio", 5);
    antecedentes[2] = newCaracteristica("Arena", 3);
    antecedentes[3] = newCaracteristica("Contatos", 4);
    antecedentes[4] = newCaracteristica("Fama", 3);
    antecedentes[5] = newCaracteristica("Recursos", 5);
    antecedentes[6] = newCaracteristica("Sensei", 3);
    antecedentes[7] = newCaracteristica("Staff", 5);

    var tecnicas = [1];
    tecnicas[0] = newCaracteristica("Espada", 4);

    var karin =
    {
        Nome: "Karin Kanzuki",
        Estilo: "Kickboxe",
        Escola: "Professor Particular",
        Conceito: "Colegial",
        Assinatura: "Ar de superioridade",
        Jogador: "NPC",
        Cronica: "Street Fighter Alpha",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 1,
        Manipulacao: 4,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 1,
        Intimidacao: 2,
        Manha: 3,
        Labia: 4,
        Lideranca: 2,
        Furtividade: 1,
        Computador: 2,
        Investigacao: 1,
        Estilos: 2,
        Sobrevivencia: 5,
        Soco: 4,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 4,
        Foco: 3,
        NovasTecnicas: tecnicas,
        Antecedentes: antecedentes,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Power Uppercut, Throw, Knee Basher, Thigh Press, Spinning Back Fist, Spinning Knuckle, Double-Hit Kick, Fist Sweep, Ax Kick, Stepping Front Kick, Rekka Ken, Ressen Ha, Counter Attack, Elbow Smash, Punch Defense, Kick Defense",
        Combos: "Elbow Smash para Elbow Smash (dizzy), Jab para Strong (dizzy), Jab para Rekka Ken, Short para Foot Sweep",
        Chi: 6,
        ForcaVontade: 7,
        Saude: 20,
        Posto: 6,
        Divisao: "Tradicional",
        Honra: 3,
        Gloria: 5
    };
    return karin;
}

function KarinSF5() {

    var antecedentes = [8];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Apoio", 5);
    antecedentes[2] = newCaracteristica("Arena", 4);
    antecedentes[3] = newCaracteristica("Contatos", 5);
    antecedentes[4] = newCaracteristica("Fama", 4);
    antecedentes[5] = newCaracteristica("Recursos", 5);
    antecedentes[6] = newCaracteristica("Sensei", 3);
    antecedentes[7] = newCaracteristica("Staff", 5);

    var tecnicas = [1];
    tecnicas[0] = newCaracteristica("Espada", 4);

    var karin =
    {
        Nome: "Karin Kanzuki",
        Estilo: "Kickboxe",
        Escola: "Professor Particular",
        Conceito: "Colegial",
        Assinatura: "Ar de superioridade",
        Jogador: "NPC",
        Cronica: "Street Fighter 5",
        Forca: 4,
        Destreza: 6,
        Vigor: 5,
        Carisma: 1,
        Manipulacao: 4,
        Aparencia: 5,
        Percepcao: 3,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 2,
        Intimidacao: 2,
        Manha: 3,
        Labia: 4,
        Lideranca: 2,
        Furtividade: 2,
        Computador: 2,
        Investigacao: 2,
        Estilos: 2,
        Sobrevivencia: 5,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 4,
        Foco: 3,
        NovasTecnicas: tecnicas,
        Antecedentes: antecedentes,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Power Uppercut, Throw, Knee Basher, Thigh Press, Spinning Back Fist, Spinning Knuckle, Double-Hit Kick, Fist Sweep, Ax Kick, Stepping Front Kick, Rekka Ken, Ressen Ha, Counter Attack, Elbow Smash, Punch Defense, Kick Defense, Banishing Flat",
        Combos: "Elbow Smash para Elbow Smash (dizzy), Jab para Strong (dizzy), Jab para Rekka Ken, Short para Foot Sweep, Bloqueio para Foot Sweep",
        Chi: 7,
        ForcaVontade: 8,
        Saude: 20,
        Posto: 9,
        Divisao: "Tradicional",
        Honra: 4,
        Gloria: 6
    };
    return karin;
}

var npc;
if (getParameterByName('age') === 'sfa')
    npc = KarinZ3();
else
    npc = KarinSF5();

npc = calcPC(npc);