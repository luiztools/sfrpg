function Teik() {

    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Recursos", 1);
    antecedentes[1] = newCaracteristica("Aliados", 1);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Lança", 3);

    const armas = ["Lança"];

    const personagem = {
        Nome: "Teik",
        Estilo: "Thai Kickboxe",
        Escola: "Exército Tailandês",
        Jogador: "NPC",
        Assinatura: "Dá ordens!",
        Conceito: "Homem do Campo",
        Cronica: "Mortal Kombat",
        Equipe: "",
        Time: "Dream Team",
        Forca: 2,
        Destreza: 2,
        Vigor: 3,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 2,
        Prontidao: 2,
        Interrogacao: 0,
        Intimidacao: 1,
        Perspicacia: 2,
        Manha: 2,
        Labia: 2,
        NovosTalentos: [],
        LutaCega: 1,
        Conducao: 2,
        Lideranca: 1,
        Seguranca: 0,
        Furtividade: 1,
        Sobrevivencia: 2,
        NovasPericias: [],
        Arena: 0,
        Computador: 0,
        Investigacao: 0,
        Medicina: 1,
        Misterios: 1,
        Estilos: 0,
        NovosConhecimentos: [],
        Antecedentes: antecedentes,
        Soco: 1,
        Chute: 2,
        Bloqueio: 2,
        Apresamento: 0,
        Esportes: 2,
        Foco: 0,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Double Hit Kick, Foot Sweep, Power Uppercut",
        Combos: "",
        Gloria: 2,
        Honra: 1,
        Chi: 1,
        ForcaVontade: 6,
        Saude: 10,
        Divisao: "Tradicional",
        Posto: 1
    };
    return personagem;
}

let npc = Teik();
npc = calcPC(npc);