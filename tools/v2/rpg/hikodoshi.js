function Hikodoshi() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Recursos", 3);
    antecedentes[2] = newCaracteristica("Contatos", 2);

    const hikodoshi = {
        Nome: "Hikodoshi",
        Estilo: "Wu Shu",
        Escola: "Dojô Leung",
        Jogador: "NPC",
        Assinatura: "Ajeita os óculos",
        Conceito: "Intelectual",
        Equipe: "Excalibur Produções",
        Time: "Chimu Nihon",
        Forca: 3,
        Destreza: 5,
        Vigor: 2,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 2,
        Inteligencia: 4,
        Raciocinio: 2,
        Prontidao: 1,
        Perspicacia: 2,
        Manha: 1,
        Labia: 3,
        LutaCega: 1,
        Conducao: 1,
        Seguranca: 2,
        Arena: 1,
        Computador: 4,
        Investigacao: 1,
        Misterios: 3,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 2,
        Chute: 4,
        Bloqueio: 2,
        Apresamento: 1,
        Esportes: 4,
        Foco: 1,
        ManobrasEspeciais: "Spinning Knuckle, Double Hit Kick, Lightning Leg, Jump, Throw, Flying Heel Stomp, Air Throw, Drunken Monkey Roll",
        Combos: "Drunken Monkey Roll para Spinning Knuckle para Lightning Leg (Dizzy)",
        Gloria: 2,
        Honra: 5,
        Chi: 3,
        ForcaVontade: 4,
        Saude: 10,
        Divisao: "Tradicional",
        Posto: 5
    };
    return hikodoshi;
}

let npc = Hikodoshi();

npc = calcPC(npc);