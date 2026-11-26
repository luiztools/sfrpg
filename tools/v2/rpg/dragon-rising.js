function EliasSynn() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Contatos", 5);
    antecedentes[1] = newCaracteristica("Apoio", 5);
    antecedentes[2] = newCaracteristica("Staff", 4);
    antecedentes[3] = newCaracteristica("Recursos", 3);
    antecedentes[4] = newCaracteristica("Aliados", 4);

    const personagem = {
        Nome: "Elias Synn",
        Estilo: "Ler Drit",
        Escola: "",
        Jogador: "NPC",
        Assinatura: "Sorriso Malicioso",
        Conceito: "Empresário",
        Cronica: "Segredos da Shadaloo",
        Equipe: "Shadaloo",
        Time: "Dragon Rising",
        Forca: 3,
        Destreza: 4,
        Vigor: 2,
        Carisma: 4,
        Manipulacao: 5,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 3,
        Intimidacao: 1,
        Perspicacia: 3,
        Manha: 1,
        Labia: 2,
        NovosTalentos: [],
        LutaCega: 0,
        Conducao: 1,
        Lideranca: 2,
        Seguranca: 3,
        Furtividade: 1,
        Sobrevivencia: 0,
        NovasPericias: [],
        Arena: 1,
        Computador: 0,
        Investigacao: 2,
        Medicina: 0,
        Misterios: 1,
        Estilos: 4,
        NovosConhecimentos: [],
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 2,
        Bloqueio: 3,
        Apresamento: 1,
        Esportes: 3,
        Foco: 3,
        NovasTecnicas: [],
        ManobrasEspeciais: 'Ducking Fierce, Suplex, Psychokinetic Channeling, Cobra Charm, Telepathy',
        Combos: 'Ducking Fierce para Suplex para Cobra Charm',
        Gloria: 3,
        Honra: 0,
        Chi: 5,
        ForcaVontade: 5,
        Saude: 10,
        Divisao: "Tradicional",
        Posto: 1
    };
    return personagem;
}

function KwaSo() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 3);
    antecedentes[1] = newCaracteristica("Recursos", 3);
    antecedentes[2] = newCaracteristica("Aliados", 3);
    antecedentes[3] = newCaracteristica("Staff", 3);
    antecedentes[4] = newCaracteristica("Arena", 3);
    antecedentes[5] = newCaracteristica("Empresario", 5);

    const kwaSo = {
        Nome: "Kwa So",
        Estilo: "Kung Fu",
        Escola: "Ruas da China",
        Jogador: "NPC",
        Assinatura: "Faz cara de desdém",
        Conceito: "Chefe regional da Shadaloo",
        Equipe: "Shadaloo",
        Time: "Dragon Rising",
        Forca: 3,
        Destreza: 5,
        Vigor: 3,
        Carisma: 2,
        Manipulacao: 4,
        Aparencia: 2,
        Percepcao: 2,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 2,
        Perspicacia: 4,
        Manha: 3,
        Labia: 3,
        LutaCega: 3,
        Conducao: 2,
        Lideranca: 4,
        Seguranca: 1,
        Furtividade: 3,
        Arena: 3,
        Misterios: 3,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 5,
        Bloqueio: 3,
        Apresamento: 1,
        Esportes: 3,
        ManobrasEspeciais: "Hundred Hand Slap, Rekka Ken, Monkey Grab Punch, Deflecting Punch, Jump, Punch Defense",
        Combos: "Deflecting Punch para Hundred Hand Slap (Dizzy)",
        Gloria: 5,
        Honra: 3,
        Chi: 5,
        ForcaVontade: 7,
        Saude: 14,
        Divisao: "Estilo Livre",
        Posto: 4
    };
    return kwaSo;
}

