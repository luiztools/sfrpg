function Dave() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Arena", 2);
    antecedentes[2] = newCaracteristica("Apoio", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Bastão", 4);

    const armas = ["Cassetete"];

    const npc = {
        Nome: "Dave",
        Estilo: "Forças Especiais",
        Escola: "Academia de Polícia",
        Jogador: "NPC",
        Assinatura: "Cassetete na mão",
        Conceito: "Policial Corrupto",
        Cronica: "Final Fight 3",
        Equipe: "Skull Cross",
        Time: "Skull Cross",
        Forca: 5,
        Destreza: 3,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 3,
        Intimidacao: 5,
        Perspicacia: 0,
        Manha: 3,
        Labia: 3,
        LutaCega: 0,
        Conducao: 3,
        Lideranca: 3,
        Seguranca: 1,
        Furtividade: 1,
        Sobrevivencia: 0,
        Arena: 3,
        Computador: 0,
        Investigacao: 5,
        Medicina: 0,
        Misterios: 0,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 3,
        Foco: 0,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Air Smash, Ear Pop, Haymaker, Head Butt, Power Uppercut, Wounded Knee, Punch Defense, Kippup, Suplex, Kick Defense",
        Combos: "Jump + Roundhouse para Cassetete Fierce (Dizzy); Movimento para Air Smash para Wounded Knee (Dizzy); Bloqueio para Suplex para Haymaker (Dizzy);",
        Gloria: 4,
        Honra: 3,
        Chi: 1,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 8
    };
    return npc;
}

const npc = calcPC(Dave());