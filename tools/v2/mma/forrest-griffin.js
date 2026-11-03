function ForrestGriffin() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 1);
    antecedentes[1] = newCaracteristica("Arena", 3);
    antecedentes[2] = newCaracteristica("Fama", 2);
    antecedentes[3] = newCaracteristica("Recursos", 3);
    antecedentes[4] = newCaracteristica("Sensei", 5);

    const Forrest = {
        Nome: "Forrest Griffin",
        Estilo: "Vale-Tudo (Thai Kickboxe)",
        Escola: "Dojô Ibarra",
        Jogador: "NPC",
        Assinatura: "Ergue os braços",
        Conceito: "ex-Campeão do UFC",
        Equipe: "Gordon Produções",
        Time: "independente",
        Forca: 4,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 5,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 4,
        Interrogacao: 1,
        Intimidacao: 4,
        Perspicacia: 5,
        Manha: 1,
        LutaCega: 4,
        Conducao: 3,
        Lideranca: 5,
        Seguranca: 0,
        Furtividade: 2,
        Sobrevivencia: 3,
        Arena: 5,
        Medicina: 2,
        Misterios: 0,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 6,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 3,
        Foco: 1,
        ManobrasEspeciais: "Power Uppercut, Tiger Knee, Elbow Smash, Double Hit Kick, Double Hit Knee, Foot Sweep, Wounded Knee, Throw, Jump, Pin, Improved Pin",
        Combos: "Tiger Knee para Elbow Smash; Jump + Roundhouse para Double-Hit Kick (Dizzy); Jump + Roundhouse para Foot Sweep;",
        Gloria: 4,
        Honra: 7,
        Chi: 1,
        ForcaVontade: 10,
        Saude: 18,
        Divisao: "Tradicional",
        Posto: 7
    };
    return Forrest;
}

let npc = ForrestGriffin();

npc = calcPC(npc);