function RemySF3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Arena", 3);
    antecedentes[2] = newCaracteristica("Contatos", 3);
    antecedentes[3] = newCaracteristica("Recursos", 2);

    const remy = {
        Nome: "Remy",
        Estilo: "Savate",
        Escola: "As Ruas",
        Jogador: "NPC",
        Assinatura: "Roupas Estilosas",
        Conceito: "Vingador",
        Cronica: "Street Fighter 3",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 5,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 3,
        Intimidacao: 4,
        Perspicacia: 3,
        Manha: 4,
        Labia: 3,
        LutaCega: 1,
        Conducao: 3,
        Lideranca: 3,
        Seguranca: 2,
        Furtividade: 3,
        Sobrevivencia: 4,
        Arena: 2,
        Computador: 2,
        Investigacao: 4,
        Medicina: 3,
        Misterios: 3,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 6,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 5,
        Foco: 5,
        ManobrasEspeciais: "Jump, Power Uppercut, Flying Thrust Kick, Double Hit Kick, Backflip Kick, Foot Sweep, Kick Defense, Throw, Sonic Boom, Flash Kick",
        Combos: "Fierce para Flash Kick (Dizzy), Forward para Sonic Boom, Jumping Fierce para Sonic Boom para Flash Kick (Dizzy)",
        Gloria: 6,
        Honra: 4,
        Chi: 8,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Livre",
        Posto: 7
    };
    return remy;
}

let npc = RemySF3();

npc = calcPC(npc);
