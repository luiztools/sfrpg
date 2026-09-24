function Blaze() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Fama", 1);
    antecedentes[1] = newCaracteristica("Elemental", 8);

    const armas = [];
    const talentos = [];
    const pericias = [];
    const conhecimentos = [];
    const tecnicas = [];

    const personagem =
    {
        Nome: "Blaze",
        Estilo: "Jeet Kune Dô",
        Escola: "Desconhecida",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Conceito: "Elemental do Fogo",
        Assinatura: "Erupção!",
        Jogador: "NPC",
        Cronica: "Mortal Kombat Armageddon",
        Forca: 10,
        Destreza: 5,
        Vigor: 10,
        Carisma: 1,
        Manipulacao: 1,
        Aparencia: 1,
        Percepcao: 2,
        Inteligencia: 2,
        Raciocinio: 2,
        Prontidao: 5,
        Perspicacia: 0,
        Manha: 1,
        Interrogacao: 1,
        Intimidacao: 8,
        Labia: 0,
        LutaCega: 5,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 0,
        Sobrevivencia: 0,
        Arena: 0,
        Computador: 0,
        Investigacao: 0,
        Medicina: 0,
        Misterios: 0,
        Estilos: 0,
        NovosTalentos: talentos,
        NovasPericias: pericias,
        NovosConhecimentos: conhecimentos,
        Antecedentes: antecedentes,
        Soco: 8,
        Chute: 6,
        Bloqueio: 6,
        Apresamento: 3,
        Esportes: 3,
        Foco: 8,
        NovasTecnicas: tecnicas,
        Armas: armas,
        Divisao: "Livre",
        Posto: 9,
        Gloria: 10,
        Honra: 0,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        ManobrasEspeciais: "Spinning Back Fist, Shikan Ken, Ax Kick, Wounded Knee, Foot Sweep, Ducking Fierce, Spinning Foot Sweep, Pile Driver, Double Hit Punch, Triple Strike, Double Hit Kick, Elbow Smash, Power Uppercut, Jump, Flying Heel Stomp, Punch Defense, Knife Hand Strike, Flying Knee Thrust, Fireball, Improved Fireball, Inferno Strike, Flaming Fist, Dragon Punch, Flaming Dragon Punch, Dashing Punch, Shockwave, Rolling Attack, Regeneration, Yoga Teleport",
        Combos: "Jab para Roundhouse para Foot Sweep (Dizzy); Short para Roundhouse para Foot Sweep (Dizzy); Roundhouse para Fierce para Foot Sweep (Dizzy); Jaba para Forward para Roundhouse (Dizzy); Short para Foot Sweep (Dizzy); Jab para Strong para Roundhouse (Dizzy)"
    };
    return personagem;
}

let npc = calcPC(Blaze());