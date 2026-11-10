function PullumEX() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Arena", 5);
    antecedentes[2] = newCaracteristica("Fama", 2);
    antecedentes[3] = newCaracteristica("Recursos", 4);
    antecedentes[4] = newCaracteristica("Staff", 1);

    return {
        Nome: "Pullum Purna",
        Estilo: "Wu Shu",
        Escola: "Professor Particular",
        Jogador: "NPC",
        Assinatura: "Toca tamborim",
        Conceito: "Vingadora",
        Cronica: "Street Fighter EX",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 5,
        Manipulacao: 4,
        Aparencia: 6,
        Percepcao: 4,
        Inteligencia: 2,
        Raciocinio: 5,
        Prontidao: 2,
        Interrogacao: 3,
        Intimidacao: 0,
        Perspicacia: 0,
        Manha: 3,
        Labia: 4,
        LutaCega: 0,
        Conducao: 2,
        Lideranca: 3,
        Seguranca: 0,
        Furtividade: 2,
        Sobrevivencia: 2,
        Arena: 1,
        Computador: 2,
        Investigacao: 2,
        Medicina: 1,
        Misterios: 2,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 6,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 5,
        Foco: 4,
        ManobrasEspeciais: "Power Uppercut, Foot Sweep, Double Jump, Alacer Wrist, Air Throw, Knee Basher, Throw, Flying Thrust Kick, Cannon Drill, Flying Body Spear, Jump, Ax Kick, Musical Accompaniment",
        Combos: "Bloqueio para Knee Basher (Dizzy); Cannon Drill para Flying Thrust Kick (Dizzy); Flying Body Spear para Flying Thrust Kick (Dizzy)",
        Gloria: 5,
        Honra: 6,
        Chi: 2,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Livre",
        Posto: 7
    };
}

const npc = calcPC(PullumEX());
