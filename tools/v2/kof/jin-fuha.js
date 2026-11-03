function JinFuha() {
    const antecedentes = [];

    const personagem = {
        Nome: "Jin Fuha",
        Estilo: "Ninjitsu",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Levanta o braço",
        Conceito: "Ronin",
        Cronica: "Art of Fighting 3",
        Forca: 6,
        Destreza: 3,
        Vigor: 6,
        Carisma: 2,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 2,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 1,
        Intimidacao: 3,
        Perspicacia: 2,
        Manha: 2,
        Labia: 1,
        LutaCega: 3,
        Conducao: 0,
        Lideranca: 1,
        Seguranca: 3,
        Furtividade: 5,
        Sobrevivencia: 3,
        Arena: 1,
        Computador: 0,
        Investigacao: 1,
        Medicina: 1,
        Misterios: 3,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 3,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 3,
        Foco: 4,
        ManobrasEspeciais: "Jump, Throw, Head Butt, Spinning Clothesline, Shrouded Moon, Boshi Ken, Shikan Ken, Wall Spring, Breakfall",
        Combos: "Strong - Boshi Ken - Spinning Clothesline (Dizzy); Jab - Jab - Jab (Dizzy)",
        Gloria: 0,
        Honra: 0,
        Chi: 5,
        ForcaVontade: 7,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = JinFuha();

npc = calcPC(npc);
