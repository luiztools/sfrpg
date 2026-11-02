function Tamude() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 2);
    antecedentes[1] = newCaracteristica("Arena", 2);
    antecedentes[2] = newCaracteristica("Fama", 1);
    antecedentes[3] = newCaracteristica("Recursos", 1);
    antecedentes[4] = newCaracteristica("Empresario", 2);

    const tamude = {
        Nome: "Tamude",
        Estilo: "Wrestling",
        Escola: "Ruas de Kowloon",
        Jogador: "NPC",
        Assinatura: "Levanta os braços em vitória",
        Conceito: "Campeão de Kowloon",
        Equipe: "Mandarin de Kowloon",
        Time: "Nenhum",
        Forca: 4,
        Destreza: 3,
        Vigor: 5,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 4,
        Interrogacao: 2,
        Intimidacao: 5,
        Perspicacia: 1,
        Manha: 3,
        Labia: 1,
        Conducao: 3,
        Lideranca: 2,
        Furtividade: 3,
        Sobrevivencia: 5,
        Arena: 3,
        Medicina: 2,
        Misterios: 1,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 3,
        Bloqueio: 2,
        Apresamento: 3,
        Esportes: 2,
        ManobrasEspeciais: "Ear Pop, Kick Defense, Double-Hit Kick, Foot Sweep, Buffalo Punch, Bear Hug, Stomach Pump, Kippup, Jump, Throw, Suplex, Punch Defense",
        Combos: "Jump + Strong para Foot Sweep",
        Gloria: 4,
        Honra: 2,
        Chi: 1,
        ForcaVontade: 6,
        Saude: 12,
        Divisao: "Tradicional",
        Posto: 4
    };
    return tamude;
}

let npc = Tamude();

npc = calcPC(npc);