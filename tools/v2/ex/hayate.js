function HayateEX() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Fama", 2);
    antecedentes[2] = newCaracteristica("Recursos", 2);
    antecedentes[3] = newCaracteristica("Sensei", 4);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Espada", 6);

    const armas = [];
    armas[0] = "Katana";

    return {
        Nome: "Hayate",
        Estilo: "Aikidô (Kenjutsu)",
        Escola: "Professor Particular",
        Jogador: "NPC",
        Assinatura: "Expressão sisuda",
        Conceito: "Andarilho",
        Cronica: "Street Fighter EX",
        Forca: 5,
        Destreza: 5,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 5,
        Percepcao: 5,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 5,
        Interrogacao: 0,
        Intimidacao: 3,
        Perspicacia: 4,
        Manha: 1,
        Labia: 0,
        LutaCega: 4,
        Conducao: 0,
        Lideranca: 2,
        Seguranca: 0,
        Furtividade: 4,
        Sobrevivencia: 3,
        Arena: 3,
        Computador: 0,
        Investigacao: 2,
        Medicina: 3,
        Misterios: 2,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 4,
        Foco: 3,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Power Uppercut, Foot Sweep, Hyper Tackle, Killing Blade, Jump, Kippup",
        Combos: "Hyper Tackle para Katana Fierce (Dizzy); Katana Strong para Killing Blade (Dizzy); Jumping Katana Fierce para Foot Sweep; Katana Aparar para Killing Blade",
        Gloria: 5,
        Honra: 6,
        Chi: 5,
        ForcaVontade: 7,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 6
    };
}

const npc = calcPC(HayateEX());
