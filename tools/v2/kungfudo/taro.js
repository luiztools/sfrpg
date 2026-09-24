function TaroKungFuDoFighting() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Recursos", 2);
    antecedentes[1] = newCaracteristica("Sensei", 3);

    const taro =
    {
        Nome: "Taro",
        Estilo: "Ninjutsu",
        Escola: "",
        Conceito: "",
        Assinatura: "Cumprimento Ninja",
        Jogador: "NPC",
        Cronica: "Kung Fu Do Fighting",
        Forca: 2,
        Destreza: 5,
        Vigor: 3,
        Carisma: 1,
        Manipulacao: 2,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 2,
        Raciocinio: 3,
        Prontidao: 0,
        Interrogacao: 0,
        Intimidacao: 3,
        Perspicacia: 3,
        Manha: 3,
        Labia: 0,
        LutaCega: 3,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 1,
        Furtividade: 3,
        Sobrevivencia: 0,
        Arena: 0,
        Computador: 0,
        Investigacao: 2,
        Medicina: 0,
        Misterios: 2,
        Estilos: 0,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 0,
        Bloqueio: 1,
        Apresamento: 0,
        Esportes: 3,
        Foco: 0,
        Gloria: 1,
        Honra: 2,
        Chi: 3,
        ForcaVontade: 2,
        Saude: 10,
        Posto: 1,
        Divisao: "",
        ManobrasEspeciais: "Jump, Haymaker, Widowmaker",
        Combos: "",
    };

    return taro;
}

const npc = calcPC(TaroKungFuDoFighting());