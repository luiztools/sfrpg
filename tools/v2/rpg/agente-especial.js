function AgenteEspecial() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 1);
    antecedentes[1] = newCaracteristica("Aliados", 1);
    antecedentes[2] = newCaracteristica("Recursos", 2);
    antecedentes[3] = newCaracteristica("Contatos", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 3);

    const armas = [];
    armas[0] = "Pistola";

    const personagem = {
        Nome: "Agente Especial",
        Estilo: "",
        Escola: "Agência Especial",
        Jogador: "",
        Assinatura: "",
        Conceito: "Agente Secreto",
        Cronica: "",
        Equipe: "",
        Time: "",
        Forca: 2,
        Destreza: 3,
        Vigor: 2,
        Carisma: 2,
        Manipulacao: 3,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 2,
        Intimidacao: 0,
        Perspicacia: 0,
        Manha: 1,
        Labia: 3,
        NovosTalentos: [],
        LutaCega: 0,
        Conducao: 2,
        Lideranca: 0,
        Seguranca: 1,
        Furtividade: 0,
        Sobrevivencia: 0,
        NovasPericias: [],
        Arena: 0,
        Computador: 2,
        Investigacao: 2,
        Medicina: 0,
        Misterios: 0,
        Estilos: 0,
        NovosConhecimentos: [],
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 1,
        Bloqueio: 3,
        Apresamento: 1,
        Esportes: 1,
        Foco: 0,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Head Butt, Throw",
        Combos: "",
        Gloria: 0,
        Honra: 1,
        Chi: 1,
        ForcaVontade: 4,
        Saude: 8,
        Divisao: 1,
        Posto: 1
    };
    return personagem;
}

function CartaBranca() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Recursos", 3);
    antecedentes[1] = newCaracteristica("Apoio", 2);
    antecedentes[2] = newCaracteristica("Aliados", 2);
    antecedentes[3] = newCaracteristica("Contatos", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 4);

    const armas = [];
    armas[0] = "Pistola";

    const personagem = {
        Nome: "Carta Branca",
        Estilo: "Briga",
        Escola: "Agência Especial",
        Jogador: "",
        Assinatura: "",
        Conceito: "Agente Secreto",
        Cronica: "",
        Equipe: "",
        Time: "",
        Forca: 2,
        Destreza: 4,
        Vigor: 2,
        Carisma: 2,
        Manipulacao: 4,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 2,
        Intimidacao: 0,
        Perspicacia: 0,
        Manha: 2,
        Labia: 4,
        NovosTalentos: [],
        LutaCega: 0,
        Conducao: 2,
        Lideranca: 0,
        Seguranca: 3,
        Furtividade: 2,
        Sobrevivencia: 1,
        NovasPericias: [],
        Arena: 0,
        Computador: 2,
        Investigacao: 3,
        Medicina: 0,
        Misterios: 0,
        Estilos: 0,
        NovosConhecimentos: [],
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 3,
        Bloqueio: 3,
        Apresamento: 3,
        Esportes: 2,
        Foco: 0,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Monkey Grab Punch, Double Dread Kick, Knee Basher, Jump",
        Combos: "",
        Gloria: 0,
        Honra: 1,
        Chi: 1,
        ForcaVontade: 6,
        Saude: 10,
        Divisao: "Tradicional",
        Posto: 1
    };
    return personagem;
}

let npc;
if (getParameterByName('age') === 'carta-branca')
    npc = CartaBranca();
else
    npc = AgenteEspecial();

npc = calcPC(npc);