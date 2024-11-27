function MikeSF1() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 3);
    antecedentes[1] = newCaracteristica("Empresario", 2);
    antecedentes[2] = newCaracteristica("Recursos", 1);

    var mike =
    {
        Nome: "Mike",
        Conceito: "Pugilista",
        Escola: "Guetos americanos",
        Estilo: "Boxe",
        Assinatura: "Levanta o Braço",
        Jogador: "NPC",
        Time: "Nenhum",
        Equipe: "Nenhuma",
        Cronica: "Street Fighter 1",
        Forca: 5,
        Destreza: 3,
        Vigor: 6,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 1,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 3,
        Prontidao: 3,
        Intimidacao: 5,
        Perspicacia: 2,
        LutaCega: 2,
        Conducao: 3,
        Furtividade: 2,
        Arena: 3,
        Medicina: 2,
        Misterios: 1,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 1,
        Bloqueio: 4,
        Apresamento: 2,
        Esportes: 2,
        Foco: 1,
        ManobrasEspeciais: "Dashing Punch, Power Uppercut, Fist Sweep, Jump, Dashing Uppercut",
        Combos: "Jab para Power Uppercut (Dizzy), Jab para Jab (Dizzy)",
        Chi: 3,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Tradicional",
        Posto: 7,
        Honra: 1,
        Gloria: 4
    };
    return calcPC(mike);
}

const npc = MikeSF1();