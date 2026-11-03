function WangKohSan() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Mascote", 1);

    const personagem = {
        Nome: "Wang Koh San",
        Estilo: "Forças Especiais",
        Escola: "Nenhuma",
        Jogador: "NPC",
        Assinatura: "Levanta o braço",
        Conceito: "Aviador",
        Cronica: "Art of Fighting 3",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 2,
        Percepcao: 5,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 1,
        Perspicacia: 3,
        Manha: 2,
        Labia: 2,
        LutaCega: 2,
        Conducao: 1,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 2,
        Sobrevivencia: 4,
        Arena: 1,
        Computador: 0,
        Investigacao: 1,
        Medicina: 2,
        Misterios: 2,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 3,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 4,
        Foco: 4,
        ManobrasEspeciais: "Jump, Foot Sweep, Sonic Boom, Air Smash, Head Butt, Double Hit Punch, Breakfall, Throw",
        Combos: "Movimento - Hundred Hand Slap - Hundred Hand Slap (Dizzy); Foot Sweep - Air Smash; Jab - Strong - Head Butt (Dizzy)",
        Gloria: 0,
        Honra: 0,
        Chi: 5,
        ForcaVontade: 9,
        Saude: 15,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = WangKohSan();

npc = calcPC(npc);
