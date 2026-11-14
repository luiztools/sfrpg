function DuckKingFF() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Arena", 2);
    antecedentes[2] = newCaracteristica("Contatos", 2);
    antecedentes[3] = newCaracteristica("Fama", 2);
    antecedentes[4] = newCaracteristica("Mascote", 1);
    antecedentes[5] = newCaracteristica("Recursos", 1);

    const personagem = {
        Nome: "Duck King",
        Estilo: "Kickboxe",
        Escola: "As ruas",
        Jogador: "NPC",
        Assinatura: "Dança da vitória",
        Conceito: "Punk",
        Cronica: "Fatal Fury",
        Equipe: "Nenhuma",
        Time: "Fatal Fury Team",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 4,
        Prontidao: 1,
        Interrogacao: 2,
        Intimidacao: 0,
        Perspicacia: 2,
        Manha: 4,
        Labia: 3,
        LutaCega: 0,
        Conducao: 1,
        Lideranca: 2,
        Seguranca: 0,
        Furtividade: 2,
        Sobrevivencia: 1,
        Arena: 0,
        Computador: 1,
        Investigacao: 0,
        Medicina: 1,
        Misterios: 0,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 5,
        Bloqueio: 3,
        Apresamento: 4,
        Esportes: 5,
        Foco: 3,
        ManobrasEspeciais: "Jump, Kippup, Rolling Attack, Foot Sweep, Spinning Foot Sweep, Gekiro, Triple Strike, Flying Knee Thrust, Slide Kick, Throw, Musical Accompaniment, Flying Body Spear, Tumbling Attack",
        Combos: "Jab para Jab para Flying Body Spear (Dizzy); Tumbling Attack para Gekiro (Dizzy)",
        Gloria: 7,
        Honra: 3,
        Chi: 3,
        ForcaVontade: 8,
        Saude: 16,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = DuckKingFF();

npc = calcPC(npc);
