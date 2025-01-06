function BobWilson() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 1);
    antecedentes[1] = newCaracteristica("Arena", 3);
    antecedentes[2] = newCaracteristica("Contatos", 3);
    antecedentes[3] = newCaracteristica("Recursos", 3);
    antecedentes[4] = newCaracteristica("Staff", 5);

    const personagem =
    {
        Nome: "Bob Wilson",
        Estilo: "Capoeira",
        Escola: "Richard Meyer",
        Conceito: "Lutador",
        Assinatura: "Sinal de Positivo ao vencer",
        Jogador: "NPC",
        Cronica: "Fatal Fury 3",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 2,
        Aparencia: 3,
        Percepcao: 2,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 3,
        Perspicacia: 1,
        Manha: 3,
        Labia: 1,
        LutaCega: 0,
        Conducao: 2,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 1,
        Computador: 0,
        Investigacao: 0,
        Medicina: 2,
        Misterios: 0,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 2,
        Chute: 5,
        Bloqueio: 3,
        Apresamento: 3,
        Esportes: 4,
        Foco: 2,
        Divisao: "Tradicional",
        Posto: 8,
        Gloria: 4,
        Honra: 3,
        Chi: 5,
        ForcaVontade: 7,
        Saude: 20,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Slide Kick, Flash Kick, Drunken Monkey Roll, Tumbling Attack, Breakfall, Backflip, Musical Accompaniment, Somersault Kick",
        Combos: "Jab para Short para Forward (Dizzy); Jump + Roundhouse para Flash Kick (dizzy); Short para Short; Tumbling Attack para Somersault Kick (Dizzy)"
    };
    return personagem;
}

let npc = BobWilson();

npc = calcPC(npc);