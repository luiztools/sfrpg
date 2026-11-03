function Veterano() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 1);
    antecedentes[1] = newCaracteristica("Apoio", 1);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 2);

    const armas = [];
    armas[0] = "Fuzil";

    const personagem = {
        Nome: "Veterano",
        Estilo: "Forças Especiais",
        Escola: "Forças Armadas",
        Jogador: "",
        Assinatura: "",
        Conceito: "Soldado Veterano",
        Cronica: "",
        Equipe: "",
        Time: "",
        Forca: 3,
        Destreza: 3,
        Vigor: 3,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 3,
        Prontidao: 2,
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
        Furtividade: 1,
        Sobrevivencia: 3,
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
        Chute: 0,
        Bloqueio: 2,
        Apresamento: 1,
        Esportes: 2,
        Foco: 0,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Spinning Back Fist, Suplex, Jump",
        Combos: "",
        Gloria: 1,
        Honra: 1,
        Chi: 1,
        ForcaVontade: 4,
        Saude: 8,
        Divisao: 1,
        Posto: 1
    };
    return personagem;
}

let npc = Veterano();

npc = calcPC(npc);