function NanaseEX() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Arena", 2);
    antecedentes[2] = newCaracteristica("Recursos", 1);
    antecedentes[3] = newCaracteristica("Sensei", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Bastão", 5);

    const armas = [];
    armas[0] = "Bo";

    return {
        Nome: "Nanase",
        Estilo: "Karatê Shotokan (Bojutsu)",
        Escola: "Clã Mizukami",
        Equipe: "Clã Mizukami",
        Time: "Clã Mizukami",
        Jogador: "NPC",
        Assinatura: "Gira o bastão",
        Conceito: "Adolescente",
        Cronica: "Street Fighter EX",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 2,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 0,
        Perspicacia: 2,
        Manha: 0,
        Labia: 2,
        LutaCega: 3,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 5,
        Sobrevivencia: 3,
        Arena: 1,
        Computador: 0,
        Investigacao: 1,
        Medicina: 2,
        Misterios: 2,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 5,
        Foco: 2,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Foot Sweep, Slide Kick, Punch Defense, Deflecting Punch, Throw, Jump, Lunging Punch",
        Combos: "Bo Jab para Bo Strong para Bo Strong (Dizzy); Bo Fierce para Bo Strong para Bo Strong (Dizzy); Lunging Punch para Slide Kick",
        Gloria: 4,
        Honra: 6,
        Chi: 5,
        ForcaVontade: 7,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 6
    };
}

const npc = calcPC(NanaseEX());
