function Hammer() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 2);
    antecedentes[1] = newCaracteristica("Fama", 5);

    const hammer = {
        Nome: "Hammer",
        Estilo: "Sumô",
        Escola: "Escola Sumotori Nagoya",
        Jogador: "NPC",
        Assinatura: "Se joga sobre o oponente",
        Conceito: "Encrenqueiro de bar",
        Equipe: "Excalibur Produções",
        Time: "Força Excessiva",
        Forca: 5,
        Destreza: 3,
        Vigor: 3,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 2,
        Percepcao: 2,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 2,
        Interrogacao: 1,
        Intimidacao: 3,
        Perspicacia: 1,
        LutaCega: 2,
        Conducao: 1,
        Arena: 3,
        Computador: 3,
        Investigacao: 1,
        Medicina: 2,
        Misterios: 1,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 3,
        Bloqueio: 3,
        Apresamento: 4,
        Esportes: 3,
        Foco: 2,
        ManobrasEspeciais: "Eye Rake, Stunning Shout, Sleeper, Haymaker, Widowmaker, Jump, Throw, Head Butt, Hundred Hand Slap, Double hit Kick, Knee Basher, Air Smash",
        Combos: "Eye Rake para Haymaker para Sleeper (Dizzy); Double Hit Kick para Stunning Shout para Air Smash (Dizzy)",
        Gloria: 4,
        Honra: 1,
        Chi: 3,
        ForcaVontade: 7,
        Saude: 13,
        Divisao: "Tradicional",
        Posto: 6
    };
    return hammer;
}

let npc = Hammer();

npc = calcPC(npc);