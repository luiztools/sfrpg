function SteveTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Contatos", 4);
    antecedentes[2] = newCaracteristica("Fama", 1);
    antecedentes[3] = newCaracteristica("Recursos", 3);
    antecedentes[4] = newCaracteristica("Staff", 5);

    return {
        Nome: "Steve Fox",
        Estilo: "Boxe",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Tensiona os músculos",
        Conceito: "Lutador em busca da fama",
        Cronica: "Tekken 4",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 3,
        Intimidacao: 3,
        Perspicacia: 3,
        Manha: 3,
        Labia: 3,
        LutaCega: 3,
        Conducao: 3,
        Lideranca: 1,
        Seguranca: 4,
        Furtividade: 4,
        Sobrevivencia: 4,
        Arena: 3,
        Computador: 1,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 0,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 2,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 4,
        Foco: 3,
        ManobrasEspeciais: "Jump, Kippup, Power Uppercut, Double Hit Punch, Spinning Back Fist, Dashing Punch, Turn Punch, Ducking Fierce, Buffalo Punch, Head Butt, Elbow Smash, Foot Sweep, Throw, Brain Cracker, Head Butt Grab Attack, Psychokinetic Channeling, Hyper Tackle",
        Combos: "Double Hit Punch para Double Hit Punch para Dashing Punch, Bloqueio para Head Butt Grab Attack para Foot Sweep, Ducking Fierce para Double Hit Punch para Buffalo Punch, Movimento para Hyper Tackle para Turn Punch",
        Gloria: 2,
        Honra: 6,
        Chi: 3,
        ForcaVontade: 7,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
}

let npc = SteveTk4();
npc = calcPC(npc);
