function XiaoyuTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Contatos", 2);
    antecedentes[2] = newCaracteristica("Fama", 1);
    antecedentes[3] = newCaracteristica("Recursos", 2);
    antecedentes[4] = newCaracteristica("Mascote", 5);
    antecedentes[5] = newCaracteristica("Sensei", 3);

    return {
        Nome: "Ling Xiaoyu",
        Estilo: "Wu Shu",
        Escola: "Acrobacia Chinesa",
        Jogador: "NPC",
        Assinatura: "Faz um kata",
        Conceito: "Estudante",
        Cronica: "Tekken 4",
        Forca: 4,
        Destreza: 7,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 4,
        Aparencia: 5,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 1,
        Intimidacao: 2,
        Perspicacia: 2,
        Manha: 3,
        Labia: 3,
        LutaCega: 3,
        Conducao: 1,
        Lideranca: 2,
        Seguranca: 2,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 3,
        Computador: 2,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 3,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 6,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 6,
        Foco: 3,
        ManobrasEspeciais: "Double Hit Punch, Ducking Fierce, Monkey Grab Punch, Triple Strike, Foot Sweep, Spinning Foot Sweep, Double Hit Kick, Handstand Kick, Backflip Kick, Forward Flip Knee, Cartwheel Kick, Jump, Kippup, Flying Heel Stomp, Wall Spring, Drunken Monkey Roll, Air Throw, Throw, Take Down, Psychokinetic Channeling",
        Combos: "Double Hit Punch para Double Hit Punch para Ducking Fierce, Double Hit Punch para Double Hit Punch para Triple Strike, Double Hit Punch para Cartwheel Kick para Backflip Kick, Bloqueio para Take Down para Foot Sweep, Movimento para Forward Flip Knee",
        Gloria: 6,
        Honra: 6,
        Chi: 6,
        ForcaVontade: 8,
        Saude: 18,
        Divisao: "Livre",
        Posto: 8
    };
}

let npc = XiaoyuTk4();
npc = calcPC(npc);
