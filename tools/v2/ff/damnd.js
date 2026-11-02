function DamnD() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Arena", 2);
    antecedentes[2] = newCaracteristica("Fama", 2);

    const tecnicas = [];

    const npc = {
        Nome: "Damn D.",
        Estilo: "Capoeira",
        Escola: "Mad Gear",
        Jogador: "NPC",
        Assinatura: "Cabelo Estiloso",
        Conceito: "Líder de Gangue",
        Cronica: "Final Fight",
        Equipe: "Mad Gear",
        Time: "Mad Gear",
        Forca: 4,
        Destreza: 4,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 1,
        Aparencia: 1,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 5,
        Prontidao: 0,
        Interrogacao: 1,
        Intimidacao: 5,
        Perspicacia: 0,
        Manha: 5,
        Labia: 5,
        LutaCega: 0,
        Conducao: 1,
        Lideranca: 3,
        Seguranca: 1,
        Furtividade: 3,
        Sobrevivencia: 3,
        Arena: 2,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 0,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 5,
        Foco: 3,
        NovasTecnicas: tecnicas,
        ManobrasEspeciais: "Head Butt, Power Uppercut, Backflip Kick, Foot Sweep, Jump, Rolling Attack, Beast Roll, Vertical Rolling Attack",
        Combos: "Jump + Fierce para Strong para Foot Sweep; Bloqueio para Backflip Kick",
        Gloria: 6,
        Honra: 6,
        Chi: 6,
        ForcaVontade: 6,
        Saude: 15,
        Divisao: "Estilo Livre",
        Posto: 7
    };
    return npc;
}

const npc = calcPC(DamnD());