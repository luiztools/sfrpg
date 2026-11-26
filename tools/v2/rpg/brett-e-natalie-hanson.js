function BrettHanson() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 5);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Recursos", 4);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 2);

    const armas = [];
    armas[0] = "Pistola";

    const personagem = {
        Nome: "Brett Hanson",
        Estilo: "",
        Escola: "",
        Jogador: "NPC",
        Assinatura: "",
        Conceito: "Chefe do crime",
        Cronica: "Shades of Grey",
        Equipe: "Shadaloo",
        Time: "",
        Forca: 2,
        Destreza: 2,
        Vigor: 3,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 2,
        Intimidacao: 2,
        Perspicacia: 4,
        Manha: 2,
        Labia: 3,
        NovosTalentos: [],
        LutaCega: 0,
        Conducao: 3,
        Lideranca: 3,
        Seguranca: 1,
        Furtividade: 0,
        Sobrevivencia: 0,
        NovasPericias: [],
        Arena: 1,
        Computador: 3,
        Investigacao: 2,
        Medicina: 0,
        Misterios: 0,
        Estilos: 1,
        NovosConhecimentos: [],
        Antecedentes: antecedentes,
        Soco: 1,
        Chute: 0,
        Bloqueio: 1,
        Apresamento: 0,
        Esportes: 1,
        Foco: 0,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "",
        Combos: "",
        Gloria: 0,
        Honra: 0,
        Chi: 2,
        ForcaVontade: 4,
        Saude: 8,
        Divisao: "Nenhuma",
        Posto: 1
    };
    return personagem;
}

function NatalieHanson() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Apoio", 3);
    antecedentes[2] = newCaracteristica("Recursos", 4);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 2);

    const armas = [];
    armas[0] = "Pistola";

    const personagem = {
        Nome: "Natalie Hanson",
        Estilo: "",
        Escola: "",
        Jogador: "NPC",
        Assinatura: "",
        Conceito: "Chefe do crime",
        Cronica: "Shades of Grey",
        Equipe: "Shadaloo",
        Time: "",
        Forca: 2,
        Destreza: 3,
        Vigor: 2,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 2,
        Intimidacao: 3,
        Perspicacia: 3,
        Manha: 2,
        Labia: 3,
        NovosTalentos: [],
        LutaCega: 0,
        Conducao: 2,
        Lideranca: 2,
        Seguranca: 3,
        Furtividade: 3,
        Sobrevivencia: 0,
        NovasPericias: [],
        Arena: 1,
        Computador: 1,
        Investigacao: 2,
        Medicina: 3,
        Misterios: 0,
        Estilos: 2,
        NovosConhecimentos: [],
        Antecedentes: antecedentes,
        Soco: 1,
        Chute: 0,
        Bloqueio: 1,
        Apresamento: 0,
        Esportes: 1,
        Foco: 0,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "",
        Combos: "",
        Gloria: 0,
        Honra: 0,
        Chi: 2,
        ForcaVontade: 5,
        Saude: 7,
        Divisao: "Nenhuma",
        Posto: 1
    };
    return personagem;
}

let npc;
if (getParameterByName('age') === 'natalie')
    npc = NatalieHanson();
else
    npc = BrettHanson();

npc = calcPC(npc);
