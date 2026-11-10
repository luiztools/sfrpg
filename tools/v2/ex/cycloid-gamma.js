function CycloidGammaEX() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Cibernético", 5);
    antecedentes[1] = newCaracteristica("Mascote", 2);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Cibernética", 3);

    return {
        Nome: "Cycloid Gamma",
        Estilo: "Jeet Kune Dô",
        Escola: "Nenhuma",
        Jogador: "NPC",
        Assinatura: "Corpo vazado",
        Conceito: "Experimento",
        Cronica: "Street Fighter EX",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 1,
        Aparencia: 0,
        Percepcao: 5,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 0,
        Intimidacao: 5,
        Perspicacia: 5,
        Manha: 3,
        Labia: 0,
        LutaCega: 4,
        Conducao: 0,
        Lideranca: 2,
        Seguranca: 4,
        Furtividade: 0,
        Sobrevivencia: 5,
        Arena: 0,
        Computador: 5,
        Investigacao: 0,
        Medicina: 5,
        Misterios: 4,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 5,
        Foco: 0,
        NovosConhecimentos: conhecimentos,
        ManobrasEspeciais: "Jump, Throw, Air Throw, Suplex, Air Suplex, Ax Kick, Head Butt, Flying Body Spear, Forward Slide Kick, Turn Punch, Flying Heel Stomp, Scissor Kick, Dive Kick",
        Combos: "Head Butt para Flying Body Spear (Dizzy); Scissor Kick para Forward Slide Kick (Dizzy); Ax Kick para Turn Punch (Dizzy)",
        Gloria: 3,
        Honra: 0,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 4
    };
}

const npc = calcPC(CycloidGammaEX());
