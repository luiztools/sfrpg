function ChiefThunderKI() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Arena", 2);
    antecedentes[2] = newCaracteristica("Contatos", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Arremesso", 5);
    tecnicas[1] = newCaracteristica("Faca", 5);

    const armas = [];
    armas[0] = "Machadinha";
    armas[1] = "Machadinha Arremessada";

    const chiefthunder = {
        Nome: "Chief Thunder",
        Estilo: "Luta-Livre Nativo Americana",
        Escola: "Professores da tribo",
        Jogador: "NPC",
        Assinatura: "Grito de guerra",
        Conceito: "Cacique em busca de vingança",
        Cronica: "Killer Instinct",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 5,
        Manipulacao: 2,
        Aparencia: 3,
        Percepcao: 5,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 5,
        Interrogacao: 2,
        Intimidacao: 5,
        Perspicacia: 3,
        Manha: 1,
        Labia: 2,
        LutaCega: 3,
        Conducao: 0,
        Lideranca: 5,
        Seguranca: 1,
        Furtividade: 4,
        Sobrevivencia: 5,
        Arena: 1,
        Computador: 0,
        Investigacao: 2,
        Medicina: 3,
        Misterios: 5,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 5,
        Foco: 4,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Foot Sweep, Power Uppercut, Stunning Shout, Spinning Clothesline, Head Butt, Thunderstrike, Diving Hawk, Double Hit Knee",
        Combos: "Spinning Clothesline para Strong para Thunderstrike (Dizzy); Machadinha para Spinning Clothesline para Foot Sweep (Dizzy); Diving Hawk para Spinning Clothesline para Thunderstrike (Dizzy)",
        Gloria: 6,
        Honra: 9,
        Chi: 5,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 8
    };
    return chiefthunder;
}

const npc = calcPC(ChiefThunderKI());