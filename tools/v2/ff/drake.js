function Drake() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Arena", 2);
    antecedentes[2] = newCaracteristica("Apoio", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Chicote", 4);

    const pericias = [];
    pericias[0] = newCaracteristica("Reparos", 4);

    const armas = ["Kusari"];

    const npc =
    {
        Nome: "Drake",
        Estilo: "Luta-Livre",
        Conceito: "Marinheiro",
        Escola: "Professor Particular",
        Time: "Skull Cross",
        Equipe: "Skull Cross",
        Assinatura: "Gira Corrente",
        Jogador: "NPC",
        Cronica: "Final Fight 3",
        Forca: 5,
        Destreza: 4,
        Vigor: 5,
        Carisma: 5,
        Manipulacao: 2,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 4,
        Prontidao: 5,
        Interrogacao: 0,
        Intimidacao: 5,
        Perspicacia: 0,
        Labia: 3,
        Manha: 3,
        LutaCega: 3,
        Lideranca: 0,
        Conducao: 4,
        Seguranca: 3,
        Furtividade: 3,
        Sobrevivencia: 4,
        Arena: 2,
        Computador: 0,
        Investigacao: 3,
        Medicina: 0,
        Misterios: 3,
        Estilos: 2,
        Antecedentes: antecedentes,
        NovasTecnicas: tecnicas,
        NovasPericias: pericias,
        Armas: armas,
        Soco: 4,
        Chute: 0,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 3,
        Foco: 0,
        Divisao: "Estilo Livre",
        Posto: 8,
        Gloria: 5,
        Honra: 3,
        Chi: 1,
        ForcaVontade: 10,
        Saude: 20,
        ManobrasEspeciais: "Jump, Jumping Shoulder Butt, Head Butt, Shockwave, Ear Pop, Buffalo Punch, Bull Head, Air Smash, Neck Choke, Grappling Defense, Punch Defense, Kick Defense",
        Combos: "Bloqueio para Neck Choke; Jump para Air Smash; Bloqueio para Shockwave",
    };
    return npc;
}

const npc = calcPC(Drake());