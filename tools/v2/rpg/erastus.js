function Erastus() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 3);
    antecedentes[1] = newCaracteristica("Recursos", 3);
    antecedentes[2] = newCaracteristica("Aliados", 3);
    antecedentes[3] = newCaracteristica("Staff", 4);
    antecedentes[4] = newCaracteristica("Arena", 2);

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 4);

    const erastus = {
        Nome: "Erastus",
        Estilo: "Pankration",
        Escola: "Exército Grego",
        Jogador: "NPC",
        Assinatura: "Olhar penetrante!",
        Conceito: "Mestre Ancião",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 6,
        Destreza: 2,
        Vigor: 5,
        Carisma: 2,
        Manipulacao: 3,
        Aparencia: 2,
        Percepcao: 4,
        Inteligencia: 5,
        Raciocinio: 3,
        Prontidao: 5,
        Interrogacao: 2,
        Intimidacao: 5,
        Perspicacia: 5,
        NovosTalentos: talentos,
        LutaCega: 4,
        Lideranca: 5,
        Furtividade: 3,
        Sobrevivencia: 5,
        NovasPericias: [],
        Arena: 5,
        Medicina: 4,
        Misterios: 3,
        Estilos: 5,
        NovosConhecimentos: [],
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 1,
        Bloqueio: 4,
        Apresamento: 6,
        Esportes: 2,
        Foco: 2,
        ManobrasEspeciais: "Head Butt, Back Breaker, Bear Hug, Pin, Improved Pin, Buffalo Punch, Fist Sweep, Maka Wara, Brain Cracker, Jump, Neck Choke, Stomach Pump, Suplex, Grappling Defense, Kick Defense, Throw, Toughskin",
        Combos: "Bloqueio para Back Breaker para Bear Hug (Dizzy);",
        Gloria: 7,
        Honra: 7,
        Chi: 4,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Tradicional",
        Posto: 0
    };
    return erastus;
}

let npc = Erastus();

npc = calcPC(npc);