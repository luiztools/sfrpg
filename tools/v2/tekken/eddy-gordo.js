function EddyTk3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Contatos", 3);
    antecedentes[1] = newCaracteristica("Recursos", 5);
    antecedentes[2] = newCaracteristica("Sensei", 3);

    return {
        Nome: "Eduardo \"Eddy\" Gordo",
        Estilo: "Capoeira",
        Escola: "Professor Particular",
        Equipe: "Tekken Force",
        Time: "Tekken Force",
        Jogador: "NPC",
        Assinatura: "Ginga de batalha",
        Conceito: "Vingador",
        Cronica: "Tekken 3",
        Forca: 4,
        Destreza: 5,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 3,
        Intimidacao: 3,
        Perspicacia: 4,
        Manha: 4,
        Labia: 3,
        LutaCega: 0,
        Conducao: 3,
        Lideranca: 0,
        Seguranca: 2,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 3,
        Computador: 1,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 0,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 6,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 5,
        Foco: 2,
        ManobrasEspeciais: "Jump, Foot Sweep, Spinning Foot Sweep, Power Uppercut, Thigh Press, Throw, Back Roll Throw, Backflip Kick, Forward Backflip Kick, Cartwheel Kick, Tumbling Attack, Spinning Back Fist, Handstand Kick, Backflip, Triple Strike, Head Butt, Musical Accompaniment, Flying Tackle, Flying Body Spear",
        Combos: "Roundhouse para Tumbling Attack para Handstand Kick (Dizzy), Roundhouse para Handstand Kick para Forward Backflip Kick (Dizzy), Handstand Kick para Tumbling Attack, Handstand Kick para Foot Sweep, Movimento para Triple Strike (Dizzy)",
        Gloria: 7,
        Honra: 6,
        Chi: 4,
        ForcaVontade: 9,
        Saude: 18,
        Divisao: "Tradicional",
        Posto: 8
    };
}

let npc = EddyTk3();
npc = calcPC(npc);
