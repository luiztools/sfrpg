function Machida() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 4);
    antecedentes[1] = newCaracteristica("Fama", 2);
    antecedentes[2] = newCaracteristica("Sensei", 5);
    antecedentes[3] = newCaracteristica("Recursos", 3);

    const machida = {
        Nome: "Lyoto 'Dragão' Machida",
        Estilo: "Vale-Tudo (Shotokan)",
        Escola: "Dojô Machida",
        Jogador: "NPC",
        Assinatura: "Invicto!",
        Conceito: "Ex-lutador profissional",
        Equipe: "Black House",
        Time: "Nenhum",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 4,
        Intimidacao: 4,
        Perspicacia: 4,
        Manha: 4,
        Labia: 2,
        LutaCega: 4,
        Conducao: 4,
        Lideranca: 2,
        Seguranca: 2,
        Furtividade: 3,
        Sobrevivencia: 3,
        Arena: 4,
        Computador: 2,
        Investigacao: 1,
        Medicina: 2,
        Misterios: 1,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 3,
        Apresamento: 4,
        Esportes: 3,
        Foco: 3,
        ManobrasEspeciais: "Power Uppercut, Foot Sweep, Back Roll Throw, Fireball, Throw, Jump, Kippup, Pin, Elbow Smash, Double Hit Kick, Brain Cracker",
        Combos: "Double Hit Kick para Foot Sweep; Jab para Fireball (Dizzy); Short para Short para Short (Dizzy); Elbow Smash para Power Uppercut;",
        Gloria: 6,
        Honra: 6,
        Chi: 4,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 8
    };
    return machida;
}

let npc = Machida();

npc = calcPC(npc);