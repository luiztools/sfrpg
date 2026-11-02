function Maureen() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Contatos", 5);
    antecedentes[2] = newCaracteristica("Recursos", 2);
    antecedentes[3] = newCaracteristica("Staff", 4);

    const pericias = [];
    pericias[0] = newCaracteristica("Reparos", 6);

    const personagem = {
        Nome: "Maureen Corley",
        Estilo: "Briga",
        Escola: "Os Abutres",
        Jogador: "NPC",
        Assinatura: "Macacão Sujo",
        Conceito: "Mecânica",
        Cronica: "Final Fight",
        Equipe: "Polecats",
        Time: "Polecats",
        Forca: 2,
        Destreza: 3,
        Vigor: 2,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 3,
        Percepcao: 2,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 1,
        Interrogacao: 2,
        Intimidacao: 2,
        Perspicacia: 0,
        Manha: 3,
        Labia: 1,
        NovosTalentos: [],
        LutaCega: 0,
        Conducao: 4,
        Lideranca: 1,
        Seguranca: 1,
        Furtividade: 0,
        Sobrevivencia: 0,
        NovasPericias: pericias,
        Arena: 2,
        Computador: 4,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 0,
        Estilos: 0,
        NovosConhecimentos: [],
        Antecedentes: antecedentes,
        Soco: 1,
        Chute: 1,
        Bloqueio: 0,
        Apresamento: 0,
        Esportes: 2,
        Foco: 0,
        NovasTecnicas: [],
        ManobrasEspeciais: "",
        Combos: '',
        Gloria: 0,
        Honra: 1,
        Chi: 1,
        ForcaVontade: 5,
        Saude: 8,
        Divisao: "Tradicional",
        Posto: 1
    };
    return personagem;
}

let npc = Maureen();

npc = calcPC(npc);