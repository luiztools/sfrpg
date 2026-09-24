function LauraKungFuDoFighting() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Fama", 3);
    antecedentes[1] = newCaracteristica("Recursos", 2);

    const laura =
    {
        Nome: "Laura",
        Estilo: "Capoeira",
        Escola: "",
        Conceito: "",
        Assinatura: "Salto acrobático",
        Jogador: "NPC",
        Cronica: "Kung Fu Do Fighting",
        Forca: 2,
        Destreza: 5,
        Vigor: 1,
        Carisma: 5,
        Manipulacao: 1,
        Aparencia: 4,
        Percepcao: 2,
        Inteligencia: 2,
        Raciocinio: 2,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 0,
        Perspicacia: 3,
        Manha: 0,
        Labia: 3,
        LutaCega: 3,
        Conducao: 0,
        Lideranca: 1,
        Seguranca: 0,
        Furtividade: 0,
        Sobrevivencia: 0,
        Arena: 3,
        Computador: 0,
        Investigacao: 0,
        Medicina: 0,
        Misterios: 2,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 0,
        Chute: 3,
        Bloqueio: 0,
        Apresamento: 0,
        Esportes: 3,
        Foco: 3,
        Gloria: 2,
        Honra: 1,
        Chi: 2,
        ForcaVontade: 8,
        Saude: 20,
        Posto: 1,
        Divisao: "",
        ManobrasEspeciais: "Double Hit-Kick, Backflip Kick, Cartwheel Kick, Handstand Kick, Jump",
        Combos: "Cartwheel Kick para Backflip Kick;",
    };
    return laura;
}

const npc = calcPC(LauraKungFuDoFighting());