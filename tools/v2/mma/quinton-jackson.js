function QuintonJackson() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Staff", 3);
    antecedentes[1] = newCaracteristica("Arena", 4);
    antecedentes[2] = newCaracteristica("Fama", 3);
    antecedentes[3] = newCaracteristica("Recursos", 4);
    antecedentes[4] = newCaracteristica("Sensei", 4);
    antecedentes[5] = newCaracteristica("Empres&aacute;rio", 3);

    const Quinton = {
        Nome: "Quinton Jackson",
        Estilo: "Vale-Tudo (Boxe)",
        Escola: "Dojô Ibarra",
        Jogador: "NPC",
        Assinatura: "Urra em vitória!",
        Conceito: "ex-Campeão do UFC",
        Equipe: "Gordon Produções",
        Time: "independente",
        Forca: 5,
        Destreza: 3,
        Vigor: 6,
        Carisma: 1,
        Manipulacao: 3,
        Aparencia: 1,
        Percepcao: 2,
        Inteligencia: 2,
        Raciocinio: 2,
        Prontidao: 2,
        Interrogacao: 1,
        Intimidacao: 5,
        Perspicacia: 1,
        Manha: 3,
        Labia: 3,
        LutaCega: 2,
        Conducao: 4,
        Lideranca: 1,
        Seguranca: 0,
        Furtividade: 0,
        Sobrevivencia: 1,
        Arena: 4,
        Medicina: 1,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 1,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 2,
        Foco: 0,
        ManobrasEspeciais: "Pile Driver, Dashing Punch, Turn Punch, Power Uppercut, Punch Defense, Jump, Buffalo Punch, Brain Cracker, Stomach Pump",
        Combos: "Jab para Strong para Fierce (Dizzy); Jump + Fierce para Jab para Dashing Punch;",
        Gloria: 6,
        Honra: 4,
        Chi: 1,
        ForcaVontade: 10,
        Saude: 15,
        Divisao: "Tradicional",
        Posto: 6
    };
    return Quinton;
}

let npc = QuintonJackson();

npc = calcPC(npc);