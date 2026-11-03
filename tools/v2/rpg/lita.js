function Lita() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Apoio", 4);
    antecedentes[2] = newCaracteristica("Recursos", 3);
    antecedentes[3] = newCaracteristica("Contatos", 4);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Espada", 1);
    tecnicas[1] = newCaracteristica("Arremesso", 3);

    const armas = [];
    armas[0] = "Espada";
    armas[1] = "Faca Arremessada";

    const personagem = {
        Nome: "Lita C. Luwanda",
        Estilo: "Forças Especiais",
        Escola: "MI6",
        Jogador: "NPC",
        Assinatura: "Espada longa",
        Conceito: "Tenente MI6",
        Cronica: "Street Fighter 2",
        Equipe: "MI6",
        Time: "Delta Red",
        Forca: 3,
        Destreza: 4,
        Vigor: 3,
        Carisma: 4,
        Manipulacao: 4,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 1,
        Intimidacao: 0,
        Perspicacia: 1,
        Manha: 2,
        Labia: 2,
        NovosTalentos: [],
        LutaCega: 0,
        Conducao: 2,
        Lideranca: 4,
        Seguranca: 0,
        Furtividade: 2,
        Sobrevivencia: 3,
        NovasPericias: [],
        Arena: 0,
        Computador: 0,
        Investigacao: 1,
        Medicina: 2,
        Misterios: 0,
        Estilos: 0,
        NovosConhecimentos: [],
        Antecedentes: antecedentes,
        Soco: 2,
        Chute: 2,
        Bloqueio: 2,
        Apresamento: 1,
        Esportes: 4,
        Foco: 0,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Spinning Back Fist, Suplex, Jump",
        Combos: "",
        Gloria: 1,
        Honra: 3,
        Chi: 1,
        ForcaVontade: 4,
        Saude: 10,
        Divisao: "Duelistas",
        Posto: 1
    };
    return personagem;
}

let npc = Lita();

npc = calcPC(npc);