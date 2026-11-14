function BigBearFF() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Apoio", 3);
    antecedentes[2] = newCaracteristica("Recursos", 1);
    antecedentes[3] = newCaracteristica("Fama", 2);

    const personagem = {
        Nome: "Raiden / Big Bear",
        Estilo: "Wrestling",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Grito de vitória",
        Conceito: "Lutador profissional",
        Cronica: "Fatal Fury",
        Equipe: "Howard Connection",
        Time: "Korea Justice",
        Forca: 6,
        Destreza: 3,
        Vigor: 6,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 3,
        Percepcao: 2,
        Inteligencia: 2,
        Raciocinio: 3,
        Prontidao: 2,
        Interrogacao: 0,
        Intimidacao: 5,
        Perspicacia: 1,
        Manha: 2,
        Labia: 1,
        LutaCega: 0,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 0,
        Sobrevivencia: 3,
        Arena: 0,
        Computador: 0,
        Investigacao: 0,
        Medicina: 1,
        Misterios: 1,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 6,
        Esportes: 3,
        Foco: 3,
        ManobrasEspeciais: "Jump, Foot Sweep, Throw, Back Breaker, Neck Choke, Dashing Clothesline, Acid Breath, Air Suplex, Face Slam, Air Smash, Pile Driver, Buffalo Punch, Turn Punch, Bear Hug",
        Combos: "Neck Choke para Pile Driver (Dizzy); Strong para Strong para Buffalo Punch; Bloqueio para Bear Hug (Dizzy)",
        Gloria: 5,
        Honra: 5,
        Chi: 4,
        ForcaVontade: 7,
        Saude: 18,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = BigBearFF();

npc = calcPC(npc);
