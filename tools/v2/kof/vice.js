function Vice() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Apoio", 3);
    antecedentes[2] = newCaracteristica("Sangue de Orochi", 3);
    antecedentes[3] = newCaracteristica("Recursos", 2);
    antecedentes[4] = newCaracteristica("Elemental (Trevas)", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 3);

    const personagem = {
        Nome: "Vice",
        Estilo: "Silat",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Sorriso",
        Conceito: "Espiã",
        Cronica: "The King of Fighters",
        Equipe: "Hakkesshu",
        Time: "Yagami Team",
        Forca: 5,
        Destreza: 4,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 3,
        Interrogacao: 2,
        Intimidacao: 0,
        Perspicacia: 3,
        Manha: 3,
        Labia: 2,
        LutaCega: 3,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 2,
        Sobrevivencia: 1,
        Arena: 0,
        Computador: 0,
        Investigacao: 2,
        Medicina: 3,
        Misterios: 3,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 3,
        Bloqueio: 5,
        Apresamento: 6,
        Esportes: 5,
        Foco: 4,
        NovasTecnicas: tecnicas,
        ManobrasEspeciais: "Jump, Kippup, Throw, Extendible Limbs, Flying Tackle, Hyper Tackle, Balance, Foot Sweep, Widowmaker, Haymaker, Air Throw, Dashing Clothesline, Thunderstrike, Suplex, Thigh Press, Awakening Blood, Lightning Leg, Daikyou Burning, Pile Driver",
        Combos: "Jump para Widowmaker; Thunderstrike para Widowmaker; Flying Tackle para Throw (Dizzy)",
        Gloria: 2,
        Honra: 3,
        Chi: 4,
        ForcaVontade: 7,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = Vice();

npc = calcPC(npc);
