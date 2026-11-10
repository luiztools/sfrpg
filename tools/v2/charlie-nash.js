function CharlieZ3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 3);
    antecedentes[1] = newCaracteristica("Arena", 2);
    antecedentes[2] = newCaracteristica("Recursos", 2);
    antecedentes[3] = newCaracteristica("Contatos", 5);
    antecedentes[4] = newCaracteristica("Aliados", 3);

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 3);
    
    const pericias = [];
    
    const charlie = {
        Nome: "Charles 'Charlie' Nash",
        Estilo: "Forças Especiais",
        Escola: "USAF",
        Jogador: "NPC",
        Assinatura: "Ajeita os óculos",
        Conceito: "Soldado",
        Cronica: "Street Fighter Alpha",
        Equipe: "USAF",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 5,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 5,
        Intimidacao: 4,
        Perspicacia: 3,
        Manha: 4,
        Labia: 3,
        NovosTalentos: talentos,
        LutaCega: 2,
        Conducao: 5,
        Lideranca: 5,
        Seguranca: 4,
        Furtividade: 4,
        Sobrevivencia: 5,
        NovasPericias: pericias,
        Arena: 1,
        Computador: 3,
        Investigacao: 5,
        Medicina: 3,
        Misterios: 2,
        Estilos: 3,
        NovosConhecimentos: [],
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 4,
        Foco: 5,
        NovasTecnicas: tecnicas,
        ManobrasEspeciais: "Jump, Foot Sweep, Somersault Kick, Suplex, Air Suplex, Knee Basher, Throw, Air Throw, Spinning Back Fist, Flying Knee Thrust, Flash Kick, Power Uppercut, Sonic Boom",
        Combos: "Bloqueio para Flash Kick; Bloqueio para Foot Sweep; Bloqueio para Knee Basher (Dizzy); Flying Knee Thrust para Spinning Back Fist",
        Gloria: 7,
        Honra: 8,
        Chi: 8,
        ForcaVontade: 10,
        Saude: 18,
        Divisao: "Estilo Livre",
        Posto: 8
    };
    return charlie;
}

function CharlieSF5() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 2);
    antecedentes[1] = newCaracteristica("Arena", 1);
    antecedentes[2] = newCaracteristica("Contatos", 4);
    antecedentes[3] = newCaracteristica("Aliados", 2);
    antecedentes[4] = newCaracteristica("Cibernetico", 3);

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 3);
    
    const pericias = [];
    
    const charlie = {
        Nome: "Charles 'Charlie' Nash",
        Estilo: "Forças Especiais",
        Escola: "USAF",
        Jogador: "NPC",
        Assinatura: "Ajeita os óculos",
        Conceito: "Agente sem memória",
        Cronica: "Street Fighter 5",
        Equipe: "Sociedade Secreta",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 5,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 5,
        Intimidacao: 5,
        Perspicacia: 3,
        Manha: 4,
        Labia: 3,
        NovosTalentos: talentos,
        LutaCega: 3,
        Conducao: 5,
        Lideranca: 5,
        Seguranca: 5,
        Furtividade: 5,
        Sobrevivencia: 5,
        NovasPericias: pericias,
        Arena: 2,
        Computador: 4,
        Investigacao: 5,
        Medicina: 3,
        Misterios: 2,
        Estilos: 4,
        NovosConhecimentos: [],
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 4,
        Foco: 5,
        NovasTecnicas: tecnicas,
        ManobrasEspeciais: "Jump, Foot Sweep, Sonic Scythe, Somersault Kick, Suplex, Air Suplex, Knee Basher, Throw, Air Throw, Spinning Back Fist, Flying Knee Thrust, Flash Kick, Power Uppercut, Sonic Boom, Energy Ball, San He, Leech, Ashura Senku, Wheel Kick, Sonic Hurricane",
        Combos: "Bloqueio para Flash Kick; Bloqueio para Foot Sweep; Bloqueio para Knee Basher (Dizzy); Flying Knee Thrust para Spinning Back Fist",
        Gloria: 6,
        Honra: 7,
        Chi: 9,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 7
    };
    return charlie;
}

let npc;
if (getParameterByName('age') === 'sfa')
    npc = CharlieZ3();
else
    npc = CharlieSF5();

npc = calcPC(npc);