function Kallista() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Recursos", 4);
    antecedentes[1] = newCaracteristica("Empresario", 5);
    antecedentes[2] = newCaracteristica("Aliados", 3);
    antecedentes[3] = newCaracteristica("Staff", 3);
    antecedentes[4] = newCaracteristica("Apoio", 3);

    const kallista = {
        Nome: "Kallista",
        Estilo: "Forças Especiais",
        Escola: "Exército da Suécia",
        Jogador: "NPC",
        Assinatura: "Frieza!",
        Conceito: "Rainha do Gelo",
        Equipe: "Shadaloo",
        Time: "Dragon Rising",
        Forca: 3,
        Destreza: 4,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 1,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 4,
        Intimidacao: 2,
        Perspicacia: 1,
        LutaCega: 1,
        Conducao: 2,
        Seguranca: 1,
        Furtividade: 3,
        Sobrevivencia: 1,
        Arena: 2,
        Computador: 2,
        Misterios: 3,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 1,
        Chute: 3,
        Bloqueio: 3,
        Apresamento: 2,
        Esportes: 2,
        Foco: 3,
        ManobrasEspeciais: "Ice Blast, Backflip Kick, Flying Knee Thrust, Foot Sweep, Handstand Kick, Thigh Press, Jump",
        Combos: "Backflip Kick para Ice Blast (Dizzy); Short para Handstand Kick",
        Gloria: 6,
        Honra: 1,
        Chi: 9,
        ForcaVontade: 6,
        Saude: 12,
        Divisao: "Estilo Livre",
        Posto: 3
    };
    return kallista;
}

function Drake() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliado", 4);
    antecedentes[1] = newCaracteristica("Staff", 3);
    antecedentes[2] = newCaracteristica("Empresario", 5);
    antecedentes[3] = newCaracteristica("Sensei", 4);
    antecedentes[4] = newCaracteristica("Apoio", 1);

    const drake = {
        Nome: "Drake",
        Estilo: "Karatê Shotokan",
        Escola: "Dojô de Ken",
        Jogador: "NPC",
        Assinatura: "Sai em silêncio",
        Conceito: "Lutador",
        Equipe: "Shadaloo",
        Time: "Dragon Rising",
        Forca: 4,
        Destreza: 4,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 1,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 4,
        Intimidacao: 3,
        Perspicacia: 2,
        Manha: 3,
        Labia: 1,
        LutaCega: 3,
        Conducao: 1,
        Seguranca: 2,
        Furtividade: 1,
        Arena: 4,
        Investigacao: 2,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 3,
        Apresamento: 1,
        Esportes: 3,
        ManobrasEspeciais: "Power Uppercut, Dragon Punch, Throw, Double Hit Kick, Double Dread Kick, Foot Sweep, Hurricane Kick, Jump, Backflip",
        Combos: "Backflip para Foot Sweep para Dragon Punch (Dizzy);",
        Gloria: 6,
        Honra: 1,
        Chi: 5,
        ForcaVontade: 7,
        Saude: 13,
        Divisao: "Estilo Livre",
        Posto: 3
    };
    return drake;
}

function Corona() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Apoio", 3);
    antecedentes[2] = newCaracteristica("Sensei", 4);
    antecedentes[3] = newCaracteristica("Recursos", 3);
    antecedentes[4] = newCaracteristica("Staff", 3);
    antecedentes[5] = newCaracteristica("Arena", 3);

    const corona = {
        Nome: "Corona",
        Estilo: "Ninjitsu Espanhol",
        Escola: "Dojô de Vega",
        Jogador: "NPC",
        Assinatura: "Joga uma rosa",
        Conceito: "Chefe regional da Shadaloo",
        Equipe: "Shadaloo",
        Time: "Dragon Rising",
        Forca: 4,
        Destreza: 4,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 3,
        Aparencia: 5,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 2,
        Perspicacia: 3,
        Manha: 1,
        Labia: 3,
        LutaCega: 3,
        Seguranca: 3,
        Furtividade: 4,
        Sobrevivencia: 2,
        Investigacao: 2,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 2,
        Chute: 2,
        Bloqueio: 3,
        Apresamento: 3,
        Esportes: 4,
        ManobrasEspeciais: "Spinning Back Fist, Backflip Kick, Back Roll Throw, Hair Throw, Backflip, Wall Spring, Jump, Throw",
        Combos: "Wall Spring para Jump + Roundhouse para Hair Throw (Dizzy)",
        Gloria: 5,
        Honra: 3,
        Chi: 3,
        ForcaVontade: 7,
        Saude: 10,
        Divisao: "Estilo Livre",
        Posto: 3
    };
    return corona;
}

let npc;
if (getParameterByName('age') === 'kwa-so')
    npc = KwaSo();
else if (getParameterByName('age') === 'kallista')
    npc = Kallista();
else if (getParameterByName('age') === 'drake')
    npc = Drake();
else if (getParameterByName('age') === 'corona')
    npc = Corona();
else
    npc = EliasSynn();

npc = calcPC(npc);
