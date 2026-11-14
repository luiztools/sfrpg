function KDash() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Elemental (Fogo)", 5);
    antecedentes[2] = newCaracteristica("Apoio", 5);

    const personagem = {
        Nome: "K'",
        Estilo: "Jeet Kune Dô",
        Escola: "NESTS",
        Jogador: "NPC",
        Assinatura: "Óculos escuros",
        Conceito: "Durão",
        Cronica: "The King of Fighters",
        Equipe: "NESTS",
        Time: "K Dash Hero",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 0,
        Intimidacao: 4,
        Perspicacia: 3,
        Manha: 4,
        Labia: 4,
        LutaCega: 4,
        Conducao: 3,
        Lideranca: 3,
        Seguranca: 1,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 2,
        Computador: 1,
        Investigacao: 3,
        Medicina: 0,
        Misterios: 1,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 5,
        Foco: 6,
        ManobrasEspeciais: "Jump, Throw, Fireball, Power Uppercut, Dragon Punch, Flaming Dragon Punch, Slash Kick, Elemental Explosion, Flaming Fist, Flaming Heel, Light Feet, Empty Step, Slide Kick, Elemental Skin",
        Combos: "Flaming Dragon Punch para Jumping Roundhouse (Dizzy); Strong para Power Uppercut para Flaming Dragon Punch (Dizzy); Elemental Explosion para Fireball; Elemental Explosion para Roundhouse (Dizzy)",
        Gloria: 6,
        Honra: 6,
        Chi: 9,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = KDash();

npc = calcPC(npc);
