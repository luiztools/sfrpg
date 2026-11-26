function BlackOrchidKI() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Apoio", 5);
    antecedentes[2] = newCaracteristica("Arena", 2);
    antecedentes[3] = newCaracteristica("Contatos", 5);
    antecedentes[4] = newCaracteristica("Staff", 4);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Bastão", 5);

    const armas = ["Tonfa de Ferro"];

    const blackorchid = {
        Nome: "Black Orchid",
        Estilo: "Forças Especiais (Bojutsu)",
        Escola: "Governo dos EUA",
        Jogador: "NPC",
        Assinatura: "Estilo sedutor",
        Conceito: "Agente Especial",
        Cronica: "Killer Instinct",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 5,
        Manipulacao: 5,
        Aparencia: 6,
        Percepcao: 5,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 5,
        Intimidacao: 3,
        Perspicacia: 5,
        Manha: 5,
        Labia: 5,
        LutaCega: 3,
        Conducao: 4,
        Lideranca: 4,
        Seguranca: 5,
        Furtividade: 5,
        Sobrevivencia: 4,
        Arena: 5,
        Computador: 4,
        Investigacao: 5,
        Medicina: 2,
        Misterios: 1,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 6,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 5,
        Foco: 5,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Handstand Kick, Backflip Kick, Wheel Kick, Tiger Attack, Sonic Boom, Spinning Clothesline, Double Hit Kick, Foot Sweep",
        Combos: "Tiger Attack para Double Hit Kick para Spinning Clothesline (Dizzy); Handstand Kick para Wheel Kick para Spinning Clothesline (Dizzy); Sonic Boom para Tiger Attack",
        Gloria: 8,
        Honra: 7,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 8
    };
    return blackorchid;
}

const npc = calcPC(BlackOrchidKI());