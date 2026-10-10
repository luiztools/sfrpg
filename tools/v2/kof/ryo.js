function RyoKoF() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Arena", 3);
    antecedentes[2] = newCaracteristica("Sensei", 3);
    antecedentes[3] = newCaracteristica("Mascote", 1);

    const personagem =
    {
        Nome: "Ryo Sakazaki",
        Estilo: "Karatê Rindoukan",
        Escola: "Dojô Sakazaki",
        Conceito: "Estudante",
        Assinatura: "Cumprimento oriental",
        Jogador: "NPC",
        Cronica: "King of Fighters",
        Equipe: "Clã Sakazaki",
        Time: "Art of Fighting",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 5,
        Interrogacao: 0,
        Intimidacao: 3,
        Perspicacia: 5,
        Manha: 1,
        Labia: 1,
        LutaCega: 5,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 3,
        Sobrevivencia: 5,
        Arena: 3,
        Computador: 0,
        Investigacao: 0,
        Medicina: 1,
        Misterios: 2,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 4,
        Foco: 6,
        Divisao: "Livre",
        Posto: 8,
        Gloria: 6,
        Honra: 9,
        Chi: 10,
        ForcaVontade: 9,
        Saude: 20,
        ManobrasEspeciais: "Punch Defense, Kick Defense, Hyper Fist, Power Uppercut, Throw, Fireball, Dragon Punch, Jump, Kippup, Hurricane Kick, Flying Fireball, Breakfall, Tameshiwari, Foot Sweep, Improved Fireball, Triple Strike",
        Combos: "Power Uppercut – Fireball; Foot Sweep - Throw - Improved Fireball (Dizzy); Power Uppercut - Dragon Punch; Short - Short - Foot Sweep (Dizzy); Jab - Strong - Power Uppercut (Dizzy); Movimento - Hyper Fist - Dragon Punch (dizzy)"
    };
    return personagem;
}

function RyoAoF() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Arena", 3);
    antecedentes[2] = newCaracteristica("Sensei", 3);
    antecedentes[3] = newCaracteristica("Mascote", 1);

    const personagem =
    {
        Nome: "Ryo Sakazaki",
        Estilo: "Karatê Rindoukan",
        Escola: "Dojô Sakazaki",
        Conceito: "Estudante",
        Assinatura: "Cumprimento oriental",
        Jogador: "NPC",
        Cronica: "Art of Fighting",
        Equipe: "Clã Sakazaki",
        Time: "Art of Fighting",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 5,
        Interrogacao: 0,
        Intimidacao: 3,
        Perspicacia: 5,
        Manha: 1,
        Labia: 1,
        LutaCega: 5,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 3,
        Sobrevivencia: 5,
        Arena: 3,
        Computador: 0,
        Investigacao: 0,
        Medicina: 1,
        Misterios: 2,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 4,
        Foco: 5,
        Divisao: "Livre",
        Posto: 6,
        Gloria: 4,
        Honra: 7,
        Chi: 8,
        ForcaVontade: 9,
        Saude: 18,
        ManobrasEspeciais: "Punch Defense, Kick Defense, Hyper Fist, Power Uppercut, Throw, Fireball, Dragon Punch, Jump, Kippup, Hurricane Kick, Flying Fireball, Breakfall, Tameshiwari, Foot Sweep, Improved Fireball, Triple Strike",
        Combos: "Power Uppercut – Fireball; Foot Sweep - Throw - Improved Fireball (Dizzy); Power Uppercut - Dragon Punch; Short - Short - Foot Sweep (Dizzy); Jab - Strong - Power Uppercut (Dizzy); Movimento - Hyper Fist - Dragon Punch (dizzy)"
    };
    return personagem;
}

let npc;
if (getParameterByName('age') === 'aof')
    npc = RyoAoF();
else
    npc = RyoKoF();

npc = calcPC(npc);