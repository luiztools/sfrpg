function MonteiroTekken3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Contatos", 3);
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
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 3,
        Intimidacao: 1,
        Perspicacia: 3,
        Manha: 4,
        Labia: 4,
        LutaCega: 3,
        Conducao: 1,
        Lideranca: 3,
        Seguranca: 3,
        Furtividade: 4,
        Sobrevivencia: 3,
        Arena: 5,
        Computador: 0,
        Investigacao: 3,
        Medicina: 3,
        Misterios: 2,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 6,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 4,
        Foco: 2,
        Divisao: "Tradicional",
        Posto: 6,
        Gloria: 3,
        Honra: 4,
        Chi: 6,
        ForcaVontade: 8,
        Saude: 14,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Spinning Foot Sweep, Double Hit Kick, Handstand Kick, Back Flip Kick, Throw, Cartwheel Kick, Rhino Horn, Throw, Take Down, Psychokinetic Channeling, Tumbling Attack, Backflip",
        Combos: "Double Hit Kick para Spinning Foot Sweep para Cartwheel Kick; Cartwheel Kick para Tumbling Attack; Double Hit Kick para Handstand Kick para Rhino Horn;"
    };
    return personagem;
}

function MonteiroTekken5() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Fama", 4);

    const personagem =
    {
        Nome: "Mestre Monteiro",
        Estilo: "Capoeira",
        Escola: "Desconhecida",
        Conceito: "Mestre Ancião",
        Assinatura: "Ginga",
        Jogador: "NPC",
        Cronica: "Tekken 5",
        Forca: 2,
        Destreza: 3,
        Vigor: 2,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 2,
        Percepcao: 2,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 3,
        Interrogacao: 3,
        Intimidacao: 0,
        Perspicacia: 4,
        Manha: 5,
        Labia: 5,
        LutaCega: 3,
        Conducao: 1,
        Lideranca: 4,
        Seguranca: 3,
        Furtividade: 4,
        Sobrevivencia: 4,
        Arena: 5,
        Computador: 0,
        Investigacao: 4,
        Medicina: 3,
        Misterios: 2,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 3,
        Foco: 3,
        Divisao: "Tradicional",
        Posto: 5,
        Gloria: 4,
        Honra: 5,
        Chi: 7,
        ForcaVontade: 7,
        Saude: 12,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Spinning Foot Sweep, Double Hit Kick, Handstand Kick, Back Flip Kick, Throw, Cartwheel Kick, Rhino Horn, Throw, Take Down, Psychokinetic Channeling, Tumbling Attack, Backflip",
        Combos: "Double Hit Kick para Spinning Foot Sweep para Cartwheel Kick; Cartwheel Kick para Tumbling Attack; Double Hit Kick para Handstand Kick para Rhino Horn;"
    };
    return personagem;
}

let npc;
if (getParameterByName('age') === 'tekken5')
    npc = MonteiroTekken5();
else
    npc = MonteiroTekken3();

npc = calcPC(npc);