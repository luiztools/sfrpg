function Ripper() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Recursos", 2);
    antecedentes[1] = newCaracteristica("Contatos", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Faca", 1);

    const armas = [];
    armas[0] = "Faca";

    const personagem = {
        Nome: "Ripper",
        Estilo: "Briga",
        Escola: "",
        Jogador: "NPC",
        Assinatura: "Gira uma faca entre os dedos",
        Conceito: "Secretário e guarda-costas",
        Cronica: "Fatal Fury",
        Equipe: "Howard Connection",
        Time: "Nenhum",
        Forca: 2,
        Destreza: 3,
        Vigor: 2,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 2,
        Inteligencia: 2,
        Raciocinio: 2,
        Prontidao: 3,
        Interrogacao: 2,
        Intimidacao: 4,
        Perspicacia: 1,
        Manha: 3,
        Labia: 0,
        NovosTalentos: [],
        LutaCega: 0,
        Conducao: 2,
        Lideranca: 1,
        Seguranca: 3,
        Furtividade: 1,
        Sobrevivencia: 0,
        NovasPericias: [],
        Arena: 0,
        Computador: 0,
        Investigacao: 1,
        Medicina: 0,
        Misterios: 0,
        Estilos: 1,
        NovosConhecimentos: [],
        Antecedentes: antecedentes,
        Soco: 1,
        Chute: 1,
        Bloqueio: 2,
        Apresamento: 0,
        Esportes: 2,
        Foco: 0,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Head Butt, Foot Sweep",
        Combos: "",
        Gloria: 0,
        Honra: 0,
        Chi: 2,
        ForcaVontade: 4,
        Saude: 8,
        Divisao: "Duelistas",
        Posto: 0
    };
    return personagem;
}

function Hopper() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Recursos", 2);
    antecedentes[1] = newCaracteristica("Contatos", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 1);

    const armas = [];
    armas[0] = "Pistola";

    const personagem = {
        Nome: "Hopper",
        Estilo: "Briga",
        Escola: "",
        Jogador: "NPC",
        Assinatura: "Ajusta os óculos escuros",
        Conceito: "Secretário e guarda-costas",
        Cronica: "Fatal Fury",
        Equipe: "Howard Connection",
        Time: "Nenhum",
        Forca: 2,
        Destreza: 3,
        Vigor: 2,
        Carisma: 2,
        Manipulacao: 3,
        Aparencia: 2,
        Percepcao: 2,
        Inteligencia: 2,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 2,
        Intimidacao: 3,
        Perspicacia: 2,
        Manha: 3,
        Labia: 1,
        NovosTalentos: [],
        LutaCega: 0,
        Conducao: 3,
        Lideranca: 1,
        Seguranca: 3,
        Furtividade: 0,
        Sobrevivencia: 0,
        NovasPericias: [],
        Arena: 0,
        Computador: 1,
        Investigacao: 1,
        Medicina: 0,
        Misterios: 0,
        Estilos: 1,
        NovosConhecimentos: [],
        Antecedentes: antecedentes,
        Soco: 2,
        Chute: 1,
        Bloqueio: 2,
        Apresamento: 0,
        Esportes: 2,
        Foco: 0,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Elbow Smash, Knee Basher",
        Combos: "",
        Gloria: 0,
        Honra: 0,
        Chi: 2,
        ForcaVontade: 4,
        Saude: 8,
        Divisao: "Livre",
        Posto: 0
    };
    return personagem;
}

let npc;
if (getParameterByName('age') === 'hopper')
    npc = Hopper();
else
    npc = Ripper();

npc = calcPC(npc);
