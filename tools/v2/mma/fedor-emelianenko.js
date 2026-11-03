function Emelianenko() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Arena", 1);
    antecedentes[2] = newCaracteristica("Fama", 2);
    antecedentes[3] = newCaracteristica("Recursos", 2);

    const fedor = {
        Nome: "Fedor Emelianenko",
        Estilo: "Vale-Tudo (Forças Especiais)",
        Escola: "Exército Soviético",
        Jogador: "NPC",
        Assinatura: "Cumprimenta o oponente",
        Conceito: "Homem forte",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 6,
        Destreza: 3,
        Vigor: 6,
        Carisma: 5,
        Manipulacao: 1,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 5,
        Interrogacao: 2,
        Intimidacao: 5,
        Perspicacia: 2,
        Manha: 1,
        Labia: 1,
        LutaCega: 1,
        Conducao: 3,
        Lideranca: 2,
        Furtividade: 3,
        Sobrevivencia: 5,
        Arena: 3,
        Medicina: 2,
        Misterios: 1,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 5,
        Esportes: 3,
        ManobrasEspeciais: "Pin, Improved Pin, Double Hit Punch, Foot Sweep, Maka Wara, Bear Hug, Grappling Defense, Back Breaker, Pile Driver, Power Uppercut, Jump, Buffalo Punch, Throw, Air Smash, Suplex, Stomach Pump, Hyper Tackle",
        Combos: "Jump + Short para Jump para Pile Driver (Dizzy); Jump + Strong para Foot Sweep; Jump + Strong para Pile Driver (Dizzy);",
        Gloria: 5,
        Honra: 7,
        Chi: 1,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Tradicional",
        Posto: 8
    };
    return fedor;
}

let npc = Emelianenko();

npc = calcPC(npc);