function Juni() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 5);
    antecedentes[1] = newCaracteristica("Psycho Power", 2);
    
    const juni =
    {
        Nome: "Juni",
        Estilo: "Forças Especiais",
        Escola: "Shadaloo",
        Conceito: "Assassina",
        Assinatura: "Missão Completa!",
        Jogador: "NPC",
        Time: "Dolls",
        Equipe: "Shadaloo",
        Cronica: "Street Fighter Alpha",
        Forca: 3,
        Destreza: 5,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 5,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 2,
        Intimidacao: 1,
        Perspicacia: 2,
        Manha: 2,
        Labia: 3,
        LutaCega: 3,
        Conducao: 1,
        Lideranca: 2,
        Seguranca: 3,
        Furtividade: 4,
        Sobrevivencia: 4,
        Arena: 1,
        Computador: 2,
        Investigacao: 2,
        Medicina: 1,
        Misterios: 0,
        Estilos: 2,
        Soco: 4,
        Chute: 5,
        Apresamento: 3,
        Bloqueio: 4,
        Esportes: 5,
        Foco: 2,
        ManobrasEspeciais: "Jump, Back Breaker, Thigh Press, Air Throw, Foot Sweep, Throw, Power Uppercut, Dive Kick, Flying Thrust Kick",
        Combos: "Forward para Cannon Drill",
        Gloria: 3,
        Honra: 1,
        Chi: 4,
        ForcaVontade: 7,
        Saude: 18,
        Posto: 4,
        Antecedentes: antecedentes
    };
    return calcPC(juni);
}
const npc = Juni();