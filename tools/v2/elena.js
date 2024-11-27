function Elena() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Mascote", 3);
    antecedentes[1] = newCaracteristica("Aliados", 2);
    antecedentes[2] = newCaracteristica("Arena", 4);
    antecedentes[3] = newCaracteristica("Staff", 3);

    var elena =
    {
        Nome: "Elena",
        Estilo: "Capoeira",
        Escola: "Seu Vilarejo",
        Conceito: "Princesa",
        Assinatura: "Bananeira",
        Jogador: "NPC",
        Cronica: "Street Fighter 4",
        Forca: 5,
        Destreza: 6,
        Vigor: 5,
        Carisma: 6,
        Aparencia: 3,
        Manipulacao: 5,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 5,
        Perspicacia: 3,
        LutaCega: 4,
        Conducao: 1,
        Lideranca: 5,
        Furtividade: 4,
        Sobrevivencia: 4,
        Arena: 3,
        Computador: 3,
        Medicina: 5,
        Misterios: 1,
        Estilos: 2,
        Soco: 0,
        Chute: 7,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 6,
        Foco: 3,
        Gloria: 5,
        Honra: 9,
        Chi: 8,
        ForcaVontade: 9,
        Divisao: "Tradicional",
        Antecedentes: antecedentes,
        ManobrasEspeciais: "Double Hit Kick, Flash Kick, Flying Side Kick, Foot Sweep, Handstand Kick, Jaguar Kick, Jump, Musical Accompaniment, Regeneration, Spinning Foot Sweep, Slide Kick, Spin Kick, Throw",
        Combos: "Jump + Roundhouse para Flash Kick; Flying Side Kick para Throw; Jump + Roundhouse para Forward para Flash Kick (Dizzy); Jaguar Kick para Flash Kick (Dizzy); Forward para Slide Kick",
        Saude: 20,
        Posto: 9
    };
    return elena;
}

var npc = Elena();
npc = calcPC(npc);