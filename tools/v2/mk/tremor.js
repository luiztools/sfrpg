function Tremor() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Elemental", 5);

    const personagem =
    {
        Nome: "Tremor",
        Estilo: "Ninjitsu",
        Escola: "Clã Lin Kuei",
        Equipe: "Black Dragon",
        Time: "Black Dragon",
        Conceito: "Ninja Desertor",
        Assinatura: "Senta sobre os calcanhares",
        Jogador: "NPC",
        Cronica: "Mortal Kombat",
        Forca: 5,
        Destreza: 5,
        Vigor: 6,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 1,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 4,
        Interrogacao: 3,
        Intimidacao: 5,
        Perspicacia: 2,
        Manha: 3,
        Labia: 3,
        LutaCega: 2,
        Conducao: 2,
        Lideranca: 2,
        Seguranca: 3,
        Furtividade: 3,
        Sobrevivencia: 3,
        Arena: 3,
        Computador: 1,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 4,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 3,
        Foco: 5,
        Divisao: "Livre",
        Posto: 8,
        Gloria: 6,
        Honra: 2,
        Chi: 9,
        ForcaVontade: 9,
        Saude: 20,
        ManobrasEspeciais: "Jump, Power Uppercut, Foot Sweep, Buffalo Punch, Shockwave, Elemental Skin, Spinning Back Fist, Stone, Double Hit Kick, Pit, Wall, Weight, Fireball",
        Combos: "Jab para Jab para Roundhouse (dizzy); Jab para Strong para Fierce (dizzy); Jab para Strong para Shockwave; Spinning Back Fist para Power Uppercut para Forward (dizzy); Pit para Pit"
    };
    return personagem;
}

let npc = calcPC(Tremor());