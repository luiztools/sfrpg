function Profissional() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Apoio", 2);

    const personagem = {
        Nome: "Profissional",
        Estilo: "Forças Especiais",
        Escola: "Forças Armadas",
        Jogador: "",
        Assinatura: "",
        Conceito: "Soldado Profissional",
        Cronica: "",
        Equipe: "",
        Time: "",
        Forca: 3,
        Destreza: 3,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 0,
        Perspicacia: 0,
        Manha: 2,
        Labia: 0,
        NovosTalentos: [],
        LutaCega: 0,
        Conducao: 2,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 2,
        Sobrevivencia: 4,
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
        Chute: 0,
        Bloqueio: 2,
        Apresamento: 2,
        Esportes: 2,
        Foco: 0,
        NovasTecnicas: [],
        ManobrasEspeciais: "Spinning Back Fist, Suplex, Jump, Brain Cracker, Pistola (Vel. 6, Dano 7, Mov. 0)",
        Combos: "",
        Gloria: 2,
        Honra: 1,
        Chi: 2,
        ForcaVontade: 5,
        Saude: 10,
        Divisao: "Tradicional",
        Posto: 2,
        Vitorias: 5,
        Derrotas: 0,
        Empates: 0,
        KOs: 5
    };
    return personagem;
}

let npc = Profissional();

npc = calcPC(npc);