function LordKungFuDoFighting() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Recursos", 5);
    antecedentes[1] = newCaracteristica("Staff", 2);

    const lord =
    {
        Nome: "Lord",
        Estilo: "Ler Drit",
        Escola: "",
        Conceito: "",
        Assinatura: "Levita com mãos eletrificadas",
        Jogador: "NPC",
        Cronica: "Kung Fu Do Fighting",
        Forca: 2,
        Destreza: 2,
        Vigor: 2,
        Carisma: 2,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 0,
        Interrogacao: 3,
        Intimidacao: 3,
        Perspicacia: 3,
        Manha: 0,
        Labia: 0,
        LutaCega: 1,
        Conducao: 0,
        Lideranca: 3,
        Seguranca: 0,
        Furtividade: 0,
        Sobrevivencia: 0,
        Arena: 0,
        Computador: 0,
        Investigacao: 2,
        Medicina: 0,
        Misterios: 3,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 1,
        Chute: 1,
        Bloqueio: 0,
        Apresamento: 0,
        Esportes: 2,
        Foco: 3,
        Gloria: 3,
        Honra: 0,
        Chi: 10,
        ForcaVontade: 2,
        Saude: 10,
        Posto: 1,
        Divisao: "",
        ManobrasEspeciais: "Jump, Haymaker, Fireball",
        Combos: "Fireball para Fireball;",
    };

    return lord;
}

const npc = calcPC(LordKungFuDoFighting());