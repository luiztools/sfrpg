function RiptorKI() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 3);
    antecedentes[1] = newCaracteristica("Arena", 1);
    antecedentes[2] = newCaracteristica("Híbrido Animal (Lagarto)", 5);
    antecedentes[3] = newCaracteristica("Cibernético", 4);

    const riptor = {
        Nome: "Riptor",
        Estilo: "Wrestling",
        Escola: "Ultratech",
        Jogador: "NPC",
        Assinatura: "Grita ameaçador",
        Conceito: "Dinossauro de laboratório",
        Cronica: "Killer Instinct",
        Equipe: "Ultratech",
        Time: "Ultratech",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 0,
        Manipulacao: 0,
        Aparencia: 1,
        Percepcao: 6,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 6,
        Interrogacao: 0,
        Intimidacao: 5,
        Perspicacia: 4,
        Manha: 0,
        Labia: 0,
        LutaCega: 5,
        Conducao: 0,
        Lideranca: 4,
        Seguranca: 0,
        Furtividade: 6,
        Sobrevivencia: 6,
        Arena: 0,
        Computador: 0,
        Investigacao: 0,
        Medicina: 0,
        Misterios: 0,
        Estilos: 0,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 6,
        Foco: 0,
        ManobrasEspeciais: "Jump, Acid Breath, Pounce, Tearing Bite, Ripping Bite, Wheel Kick, Tail Sweep, Typhoon Tail, Power Uppercut",
        Combos: "Pounce para Wheel Kick para Power Uppercut (Dizzy); Acid Breath para Pounce (Dizzy); Wheel Kick para Power Uppercut para Typhoon Tail (Dizzy)",
        Gloria: 6,
        Honra: 2,
        Chi: 5,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 7
    };
    return riptor;
}

const npc = calcPC(RiptorKI());