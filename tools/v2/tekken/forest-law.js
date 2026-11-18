function ForestTk3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Contatos", 1);
    antecedentes[2] = newCaracteristica("Fama", 1);
    antecedentes[3] = newCaracteristica("Recursos", 1);
    antecedentes[4] = newCaracteristica("Sensei", 4);

    return {
        Nome: "Forest Law",
        Estilo: "Kung Fu",
        Escola: "Dojô da família",
        Jogador: "NPC",
        Assinatura: "Grita e contrai os músculos, como o pai",
        Conceito: "Herdeiro do dojô",
        Cronica: "Tekken 3",
        Forca: 5,
        Destreza: 6,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 1,
        Intimidacao: 2,
        Perspicacia: 3,
        Manha: 3,
        Labia: 3,
        LutaCega: 2,
        Conducao: 3,
        Lideranca: 1,
        Seguranca: 1,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 2,
        Computador: 1,
        Investigacao: 1,
        Medicina: 1,
        Misterios: 0,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 6,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 5,
        Foco: 3,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Power Uppercut, Throw, Flash Kick, Kick Defense, Punch Defense, Deflecting Punch, Brain Cracker, Knee Basher, Double Hit Punch, Double Hit Kick",
        Combos: "Double Hit Punch para Double Hit Punch para Fierce, Double Hit Kick para Double Hit Kick para Roundhouse, Bloqueio para Brain Cracker para Foot Sweep, Flash Kick para Flash Kick",
        Gloria: 5,
        Honra: 7,
        Chi: 7,
        ForcaVontade: 8,
        Saude: 18,
        Divisao: "Livre",
        Posto: 6
    };
}

let npc = ForestTk3();
npc = calcPC(npc);
