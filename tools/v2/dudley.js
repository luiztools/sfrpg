function DudleySF4() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Arena", 2);
    antecedentes[2] = newCaracteristica("Contatos", 3);
    antecedentes[3] = newCaracteristica("Fama", 1);
    antecedentes[4] = newCaracteristica("Recursos", 4);

    var dudley = {
        Nome: "Dudley",
        Estilo: "Boxe",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Vira-se de costas",
        Conceito: "Lorde",
        Cronica: "Street Fighter 4",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 5,
        Raciocinio: 4,
        Prontidao: 2,
        Interrogacao: 4,
        Intimidacao: 4,
        Perspicacia: 4,
        Manha: 2,
        Labia: 5,
        LutaCega: 1,
        Conducao: 4,
        Lideranca: 2,
        Seguranca: 0,
        Furtividade: 3,
        Sobrevivencia: 0,
        Arena: 2,
        Computador: 2,
        Investigacao: 3,
        Medicina: 1,
        Misterios: 0,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 7,
        Chute: 0,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 5,
        Foco: 2,
        ManobrasEspeciais: "Jump, Air Throw, Deflecting Punch, Haymaker, Power Uppercut, Fist Sweep, Dashing Punch, Dashing Uppercut, Hyper Fist, Throw, Brain Cracker, Machine Gun Blow, Punch Defense, Cross Counter, Jet Uppercut",
        Combos: "Jab para Strong para Fierce (Dizzy); Machine Gun Blow para Hyper Fist (Dizzy); Cross Counter para Jet Uppercut (Dizzy); Jump para Hyper Fist; Fist Sweep para Jet Uppercut",
        Gloria: 7,
        Honra: 8,
        Chi: 3,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Tradicional",
        Posto: 9
    };
    return dudley;
}


var npc = DudleySF4();
npc = calcPC(npc);