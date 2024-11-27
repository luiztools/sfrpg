function ElFuerte() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Fama", 4);
    antecedentes[1] = newCaracteristica("Recursos", 4);
    antecedentes[2] = newCaracteristica("Staff", 4);

    var elFuerte =
    {
        Nome: "El Fuerte",
        Conceito: "Chef de Cozinha",
        Escola: "",
        Estilo: "Lucha Libre",
        Assinatura: "Cooking Time!",
        Jogador: "NPC",
        Cronica: "Street Fighter 4",
        Forca: 5,
        Destreza: 6,
        Vigor: 5,
        Carisma: 5,
        Manipulacao: 2,
        Aparencia: 1,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 5,
        Prontidao: 3,
        Intimidacao: 4,
        Manha: 2,
        LutaCega: 1,
        Conducao: 2,
        Lideranca: 3,
        Sobrevivencia: 1,
        Arena: 5,
        Computador: 1,
        Medicina: 2,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 6,
        Esportes: 7,
        Foco:0,
        Gloria: 10,
        Honra: 8,
        Chi: 1,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Guerreiros Mundiais",
        Posto: 9,
        ManobrasEspeciais: "Tostada Press, Fajita Buster, Flying Giga Buster, Habanero Dash, Jump, Wall Spring, Gordita Sobat, Shower Kick, Propeller Tortilla, Suplex, Quesadilla Bomb, Guacamole Leg Throw, Chili Mexicano, Sky Sorpressa Drop, Calamari Slide",
        Combos: "Tostada Press 3x (Dizzy); Jab 3x; Tostada Press para Flying Giga Buster; Quesadilla Bomb para Flying Giga Buster"
    };
    return calcPC(elFuerte);
}

const npc = ElFuerte();