function ChizuruKagura() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Apoio", 3);
    antecedentes[2] = newCaracteristica("Recursos", 3);
    antecedentes[3] = newCaracteristica("Elemental", 5);

    const personagem =
    {
        Nome: "Chizuru Kagura",
        Estilo: "Yata-ryu (JKD)",
        Escola: "Clã Yata",
        Conceito: "Elemental do Ar",
        Assinatura: "Cópias ilusórias",
        Jogador: "NPC",
        Cronica: "The King of Fighters 97",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 5,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 5,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 0,
        Perspicacia: 4,
        Manha: 2,
        Labia: 4,
        LutaCega: 4,
        Conducao: 5,
        Lideranca: 3,
        Seguranca: 0,
        Furtividade: 3,
        Sobrevivencia: 0,
        Arena: 3,
        Computador: 0,
        Investigacao: 2,
        Medicina: 4,
        Misterios: 3,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 6,
        Apresamento: 4,
        Esportes: 5,
        Foco: 6,
        Divisao: "Livre",
        Posto: 8,
        Gloria: 5,
        Honra: 10,
        Chi: 10,
        ForcaVontade: 9,
        Saude: 20,
        ManobrasEspeciais: "Jump, Throw, Telephaty, Zen no Mind, Dim Mak, Elemental Stride, Heal, Sense Element, Power Uppercut, Air Blast, Fist Sweep, Foot Sweep, Spinning Clothesline, Turbo Spinning Clothesline, Dragon Punch, Missile Reflection, Energy Reflection, Chin Kun Healing",
        Combos: "Jab para Jab para Jab (Dizzy); Foot Sweep para Dragon Punch (Dizzy); Throw para Turbo Spinning Clothesline (Dizzy)"
    };
    return personagem;
}

let npc = ChizuruKagura();

npc = calcPC(npc);