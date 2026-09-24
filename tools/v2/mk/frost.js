function Frost() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 1);
    antecedentes[1] = newCaracteristica("Elemental", 4);
    antecedentes[2] = newCaracteristica("Herança do Clã", 4);
    antecedentes[3] = newCaracteristica("Sensei", 4);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Espada", 4);

    const armas = ["Ninjato"];

    const personagem =
    {
        Nome: "Frost",
        Estilo: "Ninjitsu",
        Escola: "Clã Lin-Kuei",
        Equipe: "Lin-Kuei",
        Time: "Lin-Kuei",
        Conceito: "Ninja Criomante",
        Assinatura: "Frieza",
        Jogador: "NPC",
        Cronica: "MK: Deadly Alliance",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 1,
        Manipulacao: 4,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 0,
        Intimidacao: 1,
        Perspicacia: 2,
        Manha: 1,
        Labia: 3,
        LutaCega: 3,
        Conducao: 0,
        Lideranca: 1,
        Seguranca: 0,
        Furtividade: 5,
        Sobrevivencia: 4,
        Arena: 3,
        Computador: 0,
        Investigacao: 1,
        Medicina: 1,
        Misterios: 2,
        Estilos: 0,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 3,
        Foco: 4,
        NovasTecnicas: tecnicas,
        Armas: armas,
        Divisao: "Duelistas",
        Posto: 7,
        Gloria: 4,
        Honra: 0,
        Chi: 10,
        ForcaVontade: 6,
        Saude: 18,
        ManobrasEspeciais: "Jump, Kippup, Spinning Back Fist, Face Slam, Ducking Fierce, Elbow Smash, Throw, Flamingo Stance, Power Uppercut, Backflip, Double Hit Punch, Double Hit Kick, Palm Press, Triple Strike, Power Up, Wounded Knee, Ice Blast, Ice Ground, Slide Kick",
        Combos: "Jab para Jab para Face Slam (dizzy); Jab para Strong para Throw (dizzy); Jab para Strong para Roundhouse (dizzy); Short para Forward para Roundhouse (dizzy); Espada Jab (3x) (Dizzy);"
    };
    return personagem;
}

let npc = calcPC(Frost());