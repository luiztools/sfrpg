function Sapphire() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Elemental (Fogo)", 4);
    antecedentes[1] = newCaracteristica("Staff", 3);
    antecedentes[2] = newCaracteristica("Recursos", 4);

    const sapphire = {
        Nome: "Sapphire Fulton",
        Estilo: "Karatê Shotokan",
        Escola: "Casa do tio Bob",
        Jogador: "NPC",
        Assinatura: "Grande determinação",
        Conceito: "Jovem esquentada",
        Equipe: "Excalibur Produções",
        Time: "Nenhum",
        Forca: 3,
        Destreza: 4,
        Vigor: 5,
        Carisma: 2,
        Manipulacao: 4,
        Aparencia: 5,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 3,
        Prontidao: 2,
        Intimidacao: 3,
        Manha: 3,
        Labia: 3,
        LutaCega: 1,
        Conducao: 3,
        Lideranca: 2,
        Furtividade: 2,
        Arena: 2,
        Computador: 3,
        Investigacao: 3,
        Medicina: 1,
        Misterios: 1,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 3,
        Bloqueio: 2,
        Apresamento: 1,
        Esportes: 4,
        Foco: 3,
        ManobrasEspeciais: "Fire Strike, Flaming Fist, Heat Wave, Sense Element, Flying Knee Thrust, Power Uppercut, Throw, Jump",
        Combos: "Bloqueio para Strong + Flaming Fist para Throw (Dizzy); Heat Wave para Fire Strike para Flying Knee Thrust; Jab para Short para Fierce + Flaming Fist (Dizzy)",
        Gloria: 4,
        Honra: 6,
        Chi: 6,
        ForcaVontade: 5,
        Saude: 14,
        Divisao: "Estilo Livre",
        Posto: 4
    };
    return sapphire;
}

let npc = Sapphire();

npc = calcPC(npc);