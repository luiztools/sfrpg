function DudleySF4() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 3);
    antecedentes[1] = newCaracteristica("Recursos", 5);
    antecedentes[2] = newCaracteristica("Fama", 2);
    antecedentes[3] = newCaracteristica("Staff", 4);

    var dudley = {
        Nome: "Dudley",
        Estilo: "Boxe",
        Escola: "Nenhuma",
        Jogador: "NPC",
        Assinatura: "Luvas de Boxe",
        Conceito: "Cavalheiro Inglês",
        Cronica: "Street Fighter 4",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 5,
        Manipulacao: 4,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 2,
        Intimidacao: 4,
        Perspicacia: 3,
        Manha: 3,
        Labia: 4,
        Conducao: 4,
        Lideranca: 5,
        Seguranca: 2,
        Arena: 4,
        Computador: 2,
        Investigacao: 1,
        Medicina: 2,
        Misterios: 1,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 7,
        Chute: 0,
        Bloqueio: 6,
        Apresamento: 4,
        Esportes: 5,
        Foco: 0,
        ManobrasEspeciais: "Brain Cracker, Cross Counter, Deflecting Punch, Ducking Straight, Ducking Upper, Fist Sweep, Hyper Fist, Jet Uppercut, Machine Gun Blow, Power Uppercut, Short Swing Blow, Throw, Thunderbolt",
        Combos: "Jab para Strong para Fierce (Dizzy); Fist Sweep para Machin Gun Blow (Dizzy); Fist Sweep para Fierce; Fist Sweep para Ducking Upper",
        Gloria: 8,
        Honra: 10,
        Chi: 2,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Tradicional",
        Posto: 9
    };
    return dudley;
}


var npc = DudleySF4();
npc = calcPC(npc);