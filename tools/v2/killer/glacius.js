function GlaciusKI() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 2);
    antecedentes[1] = newCaracteristica("Elemental (Água)", 5);

    const glacius = {
        Nome: "Glacius",
        Estilo: "Kickboxe",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Palavras indecifráveis",
        Conceito: "Alienígena",
        Cronica: "Killer Instinct",
        Forca: 6,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 1,
        Aparencia: 1,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 0,
        Intimidacao: 5,
        Perspicacia: 4,
        Manha: 0,
        Labia: 0,
        LutaCega: 3,
        Conducao: 6,
        Lideranca: 3,
        Seguranca: 5,
        Furtividade: 3,
        Sobrevivencia: 5,
        Arena: 0,
        Computador: 6,
        Investigacao: 3,
        Medicina: 3,
        Misterios: 3,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 4,
        Foco: 6,
        ManobrasEspeciais: "Jump, Power Uppercut, Drench, Pool, Elemental Stride, Elemental Skin, Double Hit Kick, Foot Sweep, Toughskin",
        Combos: "Pool para Power Uppercut para Double Hit Kick (Dizzy); Drench para Pool para Double Hit Kick (Dizzy); Pool para Double Hit Kick para Power Uppercut (Dizzy)",
        Gloria: 5,
        Honra: 8,
        Chi: 10,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Livre",
        Posto: 6
    };
    return glacius;
}

const npc = calcPC(GlaciusKI());