function NickFontana() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Sensei", 4);
    antecedentes[1] = newCaracteristica("Aliados", 3);

    const nick = {
        Nome: "Nick Fontana",
        Estilo: "Karatê Shotokan",
        Escola: "Academia de Seattle",
        Jogador: "NPC",
        Assinatura: "Toca sua guitarra",
        Conceito: "Moleque de Rua",
        Equipe: "Excalibus Produções",
        Time: "Nenhum",
        Forca: 4,
        Destreza: 4,
        Vigor: 3,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 2,
        Percepcao: 2,
        Inteligencia: 1,
        Raciocinio: 3,
        Prontidao: 2,
        Intimidacao: 1,
        Perspicacia: 1,
        Manha: 4,
        Labia: 1,
        LutaCega: 2,
        Conducao: 1,
        Lideranca: 1,
        Seguranca: 2,
        Furtividade: 1,
        Arena: 1,
        Misterios: 1,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 2,
        Bloqueio: 1,
        Esportes: 2,
        Foco: 3,
        ManobrasEspeciais: "Power Uppercut, Dragon Punch, Jump, Foot Sweep, Fireball",
        Combos: "Jab para Dragon Punch (Dizzy); JUmp + Short para Foot Sweep (Dizzy)",
        Gloria: 2,
        Honra: 2,
        Chi: 4,
        ForcaVontade: 4,
        Divisao: "Estilo Livre",
        Posto: 3
    };
    return nick;
}

let npc = NickFontana();

npc = calcPC(npc);