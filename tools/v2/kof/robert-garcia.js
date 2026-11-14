function RobertKoF() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Recursos", 4);
    antecedentes[2] = newCaracteristica("Sensei", 3);

    const personagem = {
        Nome: "Robert Garcia",
        Estilo: "Karatê Rindoukan",
        Escola: "Dojô Sakazaki",
        Jogador: "NPC",
        Assinatura: "Sinal de positivo",
        Conceito: "Playboy",
        Cronica: "King of Fighters",
        Equipe: "Clã Sakazaki",
        Time: "Art of Fighting Team",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 5,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 2,
        Interrogacao: 3,
        Intimidacao: 5,
        Perspicacia: 0,
        Manha: 4,
        Labia: 5,
        LutaCega: 3,
        Conducao: 5,
        Lideranca: 0,
        Seguranca: 1,
        Furtividade: 3,
        Sobrevivencia: 0,
        Arena: 2,
        Computador: 3,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 0,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 6,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 4,
        Foco: 6,
        ManobrasEspeciais: "Lightning Leg, Fireball, Jump, Throw, Power Uppercut, Dragon Punch, Hurricane Kick, Dive Kick, Double Hit Kick, Slide Kick, Wall Spring, Triple Strike, Improved Fireball, Foot Sweep",
        Combos: "Roundhouse - Fireball; Short - Forward - Roundhouse (Dizzy); Double Hit Kick - Dragon Punch - Foot Sweep; Movimento - Lightning Leg - Dragon Punch (Dizzy); Short - Forward - Double Hit Kick (Dizzy); Slide Kick - Foot Sweep (Dizzy)",
        Gloria: 10,
        Honra: 6,
        Chi: 9,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

function RobertAoF() {
    const personagem = RobertKoF();
    personagem.Cronica = "Art of Fighting";
    personagem.Chi = 7;
    personagem.Saude = 18;
    return personagem;
}

let npc;
if (getParameterByName('age') === 'aof')
    npc = RobertAoF();
else
    npc = RobertKoF();

npc = calcPC(npc);
