function BlairEX() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Arena", 3);
    antecedentes[2] = newCaracteristica("Empresário", 4);
    antecedentes[3] = newCaracteristica("Fama", 2);
    antecedentes[4] = newCaracteristica("Recursos", 4);

    return {
        Nome: "Blair Dame",
        Estilo: "Kickboxe",
        Escola: "Professor Particular",
        Jogador: "NPC",
        Assinatura: "Cabelos azuis",
        Conceito: "Aventureira",
        Cronica: "Street Fighter EX",
        Equipe: "Família Purna",
        Time: "Pullum Team",
        Forca: 5,
        Destreza: 6,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 4,
        Aparencia: 6,
        Percepcao: 2,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 2,
        Interrogacao: 3,
        Intimidacao: 2,
        Perspicacia: 0,
        Manha: 3,
        Labia: 4,
        LutaCega: 0,
        Conducao: 2,
        Lideranca: 2,
        Seguranca: 0,
        Furtividade: 2,
        Sobrevivencia: 0,
        Arena: 2,
        Computador: 2,
        Investigacao: 0,
        Medicina: 1,
        Misterios: 0,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 6,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 5,
        Foco: 2,
        ManobrasEspeciais: "Spinning Back Fist, Power Uppercut, Foot Sweep, Tiger Knee, Double Hit Kick, Double Dread Kick, Throw, Knee Basher, Forward Slide Kick, Shoot Upper, Jump",
        Combos: "Spinning Back Fist para Shoot Upper (Dizzy); Bloqueio para Tiger Knee para Knee Basher; Throw para Forward Slide Kick (Dizzy)",
        Gloria: 7,
        Honra: 6,
        Chi: 2,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Livre",
        Posto: 7
    };
}

const npc = calcPC(BlairEX());
