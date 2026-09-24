function LeiKungFuDoFighting() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Fama", 2);
    antecedentes[1] = newCaracteristica("Sensei", 2);
    antecedentes[2] = newCaracteristica("Recursos", 1);

    const lei =
    {
        Nome: "Lei",
        Estilo: "Wu Shu",
        Escola: "",
        Conceito: "",
        Assinatura: "Vira de costas",
        Jogador: "NPC",
        Cronica: "Kung Fu Do Fighting",
        Forca: 2,
        Destreza: 5,
        Vigor: 2,
        Carisma: 4,
        Manipulacao: 2,
        Aparencia: 4,
        Percepcao: 2,
        Inteligencia: 2,
        Raciocinio: 2,
        Prontidao: 0,
        Interrogacao: 0,
        Intimidacao: 0,
        Perspicacia: 0,
        Manha: 1,
        Labia: 3,
        LutaCega: 0,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 2,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 2,
        Computador: 0,
        Investigacao: 3,
        Medicina: 0,
        Misterios: 2,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 0,
        Chute: 3,
        Bloqueio: 1,
        Apresamento: 0,
        Esportes: 3,
        Foco: 3,
        Gloria: 3,
        Honra: 0,
        Chi: 6,
        ForcaVontade: 6,
        Saude: 10,
        Posto: 1,
        Divisao: "",
        ManobrasEspeciais: "Energy Ball, Jump, Flash Kick",
        Combos: "Foward para Thunder Kick;",
    };

    return lei;
}

const npc = calcPC(LeiKungFuDoFighting());