function ChatchaiKungFuDoFighting() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Sensei", 3);
    antecedentes[1] = newCaracteristica("Apoio", 2);

    const chatchai =
    {
        Nome: "Chatchai",
        Estilo: "Muay Thai",
        Escola: "",
        Conceito: "",
        Assinatura: "Salto comemorativo",
        Jogador: "NPC",
        Cronica: "Kung Fu Do Fighting",
        Forca: 3,
        Destreza: 4,
        Vigor: 3,
        Carisma: 3,
        Manipulacao: 1,
        Aparencia: 2,
        Percepcao: 2,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 0,
        Interrogacao: 0,
        Intimidacao: 0,
        Perspicacia: 0,
        Manha: 0,
        Labia: 3,
        LutaCega: 3,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 2,
        Sobrevivencia: 2,
        Arena: 3,
        Computador: 0,
        Investigacao: 0,
        Medicina: 0,
        Misterios: 3,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 1,
        Chute: 3,
        Bloqueio: 0,
        Apresamento: 0,
        Esportes: 2,
        Foco: 0,
        Gloria: 2,
        Honra: 1,
        Chi: 2,
        ForcaVontade: 10,
        Saude: 20,
        Posto: 1,
        Divisao: "Livre",
        ManobrasEspeciais: "Elbow Smash, Jump, Kippup, Tiger Knee",
        Combos: "Elbow Smash para Tiger Knee;",
    };
    return chatchai;
}

const npc = calcPC(ChatchaiKungFuDoFighting());