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

    const npc = {
        Nome: "Drake",
        Estilo: "Wrestling",
        Escola: "Professor Particular",
        Jogador: "NPC",
        Assinatura: "Gira Corrente",
        Conceito: "Marinheiro",
        Cronica: "Final Fight 3",
        Equipe: "Skull Cross",
        Time: "Skull Cross",
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
        Manha: 3,
        Labia: 3,
        LutaCega: 3,
        Conducao: 4,
        Lideranca: 0,
        Seguranca: 3,
        Furtividade: 3,
        Sobrevivencia: 4,
        NovasPericias: pericias,
        Arena: 2,
        Computador: 0,
        Investigacao: 3,
        Medicina: 0,
        Misterios: 3,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 0,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 3,
        Foco: 0,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Jumping Shoulder Butt, Head Butt, Shockwave, Ear Pop, Buffalo Punch, Bull Head, Air Smash, Neck Choke, Grappling Defense, Punch Defense, Kick Defense",
        Combos: "Bloqueio para Neck Choke; Jump para Air Smash; Bloqueio para Shockwave",
        Gloria: 5,
        Honra: 3,
        Chi: 1,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 8
    };
    return npc;
}

const npc = calcPC(Drake());