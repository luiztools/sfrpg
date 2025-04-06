function GeeseHoward() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Arena", 5);
    antecedentes[2] = newCaracteristica("Contatos", 5);
    antecedentes[3] = newCaracteristica("Recursos", 5);
    antecedentes[4] = newCaracteristica("Staff", 5);
    antecedentes[5] = newCaracteristica("Fama", 2);

    const personagem =
    {
        Nome: "Geese Howard",
        Estilo: "Aikidô",
        Escola: "Tung Fu Hue",
        Conceito: "Rei do Crime",
        Assinatura: "Gargalhada",
        Jogador: "NPC",
        Cronica: "Fatal Fury 1",
        Equipe: "Howard Connection",
        Time: "Howard Connection",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 5,
        Aparencia: 3,
        Percepcao: 5,
        Inteligencia: 5,
        Raciocinio: 6,
        Prontidao: 5,
        Interrogacao: 2,
        Intimidacao: 5,
        Perspicacia: 6,
        Manha: 3,
        Labia: 6,
        LutaCega: 5,
        Conducao: 4,
        Lideranca: 5,
        Seguranca: 3,
        Furtividade: 4,
        Sobrevivencia: 2,
        Arena: 3,
        Computador: 2,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 2,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 6,
        Apresamento: 5,
        Esportes: 4,
        Foco: 6,
        Divisao: "Livre",
        Posto: 8,
        Gloria: 10,
        Honra: 0,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        ManobrasEspeciais: "Power Uppercut, Jump, Kippup, Throw, Double-Hit Kick, Foot Sweep, Face Slam, Flying Fireball, Fireball, Punch Defense, Kick Defense,Throw, Shock Treatment, San He, Breakfall, Burn Knuckle, Grappling Defense, Air Throw, Spinning Back Fist, Improved Fireball",
        Combos: "Punch Defense para Throw; Kick Defense para Throw; Bloqueio para Throw; Jump + Jab para Fierce para Fireball; Jump + Jab para Roundhouse para Burn Knuckle; Fierce para Flying Fireball para Shock Treatment"
    };
    return personagem;
}

let npc = GeeseHoward();

npc = calcPC(npc);