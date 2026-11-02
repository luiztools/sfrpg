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

    const npc = {
        Nome: "Caine",
        Estilo: "Forças Especiais",
        Escola: "Exército dos EUA",
        Jogador: "NPC",
        Assinatura: "Chave Inglesa",
        Conceito: "Mecânico",
        Cronica: "Final Fight 3",
        Equipe: "Skull Cross",
        Time: "Skull Cross",
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
        Manha: 3,
        Labia: 3,
        LutaCega: 0,
        Conducao: 5,
        Lideranca: 0,
        Seguranca: 5,
        Furtividade: 2,
        Sobrevivencia: 3,
        NovasPericias: pericias,
        Arena: 4,
        Computador: 4,
        Investigacao: 0,
        Medicina: 0,
        Misterios: 0,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 2,
        Chute: 2,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 3,
        Foco: 0,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Flying Knee Thrust, Foot Sweep, Power Uppercut, Suplex, Neck Choke, Spinning Back Fist, Weapon Sweep, Spinning Foot Sweep, Throw, Air Throw, Hair Throw, Handstand Kick, Hyper Fist",
        Combos: "Bloqueio para Flying Knee Thrust para Weapon Sweep (Dizzy); Bloqueio para Hyper Fist (Dizzy); Bloqueio para Spinning Foot Sweep",
        Gloria: 5,
        Honra: 3,
        Chi: 1,
        ForcaVontade: 6,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 8
    };
    return npc;
}

const npc = calcPC(Caine());