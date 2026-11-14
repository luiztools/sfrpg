function Chris() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Fama", 2);
    antecedentes[2] = newCaracteristica("Elemental (Fogo)", 5);
    antecedentes[3] = newCaracteristica("Sangue de Orochi", 5);

    const talentos = [];
    talentos[0] = newCaracteristica("Canto", 3);

    const personagem = {
        Nome: "Chris",
        Estilo: "Kung Fu",
        Escola: "Nenhuma",
        Jogador: "NPC",
        Assinatura: "Sorriso sarcástico",
        Conceito: "Membro de Banda",
        Cronica: "The King of Fighters",
        Equipe: "Hakkesshu",
        Time: "Orochi Team",
        Forca: 3,
        Destreza: 6,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 2,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 5,
        Raciocinio: 3,
        Prontidao: 2,
        Interrogacao: 0,
        Intimidacao: 0,
        Perspicacia: 5,
        Manha: 5,
        Labia: 4,
        LutaCega: 5,
        Conducao: 0,
        Lideranca: 1,
        Seguranca: 0,
        Furtividade: 3,
        Sobrevivencia: 0,
        Arena: 1,
        Computador: 1,
        Investigacao: 3,
        Medicina: 0,
        Misterios: 4,
        Estilos: 0,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 5,
        Foco: 6,
        NovosTalentos: talentos,
        ManobrasEspeciais: "Jump, Throw, Power Uppercut, Dragon Punch, Air Smash, Foot Sweep, Haymaker, Widowmaker, Spinning Back Fist, Sense Orochi, Fire Strike, Flaming Dragon Punch, Flaming Fist",
        Combos: "Flaming Fist Fierce para Flaming Dragon Punch (Dizzy); Jab para Jab para Haymaker (Dizzy); Jumping Forward para Strong para Haymaker (Dizzy)",
        Gloria: 5,
        Honra: 4,
        Chi: 10,
        ForcaVontade: 7,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = Chris();

npc = calcPC(npc);
