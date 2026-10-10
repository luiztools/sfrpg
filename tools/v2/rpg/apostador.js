function Apostador() {

    const novasPericias = [newCaracteristica("Apostar", 5)];
    const novasTecnicas = [newCaracteristica("Armas de Fogo", 2), newCaracteristica("Faca", 2)];

    const armas = ["Pistola", "Faca"];

    var personagem = {
        Nome: "Apostador",
        Conceito: "Agiota",
        Time: "",
        Equipe: "",
        Jogador: "",
        Cronica: "",
        Assinatura: "Olhar frio",
        Escola: "Desconhecida",
        Estilo: "Briga",
        Forca: 2,
        Destreza: 2,
        Vigor: 2,
        Carisma: 4,
        Manipulacao: 5,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 5,
        Raciocinio: 4,
        Prontidao: 1,
        Interrogatorio: 3,
        Intimidacao: 1,
        Perspicacia: 4,
        Manha: 5,
        Labia: 5,
        NovosTalentos: [newCaracteristica("Administrar", 3)],
        LutaCega: 0,
        Conducao: 2,
        Lideranca: 2,
        Seguranca: 0,
        Furtividade: 1,
        Sobrevivencia: 0,
        NovasPericias: novasPericias,
        Arena: 1,
        Computador: 0,
        Investigacao: 1,
        Medicina: 0,
        Misterios: 1,
        Estilos: 1,
        NovosConhecimentos: [],
        Antecedentes: [newCaracteristica("Recursos", 4), newCaracteristica("Staff", 2), newCaracteristica("Aliados", 2)],
        Soco: 1,
        Chute: 0,
        Bloqueio: 1,
        Apresamento: 1,
        Esportes: 1,
        Foco: 0,
        NovasTecnicas: novasTecnicas,
        Armas: armas,
        Gloria: 3,
        Honra: 1,
        Posto: 0,
        Chi: 1,
        ForcaVontade: 3,
        Saude: 6,
        Divisao: "Nenhuma",
        ManobrasEspeciais: "Jump",
        Combos: ""
    };
    return personagem;
}

let npc = Apostador();
npc = calcPC(npc);