function ElFuerte() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Fama", 3);
    antecedentes[1] = newCaracteristica("Recursos", 3);
    antecedentes[2] = newCaracteristica("Staff", 4);

    const elFuerte =
    {
        Nome: "El Fuerte",
        Conceito: "Chef de Cozinha",
        Escola: "",
        Estilo: "Lucha Libre",
        Assinatura: "Cooking Time!",
        Jogador: "NPC",
        Cronica: "Street Fighter 4",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 5,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 2,
        Intimidacao: 3,
        Perspicacia: 1,
        Manha: 3,
        Labia: 2,
        LutaCega: 0,
        Conducao: 2,
        Lideranca: 3,
        Seguranca: 1,
        Furtividade: 2,
        Sobrevivencia: 2,
        Arena: 5,
        Computador: 1,
        Investigacao: 1,
        Medicina: 2,
        Misterios: 0,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 6,
        Esportes: 7,
        Foco:2,
        Gloria: 8,
        Honra: 7,
        Chi: 2,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Guerreiros Mundiais",
        Posto: 9,
        ManobrasEspeciais: "Air Smash, Throw, Air Throw, Light Feet, Jump, Wall Spring, Thigh Press, Pile Driver, Spinning Pile Driver, Suplex, Air Suplex, Slide Kick, Grappling Defense, Hyper Tackle",
        Combos: "Air Smash 3x (Dizzy); Jab 3x (Dizzy); Air Smash para Spinning Pile Driver; Hyper Tackle para Spinning Pile Driver"
    };
    return calcPC(elFuerte);
}

const npc = ElFuerte();