function JamieSF6() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Arena", 1);
    antecedentes[2] = newCaracteristica("Fama", 2);
    antecedentes[3] = newCaracteristica("Sensei", 3);

    const personagem = {
        Nome: "Jamie Siu",
        Estilo: "Kung Fu",
        Escola: "Professor Particular",
        Jogador: "NPC",
        Assinatura: "Longa trança",
        Conceito: "Herói",
        Cronica: "Street Fighter 6",
        Forca: 5,
        Destreza: 6,
        Vigor: 4,
        Carisma: 5,
        Manipulacao: 4,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 4,
        Intimidacao: 5,
        Perspicacia: 3,
        Manha: 3,
        Labia: 4,
        LutaCega: 3,
        Conducao: 3,
        Lideranca: 4,
        Seguranca: 2,
        Furtividade: 3,
        Sobrevivencia: 0,
        Arena: 3,
        Computador: 2,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 2,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 6,
        Apresamento: 2,
        Esportes: 5,
        Foco: 3,
        ManobrasEspeciais: "Jump, Kippup, Triple Strike, Foot Sweep, Spinning Foot Sweep, Backflip, Tumbling Attack, Senkju Tai, Knee Basher, Dive Kick, Monkey Grab Punch, Gekiro, Spinning Back Fist, Spinning Knuckle, Ax Kick, Musical Accompaniment",
        Combos: "Monkey Grab Punch para Senkju Tai (Dizzy); Tumbling Attack para Gekiro (Dizzy); Senkju Tai para Senkju Tai",
        Gloria: 7,
        Honra: 7,
        Chi: 6,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Livre",
        Posto: 7
    };
    return personagem;
}

let npc = JamieSF6();

npc = calcPC(npc);
