function ElizaTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Elemental (Sangue)", 4);
    antecedentes[1] = newCaracteristica("Recursos", 2);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Linguística", 3);

    return {
        Nome: "Eliza",
        Estilo: "Jeet Kune Dô",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Boceja, entediada, e lança uma esfera de energia carmesim sem tirar os olhos do oponente",
        Conceito: "Princesa vampira milenar",
        Cronica: "Tekken 7",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 5,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 3,
        Interrogacao: 1,
        Intimidacao: 4,
        Perspicacia: 4,
        Manha: 0,
        Labia: 2,
        LutaCega: 4,
        Conducao: 0,
        Lideranca: 3,
        Seguranca: 0,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 1,
        Computador: 0,
        Investigacao: 1,
        Medicina: 1,
        Misterios: 5,
        Estilos: 3,
        Antecedentes: antecedentes,
        NovosConhecimentos: conhecimentos,
        Soco: 5,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 4,
        Foco: 6,
        ManobrasEspeciais: "Jump, Kippup, Throw, Air Throw, Foot Sweep, Slide Kick, Double Hit Kick, Power Uppercut, Fireball, Improved Fireball, Dragon Punch, Dive Kick, Ashura Senku, Drain, Dream Cancel",
        Combos: "Double Hit Kick para Improved Fireball, Slide Kick para Dragon Punch (Dizzy), Dive Kick para Double Hit Kick para Dragon Punch (Dizzy), Ashura Senku para Throw",
        Gloria: 3,
        Honra: 4,
        Chi: 9,
        ForcaVontade: 7,
        Saude: 18,
        Divisao: "Livre",
        Posto: 7
    };
}

let npc = ElizaTk4();
npc = calcPC(npc);
