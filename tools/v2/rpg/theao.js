function Theao() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 1);
    antecedentes[1] = newCaracteristica("Aliados", 1);

    const personagem = {
        Nome: "Theão",
        Estilo: "Ler Drit",
        Escola: "Shadaloo",
        Jogador: "",
        Assinatura: "Reverência",
        Conceito: "Monge da Shadaloo",
        Cronica: "",
        Equipe: "Shadaloo",
        Time: "",
        Forca: 2,
        Destreza: 2,
        Vigor: 2,
        Carisma: 2,
        Manipulacao: 5,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 3,
        Prontidao: 0,
        Interrogacao: 0,
        Intimidacao: 0,
        Perspicacia: 0,
        Manha: 0,
        Labia: 5,
        NovosTalentos: [],
        LutaCega: 0,
        Conducao: 0,
        Lideranca: 3,
        Seguranca: 0,
        Furtividade: 0,
        Sobrevivencia: 0,
        NovasPericias: [],
        Arena: 0,
        Computador: 0,
        Investigacao: 0,
        Medicina: 0,
        Misterios: 3,
        Estilos: 0,
        NovosConhecimentos: [],
        Antecedentes: antecedentes,
        Soco: 2,
        Chute: 0,
        Bloqueio: 3,
        Apresamento: 1,
        Esportes: 1,
        Foco: 3,
        NovasTecnicas: [],
        ManobrasEspeciais: "Psychokinetic Channeling, Telepathy, Psychic Vise, Mind Reading, Cajado Jab (Vel. 4, Dano 5, Mov. 2), Cajado Strong (Vel. 2, Dano 7, Mov. 2), Cajado Fierce (Vel. 1, Dano 9, Mov. 1)",
        Combos: "",
        Gloria: 0,
        Honra: 0,
        Chi: 6,
        ForcaVontade: 4,
        Saude: 10,
        Divisao: "Livre",
        Posto: 1
    };
    return personagem;
}

let npc = Theao();

npc = calcPC(npc);