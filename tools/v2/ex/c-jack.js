function CrackerJackEX() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 3);
    antecedentes[1] = newCaracteristica("Recursos", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Bastão", 5);

    const armas = [];
    armas[0] = "Bastão Curto";

    return {
        Nome: "Cracker Jack",
        Estilo: "Kickboxe (Bojutsu)",
        Escola: "Autodidata",
        Jogador: "NPC",
        Assinatura: "Costeletas",
        Conceito: "Ex-criminoso",
        Cronica: "Street Fighter EX",
        Forca: 6,
        Destreza: 3,
        Vigor: 6,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 5,
        Intimidacao: 5,
        Perspicacia: 0,
        Manha: 4,
        Labia: 4,
        LutaCega: 0,
        Conducao: 3,
        Lideranca: 4,
        Seguranca: 3,
        Furtividade: 2,
        Sobrevivencia: 1,
        Arena: 2,
        Computador: 0,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 0,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 2,
        Foco: 2,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Power Uppercut, Foot Sweep, Brain Cracker, Throw, Dashing Punch, Dashing Uppercut, Turn Punch, Soccer Kick, Jump",
        Combos: "Power Uppercut para Dashing Punch (Dizzy); Soccer Kick para Turn Punch (Dizzy); Short para Soccer Kick",
        Gloria: 7,
        Honra: 2,
        Chi: 5,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 7
    };
}

const npc = calcPC(CrackerJackEX());
