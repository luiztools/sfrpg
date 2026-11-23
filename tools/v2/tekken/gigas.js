function GigasTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 3);
    antecedentes[1] = newCaracteristica("Cibernético", 3);

    return {
        Nome: "Gigas",
        Estilo: "Wrestling",
        Escola: "Laboratórios da G Corporation",
        Jogador: "NPC",
        Equipe: "G Corporation",
        Time: "G Corporation",
        Assinatura: "Urra com o núcleo do peito brilhando e soca o chão",
        Conceito: "Arma biológica da G Corporation",
        Cronica: "Tekken 7",
        Forca: 7,
        Destreza: 3,
        Vigor: 8,
        Carisma: 1,
        Manipulacao: 1,
        Aparencia: 1,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 5,
        Perspicacia: 1,
        Manha: 0,
        Labia: 0,
        LutaCega: 2,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 1,
        Sobrevivencia: 3,
        Arena: 1,
        Computador: 0,
        Investigacao: 0,
        Medicina: 0,
        Misterios: 0,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 4,
        Foco: 1,
        ManobrasEspeciais: "Jump, Kippup, Throw, Face Slam, Power Bomb, Buffalo Punch, Haymaker, Power Uppercut, Jumping Hammer Punch, Dashing Punch, Bull Head, Spinning Back Fist, Head Butt, Fist Sweep, Knee Basher, Hyper Tackle, Air Smash, Toughskin, Stunning Shout",
        Combos: "Spinning Back Fist para Buffalo Punch (Dizzy), Head Butt para Power Uppercut, Hyper Tackle para Air Smash, Stunning Shout para Bull Head, Fist Sweep para Jumping Hammer Punch",
        Gloria: 4,
        Honra: 1,
        Chi: 2,
        ForcaVontade: 8,
        Saude: 18,
        Divisao: "Duelistas",
        Posto: 7
    };
}

let npc = GigasTk4();
npc = calcPC(npc);
