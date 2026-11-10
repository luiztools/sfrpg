function VulcanoRossoEX() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 1);
    antecedentes[1] = newCaracteristica("Recursos", 2);
    antecedentes[2] = newCaracteristica("Elemental (Magma)", 5);

    return {
        Nome: "Vulcano Rosso",
        Estilo: "Kickboxe",
        Escola: "Várias",
        Jogador: "NPC",
        Assinatura: "Sadismo",
        Conceito: "Vingador",
        Cronica: "Street Fighter EX",
        Forca: 5,
        Destreza: 5,
        Vigor: 6,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 3,
        Interrogacao: 3,
        Intimidacao: 4,
        Perspicacia: 0,
        Manha: 3,
        Labia: 3,
        LutaCega: 4,
        Conducao: 2,
        Lideranca: 3,
        Seguranca: 0,
        Furtividade: 4,
        Sobrevivencia: 2,
        Arena: 3,
        Computador: 1,
        Investigacao: 4,
        Medicina: 2,
        Misterios: 0,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 4,
        Foco: 5,
        ManobrasEspeciais: "Jump, Dashing Punch, Sonic Boom, Punch Defense, Brain Cracker, Slide Kick, Stomach Pump, Displacement, Empty Step, Block And Grab, Dragon Kick, Slash Kick, Final Wave, Triple Strike",
        Combos: "Dashing Punch para Final Wave (Dizzy); Sonic Boom para Slide Kick (Dizzy); Punch Defense para Slide Kick; Stomach Pump para Final Wave (dizzy)",
        Gloria: 7,
        Honra: 2,
        Chi: 8,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 7
    };
}

const npc = calcPC(VulcanoRossoEX());
