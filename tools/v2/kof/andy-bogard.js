function AndyFF() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Sensei", 2);
    antecedentes[2] = newCaracteristica("Recursos", 3);

    const personagem = {
        Nome: "Andy Bogard",
        Estilo: "Ninjitsu",
        Escola: "Dojô de Hanzo Shiranui / Tung Fu Rue",
        Jogador: "NPC",
        Assinatura: "Passa a mão nos cabelos",
        Conceito: "Tradicionalista",
        Cronica: "Fatal Fury",
        Equipe: "Fatal Fury Team",
        Time: "Fatal Fury Team",
        Forca: 4,
        Destreza: 6,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 4,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 5,
        Interrogacao: 0,
        Intimidacao: 2,
        Perspicacia: 5,
        Manha: 2,
        Labia: 1,
        LutaCega: 5,
        Conducao: 0,
        Lideranca: 2,
        Seguranca: 0,
        Furtividade: 4,
        Sobrevivencia: 3,
        Arena: 4,
        Computador: 0,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 3,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 6,
        Foco: 4,
        ManobrasEspeciais: "Flying Body Spear, Jump, Throw, Fireball, Energy Ball, Power Uppercut, Snake Strike, Foot Sweep, Handstand Kick, Hyper Tackle, Breakfall",
        Combos: "Hyper Tackle para Power Uppercut para Energy Ball (Dizzy); Short para Foot Sweep para Flying Body Spear; Jumping Forward para Strong para Snake Strike (Dizzy); Jumping Forward para Handstand Kick para Hyper Tackle",
        Gloria: 6,
        Honra: 8,
        Chi: 10,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Livre",
        Posto: 9
    };
    return personagem;
}

let npc = AndyFF();

npc = calcPC(npc);
