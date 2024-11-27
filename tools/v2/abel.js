function AbelSF4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Contatos", 2);
    antecedentes[2] = newCaracteristica("Psycho Power", 3);
    antecedentes[3] = newCaracteristica("Recursos", 2);

    const abel =
    {
        Nome: "Abel",
        Estilo: "Sanbo",
        Escola: "Unidade Mercenária",
        Conceito: "Homem sem passado",
        Assinatura: "Amnésia",
        Jogador: "NPC",
        Cronica: "Street Fighter 4",
        Forca: 6,
        Destreza: 4,
        Vigor: 6,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 3,
        Intimidacao: 5,
        Perspicacia: 3,
        Manha: 3,
        Labia: 1,
        LutaCega: 2,
        Conducao: 2,
        Lideranca: 1,
        Seguranca: 4,
        Furtividade: 3,
        Sobrevivencia: 4,
        Arena: 2,
        Computador: 1,
        Investigacao: 4,
        Medicina: 2,
        Misterios: 2,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 6,
        Esportes: 4,
        Foco: 2,
        Gloria: 7,
        Honra: 6,
        Chi: 5,
        ForcaVontade: 9,
        Saude: 20,
        Posto: 9,
        Divisao: "Tradicional",
        ManobrasEspeciais: "Jump, Foot Sweep, Power Uppercut, Wheel Kick, Tornado Throw, Throw, Grappling Defense, Choke Throw, Flying Tackle",
        Combos: "Power Uppercut para Choke Throw; Forward para Tornado Throw (Dizzy); Flying Tackle para Tornado Throw (Dizzy)",
    };
    return abel;
}

const npc = calcPC(AbelSF4());