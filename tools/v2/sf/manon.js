function ManonSF6() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Arena", 1);
    antecedentes[2] = newCaracteristica("Fama", 1);
    antecedentes[3] = newCaracteristica("Recursos", 3);

    const personagem = {
        Nome: "Manon Legrand",
        Estilo: "Jiu Jitsu",
        Escola: "Professor Particular",
        Jogador: "NPC",
        Assinatura: "Desfila",
        Conceito: "Supermodelo",
        Cronica: "Street Fighter 6",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 6,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 2,
        Interrogacao: 2,
        Intimidacao: 1,
        Perspicacia: 3,
        Manha: 2,
        Labia: 5,
        LutaCega: 1,
        Conducao: 2,
        Lideranca: 2,
        Seguranca: 2,
        Furtividade: 3,
        Sobrevivencia: 0,
        Arena: 3,
        Computador: 2,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 1,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 6,
        Bloqueio: 4,
        Apresamento: 5,
        Esportes: 5,
        Foco: 2,
        ManobrasEspeciais: "Jump, Foot Sweep, Throw, Suplex, Breakfall, Slide Kick, Handstand Kick, Spinning Foot Sweep, Cartwheel Kick, Back Breaker, Gekiro, Spinning Back Fist, Spinning Knuckle, Musical Accompaniment",
        Combos: "Foot Sweep para Back Breaker; Handstand Kick para Gekiro (Dizzy); Jumping Forward para Strong para Back Breaker (Dizzy)",
        Gloria: 6,
        Honra: 7,
        Chi: 5,
        ForcaVontade: 7,
        Saude: 20,
        Divisao: "Livre",
        Posto: 6
    };
    return personagem;
}

let npc = ManonSF6();

npc = calcPC(npc);
