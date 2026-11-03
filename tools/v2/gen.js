function GenSF1() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Arena", 3);
    antecedentes[2] = newCaracteristica("Contatos", 2);
    antecedentes[3] = newCaracteristica("Fama", 2);
    antecedentes[4] = newCaracteristica("Recursos", 2);

    const gen = {
        Nome: "Gen",
        Estilo: "Kempo",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Você luta, você perde, você morre!",
        Conceito: "Mestre de Kempo",
        Cronica: "Street Fighter 1",
        Forca: 5,
        Destreza: 6,
        Vigor: 5,
        Carisma: 2,
        Manipulacao: 5,
        Aparencia: 3,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 5,
        Interrogacao: 2,
        Intimidacao: 3,
        Perspicacia: 4,
        Manha: 5,
        LutaCega: 4,
        Lideranca: 4,
        Seguranca: 2,
        Furtividade: 5,
        Sobrevivencia: 1,
        Arena: 2,
        Investigacao: 2,
        Medicina: 3,
        Misterios: 4,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 5,
        Foco: 5,
        ManobrasEspeciais: "Ansatsuken, Zan-ei, Tumbling Attack, Gekiro, Jump, Kippup, Foot Sweep, Throw, Hundred Hand Slap, Chi Kun Healing, Dim Mak, Drunken Monkey Roll, Punch Defense, Deflecting Punch, Air Throw, Wall Spring",
        Combos: "Dim Mak (Ansatsuken); Hundred Hand Slap (Ansatsuken); Drunken Monkey Roll para Hundred Hand Slap (Dizzy), Hundred Hand Slap para Dim Mak (Dizzy)",
        Gloria: 9,
        Honra: 2,
        Chi: 9,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Tradicional",
        Posto: 6
    };
    return gen;
}

function GenSF4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Arena", 4);
    antecedentes[2] = newCaracteristica("Contatos", 3);
    antecedentes[3] = newCaracteristica("Fama", 4);
    antecedentes[4] = newCaracteristica("Recursos", 3);

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 5);

    const gen = {
        Nome: "Gen",
        Estilo: "Kempo",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Você luta, você perde, você morre!",
        Conceito: "Mestre de Kempo",
        Cronica: "Street Fighter 4",
        Forca: 5,
        Destreza: 6,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 5,
        Aparencia: 2,
        Percepcao: 5,
        Inteligencia: 5,
        Raciocinio: 6,
        Prontidao: 5,
        Interrogacao: 2,
        Intimidacao: 5,
        Perspicacia: 5,
        Manha: 5,
        NovosTalentos: talentos,
        LutaCega: 4,
        Lideranca: 4,
        Seguranca: 2,
        Furtividade: 5,
        Sobrevivencia: 2,
        Arena: 2,
        Investigacao: 3,
        Medicina: 4,
        Misterios: 4,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 5,
        Foco: 5,
        ManobrasEspeciais: "Ansatsuken, Zan-ei, Tumbling Attack, Gekiro, Jump, Kippup, Foot Sweep, Throw, Hundred Hand Slap, Chi Kun Healing, Dim Mak, Drunken Monkey Roll, Punch Defense, Deflecting Punch, Air Throw, Wall Spring, Mu No Hadou",
        Combos: "Dim Mak (Ansatsuken); Hundred Hand Slap (Ansatsuken); Drunken Monkey Roll para Hundred Hand Slap (Dizzy), Hundred Hand Slap para Dim Mak (Dizzy), Jab para Jab para Short (Dizzy), Bloqueio para Dim Mak",
        Gloria: 10,
        Honra: 4,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Tradicional",
        Posto: 9
    };
    return gen;
}

function GenZ3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Arena", 3);
    antecedentes[2] = newCaracteristica("Contatos", 2);
    antecedentes[3] = newCaracteristica("Fama", 3);
    antecedentes[4] = newCaracteristica("Recursos", 2);

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 4);

    const gen = {
        Nome: "Gen",
        Estilo: "Kempo",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Você luta, você perde, você morre!",
        Conceito: "Mestre de Kempo",
        Cronica: "Street Fighter Alpha",
        Forca: 5,
        Destreza: 6,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 5,
        Aparencia: 2,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 2,
        Intimidacao: 4,
        Perspicacia: 4,
        Manha: 5,
        NovosTalentos: talentos,
        LutaCega: 4,
        Lideranca: 4,
        Seguranca: 2,
        Furtividade: 5,
        Sobrevivencia: 1,
        Arena: 2,
        Investigacao: 3,
        Medicina: 4,
        Misterios: 4,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 5,
        Foco: 5,
        ManobrasEspeciais: "Ansatsuken, Zan-ei, Tumbling Attack, Gekiro, Jump, Kippup, Foot Sweep, Throw, Hundred Hand Slap, Chi Kun Healing, Dim Mak, Drunken Monkey Roll, Punch Defense, Deflecting Punch, Air Throw, Wall Spring",
        Combos: "Dim Mak (Ansatsuken); Hundred Hand Slap (Ansatsuken); Drunken Monkey Roll para Hundred Hand Slap (Dizzy), Hundred Hand Slap para Dim Mak (Dizzy), Jab para Jab para Short (Dizzy)",
        Gloria: 10,
        Honra: 3,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Tradicional",
        Posto: 7
    };
    return gen;
}

var npc;
if (getParameterByName('age') === 'sfa')
    npc = GenZ3();
else if (getParameterByName('age') === 'sf1')
    npc = GenSF1();
else
    npc = GenSF4();

npc = calcPC(npc);