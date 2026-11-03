function Wolfman() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Apoio", 4);
    antecedentes[2] = newCaracteristica("Recursos", 3);
    antecedentes[3] = newCaracteristica("Contatos", 4);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 5);

    const armas = [];
    armas[0] = "Pistola";

    const personagem = {
        Nome: "Keith B. Wolfman",
        Estilo: "Forças Especiais",
        Escola: "MI6",
        Jogador: "NPC",
        Assinatura: "Duas pistolas",
        Conceito: "Coronel MI6",
        Cronica: "Street Fighter 2",
        Equipe: "MI6",
        Time: "Delta Red",
        Forca: 4,
        Destreza: 4,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 1,
        Intimidacao: 1,
        Perspicacia: 1,
        Manha: 3,
        Labia: 1,
        NovosTalentos: [],
        LutaCega: 1,
        Conducao: 3,
        Lideranca: 5,
        Seguranca: 1,
        Furtividade: 2,
        Sobrevivencia: 4,
        NovasPericias: [],
        Arena: 1,
        Computador: 1,
        Investigacao: 1,
        Medicina: 1,
        Misterios: 0,
        Estilos: 1,
        NovosConhecimentos: [],
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 1,
        Bloqueio: 3,
        Apresamento: 2,
        Esportes: 3,
        Foco: 0,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Spinning Back Fist, Suplex, Jump",
        Combos: "",
        Gloria: 2,
        Honra: 2,
        Chi: 2,
        ForcaVontade: 5,
        Saude: 10,
        Divisao: "Duelistas",
        Posto: 1
    };
    return personagem;
}

let npc = Wolfman();

npc = calcPC(npc);