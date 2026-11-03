function Naldo() {

    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 1);
    antecedentes[1] = newCaracteristica("Recursos", 1);
    antecedentes[2] = newCaracteristica("Sensei", 5);

    const tecnicas = [];

    const personagem = {
        Nome: "Naldo Guerreiro",
        Estilo: "Jiu Jitsu",
        Escola: "Gracie Jiu Jitsu",
        Jogador: "Raryson Rost",
        Assinatura: "Açaí é Força!",
        Conceito: "Estudante",
        Cronica: "1992",
        Equipe: "",
        Time: "",
        Forca: 5,
        Destreza: 3,
        Vigor: 3,
        Carisma: 2,
        Manipulacao: 1,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 2,
        Perspicacia: 3,
        Manha: 1,
        Labia: 0,
        NovosTalentos: [],
        LutaCega: 3,
        Conducao: 1,
        Lideranca: 1,
        Seguranca: 0,
        Furtividade: 0,
        Sobrevivencia: 1,
        NovasPericias: [],
        Arena: 1,
        Computador: 1,
        Investigacao: 0,
        Medicina: 1,
        Misterios: 0,
        Estilos: 0,
        NovosConhecimentos: [],
        Antecedentes: antecedentes,
        Soco: 1,
        Chute: 1,
        Bloqueio: 1,
        Apresamento: 3,
        Esportes: 2,
        Foco: 0,
        NovasTecnicas: [],
        ManobrasEspeciais: "Throw, Breakfall, Suplex, Jump, Pin, Improved Pin, Hair Throw",
        Combos: "Bloqueio para Ripping Bite para Head Bite",
        Gloria: 0,
        Honra: 3,
        Chi: 5,
        ForcaVontade: 10,
        Saude: 10,
        Divisao: "Livre",
        Posto: 1
    };
    return personagem;
}

let npc = Naldo();

npc = calcPC(npc);