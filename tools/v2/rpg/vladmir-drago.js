function VladmirDrago() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 3);
    antecedentes[1] = newCaracteristica("Sensei", 3);
    antecedentes[2] = newCaracteristica("Recursos", 2);
    antecedentes[3] = newCaracteristica("Fama", 2);
    antecedentes[4] = newCaracteristica("Empresario", 3);

    const tecnicas = [];

    const armas = [];

    const vladmir =
    {
        Nome: "Vladmir Drago",
        Estilo: "Boxe",
        Escola: "Academia de seu Avô",
        Equipe: "Vodkas Korlov",
        Conceito: "Leiteiro",
        Jogador: "Raryson Rost",
        Cronica: "1991",
        Time: "Dream Team",
        Assinatura: "Sinal da Cruz",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 1,
        Manipulacao: 1,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 1,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 2,
        Intimidacao: 3,
        Perspicacia: 1,
        Manha: 1,
        Labia: 1,
        LutaCega: 3,
        Conducao: 5,
        Lideranca: 1,
        Seguranca: 1,
        Furtividade: 2,
        Sobrevivencia: 2,
        Arena: 4,
        Computador: 2,
        Investigacao: 1,
        Medicina: 3,
        Misterios: 1,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 0,
        Bloqueio: 3,
        Apresamento: 0,
        Esportes: 4,
        Foco: 0,
        Gloria: 0,
        Honra: 3,
        Divisao: "Tradicional",
        Posto: 7,
        Chi: 1,
        ForcaVontade: 8,
        Saude: 20,
        ManobrasEspeciais: "Jump, Deflecting Punch, Thunderbolt, Head Butt, Dashing Punch, Punch Defense",
        Combos: "",
        NovasTecnicas: tecnicas,
        Armas: armas
    };
    return vladmir;
}

const npc = calcPC(VladmirDrago());