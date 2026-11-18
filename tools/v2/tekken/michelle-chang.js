function MichelleChangTk1() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Contatos", 1);
    antecedentes[2] = newCaracteristica("Recursos", 1);
    antecedentes[3] = newCaracteristica("Fama", 1);

    return {
        Nome: "Michelle Chang",
        Estilo: "Luta-Livre Nativo Americana",
        Escola: "Família Chang",
        Jogador: "NPC",
        Assinatura: "Aperta o pingente da mãe na mão e assume a guarda baixa do Baji Quan.",
        Conceito: "Caçadora",
        Cronica: "Tekken 2",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 1,
        Intimidacao: 1,
        Perspicacia: 3,
        Manha: 2,
        Labia: 1,
        LutaCega: 2,
        Conducao: 2,
        Lideranca: 1,
        Seguranca: 1,
        Furtividade: 3,
        Sobrevivencia: 4,
        Arena: 1,
        Computador: 1,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 3,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 4,
        Foco: 2,
        ManobrasEspeciais: "Power Uppercut, Elbow Smash, Hyper Tackle, Spinning Back Fist, Knee Basher, Foot Sweep, Double Hit Kick, Backflip Kick, Throw, Suplex, Back Roll Throw, Jump, Kippup",
        Combos: "Jab para Power Uppercut (Dizzy), Elbow Smash para Hyper Tackle, Double Hit Kick para Spinning Back Fist (Dizzy), Short para Foot Sweep",
        Gloria: 3,
        Honra: 5,
        Chi: 4,
        ForcaVontade: 6,
        Saude: 16,
        Divisao: "Livre",
        Posto: 4
    };
}

let npc;
npc = MichelleChangTk1();
npc = calcPC(npc);
