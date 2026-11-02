function MrRay() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Recursos", 4);
    antecedentes[1] = newCaracteristica("Apoio", 4);
    antecedentes[2] = newCaracteristica("Contatos", 5);
    antecedentes[3] = newCaracteristica("Aliados", 3);
    antecedentes[4] = newCaracteristica("Staff", 5);

    const personagem = {
        Nome: "Mr. Ray",
        Estilo: "",
        Escola: "",
        Jogador: "",
        Assinatura: "sorri...",
        Conceito: "Empresário corrupto",
        Cronica: "",
        Equipe: "Shadaloo",
        Time: "",
        Forca: 2,
        Destreza: 2,
        Vigor: 3,
        Carisma: 3,
        Manipulacao: 5,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 3,
        Prontidao: 2,
        Interrogacao: 2,
        Intimidacao: 1,
        Perspicacia: 3,
        Manha: 3,
        Labia: 3,
        NovosTalentos: [],
        LutaCega: 0,
        Conducao: 1,
        Lideranca: 2,
        Seguranca: 0,
        Furtividade: 0,
        Sobrevivencia: 0,
        NovasPericias: [],
        Arena: 1,
        Computador: 0,
        Investigacao: 1,
        Medicina: 0,
        Misterios: 0,
        Estilos: 1,
        NovosConhecimentos: [],
        Antecedentes: antecedentes,
        Soco: 1,
        Chute: 0,
        Bloqueio: 1,
        Apresamento: 1,
        Esportes: 0,
        Foco: 0,
        NovasTecnicas: [],
        ManobrasEspeciais: "",
        Combos: "",
        Gloria: 5,
        Honra: 0,
        Chi: 1,
        ForcaVontade: 3,
        Saude: 8,
        Divisao: "",
        Posto: 0
    };
    return personagem;
}

let npc = MrRay();

npc = calcPC(npc);