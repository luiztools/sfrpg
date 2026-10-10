function Caine() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Arena", 2);
    antecedentes[2] = newCaracteristica("Apoio", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Bastão", 4);

    const pericias = [];
    pericias[0] = newCaracteristica("Reparos", 5);

    const armas = ["Ferramenta Grande"];

    const npc =
    {
        Nome: "Caine",
        Estilo: "Forças Especiais",
        Conceito: "Mecânico",
        Escola: "Exército dos EUA",
        Time: "Skull Cross",
        Equipe: "Skull Cross",
        Assinatura: "Chave Inglesa",
        Jogador: "NPC",
        Cronica: "Final Fight 3",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 5,
        Perspicacia: 3,
        Labia: 3,
        Manha: 3,
        LutaCega: 0,
        Lideranca: 0,
        Conducao: 5,
        Seguranca: 5,
        Furtividade: 2,
        Sobrevivencia: 3,
        Arena: 4,
        Computador: 4,
        Investigacao: 0,
        Medicina: 0,
        Misterios: 0,
        Estilos: 2,
        Antecedentes: antecedentes,
        NovasTecnicas: tecnicas,
        NovasPericias: pericias,
        Armas: armas,
        Soco: 2,
        Chute: 2,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 3,
        Foco: 0,
        Divisao: "Estilo Livre",
        Posto: 8,
        Gloria: 5,
        Honra: 3,
        Chi: 1,
        ForcaVontade: 6,
        Saude: 20,
        ManobrasEspeciais: "Jump, Flying Knee Thrust, Foot Sweep, Power Uppercut, Suplex, Neck Choke, Spinning Back Fist, Weapon Sweep, Spinning Foot Sweep, Throw, Air Throw, Hair Throw, Handstand Kick, Hyper Fist",
        Combos: "Bloqueio para Flying Knee Thrust para Weapon Sweep (Dizzy); Bloqueio para Hyper Fist (Dizzy); Bloqueio para Spinning Foot Sweep",
    };
    return npc;
}

const npc = calcPC(Caine());