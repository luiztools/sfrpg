function NoFace() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Cibernetico", 3);
    antecedentes[3] = newCaracteristica("Fama", 2);
    antecedentes[4] = newCaracteristica("Elemental", 5);
    
    const personagem =
    {
        Nome: "No Face",
        Estilo: "Forças Especiais",
        Conceito: "Piromaníaco",
        Assinatura: "Bota fogo",
        Jogador: "NPC",
        Cronica: "MK Special Forces",
        Time: "Black Dragon",
        Equipe: "Black Dragon",
        Forca: 4,
        Destreza: 3,
        Vigor: 5,
        Carisma: 1,
        Manipulacao: 3,
        Aparencia: 1,
        Percepcao: 2,
        Inteligencia: 5,
        Raciocinio: 4,
        Prontidao: 4,
        Intimidacao: 5,
        Perspicacia: 4,
        Labia: 3,
        LutaCega: 5,
        Lideranca: 1,
        Furtividade: 4,
        Sobrevivencia: 5,
        Arena: 3,
        Investigacao: 1,
        Medicina: 2,
        Misterios: 1,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 0,
        Bloqueio: 3,
        Apresamento: 3,
        Esportes: 2,
        Foco: 5,
        Gloria: 5,
        Honra: 1,
        Posto: 7,
        Divisao: "Duelistas",
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        ManobrasEspeciais: "Head Butt, Foot Sweep, Brain Cracker, Jump, Fire Strike, Yoga Flame, Fireball, Improved Fireball",
        Combos: "Jab para Jab para Foot Sweep (Dizzy); Foot Sweep para Forward para Yoga Flame (Dizzy); Yoga Flame para Brain Cracker (Dizzy);"
    };
    return personagem;
}

let npc = calcPC(NoFace());