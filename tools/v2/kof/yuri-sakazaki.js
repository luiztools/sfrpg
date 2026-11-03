function YuriSakazaki() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Sensei", 3);
    antecedentes[2] = newCaracteristica("Fama", 2);

    const personagem = {
        Nome: "Yuri Sakazaki",
        Estilo: "Karatê Rindoukan",
        Escola: "Dojô Sakazaki",
        Jogador: "NPC",
        Assinatura: "Sinal de positivo",
        Conceito: "Aventureira",
        Cronica: "Art of Fighting 2",
        Equipe: "Clã Sakazaki",
        Time: "Art of Fighting",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 5,
        Manipulacao: 4,
        Aparencia: 5,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 2,
        Interrogacao: 0,
        Intimidacao: 0,
        Perspicacia: 3,
        Manha: 4,
        Labia: 4,
        LutaCega: 0,
        Conducao: 2,
        Lideranca: 0,
        Seguranca: 1,
        Furtividade: 3,
        Sobrevivencia: 0,
        Arena: 0,
        Computador: 2,
        Investigacao: 3,
        Medicina: 1,
        Misterios: 0,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 5,
        Foco: 5,
        ManobrasEspeciais: "Jump, Power Uppercut, Fireball, Improved Fireball, Flying Fireball, Air Suplex, Kippup, Lightning Leg, Throw, Back Roll Throw, Brain Cracker, Energy Ball, Energy Reflection, Wall Spring, Dragon Punch",
        Combos: "Jab - Forward - Roundhouse; Dragon Punch - Dragon Punch; Short - Lightning Leg (Dizzy)",
        Gloria: 3,
        Honra: 7,
        Chi: 7,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = YuriSakazaki();

npc = calcPC(npc);
