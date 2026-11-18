function MiguelTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 1);
    antecedentes[1] = newCaracteristica("Contatos", 2);
    antecedentes[2] = newCaracteristica("Recursos", 1);

    return {
        Nome: "Miguel Caballero Rojo",
        Estilo: "Kickboxe",
        Escola: "Nenhuma",
        Jogador: "NPC",
        Assinatura: "Bate no peito e grita \"¡Vamos!\"",
        Conceito: "Brigão vingativo",
        Cronica: "Tekken 6",
        Forca: 6,
        Destreza: 4,
        Vigor: 5,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 2,
        Intimidacao: 5,
        Perspicacia: 2,
        Manha: 4,
        Labia: 1,
        LutaCega: 1,
        Conducao: 2,
        Lideranca: 0,
        Seguranca: 1,
        Furtividade: 2,
        Sobrevivencia: 3,
        Arena: 2,
        Computador: 0,
        Investigacao: 2,
        Medicina: 1,
        Misterios: 0,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 3,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 4,
        Foco: 1,
        ManobrasEspeciais: "Jump, Kippup, Punch Defense, Haymaker, Power Uppercut, Dashing Punch, Turn Punch, Rekka Ken, Jumping Hammer Punch, Head Butt, Head Butt Grab Attack, Elbow Smash, Knee Basher, Eye Rake, Throw, Hyper Tackle",
        Combos: "Jab para Strong para Haymaker (Dizzy), Rekka Ken para Power Uppercut (Dizzy), Dashing Punch para Jumping Hammer Punch, Elbow Smash para Knee Basher, Head Butt para Haymaker (Dizzy)",
        Gloria: 4,
        Honra: 2,
        Chi: 2,
        ForcaVontade: 8,
        Saude: 19,
        Divisao: "Livre",
        Posto: 8
    };
}

let npc = MiguelTk4();
npc = calcPC(npc);
