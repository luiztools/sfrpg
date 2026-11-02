function Black() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Recursos", 5);
    antecedentes[1] = newCaracteristica("Aliados", 5);
    antecedentes[2] = newCaracteristica("Apoio", 3);
    antecedentes[3] = newCaracteristica("Contatos", 5);
    antecedentes[4] = newCaracteristica("Fama", 1);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 3);
    tecnicas[1] = newCaracteristica("Arremesso", 3);
    tecnicas[2] = newCaracteristica("Chicote", 5);

    const armas = [];
    armas[0] = "Pingalim";
    armas[1] = "Faca Arremessada";
    armas[2] = "Submetralhadora";

    const rolento = {
        Nome: "Marshall Black",
        Estilo: "Forças Especiais",
        Escola: "Exército Americano",
        Jogador: "NPC",
        Assinatura: "Chicoteia o ar",
        Conceito: "Militar Mercenário",
        Cronica: "Final Fight 3",
        Equipe: "Skull Cross",
        Time: "Skull Cross",
        Forca: 6,
        Destreza: 5,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 3,
        Intimidacao: 5,
        Perspicacia: 2,
        Manha: 2,
        Labia: 2,
        LutaCega: 3,
        Conducao: 3,
        Lideranca: 5,
        Seguranca: 2,
        Furtividade: 2,
        Sobrevivencia: 3,
        Arena: 1,
        Computador: 2,
        Investigacao: 3,
        Medicina: 0,
        Misterios: 2,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 3,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 4,
        Foco: 3,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Kippup, Spinning Back Fist, Spinning Clothesline, Energy Ball, Turbo Spinning Clothesline, Suplex, Foot Sweep, Maka Wara",
        Combos: "Bloqueio para Energy Ball; Bloqueio para Turbo Spinning Clothesline para Foot Sweep (Dizzy)",
        Gloria: 5,
        Honra: 3,
        Chi: 7,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 8
    };
    return rolento;
}

let npc = Black();

npc = calcPC(npc);