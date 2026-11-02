function BobReagan() {
    const personagem = {
        Nome: "Bob Reagan",
        Estilo: "nenhum",
        Escola: "nenhuma",
        Conceito: "Empresário",
        Equipe: "Money Guys",
        Forca: 2,
        Destreza: 3,
        Vigor: 2,
        Carisma: 4,
        Manipulacao: 4,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 5,
        Raciocinio: 4,
        Interrogacao: 3,
        Intimidacao: 1,
        Perspicacia: 3,
        Manha: 4,
        Labia: 5,
        NovosTalentos: [newCaracteristica("Administrar", 5)],
        Conducao: 3,
        Lideranca: 2,
        NovasPericias: [newCaracteristica("Apostar", 5), newCaracteristica("Publicidade", 4)],
        Arena: 4,
        Computador: 4,
        Investigacao: 3,
        Estilos: 4,
        NovosConhecimentos: [newCaracteristica("Idiomas", 3)],
        Antecedentes: [newCaracteristica("Recursos", 4), newCaracteristica("Aliados", 5), newCaracteristica("Apoio", 3), newCaracteristica("Contatos", 4), newCaracteristica("Fama", 2)],
        Soco: 1,
        Chute: 1,
        Esportes: 1,
        NovasTecnicas: [],
        ManobrasEspeciais: "",
        Combos: "",
        Chi: 1,
        ForcaVontade: 2,
        Saude: 10
    };
    return personagem;
}

let npc = BobReagan();

npc = calcPC(npc);