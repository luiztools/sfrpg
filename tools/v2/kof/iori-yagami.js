function IoriYagami() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Elemental (Fogo)", 5);
    antecedentes[1] = newCaracteristica("Fama", 3);
    antecedentes[2] = newCaracteristica("Recursos", 2);
    antecedentes[3] = newCaracteristica("Sangue de Orochi", 5);

    const talentos = [];
    talentos[0] = newCaracteristica("Canto", 3);

    const personagem = {
        Nome: "Iori Yagami",
        Estilo: "Karatê Shotokan",
        Escola: "Clã Yagami",
        Jogador: "NPC",
        Assinatura: "Gargalhada",
        Conceito: "Roqueiro",
        Cronica: "The King of Fighters",
        Equipe: "Clã Yagami",
        Time: "Yagami Team",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 0,
        Intimidacao: 4,
        Perspicacia: 5,
        Manha: 5,
        Labia: 0,
        LutaCega: 5,
        Conducao: 2,
        Lideranca: 0,
        Seguranca: 1,
        Furtividade: 2,
        Sobrevivencia: 0,
        Arena: 3,
        Computador: 0,
        Investigacao: 2,
        Medicina: 0,
        Misterios: 4,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 5,
        Esportes: 5,
        Foco: 5,
        NovosTalentos: talentos,
        ManobrasEspeciais: "Jump, Kippup, Fireball, Throw, Power Uppercut, Dragon Punch, Flaming Dragon Punch, Foot Sweep, Face Slam, Ice Blast, Haymaker, Widowmaker, Flying Tackle, Elemental Rage, Double Hit Punch, Push",
        Combos: "Fireball para Fireball para Ice Blast (Dizzy); Double Hit Punch para Widowmaker (Dizzy); Push para Double Hit Punch para Widowmaker (Dizzy); Flying Tackle para Elemental Rage; Push para Flying Tackle para Elemental Rage; Double Hit Punch para Elemental Rage",
        Gloria: 9,
        Honra: 4,
        Chi: 9,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = IoriYagami();

npc = calcPC(npc);
