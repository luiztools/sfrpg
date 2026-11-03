function SelvagemMrigankales() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Mais Habilid.:", 0);
    antecedentes[1] = newCaracteristica("Rastreamento", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Lança", 1);

    const armas = [];
    armas[0] = "Lança";
    armas[1] = "Funda";

    const personagem = {
        Nome: "Selvagem Mrigankalês",
        Estilo: "Briga",
        Escola: "Tribo Mrigankalesa",
        Jogador: "",
        Assinatura: "Ergue os braços",
        Conceito: "Indígena",
        Cronica: "",
        Equipe: "",
        Time: "",
        Forca: 3,
        Destreza: 3,
        Vigor: 3,
        Carisma: 1,
        Manipulacao: 1,
        Aparencia: 1,
        Percepcao: 4,
        Inteligencia: 1,
        Raciocinio: 2,
        Prontidao: 0,
        Interrogacao: 0,
        Intimidacao: 0,
        Perspicacia: 0,
        Manha: 0,
        Labia: 0,
        NovosTalentos: [],
        LutaCega: 0,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 0,
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
        Soco: 2,
        Chute: 2,
        Bloqueio: 0,
        Apresamento: 0,
        Esportes: 3,
        Foco: 0,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "",
        Combos: "",
        Gloria: 0,
        Honra: 0,
        Chi: 0,
        ForcaVontade: 1,
        Saude: 10,
        Divisao: "Duelistas",
        Posto: 0
    };
    return personagem;
}

let npc = SelvagemMrigankales();

npc = calcPC(npc);