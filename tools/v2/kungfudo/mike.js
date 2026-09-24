function MikeKungFuDoFighting() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Sensei", 1);
    antecedentes[1] = newCaracteristica("Fama", 2);
    antecedentes[2] = newCaracteristica("Empresário", 2);

    const mike =
    {
        Nome: "Mike",
        Estilo: "Boxe",
        Escola: "",
        Conceito: "",
        Assinatura: "Gancho no ar",
        Jogador: "NPC",
        Cronica: "Kung Fu Do Fighting",
        Forca: 4,
        Destreza: 2,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 3,
        Percepcao: 2,
        Inteligencia: 2,
        Raciocinio: 2,
        Prontidao: 3,
        Interrogacao: 3,
        Intimidacao: 0,
        Perspicacia: 3,
        Manha: 0,
        Labia: 0,
        LutaCega: 2,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 1,
        Furtividade: 1,
        Sobrevivencia: 0,
        Arena: 2,
        Computador: 0,
        Investigacao: 0,
        Medicina: 2,
        Misterios: 0,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 0,
        Bloqueio: 1,
        Apresamento: 0,
        Esportes: 0,
        Foco: 3,
        Gloria: 3,
        Honra: 0,
        Chi: 3,
        ForcaVontade: 6,
        Saude: 10,
        Posto: 1,
        Divisao: "",
        ManobrasEspeciais: "Dashing Punch, Sonic Boom, Jump",
        Combos: "",
    };

    return mike;
}

const npc = calcPC(MikeKungFuDoFighting());