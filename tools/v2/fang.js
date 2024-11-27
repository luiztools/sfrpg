function Fang() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 3);
    antecedentes[1] = newCaracteristica("Fama", 3);
    antecedentes[2] = newCaracteristica("Recursos", 4);
    antecedentes[3] = newCaracteristica("Staff", 5);
    antecedentes[4] = newCaracteristica("Aliados", 3);
    antecedentes[5] = newCaracteristica("Apoio", 5);

    var npc =
    {
        Nome: "F.A.N.G",
        Estilo: "Kung Fu",
        Escola: "Nguuhao",
        Conceito: "Cientista assassino",
        Assinatura: "Dança histérica",
        Jogador: "NPC",
        Cronica: "Street Fighter 5",
        Equipe: "Shadaloo",
        Time: "Shadaloo",
        Forca: 4,
        Destreza: 5,
        Vigor: 5,
        Carisma: 2,
        Manipulacao: 5,
        Aparencia: 2,
        Percepcao: 5,
        Inteligencia: 6,
        Raciocinio: 6,
        Prontidao: 3,
        Intimidacao: 5,
        Perspicacia: 5,
        Labia: 5,
        LutaCega: 1,
        Lideranca: 2,
        Furtividade: 2,
        Sobrevivencia: 4,
        Arena: 3,
        Investigacao: 1,
        Medicina: 1,
        Misterios: 4,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 5,
        Foco: 5,
        Divisao: "Estilo Livre",
        Posto: 9,
        Gloria: 7,
        Honra: 0,
        Chi: 10,
        ForcaVontade: 7,
        Saude: 20,
        ManobrasEspeciais: "Jump, Foot Sweep, Back Roll Throw, Drunken Monkey Roll, Acid Breath, Power Up, Esquives, Ducking Fierce, Buffalo Punch, Dim Mak, Shishiruirui",
        Combos: "Strong para Strong; Jab para Strong; Roundhouse para Roundhouse; Forward para Foot Sweep; Short para Foot Sweep; Jump + Short para Short, Jump + Forward para Forward, Acid Breath para Acid Breath"
    };
    return calcPC(npc);
}

const npc = Fang();
