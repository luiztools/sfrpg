function Policial() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 1);
    antecedentes[1] = newCaracteristica("Aliados", 1);
    antecedentes[2] = newCaracteristica("Recursos", 1);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 3);

    const armas = [];
    armas[0] = "Pistola";

    const personagem = {
        Nome: "Policial",
        Estilo: "Briga",
        Escola: "Academia de Polícia",
        Jogador: "",
        Assinatura: "Algema o oponente",
        Conceito: "Funcionário Público",
        Cronica: "",
        Equipe: "Delegacia Local",
        Time: "",
        Forca: 2,
        Destreza: 3,
        Vigor: 2,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 4,
        Prontidao: 2,
        Interrogacao: 2,
        Intimidacao: 2,
        Perspicacia: 0,
        Manha: 2,
        Labia: 0,
        NovosTalentos: [],
        LutaCega: 0,
        Conducao: 1,
        Lideranca: 0,
        Seguranca: 2,
        Furtividade: 0,
        Sobrevivencia: 0,
        NovasPericias: [],
        Arena: 0,
        Computador: 0,
        Investigacao: 3,
        Medicina: 0,
        Misterios: 0,
        Estilos: 0,
        NovosConhecimentos: [],
        Antecedentes: antecedentes,
        Soco: 2,
        Chute: 0,
        Bloqueio: 2,
        Apresamento: 2,
        Esportes: 1,
        Foco: 0,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Brain Cracker",
        Combos: "",
        Gloria: 1,
        Honra: 1,
        Chi: 1,
        ForcaVontade: 4,
        Saude: 8,
        Divisao: "Livre",
        Posto: 1
    };
    return personagem;
}

let npc = Policial();

npc = calcPC(npc);