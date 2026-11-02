
function Rjindael() {
    const personagem = {
        Nome: "Rjindael",
        Estilo: "Kung Fu",
        Escola: "Shadaloo",
        Assinatura: "Morcegos voam ao redor",
        Conceito: "Lutador Indecifrável",
        Equipe: "Money Guys",
        Time: "Black Dragon",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 7,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 6,
        Intimidacao: 3,
        Perspicacia: 4,
        Manha: 2,
        NovosTalentos: [],
        LutaCega: 7,
        Furtividade: 5,
        Sobrevivencia: 5,
        NovasPericias: [newCaracteristica("Disfarce", 5)],
        Arena: 2,
        Misterios: 2,
        Estilos: 3,
        NovosConhecimentos: [],
        Antecedentes: [newCaracteristica("Hibrido Animal", 3), newCaracteristica("Mascote", 5), newCaracteristica("Apoio", 4), newCaracteristica("Fama", 2), newCaracteristica("Aliados", 4), newCaracteristica("Empresario", 5)],
        Soco: 4,
        Chute: 4,
        Bloqueio: 3,
        Apresamento: 3,
        Esportes: 4,
        Foco: 3,
        ManobrasEspeciais: "Monkey Grab Punch, Rekka Ken, Double Hit Punch, Heart Punch, Backflip Kick, Double Hit Kick, Gekiro, Jump, Wall Spring, Drunken Monkey Roll, Throw, Zen no Mind, Regeneration",
        Combos: "Drunken Monkey Roll para Gekiro (Dizzy); Wall Spring + Jab para Double Hit Punch (Dizzy); Jump + Short para Double Hit Kick (Dizzy)",
        Gloria: 6,
        Honra: 1,
        Chi: 5,
        ForcaVontade: 10,
        Saude: 18,
        Divisao: "Tradicional",
        Posto: 7
    };
    return personagem;
}

let npc = Rjindael();

npc = calcPC(npc);