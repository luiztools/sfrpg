function TJComboKI() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 1);
    antecedentes[1] = newCaracteristica("Cibernético", 2);
    antecedentes[2] = newCaracteristica("Fama", 4);
    antecedentes[3] = newCaracteristica("Recursos", 3);

    const tjcombo = {
        Nome: "T.J. Combo",
        Estilo: "Boxe",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Grito de vitória",
        Conceito: "Ex-pugilista",
        Cronica: "Killer Instinct",
        Forca: 6,
        Destreza: 4,
        Vigor: 7,
        Carisma: 5,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 3,
        Intimidacao: 5,
        Perspicacia: 4,
        Manha: 5,
        Labia: 3,
        LutaCega: 2,
        Conducao: 4,
        Lideranca: 4,
        Seguranca: 2,
        Furtividade: 2,
        Sobrevivencia: 1,
        Arena: 4,
        Computador: 2,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 2,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 4,
        Foco: 0,
        ManobrasEspeciais: "Jump, Power Uppercut, Head Butt, Dashing Punch, Tumbling Attack, Foot Sweep, Flying Knee Thrust, Spinning Back Fist, Turn Punch",
        Combos: "Dashing Punch para Tumbling Attack para Power Uppercut (Dizzy); Tumbling Attack para Strong para Power Uppercut (Dizzy); Tumbling Attack para Power Uppercut para Flying Knee Thrust (Dizzy)",
        Gloria: 8,
        Honra: 5,
        Chi: 5,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 7
    };
    return tjcombo;
}

const npc = calcPC(TJComboKI());