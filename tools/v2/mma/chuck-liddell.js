
function ChuckLiddell() {
    const personagem = {
        Nome: "Chuck Liddell",
        Estilo: "Vale-Tudo (Kickboxe)",
        Escola: "Universidade Politécnica da Califórnia",
        Assinatura: "Dá as costas ao oponentes",
        Conceito: "Ex-campeão de MMA",
        Equipe: "White Produções",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 1,
        Manipulacao: 3,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 3,
        Intimidacao: 5,
        Perspicacia: 2,
        Manha: 3,
        Labia: 3,
        NovosTalentos: [],
        Conducao: 4,
        Lideranca: 1,
        Furtividade: 1,
        Sobrevivencia: 4,
        NovasPericias: [],
        Arena: 3,
        Computador: 2,
        Medicina: 2,
        Estilos: 5,
        NovosConhecimentos: [],
        Antecedentes: [newCaracteristica("Empresario", 5), newCaracteristica("Fama", 2), newCaracteristica("Recursos", 4)],
        Soco: 4,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 4,
        NovasTecnicas: [],
        ManobrasEspeciais: "Pin, Power Uppercut, Triple Strike, Improved Pin, Double Hit Kick, Grappling Defense, Wounded Knee, Throw, Jump, Ground Fighting, Double Dread Kick",
        Combos: "Jump + Fierce para Strong para Double Dread Kick (Dizzy))",
        Gloria: 7,
        Honra: 4,
        Chi: 3,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Tradicional",
        Posto: 8
    };
    return personagem;
}

let npc = ChuckLiddell();

npc = calcPC(npc);