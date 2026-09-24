function LeeKungFuDoFighting() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Recursos", 1);
    antecedentes[1] = newCaracteristica("Arena", 1);
    antecedentes[2] = newCaracteristica("Sensei", 3);

    const lee =
    {
        Nome: "Lee",
        Estilo: "Tae Kwon Dô",
        Escola: "",
        Conceito: "",
        Assinatura: "Chuta o ar",
        Jogador: "NPC",
        Cronica: "Kung Fu Do Fighting",
        Forca: 3,
        Destreza: 5,
        Vigor: 2,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 2,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 1,
        Interrogacao: 0,
        Intimidacao: 0,
        Perspicacia: 3,
        Manha: 0,
        Labia: 0,
        LutaCega: 3,
        Conducao: 0,
        Lideranca: 1,
        Seguranca: 0,
        Furtividade: 3,
        Sobrevivencia: 0,
        Arena: 2,
        Computador: 0,
        Investigacao: 1,
        Medicina: 0,
        Misterios: 2,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 0,
        Chute: 3,
        Bloqueio: 1,
        Apresamento: 0,
        Esportes: 2,
        Foco: 0,
        Gloria: 0,
        Honra: 3,
        Chi: 5,
        ForcaVontade: 6,
        Saude: 10,
        Posto: 1,
        Divisao: "",
        ManobrasEspeciais: "Double Dread Kick, Double Hit-Kick, Kippup, Jump",
        Combos: "",
    };

    return lee;
}

const npc = calcPC(LeeKungFuDoFighting());