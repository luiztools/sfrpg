function RichardMeyer() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 1);
    antecedentes[1] = newCaracteristica("Arena", 3);
    antecedentes[2] = newCaracteristica("Contatos", 3);
    antecedentes[3] = newCaracteristica("Recursos", 3);
    antecedentes[4] = newCaracteristica("Staff", 5);

    const personagem =
    {
        Nome: "Richard Meyer",
        Estilo: "Capoeira",
        Escola: "Professor particular",
        Conceito: "Dono de bar",
        Assinatura: "Gargalhada",
        Jogador: "NPC",
        Cronica: "Fatal Fury",
        Forca: 5,
        Destreza: 4,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 2,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 3,
        Perspicacia: 1,
        Manha: 3,
        Labia: 1,
        LutaCega: 0,
        Conducao: 2,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 1,
        Computador: 0,
        Investigacao: 0,
        Medicina: 2,
        Misterios: 0,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 4,
        Foco: 1,
        Divisao: "Tradicional",
        Posto: 7,
        Gloria: 4,
        Honra: 3,
        Chi: 2,
        ForcaVontade: 6,
        Saude: 15,
        ManobrasEspeciais: "Jump, Breakfall, Handstand Kick, Foot Sweep, Throw, Ax Kick, Musical Accompaniment, Wall Spring",
        Combos: "Handstand Kick para Handstand Kick para Handstand Kick (Dizzy);"
    };
    return personagem;
}

let npc = RichardMeyer();

npc = calcPC(npc);