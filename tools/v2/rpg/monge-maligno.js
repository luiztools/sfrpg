function MongeMaligno() {
    const antecedentes = [];

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Faca", 1);

    const armas = [];
    armas[0] = "Faca";

    const personagem = {
        Nome: "Monge Maligno",
        Estilo: "Kabaddi",
        Escola: "Ordem da Escuridão",
        Jogador: "",
        Assinatura: "Reverência",
        Conceito: "Monge da Escuridão",
        Cronica: "",
        Equipe: "",
        Time: "",
        Forca: 3,
        Destreza: 5,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 3,
        Aparencia: 2,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 0,
        Perspicacia: 2,
        Manha: 0,
        Labia: 2,
        NovosTalentos: [],
        LutaCega: 0,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 2,
        Sobrevivencia: 0,
        NovasPericias: [],
        Arena: 0,
        Computador: 0,
        Investigacao: 0,
        Medicina: 0,
        Misterios: 5,
        Estilos: 0,
        NovosConhecimentos: [],
        Antecedentes: antecedentes,
        Soco: 2,
        Chute: 2,
        Bloqueio: 3,
        Apresamento: 0,
        Esportes: 4,
        Foco: 5,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Blind, Cobra Charm, Mind Reading, Regeneration, Psychic Rage, Telepathy",
        Combos: "",
        Gloria: 1,
        Honra: 0,
        Chi: 5,
        ForcaVontade: 3,
        Saude: 10,
        Divisao: "Duelistas",
        Posto: 1
    };
    return personagem;
}

let npc = MongeMaligno();

npc = calcPC(npc);