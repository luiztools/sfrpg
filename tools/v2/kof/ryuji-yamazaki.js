function YamazakiFF() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Fama", 1);
    antecedentes[1] = newCaracteristica("Recursos", 2);
    antecedentes[2] = newCaracteristica("Sangue de Orochi", 1);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Faca", 5);

    const armas = [];
    armas[0] = "Faca";

    const personagem = {
        Nome: "Ryuji Yamazaki",
        Estilo: "Kung Fu",
        Escola: "Professor Particular",
        Jogador: "NPC",
        Assinatura: "Golpeia o oponente inconsciente",
        Conceito: "Assassino",
        Cronica: "Fatal Fury 3",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 5,
        Destreza: 6,
        Vigor: 5,
        Carisma: 1,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 2,
        Intimidacao: 4,
        Perspicacia: 2,
        Manha: 5,
        Labia: 3,
        LutaCega: 4,
        Conducao: 3,
        Lideranca: 3,
        Seguranca: 5,
        Furtividade: 6,
        Sobrevivencia: 3,
        Arena: 2,
        Computador: 2,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 2,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 6,
        Esportes: 5,
        Foco: 4,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Kippup, Breakfall, Grappling Defense, Throw, Foot Sweep, Power Uppercut, Dragon Punch, Daikyou Burning, Rekka Ken, Wheel Kick, Head Butt, Face Slam, Brain Cracker, Flying Tackle, Pile Driver",
        Combos: "Short para Short para Power Uppercut (Dizzy); Rekka Ken para Rekka Ken para Rekka Ken; Power Uppercut para Flying Tackle para Brain Cracker",
        Gloria: 7,
        Honra: 1,
        Chi: 1,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 8
    };
    return personagem;
}

let npc = YamazakiFF();

npc = calcPC(npc);
