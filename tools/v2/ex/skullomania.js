function SkullomaniaEX() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Arena", 3);
    antecedentes[2] = newCaracteristica("Fama", 2);
    antecedentes[3] = newCaracteristica("Recursos", 4);
    antecedentes[4] = newCaracteristica("Staff", 1);

    return {
        Nome: "Skullomania",
        Estilo: "Wu Shu",
        Escola: "Autodidata",
        Jogador: "NPC",
        Assinatura: "Lenço vermelho",
        Conceito: "Palhaço",
        Cronica: "Street Fighter EX",
        Forca: 5,
        Destreza: 6,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 6,
        Aparencia: 2,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 0,
        Interrogacao: 2,
        Intimidacao: 3,
        Perspicacia: 2,
        Manha: 4,
        Labia: 5,
        LutaCega: 0,
        Conducao: 1,
        Lideranca: 0,
        Seguranca: 2,
        Furtividade: 3,
        Sobrevivencia: 3,
        Arena: 1,
        Computador: 2,
        Investigacao: 0,
        Medicina: 0,
        Misterios: 0,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 6,
        Foco: 5,
        ManobrasEspeciais: "Power Uppercut, Foot Sweep, Throw, Hyper Tackle, Backflip, Thunderstrike, Flying Body Spear, Slide Kick, Air Throw, Ax Kick, Jump, Fireball, Shock Treatment, Head Butt, Kippup",
        Combos: "Ax Kick para Thunderstrike (Dizzy); Backflip para Slide Kick; Head Butt para Flying Body Spear (Dizzy)",
        Gloria: 7,
        Honra: 5,
        Chi: 8,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Livre",
        Posto: 7
    };
}

const npc = calcPC(SkullomaniaEX());
