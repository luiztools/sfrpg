function Stray() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Arena", 2);
    antecedentes[2] = newCaracteristica("Apoio", 3);
    antecedentes[3] = newCaracteristica("Cibernético", 1);

    const tecnicas = [];

    const npc =
    {
        Nome: "Stray",
        Estilo: "Boxe",
        Conceito: "Assassino Mercenário",
        Escola: "Professor Particular",
        Time: "Skull Cross",
        Equipe: "Skull Cross",
        Assinatura: "Spikes",
        Jogador: "NPC",
        Cronica: "Final Fight 3",
        Forca: 5,
        Destreza: 6,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 5,
        Perspicacia: 1,
        Labia: 3,
        Manha: 5,
        LutaCega: 0,
        Lideranca: 3,
        Conducao: 3,
        Seguranca: 2,
        Furtividade: 2,
        Sobrevivencia: 0,
        Arena: 5,
        Computador: 3,
        Investigacao: 0,
        Medicina: 0,
        Misterios: 0,
        Estilos: 5,
        Antecedentes: antecedentes,
        NovasTecnicas: tecnicas,
        Soco: 5,
        Chute: 0,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 5,
        Foco: 0,
        Divisao: "Estilo Livre",
        Posto: 8,
        Gloria: 4,
        Honra: 3,
        Chi: 1,
        ForcaVontade: 10,
        Saude: 20,
        ManobrasEspeciais: "Jump, Fist Sweep, Power Uppercut, Dashing Punch, Dashing Uppercut, Lunging Punch, Jumping Shoulder Butt, Haymaker, Widowmaker, Suplex",
        Combos: "Bloqueio para Dashing Punch para Fist Sweep (Dizzy); Bloqueio para Widowmaker para Haymaker (dizzy); Bloqueio para Lunging Punch para Fist Sweep (Dizzy); Bloqueio para Suplex;",
    };
    return npc;
}

const npc = calcPC(Stray());