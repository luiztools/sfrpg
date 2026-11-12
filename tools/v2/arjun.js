function ArjunSF6() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Elemental (Ar)", 3);
    antecedentes[2] = newCaracteristica("Elemental (Terra)", 3);
    antecedentes[3] = newCaracteristica("Arena", 2);
    antecedentes[4] = newCaracteristica("Contatos", 4);
    antecedentes[5] = newCaracteristica("Recursos", 1);

    const personagem = {
        Nome: "Arjun",
        Estilo: "Kalaripayt",
        Escola: "Yoga de Combate",
        Jogador: "NPC",
        Assinatura: "Sopro elemental",
        Conceito: "Ex-policial",
        Cronica: "Street Fighter 6",
        Forca: 6,
        Destreza: 4,
        Vigor: 6,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 4,
        Intimidacao: 5,
        Perspicacia: 3,
        Manha: 4,
        Labia: 3,
        LutaCega: 1,
        Conducao: 3,
        Lideranca: 3,
        Seguranca: 2,
        Furtividade: 1,
        Sobrevivencia: 1,
        Arena: 2,
        Computador: 1,
        Investigacao: 4,
        Medicina: 3,
        Misterios: 3,
        Estilos: 0,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 4,
        Foco: 5,
        ManobrasEspeciais: "Jump, Fist Sweep, Buffalo Punch, Haymaker, Widowmaker, Face Slam, Choke Throw, Back Breaker, Head Butt, Hyper Tackle, Toughskin, Air Blast, Push, Wall, Stone",
        Combos: "Jab para Fierce para Hyper Tackle (Dizzy); Air Blast para Hyper Tackle (Dizzy)",
        Gloria: 5,
        Honra: 6,
        Chi: 7,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Livre",
        Posto: 5
    };
    return personagem;
}

let npc = ArjunSF6();

npc = calcPC(npc);
