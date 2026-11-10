function HokutoEX() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Arena", 2);
    antecedentes[2] = newCaracteristica("Recursos", 1);
    antecedentes[3] = newCaracteristica("Sensei", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Leque", 5);
    tecnicas[1] = newCaracteristica("Lança", 5);

    const armas = [];
    armas[0] = "Leque";
    armas[1] = "Naginata";

    return {
        Nome: "Hokuto",
        Estilo: "Karatê Shotokan (Bojutsu)",
        Escola: "Clã Mizukami",
        Equipe: "Clã Mizukami",
        Time: "Clã Mizukami",
        Jogador: "NPC",
        Assinatura: "Faixa na cabeça",
        Conceito: "Estudante",
        Cronica: "Street Fighter EX",
        Forca: 4,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 0,
        Intimidacao: 0,
        Perspicacia: 5,
        Manha: 2,
        Labia: 2,
        LutaCega: 5,
        Conducao: 0,
        Lideranca: 2,
        Seguranca: 0,
        Furtividade: 4,
        Sobrevivencia: 4,
        Arena: 1,
        Computador: 0,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 2,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 5,
        Foco: 5,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Wounded Knee, Foot Sweep, Slide Kick, Punch Defense, Deflecting Punch, Throw, Flying Tackle, Backflip, Lunging Punch, Jump, Fireball, Condensed Energy",
        Combos: "Wounded Knee para Slide Kick (Dizzy); Punch Defense para Lunging Punch (Dizzy)",
        Gloria: 5,
        Honra: 8,
        Chi: 7,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 7
    };
}

const npc = calcPC(HokutoEX());
