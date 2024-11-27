function SakuraSFZ3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Arena", 1);
    antecedentes[2] = newCaracteristica("Contatos", 1);
    antecedentes[3] = newCaracteristica("Recursos", 1);
    antecedentes[4] = newCaracteristica("Sensei", 2);

    const sakura =
    {
        Nome: "Sakura Kasugano",
        Estilo: "Karatê Shotokan",
        Escola: "Autodidata",
        Conceito: "Estudante",
        Assinatura: "Mostra suas técnicas",
        Jogador: "NPC",
        Cronica: "Street Fighter Alpha",
        Forca: 3,
        Destreza: 5,
        Vigor: 4,
        Carisma: 5,
        Manipulacao: 1,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 2,
        Intimidacao: 0,
        Perspicacia: 4,
        Manha: 2,
        Labia: 3,
        LutaCega: 2,
        Conducao: 0,
        Lideranca: 1,
        Seguranca: 0,
        Furtividade: 2,
        Sobrevivencia: 2,
        Arena: 1,
        Computador: 2,
        Investigacao: 2,
        Medicina: 0,
        Misterios: 1,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 4,
        Foco: 4,
        ManobrasEspeciais: "Jump, Foot Sweep, Power Uppercut, Dragon Punch, Hurricane Kick, Air Hurricane Kick, Energy Ball, Fireball, Haymaker, Widowmaker, Neck Choke, Spinning Foot Sweep",
        Combos: "Windowmaker para Dragon Punch (Dizzy); Short para Hurricane Kick (dizzy); Energy Ball para Haymaker (Dizzy);",
        Chi: 4,
        ForcaVontade: 9,
        Saude: 18,
        Divisao: "Estilo Livre",
        Posto: 4,
        Gloria: 3,
        Honra: 6
    };
    return sakura;
}

function SakuraSF4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Arena", 2);
    antecedentes[2] = newCaracteristica("Contatos", 2);
    antecedentes[3] = newCaracteristica("Recursos", 1);
    antecedentes[4] = newCaracteristica("Sensei", 2);

    const sakura =
    {
        Nome: "Sakura Kasugano",
        Estilo: "Karatê Shotokan",
        Escola: "Autodidata",
        Conceito: "Estudante",
        Assinatura: "Mostra suas técnicas",
        Jogador: "NPC",
        Cronica: "Street Fighter 4",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 5,
        Manipulacao: 2,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 3,
        Interrogacao: 2,
        Intimidacao: 0,
        Perspicacia: 5,
        Manha: 3,
        Labia: 3,
        LutaCega: 3,
        Conducao: 0,
        Lideranca: 2,
        Seguranca: 0,
        Furtividade: 2,
        Sobrevivencia: 3,
        Arena: 2,
        Computador: 2,
        Investigacao: 2,
        Medicina: 0,
        Misterios: 2,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 4,
        Foco: 5,
        ManobrasEspeciais: "Jump, Foot Sweep, Power Uppercut, Dragon Punch, Hurricane Kick, Air Hurricane Kick, Energy Ball, Fireball, Haymaker, Widowmaker, Neck Choke, Spinning Foot Sweep",
        Combos: "Windowmaker para Dragon Punch (Dizzy); Short para Hurricane Kick (dizzy); Energy Ball para Haymaker (Dizzy); Jab para Dragon Punch",
        Chi: 5,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 5,
        Gloria: 4,
        Honra: 7
    };
    return sakura;
}

let npc;
if (getParameterByName('age') === 'sfa')
    npc = SakuraZ3();
else
    npc = SakuraSF4();

npc = calcPC(npc);