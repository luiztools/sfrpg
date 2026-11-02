
function Mace() {
    const personagem = {
        Nome: "Mace",
        Estilo: "Forças Especiais",
        Escola: "Exército dos EUA",
        Assinatura: "Shadow-boxes",
        Conceito: "Pugilista",
        Equipe: "Roger McRee",
        Time: "Rolling Thunder",
        Forca: 4,
        Destreza: 2,
        Vigor: 4,
        Carisma: 1,
        Manipulacao: 1,
        Aparencia: 1,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 1,
        Intimidacao: 4,
        Manha: 4,
        NovosTalentos: [],
        LutaCega: 2,
        Conducao: 1,
        Seguranca: 1,
        Furtividade: 4,
        Sobrevivencia: 3,
        NovasPericias: [],
        Arena: 1,
        Computador: 2,
        Medicina: 1,
        NovosConhecimentos: [],
        Antecedentes: [newCaracteristica("Cibernetico", 2), newCaracteristica("Empresario", 3), newCaracteristica("Recursos", 2)],
        Soco: 5,
        Chute: 3,
        Bloqueio: 3,
        Apresamento: 3,
        Esportes: 2,
        Foco: 1,
        NovasTecnicas: [],
        ManobrasEspeciais: "Buffalo Punch, Power Uppercut, Ear Pop, Haymaker, Flying Knee Thrust, Air Throw, Throw, Jump",
        Combos: "Ear Pop para Buffalo Punch; Jab para Power Uppercut",
        Gloria: 3,
        Honra: 1,
        Chi: 2,
        ForcaVontade: 6,
        Saude: 13,
        Divisao: "Estilo Livre",
        Posto: 4
    };
    return personagem;
}

let npc = Mace();

npc = calcPC(npc);