function TuskKI() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Fama", 3);
    antecedentes[1] = newCaracteristica("Aliados", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Espada", 6);

    const armas = [];
    armas[0] = "Espada Larga";

    const ficha = {
        Nome: "Tusk",
        Estilo: "Kenjutsu",
        Escola: "Arenas dos bárbaros",
        Jogador: "NPC",
        Assinatura: "Ergue a espada e solta um grito de guerra",
        Conceito: "Bárbaro imortal",
        Cronica: "Killer Instinct",
        Forca: 7,
        Destreza: 4,
        Vigor: 7,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 1,
        Intimidacao: 5,
        Perspicacia: 2,
        Manha: 1,
        Labia: 0,
        LutaCega: 3,
        Conducao: 1,
        Lideranca: 3,
        Seguranca: 1,
        Furtividade: 1,
        Sobrevivencia: 5,
        Arena: 4,
        Computador: 0,
        Investigacao: 1,
        Medicina: 2,
        Misterios: 4,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 4,
        Bloqueio: 6,
        Apresamento: 4,
        Esportes: 5,
        Foco: 2,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Throw, Weapon Uppercut, Spinning Weapon, Stepping Front Kick, Jumping Hammer Punch, Deflecting Weapon, Head Butt, Toughskin, Regeneration",
        Combos: "Stepping Front Kick para Weapon Uppercut (Dizzy); Jumping Hammer Punch para Espada Fierce; Spinning Weapon para Stepping Front Kick",
        Gloria: 6,
        Honra: 7,
        Chi: 4,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 8
    };
    return ficha;
}

const npc = calcPC(TuskKI());
