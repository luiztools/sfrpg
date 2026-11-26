function AganosKI() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Elemental (Terra)", 5);

    const ficha = {
        Nome: "Aganos",
        Estilo: "Pankration",
        Escola: "Artesãos de Micenas",
        Jogador: "NPC",
        Assinatura: "Bate os punhos de pedra no chão",
        Conceito: "Golem de guerra",
        Cronica: "Killer Instinct",
        Forca: 9,
        Destreza: 3,
        Vigor: 9,
        Carisma: 1,
        Manipulacao: 1,
        Aparencia: 0,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 0,
        Intimidacao: 5,
        Perspicacia: 2,
        Manha: 0,
        Labia: 0,
        LutaCega: 3,
        Conducao: 0,
        Lideranca: 1,
        Seguranca: 2,
        Furtividade: 0,
        Sobrevivencia: 4,
        Arena: 2,
        Computador: 0,
        Investigacao: 1,
        Medicina: 0,
        Misterios: 3,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 3,
        Bloqueio: 6,
        Apresamento: 5,
        Esportes: 4,
        Foco: 5,
        ManobrasEspeciais: "Jump, Throw, Dashing Punch, Brain Cracker, Shockwave, Bear Hug, Head Butt, Maka Wara, Sense Element, Stone, Wall, Elemental Skin, Heal",
        Combos: "Dashing Punch para Brain Cracker (Dizzy); Stone para Dashing Punch; Jab para Bear Hug",
        Gloria: 3,
        Honra: 6,
        Chi: 6,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return ficha;
}

const npc = calcPC(AganosKI());
