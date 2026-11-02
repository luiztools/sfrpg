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

let npc = Anvil();

npc = calcPC(npc);