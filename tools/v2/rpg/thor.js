function Thor() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Fama", 1);
    antecedentes[1] = newCaracteristica("Recursos", 2);
    antecedentes[2] = newCaracteristica("Empresario", 1);
    antecedentes[3] = newCaracteristica("Elemental (Gelo)", 4);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Mangual", 4);

    const thor = {
        Nome: "Thor",
        Estilo: "Glimae",
        Jogador: "NPC",
        Assinatura: "Aura congelante!",
        Conceito: "Viking",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 5,
        Destreza: 3,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 2,
        Percepcao: 4,
        Inteligencia: 2,
        Raciocinio: 3,
        Prontidao: 5,
        Intimidacao: 4,
        Perspicacia: 2,
        Manha: 1,
        Labia: 2,
        LutaCega: 1,
        Lideranca: 3,
        Furtividade: 4,
        Sobrevivencia: 4,
        Arena: 1,
        Medicina: 3,
        Misterios: 4,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 2,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 4,
        Foco: 3,
        NovasTecnicas: tecnicas,
        ManobrasEspeciais: "Buffalo Punch, Brain Cracker, Grappling Defense, Ice Blast, Throw, Ice Ground, Jump, Toughskin, Thunderclap",
        Combos: "Ice Blast para Brain Cracker (Dizzy); Ice Ground para Ice Blast; Bloqueio para Jab para Fierce (Dizzy);",
        Gloria: 5,
        Honra: 3,
        Chi: 4,
        ForcaVontade: 7,
        Saude: 15,
        Divisao: "Estilo Livre",
        Posto: 6
    };
    return thor;
}

let npc = Thor();

npc = calcPC(npc);