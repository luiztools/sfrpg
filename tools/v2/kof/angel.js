function Angel() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Apoio", 5);

    const pericias = [];
    pericias[0] = newCaracteristica("Disfarce", 2);

    const personagem = {
        Nome: "Angel",
        Estilo: "Pankration",
        Escola: "Autodidata",
        Jogador: "NPC",
        Assinatura: "Roupas extravagantes",
        Conceito: "Agente secreta",
        Cronica: "The King of Fighters",
        Equipe: "NESTS",
        Time: "NESTS Team",
        Forca: 6,
        Destreza: 6,
        Vigor: 6,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 5,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 3,
        Perspicacia: 3,
        Manha: 2,
        Labia: 1,
        LutaCega: 2,
        Conducao: 4,
        Lideranca: 0,
        Seguranca: 3,
        Furtividade: 2,
        Sobrevivencia: 0,
        Arena: 3,
        Computador: 1,
        Investigacao: 3,
        Medicina: 0,
        Misterios: 0,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 4,
        Foco: 0,
        NovasPericias: pericias,
        ManobrasEspeciais: "Jump, Throw, Breakfall, Kippup, Foot Sweep, Spinning Foot Sweep, Power Uppercut, Air Smash, Empty Step, Flying Knee Thrust, Forward Backflip Kick, Buffalo Punch, Wounded Knee",
        Combos: "Forward para Jumping Roundhouse (Dizzy); Short para Short para Short (Dizzy); Empty Step para Fierce",
        Gloria: 5,
        Honra: 4,
        Chi: 1,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = Angel();

npc = calcPC(npc);
