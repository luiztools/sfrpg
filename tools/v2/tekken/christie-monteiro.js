function ChristieTekken5() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Contatos", 4);
    antecedentes[2] = newCaracteristica("Fama", 3);
    antecedentes[3] = newCaracteristica("Recursos", 4);
    antecedentes[4] = newCaracteristica("Staff", 3);
    antecedentes[5] = newCaracteristica("Sensei", 3);

    const personagem =
    {
        Nome: "Christie Monteiro",
        Estilo: "Capoeira",
        Escola: "Eddy Gordo",
        Conceito: "Dançarina",
        Assinatura: "Ginga",
        Jogador: "NPC",
        Cronica: "Tekken 5",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 4,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 3,
        Intimidacao: 2,
        Perspicacia: 1,
        Manha: 3,
        Labia: 3,
        LutaCega: 2,
        Conducao: 2,
        Lideranca: 2,
        Seguranca: 2,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 1,
        Computador: 2,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 0,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 5,
        Foco: 2,
        Divisao: "Tradicional",
        Posto: 8,
        Gloria: 2,
        Honra: 2,
        Chi: 6,
        ForcaVontade: 8,
        Saude: 18,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Spinning Foot Sweep, Double Hit Kick, Handstand Kick, Back Flip Kick, Throw, Cartwheel Kick, Rhino Horn, Throw, Take Down, Psychokinetic Channeling, Tumbling Attack, Backflip",
        Combos: "Double Hit Kick para Spinning Foot Sweep para Cartwheel Kick; Cartwheel Kick para Tumbling Attack; Double Hit Kick para Handstand Kick para Rhino Horn; Bloqueio para Take Down para Back Flip Kick"
    };
    return personagem;
}

function ChristieTekken4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 1);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Fama", 2);
    antecedentes[3] = newCaracteristica("Recursos", 4);
    antecedentes[4] = newCaracteristica("Staff", 2);
    antecedentes[5] = newCaracteristica("Sensei", 3);

    const personagem =
    {
        Nome: "Christie Monteiro",
        Estilo: "Capoeira",
        Escola: "Academia Monteiro",
        Conceito: "Dançarina",
        Assinatura: "Ginga",
        Jogador: "NPC",
        Cronica: "Tekken 4",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 4,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 3,
        Intimidacao: 1,
        Perspicacia: 1,
        Manha: 3,
        Labia: 3,
        LutaCega: 1,
        Conducao: 2,
        Lideranca: 1,
        Seguranca: 2,
        Furtividade: 3,
        Sobrevivencia: 1,
        Arena: 1,
        Computador: 2,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 0,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 5,
        Foco: 1,
        Divisao: "Tradicional",
        Posto: 7,
        Gloria: 2,
        Honra: 2,
        Chi: 5,
        ForcaVontade: 7,
        Saude: 16,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Spinning Foot Sweep, Double Hit Kick, Handstand Kick, Back Flip Kick, Throw, Cartwheel Kick, Rhino Horn, Throw, Take Down, Psychokinetic Channeling, Tumbling Attack, Backflip",
        Combos: "Double Hit Kick para Spinning Foot Sweep para Cartwheel Kick; Cartwheel Kick para Tumbling Attack; Double Hit Kick para Handstand Kick para Rhino Horn;"
    };
    return personagem;
}

let npc;
if (getParameterByName('age') === 'tekken5')
    npc = ChristieTekken5();
else
    npc = ChristieTekken4();

npc = calcPC(npc);