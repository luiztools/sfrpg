function KulaDiamond() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Elemental (Gelo)", 5);
    antecedentes[2] = newCaracteristica("Apoio", 5);

    const personagem = {
        Nome: "Kula Diamond",
        Estilo: "Jeet Kune Dô",
        Escola: "NESTS",
        Jogador: "NPC",
        Assinatura: "Gelo",
        Conceito: "Arma secreta",
        Cronica: "The King of Fighters",
        Equipe: "NESTS",
        Time: "NESTS Team",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 5,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 2,
        Perspicacia: 4,
        Manha: 3,
        Labia: 2,
        LutaCega: 2,
        Conducao: 1,
        Lideranca: 2,
        Seguranca: 3,
        Furtividade: 5,
        Sobrevivencia: 0,
        Arena: 1,
        Computador: 2,
        Investigacao: 3,
        Medicina: 0,
        Misterios: 3,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 4,
        Foco: 6,
        ManobrasEspeciais: "Jump, Throw, Power Uppercut, Elemental Rage, Levitation, Dragon Punch, Ice Blast, Missile Reflection, Energy Reflection, San He, Hurricane Kick, Slide Kick, Wall, Stone",
        Combos: "Slide Kick para Dragon Punch; Roundhouse para Stone (Dizzy); Hurricane Kick para Hurricane Kick (Dizzy); Hurricane Kick para Roundhouse (Dizzy); Bloqueio para Wall",
        Gloria: 6,
        Honra: 4,
        Chi: 10,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = KulaDiamond();

npc = calcPC(npc);
