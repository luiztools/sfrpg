function GarudaEX() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 3);
    antecedentes[1] = newCaracteristica("Satsui no Hadou", 5);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Espada", 5);

    const armas = [];
    armas[0] = "Katana";

    return {
        Nome: "Garuda",
        Estilo: "Karatê Shotokan (Kenjutsu)",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Máscara samurai",
        Conceito: "Demônio",
        Cronica: "Street Fighter EX",
        Forca: 5,
        Destreza: 5,
        Vigor: 6,
        Carisma: 2,
        Manipulacao: 4,
        Aparencia: 2,
        Percepcao: 5,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 6,
        Interrogacao: 0,
        Intimidacao: 6,
        Perspicacia: 5,
        Manha: 0,
        Labia: 0,
        LutaCega: 6,
        Conducao: 0,
        Lideranca: 3,
        Seguranca: 0,
        Furtividade: 4,
        Sobrevivencia: 5,
        Arena: 5,
        Computador: 0,
        Investigacao: 2,
        Medicina: 4,
        Misterios: 6,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 5,
        Foco: 4,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Power Uppercut, Foot Sweep, Throw, Hyper Tackle, Ashura Senku, Air Throw, Gekiro, Double Hit Kick, Dragon Punch, Killing Blade, Maka Wara, Jump, Ansatsuken",
        Combos: "Ashura Senku para Killing Blade; Double Hit Kick para Hyper Tackle (Dizzy); Throw para Hyper Tackle (Dizzy)",
        Gloria: 8,
        Honra: 0,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 7
    };
}

function GarudaFEX() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 3);
    antecedentes[1] = newCaracteristica("Satsui no Hadou", 5);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Espada", 6);

    const armas = [];
    armas[0] = "Katana";

    return {
        Nome: "Garuda",
        Estilo: "Karatê Shotokan (Kenjutsu)",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Máscara samurai",
        Conceito: "Demônio",
        Cronica: "Fighting EX",
        Forca: 6,
        Destreza: 5,
        Vigor: 6,
        Carisma: 2,
        Manipulacao: 4,
        Aparencia: 2,
        Percepcao: 5,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 6,
        Interrogacao: 0,
        Intimidacao: 7,
        Perspicacia: 5,
        Manha: 0,
        Labia: 0,
        LutaCega: 7,
        Conducao: 0,
        Lideranca: 3,
        Seguranca: 0,
        Furtividade: 4,
        Sobrevivencia: 5,
        Arena: 5,
        Computador: 0,
        Investigacao: 2,
        Medicina: 4,
        Misterios: 7,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 5,
        Foco: 5,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Power Uppercut, Foot Sweep, Throw, Hyper Tackle, Ashura Senku, Air Throw, Gekiro, Double Hit Kick, Dragon Punch, Killing Blade, Maka Wara, Jump, Ansatsuken",
        Combos: "Ashura Senku para Killing Blade; Double Hit Kick para Hyper Tackle (Dizzy); Throw para Hyper Tackle (Dizzy)",
        Gloria: 9,
        Honra: 0,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 8
    };
}

let npc;
if (getParameterByName('age') === 'fex') npc = GarudaFEX();
else npc = GarudaEX();
npc = calcPC(npc);
