function Corona() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Apoio", 3);
    antecedentes[2] = newCaracteristica("Sensei", 4);
    antecedentes[3] = newCaracteristica("Recursos", 3);
    antecedentes[4] = newCaracteristica("Staff", 3);
    antecedentes[5] = newCaracteristica("Arena", 3);

    const corona = {
        Nome: "Corona",
        Estilo: "Ninjitsu Espanhol",
        Escola: "Dojô de Vega",
        Jogador: "NPC",
        Assinatura: "Joga uma rosa",
        Conceito: "Chefe regional da Shadaloo",
        Equipe: "Elias Synn",
        Time: "Dragão Nascente",
        Forca: 4,
        Destreza: 4,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 3,
        Aparencia: 5,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 2,
        Perspicacia: 3,
        Manha: 1,
        Labia: 3,
        LutaCega: 3,
        Seguranca: 3,
        Furtividade: 4,
        Sobrevivencia: 2,
        Investigacao: 2,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 2,
        Chute: 2,
        Bloqueio: 3,
        Apresamento: 3,
        Esportes: 4,
        ManobrasEspeciais: "Spinning Back Fist, Backflip Kick, Back Roll Throw, Hair Throw, Backflip, Wall Spring, Jump, Throw",
        Combos: "Wall Spring para Jump + Roundehouse para Hair Throw (Dizzy)",
        Gloria: 5,
        Honra: 3,
        Chi: 3,
        ForcaVontade: 7,
        Saude: 10,
        Divisao: "Estilo Livre",
        Posto: 3
    };
    return corona;
}

let npc = Corona();

npc = calcPC(npc);