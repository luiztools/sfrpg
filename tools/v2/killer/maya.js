function MayaKI() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Fama", 2);
    antecedentes[2] = newCaracteristica("Contatos", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Faca", 5);
    tecnicas[1] = newCaracteristica("Arremesso", 4);

    const armas = [];
    armas[0] = "Kris";
    armas[1] = "Faca Arremessada";

    const ficha = {
        Nome: "Maya",
        Estilo: "Maculelê",
        Escola: "Guarda Noturna",
        Jogador: "NPC",
        Assinatura: "Cruza as adagas diante do rosto",
        Conceito: "Caçadora de monstros",
        Cronica: "Killer Instinct",
        Forca: 4,
        Destreza: 6,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 2,
        Intimidacao: 3,
        Perspicacia: 4,
        Manha: 3,
        Labia: 1,
        LutaCega: 3,
        Conducao: 1,
        Lideranca: 3,
        Seguranca: 2,
        Furtividade: 4,
        Sobrevivencia: 5,
        Arena: 2,
        Computador: 0,
        Investigacao: 4,
        Medicina: 2,
        Misterios: 5,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 6,
        Foco: 3,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Throw, Kippup, Weapon Uppercut, Spinning Weapon, Backflip Kick, Tumbling Attack, Deflecting Weapon, Slide Kick",
        Combos: "Faca Jab para Weapon Uppercut (Dizzy); Tumbling Attack para Spinning Weapon; Slide Kick para Backflip Kick (Dizzy)",
        Gloria: 5,
        Honra: 7,
        Chi: 5,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 8
    };
    return ficha;
}

const npc = calcPC(MayaKI());
