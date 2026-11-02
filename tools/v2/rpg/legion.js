
function Legion() {
    const personagem = {
        Nome: "Legion",
        Estilo: "Forças Especiais",
        Escola: "Marinha dos EUA",
        Assinatura: "Cruza dois braços, flexiona o terceiro.",
        Conceito: "Ciborgue esmagador",
        Equipe: "Roger McRee",
        Time: "Rolling Thunder",
        Forca: 4,
        Destreza: 2,
        Vigor: 4,
        Carisma: 1,
        Manipulacao: 1,
        Aparencia: 1,
        Percepcao: 4,
        Inteligencia: 2,
        Raciocinio: 2,
        Prontidao: 3,
        Interrogacao: 1,
        Intimidacao: 4,
        NovosTalentos: [],
        LutaCega: 2,
        Conducao: 1,
        Lideranca: 1,
        Seguranca: 3,
        Furtividade: 5,
        Sobrevivencia: 4,
        NovasPericias: [],
        Computador: 2,
        Medicina: 1,
        Estilos: 1,
        NovosConhecimentos: [],
        Antecedentes: [newCaracteristica("Cibernetico", 3), newCaracteristica("Empresario", 3), newCaracteristica("Recursos", 2)],
        Soco: 3,
        Chute: 3,
        Bloqueio: 4,
        Apresamento: 5,
        Esportes: 3,
        Foco: 3,
        NovasTecnicas: [],
        ManobrasEspeciais: "Head Butt, Air Smash, Bear Hug, Jump, Spinning Back Fist, Air Throw, Brain Cracker, Neck Choke, Pile Driver, Throw, Grappling Defense, Wounded Knee",
        Gloria: 5,
        Honra: 1,
        Chi: 1,
        ForcaVontade: 7,
        Saude: 14,
        Divisao: "Estilo Livre",
        Posto: 5
    };
    return personagem;
}

let npc = Legion();

npc = calcPC(npc);