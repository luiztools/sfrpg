function Orochi() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Fama", 3);
    antecedentes[2] = newCaracteristica("Sangue de Orochi", 5);
    antecedentes[3] = newCaracteristica("Elemental", 5);

    const personagem =
    {
        Nome: "Orochi",
        Estilo: "Todos",
        Escola: "Nenhuma",
        Conceito: "Emissário da Morte",
        Assinatura: "Caçoa do oponente",
        Jogador: "NPC",
        Cronica: "The King of Fighters 97",
        Forca: 7,
        Destreza: 5,
        Vigor: 7,
        Carisma: 5,
        Manipulacao: 5,
        Aparencia: 5,
        Percepcao: 7,
        Inteligencia: 7,
        Raciocinio: 7,
        Prontidao: 7,
        Interrogacao: 0,
        Intimidacao: 6,
        Perspicacia: 6,
        Manha: 2,
        Labia: 4,
        LutaCega: 6,
        Conducao: 0,
        Lideranca: 5,
        Seguranca: 0,
        Furtividade: 5,
        Sobrevivencia: 5,
        Arena: 4,
        Computador: 0,
        Investigacao: 4,
        Medicina: 2,
        Misterios: 5,
        Estilos: 6,
        Antecedentes: antecedentes,
        Soco: 7,
        Chute: 7,
        Bloqueio: 7,
        Apresamento: 7,
        Esportes: 7,
        Foco: 7,
        Divisao: "Livre",
        Posto: 10,
        Gloria: 0,
        Honra: 0,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        ManobrasEspeciais: "Jump, Power Uppercut,  Wheel Kick, Flaming Fist, Fist Sweep, Fire Strike, Sonic Boom, Breakfall, Kippup, Telephaty, Mind Reading, Psychic Vise, Yoga Teleport, Air Blast, Push, Chi Push, Chi Kun Healing, Elemental Stride, Double-Hit Punch, Sense Orochi, Awakening Orochi",
        Combos: "Double-Hit Punch para Sonic Boom para Sonic Boom (Dizzy); Chi Push para Yoga Teleport para Push (Dizzy); Chi Push para Elemental Stride para Push (Dizzy); Wheel Kick para Push para Chi Push (Dizzy)"
    };
    return personagem;
}

let npc = Orochi();

npc = calcPC(npc);