function JacquesDesroche() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 3);
    antecedentes[1] = newCaracteristica("Aliados", 3);

    const Jacques = {
        Nome: "Jacques Desroche",
        Estilo: "Savate",
        Escola: "Salle Savate de Montreal",
        Jogador: "NPC",
        Assinatura: "Dança!",
        Conceito: "Marinheiro Mercante",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 2,
        Prontidao: 3,
        Interrogacao: 1,
        Intimidacao: 2,
        Perspicacia: 2,
        Manha: 4,
        Labia: 2,
        LutaCega: 3,
        Conducao: 2,
        Lideranca: 1,
        Seguranca: 1,
        Furtividade: 1,
        Sobrevivencia: 1,
        Arena: 3,
        Computador: 1,
        Investigacao: 2,
        Medicina: 1,
        Misterios: 3,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 2,
        Chute: 6,
        Bloqueio: 4,
        Apresamento: 1,
        Esportes: 5,
        Foco: 3,
        ManobrasEspeciais: "Spinning Back Fist, Power Uppercut, Triple Strike, Stepping Front Kick, Reverse Frontal Kick, Ax Kick, Double Hit Kick, Deflecting Punch, Jump, Displacement, Esquives",
        Combos: "Deflecting Punch para Stepping Front Kick para Power Uppercut (Dizzy); Jab para Spinning Back Fist para Ax Kick (Dizzy)",
        Gloria: 5,
        Honra: 6,
        Chi: 5,
        ForcaVontade: 7,
        Saude: 17,
        Divisao: "Tradicional",
        Posto: 7
    };
    return Jacques;
}

let npc = JacquesDesroche();

npc = calcPC(npc);