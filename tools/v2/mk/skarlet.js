function Skarlet() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Elemental", 5);
    antecedentes[1] = newCaracteristica("Apoio", 4);
    antecedentes[2] = newCaracteristica("Recursos", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Faca", 5);
    tecnicas[1] = newCaracteristica("Arremesso", 4);

    const armas = ["Kunai", "Kunai Arremessada"];

    const talentos = [];

    const conhecimentos = [];

    const personagem =
    {
        Nome: "Skarlet",
        Estilo: "Ninjitsu",
        Escola: "Shao Kahn",
        Equipe: "Outworld",
        Time: "Outworld",
        Conceito: "Assassina",
        Assinatura: "Controla o sangue",
        Jogador: "NPC",
        Cronica: "Mortal Kombat X",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 5,
        Perspicacia: 5,
        Manha: 2,
        Interrogacao: 4,
        Intimidacao: 0,
        Labia: 3,
        LutaCega: 4,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 4,
        Furtividade: 5,
        Sobrevivencia: 4,
        Arena: 3,
        Computador: 0,
        Investigacao: 3,
        Medicina: 3,
        Misterios: 4,
        Estilos: 2,
        NovosTalentos: talentos,
        NovosConhecimentos: conhecimentos,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 5,
        Foco: 6,
        NovasTecnicas: tecnicas,
        Armas: armas,
        Divisao: "Duelistas",
        Posto: 8,
        Gloria: 6,
        Honra: 2,
        Chi: 6,
        ForcaVontade: 7,
        Saude: 20,
        ManobrasEspeciais: "Jump, Foot Sweep, Power Uppercut, Spinning Back Fist, Monkey Grab Punch, Drunken Monkey Roll, Handstand Kick, Drench, Drain, Shrouded Moon, Speed of the Mongoose, Slide Kick",
        Combos: "Jab - Jab - Strong; Jab - Jab - Roundhouse (dizzy); Kunai Jab - Kunai Strong - Forward (dizzy); Kunai Fierce - Roundhouse"
    };
    return personagem;
}

let npc = calcPC(Skarlet());