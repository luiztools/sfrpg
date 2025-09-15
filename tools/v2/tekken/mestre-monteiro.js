function MonteiroTekken3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Contatos", 2);
    antecedentes[2] = newCaracteristica("Fama", 4);

    const personagem =
    {
        Nome: "Mestre Monteiro",
        Estilo: "Capoeira",
        Escola: "Desconhecida",
        Conceito: "Mestre Ancião",
        Assinatura: "Ginga",
        Jogador: "NPC",
        Cronica: "Tekken 3",
        Forca: 3,
        Destreza: 4,
        Vigor: 3,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 2,
        Inteligencia: 4,
        Raciocinio: 3,
        Prontidao: 2,
        Interrogacao: 3,
        Intimidacao: 1,
        Perspicacia: 3,
        Manha: 4,
        Labia: 3,
        LutaCega: 3,
        Conducao: 1,
        Lideranca: 3,
        Seguranca: 1,
        Furtividade: 2,
        Sobrevivencia: 3,
        Arena: 2,
        Computador: 0,
        Investigacao: 1,
        Medicina: 3,
        Misterios: 1,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 2,
        Chute: 4,
        Bloqueio: 3,
        Apresamento: 2,
        Esportes: 4,
        Foco: 2,
        Divisao: "Tradicional",
        Posto: 6,
        Gloria: 1,
        Honra: 4,
        Chi: 6,
        ForcaVontade: 6,
        Saude: 14,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Spinning Foot Sweep, Double Hit Kick, Handstand Kick, Back Flip Kick, Throw, Cartwheel Kick, Rhino Horn, Throw, Take Down, Psychokinetic Channeling, Tumbling Attack, Backflip",
        Combos: "Double Hit Kick para Spinning Foot Sweep para Cartwheel Kick; Cartwheel Kick para Tumbling Attack; Double Hit Kick para Handstand Kick para Rhino Horn;"
    };
    return personagem;
}

function MonteiroTekken4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Contatos", 2);
    antecedentes[2] = newCaracteristica("Fama", 4);

    const personagem =
    {
        Nome: "Mestre Monteiro",
        Estilo: "Capoeira",
        Escola: "Desconhecida",
        Conceito: "Mestre Doente",
        Assinatura: "Ginga",
        Jogador: "NPC",
        Cronica: "Tekken 4",
        Forca: 2,
        Destreza: 3,
        Vigor: 2,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 2,
        Percepcao: 2,
        Inteligencia: 5,
        Raciocinio: 2,
        Prontidao: 1,
        Interrogacao: 3,
        Intimidacao: 0,
        Perspicacia: 4,
        Manha: 4,
        Labia: 3,
        LutaCega: 3,
        Conducao: 1,
        Lideranca: 4,
        Seguranca: 1,
        Furtividade: 2,
        Sobrevivencia: 3,
        Arena: 3,
        Computador: 0,
        Investigacao: 1,
        Medicina: 4,
        Misterios: 2,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 1,
        Chute: 3,
        Bloqueio: 2,
        Apresamento: 1,
        Esportes: 3,
        Foco: 3,
        Divisao: "Tradicional",
        Posto: 5,
        Gloria: 1,
        Honra: 5,
        Chi: 7,
        ForcaVontade: 6,
        Saude: 12,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Spinning Foot Sweep, Double Hit Kick, Handstand Kick, Back Flip Kick, Throw, Cartwheel Kick, Rhino Horn, Throw, Take Down, Psychokinetic Channeling, Tumbling Attack, Backflip",
        Combos: "Double Hit Kick para Spinning Foot Sweep para Cartwheel Kick; Cartwheel Kick para Tumbling Attack; Double Hit Kick para Handstand Kick para Rhino Horn;"
    };
    return personagem;
}

let npc;
if (getParameterByName('age') === 'tekken3')
    npc = MonteiroTekken3();
else
    npc = MonteiroTekken4();

npc = calcPC(npc);