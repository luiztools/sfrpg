function Bratken() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 2);
    antecedentes[1] = newCaracteristica("Mascote", 1);

    const tecnicas = [];

    const npc = {
        Nome: "Bratken",
        Estilo: "Wrestling",
        Escola: "Mad Gear",
        Jogador: "NPC",
        Assinatura: "Abraça o pombo",
        Conceito: "Brutamontes Infantil",
        Cronica: "Final Fight 2",
        Equipe: "Mad Gear",
        Time: "Mad Gear",
        Forca: 7,
        Destreza: 2,
        Vigor: 6,
        Carisma: 1,
        Manipulacao: 1,
        Aparencia: 1,
        Percepcao: 2,
        Inteligencia: 1,
        Raciocinio: 2,
        Prontidao: 2,
        Interrogacao: 0,
        Intimidacao: 5,
        Perspicacia: 0,
        Manha: 1,
        Labia: 0,
        LutaCega: 0,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 0,
        Sobrevivencia: 1,
        Arena: 1,
        Computador: 0,
        Investigacao: 0,
        Medicina: 0,
        Misterios: 0,
        Estilos: 0,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 2,
        Bloqueio: 2,
        Apresamento: 3,
        Esportes: 3,
        Foco: 1,
        NovasTecnicas: tecnicas,
        ManobrasEspeciais: "Jump, Throw, Flying Kick, Dashing Punch, Back Roll Throw, Haymaker",
        Combos: "Dashing Punch para Haymaker (Dizzy); Flying Kick para Back Roll Throw",
        Gloria: 2,
        Honra: 0,
        Chi: 1,
        ForcaVontade: 6,
        Saude: 20,
        Divisao: "Livre",
        Posto: 5
    };
    return npc;
}

const npc = calcPC(Bratken());
