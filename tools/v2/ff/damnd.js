function DamnD() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Arena", 2);
    antecedentes[2] = newCaracteristica("Fama", 2);
    antecedentes[3] = newCaracteristica("Contatos", 3);

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
        Forca: 6,
        Destreza: 3,
        Vigor: 6,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 2,
        Inteligencia: 2,
        Raciocinio: 4,
        Prontidao: 0,
        Interrogacao: 1,
        Intimidacao: 4,
        Perspicacia: 0,
        Manha: 4,
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
        Soco: 3,
        Chute: 4,
        Bloqueio: 3,
        Apresamento: 4,
        Esportes: 5,
        Foco: 0,
        NovasTecnicas: tecnicas,
        ManobrasEspeciais: "Flying Kick, Jump, Rolling Attack, Beast Roll, Vertical Rolling Attack",
        Combos: "Jump + Fierce para Strong para Beast Roll; Bloqueio para Beast Roll",
        Gloria: 3,
        Honra: 0,
        Chi: 1,
        ForcaVontade: 7,
        Saude: 15,
        Divisao: "Estilo Livre",
        Posto: 7
    };
    return npc;
}

const npc = calcPC(DamnD());