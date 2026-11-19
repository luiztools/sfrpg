function GonTk3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Híbrido Animal", 5);

    return {
        Nome: "Gon",
        Estilo: "Wrestling",
        Escola: "Nenhuma",
        Jogador: "NPC",
        Assinatura: "Bate no peito e ruge, soltando uma baforada de fumaça",
        Conceito: "Dinossauro filhote",
        Cronica: "Tekken 3",
        Forca: 4,
        Destreza: 4,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 1,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 4,
        Interrogacao: 0,
        Intimidacao: 2,
        Perspicacia: 2,
        Manha: 0,
        Labia: 0,
        LutaCega: 2,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 4,
        Sobrevivencia: 5,
        Arena: 1,
        Computador: 0,
        Investigacao: 1,
        Medicina: 0,
        Misterios: 1,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 1,
        Chute: 2,
        Bloqueio: 1,
        Apresamento: 4,
        Esportes: 4,
        Foco: 3,
        ManobrasEspeciais: "Jump, Kippup, Throw, Head Butt, Slide Kick, Pounce, Hyper Tackle, Upper Tail Strike, Tail Sweep, Fireball, Energy Ball, Tearing Bite, Ripping Bite, Bite, Tail Slash",
        Combos: "Pounce para Tearing Bite, Upper Tail Strike para Fireball",
        Gloria: 2,
        Honra: 3,
        Chi: 2,
        ForcaVontade: 3,
        Saude: 14,
        Divisao: "Livre",
        Posto: 5
    };
}

let npc = GonTk3();
npc = calcPC(npc);
