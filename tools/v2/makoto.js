function MakotoSF4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 1);
    antecedentes[1] = newCaracteristica("Aliados", 5);
    antecedentes[2] = newCaracteristica("Arena", 4);
    antecedentes[3] = newCaracteristica("Contatos", 1);
    antecedentes[4] = newCaracteristica("Sensei", 3);

    const makoto =
    {
        Nome: "Makoto Rindou",
        Estilo: "Karatê Rindoukan",
        Assinatura: "Postura rígida",
        Escola: "Dojô Rindou",
        Conceito: "Estudante",
        Jogador: "NPC",
        Cronica: "Street Fighter 4",
        Equipe: "Nenhuma",
        Forca: 5,
        Destreza: 5,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 3,
        Intimidacao: 2,
        Perspicacia: 4,
        Manha: 2,
        Labia: 2,
        LutaCega: 5,
        Conducao: 0,
        Lideranca: 4,
        Seguranca: 0,
        Furtividade: 3,
        Sobrevivencia: 3,
        Arena: 1,
        Computador: 0,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 2,
        Estilos: 3,
        Soco: 5,
        Chute: 5,
        Bloqueio: 6,
        Apresamento: 3,
        Esportes: 5,
        Foco: 5,
        Antecedentes: antecedentes,
        Saude: 20,
        ForcaVontade: 8,
        Chi: 9,
        Honra: 9,
        Gloria: 5,
        Posto: 7,
        Divisao: "Tradicional",
        ManobrasEspeciais: "Jump, Throw, Flying Thrust Kick, Power Uppercut, Triple Strike, Neck Choke, Double-Hit Kick, Wall Spring, Rekka Ken, Double Dread Kick, Air Smash, Fist Sweep, Dive Kick, Dashing Punch, Knife Hand Strike",
        Combos: "Fierce para Double Dread Kick; Power Uppercut para Throw; Triple Strike para Neck Choke (Dizzy)"
    };
    return calcPC(makoto);
}

const npc = MakotoSF4();