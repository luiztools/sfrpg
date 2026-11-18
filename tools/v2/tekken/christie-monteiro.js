function ChristieTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Contatos", 4);
    antecedentes[2] = newCaracteristica("Fama", 3);
    antecedentes[3] = newCaracteristica("Recursos", 4);
    antecedentes[4] = newCaracteristica("Staff", 3);
    antecedentes[5] = newCaracteristica("Sensei", 3);

    return {
        Nome: "Christie Monteiro",
        Estilo: "Capoeira",
        Escola: "Professor particular (Eddy Gordo)",
        Jogador: "NPC",
        Assinatura: "Ginga",
        Conceito: "Dançarina",
        Cronica: "Tekken 4",
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
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Spinning Foot Sweep, Double Hit Kick, Handstand Kick, Backflip Kick, Throw, Cartwheel Kick, Rhino Horn, Take Down, Psychokinetic Channeling, Tumbling Attack, Backflip",
        Combos: "Double Hit Kick para Spinning Foot Sweep para Cartwheel Kick, Cartwheel Kick para Tumbling Attack, Double Hit Kick para Handstand Kick para Rhino Horn, Bloqueio para Take Down para Backflip Kick",
        Gloria: 2,
        Honra: 2,
        Chi: 6,
        ForcaVontade: 8,
        Saude: 18,
        Divisao: "Livre",
        Posto: 8
    };
}

let npc = ChristieTk4();
npc = calcPC(npc);
