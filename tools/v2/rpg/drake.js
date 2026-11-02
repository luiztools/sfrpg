function Drake() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliado", 4);
    antecedentes[1] = newCaracteristica("Staff", 3);
    antecedentes[2] = newCaracteristica("Empresario", 5);
    antecedentes[3] = newCaracteristica("Sensei", 4);
    antecedentes[4] = newCaracteristica("Apoio", 1);

    const drake = {
        Nome: "Drake",
        Estilo: "Karatê Shotokan",
        Escola: "Dojô de Ken",
        Jogador: "NPC",
        Assinatura: "Sai em silêncio",
        Conceito: "Lutador",
        Equipe: "Elias Synn",
        Time: "Dragão Nascente",
        Forca: 4,
        Destreza: 4,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 1,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 4,
        Intimidacao: 3,
        Perspicacia: 2,
        Manha: 3,
        Labia: 1,
        LutaCega: 3,
        Conducao: 1,
        Seguranca: 2,
        Furtividade: 1,
        Arena: 4,
        Investigacao: 2,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 3,
        Apresamento: 1,
        Esportes: 3,
        ManobrasEspeciais: "Power Uppercut, Dragon Punch, Throw, Double Hit Kick, Double Dread Kick, Foot Sweep, Hurricane Kick, Jump, Backflip",
        Combos: "Backflip para Foot Sweep para Dragon Punch (Dizzy);",
        Gloria: 6,
        Honra: 1,
        Chi: 5,
        ForcaVontade: 7,
        Saude: 13,
        Divisao: "Estilo Livre",
        Posto: 3
    };
    return drake;
}

let npc = Drake();

npc = calcPC(npc);