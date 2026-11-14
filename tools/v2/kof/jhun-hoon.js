function JhunHoon() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Recursos", 3);

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 3);

    const personagem = {
        Nome: "Jhun Hoon",
        Estilo: "Tae Kwon Dô",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Pose",
        Conceito: "Lutador da justiça",
        Cronica: "The King of Fighters",
        Equipe: "Nenhuma",
        Time: "Korea Justice",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 2,
        Interrogacao: 0,
        Intimidacao: 4,
        Perspicacia: 5,
        Manha: 2,
        Labia: 3,
        LutaCega: 4,
        Conducao: 0,
        Lideranca: 2,
        Seguranca: 0,
        Furtividade: 4,
        Sobrevivencia: 3,
        Arena: 4,
        Computador: 2,
        Investigacao: 2,
        Medicina: 0,
        Misterios: 2,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 7,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 6,
        Foco: 5,
        NovosTalentos: talentos,
        ManobrasEspeciais: "Jump, Throw, Kippup, Double Hit Kick, Foot Sweep, Sonic Scythe, Flash Kick, Wheel Kick, Kick Defense, Lightning Leg, Flying Heel Stomp, Multiple Stomp, Flying Thrust Kick, Slide Kick",
        Combos: "Short para Flash Kick para Lightning Leg (Dizzy); Slide Kick para Flying Thrust Kick; Short para Forward para Roundhouse; Foot Sweep para Sonic Scythe",
        Gloria: 8,
        Honra: 5,
        Chi: 5,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = JhunHoon();

npc = calcPC(npc);
