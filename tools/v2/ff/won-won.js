function WonWon() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Apoio", 3);
    antecedentes[2] = newCaracteristica("Contatos", 3);
    antecedentes[3] = newCaracteristica("Recursos", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Faca", 4);

    const armas = [];
    armas[0] = "Machadinha";

    const npc = {
        Nome: "Won Won",
        Estilo: "Kung Fu",
        Escola: "Mad Gear",
        Jogador: "NPC",
        Assinatura: "Mostra a língua",
        Conceito: "Chefão do Porto",
        Cronica: "Final Fight 2",
        Equipe: "Mad Gear",
        Time: "Mad Gear",
        Forca: 6,
        Destreza: 2,
        Vigor: 6,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 2,
        Percepcao: 2,
        Inteligencia: 2,
        Raciocinio: 3,
        Prontidao: 2,
        Interrogacao: 3,
        Intimidacao: 5,
        Perspicacia: 2,
        Manha: 5,
        Labia: 1,
        LutaCega: 1,
        Conducao: 3,
        Lideranca: 3,
        Seguranca: 2,
        Furtividade: 1,
        Sobrevivencia: 3,
        Arena: 2,
        Computador: 0,
        Investigacao: 0,
        Medicina: 1,
        Misterios: 0,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 2,
        Bloqueio: 3,
        Apresamento: 3,
        Esportes: 2,
        Foco: 2,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Throw, Air Smash, Hyper Fist, Haymaker, Head Butt, Bear Hug, Spinning Weapon, Toughskin",
        Combos: "Hyper Fist para Throw (Dizzy); Faca Jab para Faca Strong para Spinning Weapon (Dizzy); Bloqueio para Air Smash",
        Gloria: 3,
        Honra: 1,
        Chi: 3,
        ForcaVontade: 7,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 7
    };
    return npc;
}

const npc = calcPC(WonWon());
