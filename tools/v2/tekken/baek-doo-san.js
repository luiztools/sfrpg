function BaekTk2() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Contatos", 3);
    antecedentes[1] = newCaracteristica("Fama", 2);
    antecedentes[2] = newCaracteristica("Recursos", 2);

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 3);

    return {
        Nome: "Baek Doo San",
        Estilo: "Tae Kwon Dô",
        Escola: "Tradição Familiar",
        Jogador: "NPC",
        Assinatura: "Postura Flamingo",
        Conceito: "Mestre Atormentado",
        Cronica: "Tekken 2",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 2,
        Intimidacao: 4,
        Perspicacia: 4,
        Manha: 3,
        Labia: 1,
        LutaCega: 4,
        Conducao: 1,
        Lideranca: 3,
        Seguranca: 2,
        Furtividade: 2,
        Sobrevivencia: 2,
        Arena: 3,
        Computador: 0,
        Investigacao: 1,
        Medicina: 2,
        Misterios: 1,
        Estilos: 5,
        Antecedentes: antecedentes,
        NovosTalentos: talentos,
        Soco: 2,
        Chute: 6,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 4,
        Foco: 3,
        ManobrasEspeciais: "Jump, Kippup, Flamingo Stance, Kick Defense, Double Hit Punch, Ax Kick, Double Hit Kick, Lightning Leg, Flying Twin Kick, Stepping Front Kick, Flying Kick, Foot Sweep, Spinning Foot Sweep, Slide Kick, Wounded Knee, Throw, Take Down, Psychokinetic Channeling",
        Combos: "Double Hit Kick para Ax Kick, Jump para Flying Twin Kick, Stepping Front Kick para Lightning Leg, Movimento para Slide Kick para Foot Sweep, Bloqueio para Wounded Knee",
        Gloria: 5,
        Honra: 5,
        Chi: 3,
        ForcaVontade: 8,
        Saude: 18,
        Divisao: "Livre",
        Posto: 8
    };
}

let npc = BaekTk2();

npc = calcPC(npc);
