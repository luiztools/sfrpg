function ChengFF() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Elemental (Terra)", 3);
    antecedentes[1] = newCaracteristica("Recursos", 5);
    antecedentes[2] = newCaracteristica("Fama", 2);
    antecedentes[3] = newCaracteristica("Staff", 3);

    const personagem = {
        Nome: "Cheng Sinzan",
        Estilo: "Kung Fu",
        Escola: "Tung Fu Rue",
        Jogador: "NPC",
        Assinatura: "Mexe nos óculos",
        Conceito: "Empresário",
        Cronica: "Fatal Fury 2",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 5,
        Destreza: 3,
        Vigor: 6,
        Carisma: 2,
        Manipulacao: 4,
        Aparencia: 2,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 2,
        Interrogacao: 3,
        Intimidacao: 3,
        Perspicacia: 4,
        Manha: 2,
        Labia: 1,
        LutaCega: 0,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 3,
        Furtividade: 2,
        Sobrevivencia: 3,
        Arena: 0,
        Computador: 0,
        Investigacao: 0,
        Medicina: 2,
        Misterios: 2,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 5,
        Foco: 5,
        ManobrasEspeciais: "Jump, Air Smash, Psychokinetic Channeling, San He, Energy Ball, Slide Kick, Ground Fighting, Head Butt Hold, Head Butt, Drunken Monkey Roll, Wall, Stone, Rolling Attack, Tumbling Attack",
        Combos: "Jab para Short; Forward para Energy Ball; Drunken Monkey Roll para Head Butt Hold (Dizzy)",
        Gloria: 5,
        Honra: 4,
        Chi: 8,
        ForcaVontade: 6,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = ChengFF();

npc = calcPC(npc);
