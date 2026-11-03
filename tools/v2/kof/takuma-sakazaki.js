function TakumaSakazaki() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Arena", 4);
    antecedentes[2] = newCaracteristica("Recursos", 3);
    antecedentes[3] = newCaracteristica("Fama", 3);

    const personagem = {
        Nome: "Takuma Sakazaki",
        Estilo: "Karatê Rindoukan",
        Escola: "Dojô Sakazaki",
        Jogador: "NPC",
        Assinatura: "Mostra os músculos",
        Conceito: "Sensei",
        Cronica: "Art of Fighting",
        Equipe: "Clã Sakazaki",
        Time: "Art of Fighting",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 0,
        Intimidacao: 4,
        Perspicacia: 5,
        Manha: 3,
        Labia: 2,
        LutaCega: 4,
        Conducao: 0,
        Lideranca: 2,
        Seguranca: 0,
        Furtividade: 3,
        Sobrevivencia: 4,
        Arena: 5,
        Computador: 0,
        Investigacao: 0,
        Medicina: 2,
        Misterios: 4,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 5,
        Esportes: 4,
        Foco: 6,
        ManobrasEspeciais: "Jump, Hyper Fist, Power Uppercut, Fireball, Improved Fireball, Knee Basher, Regeneration, Foot Sweep, Throw, Hurricane Kick, Triple Strike",
        Combos: "Jab - Fierce; Jab - Fierce - Power Uppercut (Dizzy); Movimento - Hyper Fist - Improved Fireball (Dizzy)",
        Gloria: 8,
        Honra: 7,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = TakumaSakazaki();

npc = calcPC(npc);
