function Tagas() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Staff", 1);
    antecedentes[1] = newCaracteristica("Arena", 1);
    antecedentes[2] = newCaracteristica("Fama", 1);

    const sagat = {
        Nome: "Tagas Khru",
        Estilo: "Thai Kickboxe",
        Jogador: "NPC",
        Assinatura: "Reverência",
        Conceito: "Lutador",
        Cronica: "1987",
        Forca: 4,
        Destreza: 4,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 4,
        Interrogacao: 2,
        Intimidacao: 4,
        Perspicacia: 3,
        Manha: 2,
        LutaCega: 4,
        Conducao: 0,
        Lideranca: 2,
        Seguranca: 0,
        Furtividade: 2,
        Sobrevivencia: 4,
        Arena: 4,
        Medicina: 2,
        Misterios: 4,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 3,
        Foco: 3,
        ManobrasEspeciais: "Power Uppercut, Tiger Knee, Dragon Punch, Elbow Smash, Double-Hit Kick, Double Hit-Knee, Foot Sweep, Maka Wara, Throw, Jump, Fireball",
        Combos: "Fireball para Dragon Punch; Tiger Knee para Elbow Smash;",
        Gloria: 2,
        Honra: 6,
        Chi: 6,
        ForcaVontade: 7,
        Saude: 15,
        Divisao: "Estilo Livre",
        Posto: 6
    };
    return sagat;
}

let npc = Tagas();

npc = calcPC(npc);