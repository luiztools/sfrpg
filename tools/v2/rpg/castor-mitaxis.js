function CastorMitaxis() {
    const antecedentes = [];

    const personagem = {
        Nome: "Castor Mitaxis",
        Estilo: "Ler Drit",
        Escola: "Shadaloo",
        Jogador: "NPC",
        Assinatura: "Óculos escuros",
        Conceito: "Revenant",
        Cronica: "O Guerreiro Perfeito",
        Equipe: "Shadaloo",
        Time: "",
        Forca: 3,
        Destreza: 3,
        Vigor: 4,
        Carisma: 1,
        Manipulacao: 1,
        Aparencia: 1,
        Percepcao: 2,
        Inteligencia: 2,
        Raciocinio: 2,
        Prontidao: 2,
        Interrogacao: 0,
        Intimidacao: 3,
        Perspicacia: 0,
        Manha: 2,
        Labia: 2,
        NovosTalentos: [],
        LutaCega: 0,
        Conducao: 1,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 3,
        Sobrevivencia: 0,
        NovasPericias: [],
        Arena: 0,
        Computador: 0,
        Investigacao: 0,
        Medicina: 0,
        Misterios: 0,
        Estilos: 0,
        NovosConhecimentos: [],
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 2,
        Bloqueio: 3,
        Apresamento: 2,
        Esportes: 2,
        Foco: 3,
        NovasTecnicas: [],
        ManobrasEspeciais: "Psychokinetic Channeling, Psychic Rage, Jump, Throw",
        Combos: "",
        Gloria: 5,
        Honra: 2,
        Chi: 5,
        ForcaVontade: 1,
        Saude: 11,
        Divisao: "Livre",
        Posto: 1
    };
    return personagem;
}

let npc;
npc = CastorMitaxis();

npc = calcPC(npc);
