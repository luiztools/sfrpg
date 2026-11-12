function IngridSF6() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Elemental (Luz)", 5);

    const personagem = {
        Nome: "Ingrid",
        Estilo: "Soul Power",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Sorriso angelical",
        Conceito: "Viajante dimensional",
        Cronica: "Street Fighter 6",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 5,
        Manipulacao: 4,
        Aparencia: 4,
        Percepcao: 6,
        Inteligencia: 6,
        Raciocinio: 6,
        Prontidao: 5,
        Interrogacao: 4,
        Intimidacao: 4,
        Perspicacia: 6,
        Manha: 4,
        Labia: 3,
        LutaCega: 5,
        Conducao: 0,
        Lideranca: 4,
        Seguranca: 0,
        Furtividade: 5,
        Sobrevivencia: 5,
        Arena: 1,
        Computador: 0,
        Investigacao: 4,
        Medicina: 4,
        Misterios: 6,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 6,
        Bloqueio: 6,
        Apresamento: 4,
        Esportes: 5,
        Foco: 7,
        ManobrasEspeciais: "Jump, Foot Sweep, Power Uppercut, Throw, Monkey Grab Punch, Spinning Back Fist, Spinning Knuckle, Flash Kick, Fireball, Flying Fireball, Flaming Fist, Fire Strike, Chi Kun Healing, Chi Push, Yoga Teleport, Gekiro",
        Combos: "Spinning Knuckle para Flash Kick (Dizzy); Bloqueio para Chi Push; Yoga Teleport para Jumping Roundhouse; Strong para Forward (Dizzy); Roundhouse para Spinning Back Fist (Dizzy)",
        Gloria: 3,
        Honra: 7,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 1
    };
    return personagem;
}

let npc = IngridSF6();

npc = calcPC(npc);
