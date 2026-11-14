function K9999() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Contatos", 2);
    antecedentes[1] = newCaracteristica("Elemental (Fogo)", 5);
    antecedentes[2] = newCaracteristica("Apoio", 5);

    const personagem = {
        Nome: "K9999",
        Estilo: "Jeet Kune Dô",
        Escola: "NESTS",
        Jogador: "NPC",
        Assinatura: "Riso frenético",
        Conceito: "Agente da NESTS",
        Cronica: "The King of Fighters",
        Equipe: "NESTS",
        Time: "NESTS Team",
        Forca: 4,
        Destreza: 6,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 2,
        Percepcao: 5,
        Inteligencia: 5,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 3,
        Intimidacao: 4,
        Perspicacia: 1,
        Manha: 2,
        Labia: 0,
        LutaCega: 3,
        Conducao: 5,
        Lideranca: 3,
        Seguranca: 1,
        Furtividade: 2,
        Sobrevivencia: 0,
        Arena: 2,
        Computador: 1,
        Investigacao: 1,
        Medicina: 0,
        Misterios: 3,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 4,
        Foco: 5,
        ManobrasEspeciais: "Jump, Throw, Elemental Rage, Elemental Explosion, Knife Hand Strike, Haymaker, Widowmaker, Slide Kick, Extendible Limbs, Regeneration, Air Throw, Rekka Ken, Fireball, Repeating Fireball, San He, Shock Treatment, Elemental Skin, Hyper Fist, Hundred Shots",
        Combos: "Jumping Forward para Rekka Ken para Slide Kick; Rekka Ken para Knife Hand Strike para Elemental Explosion; Fireball para Repeating Fireball (Dizzy); Fireball para Extendible Limbs para Extendible Limbs (Dizzy)",
        Gloria: 6,
        Honra: 1,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = K9999();

npc = calcPC(npc);
