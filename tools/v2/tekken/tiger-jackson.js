function TigerTk3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Contatos", 3);
    antecedentes[1] = newCaracteristica("Fama", 2);
    antecedentes[2] = newCaracteristica("Recursos", 1);

    const talentos = [];
    talentos[0] = newCaracteristica("Dança", 5);

    return {
        Nome: "Tiger Jackson",
        Estilo: "Capoeira",
        Escola: "Professor Particular",
        Jogador: "NPC",
        Assinatura: "Aponta para o céu em pose de discoteca",
        Conceito: "Dançarino de discoteca",
        Cronica: "Tekken 3",
        Forca: 4,
        Destreza: 5,
        Vigor: 5,
        Carisma: 5,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 2,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 1,
        Intimidacao: 2,
        Perspicacia: 3,
        Manha: 4,
        Labia: 4,
        LutaCega: 0,
        Conducao: 2,
        Lideranca: 1,
        Seguranca: 0,
        Furtividade: 2,
        Sobrevivencia: 1,
        Arena: 3,
        Computador: 0,
        Investigacao: 1,
        Medicina: 1,
        Misterios: 0,
        Estilos: 2,
        Antecedentes: antecedentes,
        NovosTalentos: talentos,
        Soco: 4,
        Chute: 6,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 5,
        Foco: 2,
        ManobrasEspeciais: "Jump, Foot Sweep, Spinning Foot Sweep, Power Uppercut, Thigh Press, Throw, Back Roll Throw, Backflip Kick, Forward Backflip Kick, Cartwheel Kick, Tumbling Attack, Spinning Back Fist, Handstand Kick, Backflip, Triple Strike, Head Butt, Musical Accompaniment, Flying Tackle, Flying Body Spear",
        Combos: "Roundhouse para Tumbling Attack para Handstand Kick (Dizzy), Roundhouse para Handstand Kick para Forward Backflip Kick (Dizzy), Handstand Kick para Tumbling Attack, Handstand Kick para Foot Sweep, Movimento para Triple Strike (Dizzy)",
        Gloria: 5,
        Honra: 5,
        Chi: 4,
        ForcaVontade: 7,
        Saude: 18,
        Divisao: "Tradicional",
        Posto: 7
    };
}

let npc = TigerTk3();
npc = calcPC(npc);
