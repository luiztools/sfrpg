function Zero() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Cibernético", 5);
    antecedentes[2] = newCaracteristica("Apoio", 5);

    const personagem = {
        Nome: "Zero",
        Estilo: "Forças Especiais",
        Escola: "NESTS",
        Jogador: "NPC",
        Assinatura: "Bigodes",
        Conceito: "Espião",
        Cronica: "The King of Fighters",
        Equipe: "NESTS",
        Time: "Nenhum",
        Forca: 7,
        Destreza: 6,
        Vigor: 7,
        Carisma: 3,
        Manipulacao: 5,
        Aparencia: 2,
        Percepcao: 5,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 4,
        Intimidacao: 4,
        Perspicacia: 4,
        Manha: 2,
        Labia: 2,
        LutaCega: 3,
        Conducao: 3,
        Lideranca: 5,
        Seguranca: 4,
        Furtividade: 3,
        Sobrevivencia: 0,
        Arena: 1,
        Computador: 4,
        Investigacao: 3,
        Medicina: 0,
        Misterios: 0,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 5,
        Foco: 0,
        ManobrasEspeciais: "Jump, Throw, Power Uppercut, Elemental Rage, Shock Treatment, Rekka Ken, Flash Kick, Face Slam, Maka Wara, Energy Reflection, Missile Reflection, Haymaker, Repeating Fireball, Fireball, Levitation",
        Combos: "",
        Gloria: 7,
        Honra: 6,
        Chi: 8,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 8
    };
    return personagem;
}

let npc = Zero();

npc = calcPC(npc);
