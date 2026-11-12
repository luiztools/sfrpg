function TwelveSF3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Apoio", 5);
    antecedentes[2] = newCaracteristica("Arena", 3);
    antecedentes[3] = newCaracteristica("Cibernético", 5);

    const twelve = {
        Nome: "Twelve",
        Estilo: "Jeet Kune Dô",
        Escola: "Illuminati",
        Jogador: "NPC",
        Assinatura: "Maleabilidade",
        Conceito: "Cobaia",
        Cronica: "Street Fighter 3",
        Forca: 4,
        Destreza: 6,
        Vigor: 5,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 1,
        Percepcao: 6,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 0,
        Intimidacao: 4,
        Perspicacia: 5,
        Manha: 3,
        Labia: 0,
        LutaCega: 5,
        Conducao: 3,
        Lideranca: 0,
        Seguranca: 4,
        Furtividade: 5,
        Sobrevivencia: 4,
        Arena: 1,
        Computador: 5,
        Investigacao: 5,
        Medicina: 4,
        Misterios: 4,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 5,
        Foco: 0,
        ManobrasEspeciais: "Jump, Power Uppercut, Ghost Form, Air Smash, Hyper Fist, Flying Body Spear, Vertical Rolling Attack, Flying Thrust Kick, Missile Reflection, Slide Kick, Extendible Limbs, Knife Hand Strike, Metamorphose",
        Combos: "Ghost Form para Hyper Fist (Dizzy), Power Uppercut para Vertical Rolling Attack (Dizzy), Flying Thrust Kick para Slide Kick para Air Smash (Dizzy)",
        Gloria: 5,
        Honra: 2,
        Chi: 9,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 7
    };
    return twelve;
}

let npc = TwelveSF3();

npc = calcPC(npc);
