function KimKungFuDoFighting() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Recursos", 1);
    antecedentes[1] = newCaracteristica("Arena", 1);
    antecedentes[2] = newCaracteristica("Sensei", 3);

    const kim =
    {
        Nome: "Kim",
        Estilo: "Tae Kwon Dô",
        Escola: "",
        Conceito: "",
        Assinatura: "Pose de Luta",
        Jogador: "NPC",
        Cronica: "Kung Fu Do Fighting",
        Forca: 3,
        Destreza: 4,
        Vigor: 3,
        Carisma: 2,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 2,
        Inteligencia: 2,
        Raciocinio: 2,
        Prontidao: 0,
        Interrogacao: 0,
        Intimidacao: 3,
        Perspicacia: 3,
        Manha: 0,
        Labia: 3,
        LutaCega: 3,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 1,
        Sobrevivencia: 0,
        Arena: 2,
        Computador: 0,
        Investigacao: 0,
        Medicina: 0,
        Misterios: 2,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 0,
        Chute: 3,
        Bloqueio: 1,
        Apresamento: 0,
        Esportes: 3,
        Foco: 2,
        Gloria: 2,
        Honra: 1,
        Chi: 7,
        ForcaVontade: 7,
        Saude: 20,
        Posto: 1,
        Divisao: "",
        ManobrasEspeciais: "Jump, Flash Kick",
        Combos: "Flash Kick para Flash Kick para Flash Kick;",
    };
    return kim;
}

const npc = calcPC(KimKungFuDoFighting());