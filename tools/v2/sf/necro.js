function NecroSF3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Arena", 1);
    antecedentes[2] = newCaracteristica("Cibernético", 5);

    const necro = {
        Nome: "Necro",
        Estilo: "Forças Especiais",
        Escola: "Illuminati",
        Jogador: "NPC",
        Assinatura: "Tez Cadavérica",
        Conceito: "Fugitivo",
        Cronica: "Street Fighter 3",
        Forca: 5,
        Destreza: 4,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 1,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 2,
        Intimidacao: 4,
        Perspicacia: 2,
        Manha: 4,
        Labia: 1,
        LutaCega: 2,
        Conducao: 3,
        Lideranca: 0,
        Seguranca: 4,
        Furtividade: 3,
        Sobrevivencia: 3,
        Arena: 2,
        Computador: 4,
        Investigacao: 4,
        Medicina: 2,
        Misterios: 2,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 6,
        Apresamento: 4,
        Esportes: 4,
        Foco: 0,
        ManobrasEspeciais: "Jump, Throw, Shock Treatment, Thigh Press, Suplex, Foot Sweep, Power Uppercut, Flying Body Spear, Psychokinetic Channeling, Extendible Limbs",
        Combos: "Suplex para Shock Treatment, Jab para Short para Strong (Dizzy), Throw para Forward para Flying Body Spear (Dizzy), Short para Foot Sweep (Dizzy)",
        Gloria: 5,
        Honra: 5,
        Chi: 8,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 9
    };
    return necro;
}

let npc = NecroSF3();

npc = calcPC(npc);
