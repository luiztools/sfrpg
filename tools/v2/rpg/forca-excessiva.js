function MajorCarnage() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Recursos", 4);

    const pericias = [];
    pericias[0] = newCaracteristica("Reparos", 3);
    pericias[1] = newCaracteristica("Demolição", 2);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Idiomas", 1);

    const Major = {
        Nome: "Major Carnage",
        Estilo: "Forças Especiais",
        Escola: "Spetsnaz Russo",
        Jogador: "NPC",
        Assinatura: "Dança Cossaco",
        Conceito: "Comando de Op. Especiais",
        Equipe: "Excalibur Produções",
        Time: "Força Excessiva",
        Forca: 5,
        Destreza: 4,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 2,
        Prontidao: 3,
        Interrogacao: 4,
        Intimidacao: 5,
        Perspicacia: 2,
        Manha: 2,
        Labia: 3,
        NovosTalentos: [],
        LutaCega: 3,
        Conducao: 5,
        Lideranca: 4,
        Seguranca: 2,
        Furtividade: 4,
        Sobrevivencia: 5,
        NovasPericias: pericias,
        Arena: 2,
        Computador: 1,
        Medicina: 2,
        Estilos: 2,
        NovosConhecimentos: conhecimentos,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 3,
        Bloqueio: 2,
        Apresamento: 3,
        Esportes: 3,
        Foco: 2,
        ManobrasEspeciais: "Hyper Fist, Spinning Back Fist, Spinning Clothesline, Turbo Spinning Clothesline, Backflip Kick, Foot Sweep, Flash Kick, Spinning Foot Sweep, Neck Choke",
        Combos: "Spinning Clothesline para Flash Kick para Neck Choke (Dizzy); Bloqueio para Spinning Back Fist para Backflip Kick (Dizzy);",
        Gloria: 3,
        Honra: 1,
        Chi: 2,
        ForcaVontade: 7,
        Saude: 15,
        Divisao: "Tradicional",
        Posto: 6
    };
    return Major;
}

function Hammer() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 2);
    antecedentes[1] = newCaracteristica("Fama", 5);

    const hammer = {
        Nome: "Hammer",
        Estilo: "Sumô",
        Escola: "Escola Sumotori Nagoya",
        Jogador: "NPC",
        Assinatura: "Se joga sobre o oponente",
        Conceito: "Encrenqueiro de bar",
        Equipe: "Excalibur Produções",
        Time: "Força Excessiva",
        Forca: 5,
        Destreza: 3,
        Vigor: 3,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 2,
        Percepcao: 2,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 2,
        Interrogacao: 1,
        Intimidacao: 3,
        Perspicacia: 1,
        LutaCega: 2,
        Conducao: 1,
        Arena: 3,
        Computador: 3,
        Investigacao: 1,
        Medicina: 2,
        Misterios: 1,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 3,
        Bloqueio: 3,
        Apresamento: 4,
        Esportes: 3,
        Foco: 2,
        ManobrasEspeciais: "Eye Rake, Stunning Shout, Sleeper, Haymaker, Widowmaker, Jump, Throw, Head Butt, Hundred Hand Slap, Double Hit Kick, Knee Basher, Air Smash",
        Combos: "Eye Rake para Haymaker para Sleeper (Dizzy); Double Hit Kick para Stunning Shout para Air Smash (Dizzy)",
        Gloria: 4,
        Honra: 1,
        Chi: 3,
        ForcaVontade: 7,
        Saude: 13,
        Divisao: "Tradicional",
        Posto: 6
    };
    return hammer;
}

function Anvil() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Fama", 3);

    const anvil = {
        Nome: "Anvil",
        Estilo: "Sanbo",
        Escola: "Calgary Wrestling Studio",
        Jogador: "NPC",
        Assinatura: "Flexiona os Músculos",
        Conceito: "Perfurador de Petróleo",
        Equipe: "Excalibur Produções",
        Time: "Força Excessiva",
        Forca: 5,
        Destreza: 3,
        Vigor: 5,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 1,
        Inteligencia: 2,
        Raciocinio: 3,
        Prontidao: 1,
        Interrogacao: 2,
        Intimidacao: 5,
        Perspicacia: 1,
        Manha: 1,
        Labia: 1,
        LutaCega: 3,
        Sobrevivencia: 3,
        Arena: 3,
        Medicina: 1,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 2,
        Bloqueio: 3,
        Apresamento: 5,
        Esportes: 1,
        ManobrasEspeciais: "Ear Pop, Spinning Clothesline, Air Throw, Back Breaker, Brain Cracker, Neck Choke, Pile Driver, Suplex, Stomach Pump, Grappling Defense",
        Combos: "Ear Pop para Roundhouse para Stomach Pump (Dizzy); Grappling Defense para Brain Cracker para Pile Driver (Dizzy)",
        Gloria: 5,
        Honra: 1,
        Chi: 2,
        ForcaVontade: 8,
        Saude: 17,
        Divisao: "Tradicional",
        Posto: 6
    };
    return anvil;
}

let npc;
if (getParameterByName('age') === 'hammer')
    npc = Hammer();
else if (getParameterByName('age') === 'anvil')
    npc = Anvil();
else
    npc = MajorCarnage();

npc = calcPC(npc);
