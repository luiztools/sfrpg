function AreaEX() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 1);
    antecedentes[1] = newCaracteristica("Arena", 3);
    antecedentes[2] = newCaracteristica("Apoio", 2);
    antecedentes[3] = newCaracteristica("Cibernético", 3);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Ciência", 5);

    return {
        Nome: "Area",
        Estilo: "Kickboxe",
        Escola: "Autodidata",
        Jogador: "NPC",
        Assinatura: "Par de patins",
        Conceito: "Cientista",
        Cronica: "Street Fighter EX",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 1,
        Manipulacao: 3,
        Aparencia: 2,
        Percepcao: 2,
        Inteligencia: 6,
        Raciocinio: 5,
        Prontidao: 0,
        Interrogacao: 3,
        Intimidacao: 0,
        Perspicacia: 4,
        Manha: 4,
        Labia: 2,
        LutaCega: 0,
        Conducao: 3,
        Lideranca: 0,
        Seguranca: 5,
        Furtividade: 0,
        Sobrevivencia: 0,
        Arena: 2,
        Computador: 6,
        Investigacao: 0,
        Medicina: 2,
        Misterios: 0,
        Estilos: 0,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 4,
        Foco: 1,
        NovosConhecimentos: conhecimentos,
        ManobrasEspeciais: "Jump, Slide Kick, Power Uppercut, Double Dread Kick, Hyper Fist, Wounded Knee, Throw, Double Hit Kick, Sonic Boom, Missile Reflection, Energy Reflection, Light Feet",
        Combos: "Throw para Wounded Knee (Dizzy); Power Uppercut para Hyper Fist (Dizzy); Jumping Roundhouse para Slide Kick",
        Gloria: 5,
        Honra: 3,
        Chi: 2,
        ForcaVontade: 7,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 6
    };
}

const npc = calcPC(AreaEX());
