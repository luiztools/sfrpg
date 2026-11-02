function FernandoDegaul() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 4);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Recursos", 3);

    const personagem = {
        Nome: "Fernando Degaul",
        Estilo: "Kung Fu",
        Escola: "",
        Jogador: "",
        Assinatura: "",
        Conceito: "Empresário",
        Cronica: "",
        Equipe: "Shadaloo",
        Time: "",
        Forca: 1,
        Destreza: 2,
        Vigor: 3,
        Carisma: 2,
        Manipulacao: 4,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 1,
        Intimidacao: 1,
        Perspicacia: 2,
        Manha: 2,
        Labia: 4,
        NovosTalentos: [],
        LutaCega: 0,
        Conducao: 2,
        Lideranca: 2,
        Seguranca: 0,
        Furtividade: 1,
        Sobrevivencia: 0,
        NovasPericias: [],
        Arena: 3,
        Computador: 2,
        Investigacao: 2,
        Medicina: 0,
        Misterios: 0,
        Estilos: 0,
        NovosConhecimentos: [],
        Antecedentes: antecedentes,
        Soco: 1,
        Chute: 0,
        Bloqueio: 3,
        Apresamento: 0,
        Esportes: 2,
        Foco: 0,
        NovasTecnicas: [],
        ManobrasEspeciais: "",
        Combos: "",
        Gloria: 0,
        Honra: 0,
        Chi: 1,
        ForcaVontade: 3,
        Saude: 8,
        Divisao: "",
        Posto: 0
    };
    return personagem;
}

let npc = FernandoDegaul();

npc = calcPC(npc);