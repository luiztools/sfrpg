function KrauserFF() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Fama", 2);
    antecedentes[2] = newCaracteristica("Recursos", 5);
    antecedentes[3] = newCaracteristica("Staff", 4);
    antecedentes[4] = newCaracteristica("Arena", 5);
    antecedentes[5] = newCaracteristica("Contatos", 3);

    const pericias = [];
    pericias[0] = newCaracteristica("Música", 5);

    const personagem = {
        Nome: "Wolfgang Krauser",
        Estilo: "Sanbo",
        Escola: "Família Stroheim",
        Jogador: "NPC",
        Assinatura: "Toma vinho enquanto sorri do oponente caído",
        Conceito: "Kaiser (imperador do submundo)",
        Cronica: "Fatal Fury 2",
        Equipe: "Howard Connection",
        Time: "South Town Team",
        Forca: 7,
        Destreza: 4,
        Vigor: 7,
        Carisma: 2,
        Manipulacao: 4,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 0,
        Intimidacao: 5,
        Perspicacia: 5,
        Manha: 2,
        Labia: 3,
        LutaCega: 4,
        Conducao: 2,
        Lideranca: 4,
        Seguranca: 0,
        Furtividade: 3,
        Sobrevivencia: 3,
        Arena: 3,
        Computador: 1,
        Investigacao: 2,
        Medicina: 0,
        Misterios: 2,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 4,
        Foco: 6,
        NovasPericias: pericias,
        ManobrasEspeciais: "Jump, Foot Sweep, Throw, Buffalo Punch, Power Uppercut, Haymaker, Stomach Pump, Fireball, Improved Fireball, Wheel Kick, Gekiro, Missile Reflection, Energy Reflection, San He, Air Smash, Grappling Defense, Wounded Knee, Musical Accompaniment",
        Combos: "Wounded Knee para Buffalo Punch para Wheel Kick (Dizzy); Haymaker para Wheel Kick; Throw para Improved Fireball (Dizzy); Forward para Roundhouse (Dizzy)",
        Gloria: 8,
        Honra: 3,
        Chi: 10,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Livre",
        Posto: 10
    };
    return personagem;
}

let npc = KrauserFF();

npc = calcPC(npc);
