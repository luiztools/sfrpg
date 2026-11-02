function KarenCorr() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 2);
    antecedentes[1] = newCaracteristica("Contatos", 2);
    antecedentes[2] = newCaracteristica("Recursos", 2);
    antecedentes[3] = newCaracteristica("Aliados", 2);
    antecedentes[4] = newCaracteristica("Staff", 2);

    const pericia = [];
    pericia[0] = newCaracteristica("Publicidade", 3);
    pericia[1] = newCaracteristica("Disfarce", 1);

    const karen = {
        Nome: "Karen Corr",
        Estilo: "nenhum",
        Jogador: "NPC",
        Assinatura: "A notícia em 1º lugar!",
        Conceito: "Repórter",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 2,
        Destreza: 2,
        Vigor: 3,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 1,
        Interrogacao: 3,
        Intimidacao: 1,
        Perspicacia: 1,
        Manha: 2,
        Labia: 1,
        NovosTalentos: [],
        Conducao: 2,
        Lideranca: 1,
        Seguranca: 1,
        Furtividade: 2,
        Sobrevivencia: 1,
        NovasPericias: pericia,
        Computador: 2,
        Investigacao: 2,
        Misterios: 1,
        Estilos: 1,
        NovosConhecimentos: [],
        Antecedentes: antecedentes,
        ManobrasEspeciais: "",
        Gloria: 2,
        Honra: 1,
        Chi: 1,
        ForcaVontade: 8,
        Saude: 10
    };
    return karen;
}

let npc = KarenCorr();

npc = calcPC(npc);