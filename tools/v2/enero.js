function EneroSFZ3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 5);
    antecedentes[0] = newCaracteristica("Contatos", 5);
    antecedentes[1] = newCaracteristica("Psycho Power", 1);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 3);

    const enero =
    {
        Nome: "Enero",
        Estilo: "Forças Especiais",
        Escola: "Shadaloo",
        Conceito: "Assassina",
        Assinatura: "Expressão Fria",
        Equipe: "Shadaloo",
        Time: "Dolls",
        Jogador: "NPC",
        Cronica: "Street Fighter Alpha",
        Forca: 2,
        Destreza: 3,
        Vigor: 2,
        Carisma: 2,
        Manipulacao: 5,
        Aparencia: 5,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 2,
        Intimidacao: 0,
        Perspicacia: 1,
        Manha: 1,
        Labia: 5,
        LutaCega: 0,
        Conducao: 2,
        Lideranca: 5,
        Seguranca: 5,
        Furtividade: 5,
        Sobrevivencia: 1,
        Arena: 1,
        Computador: 5,
        Investigacao: 5,
        Medicina: 0,
        Misterios: 0,
        Estilos: 1,
        Soco: 3,
        Chute: 1,
        Apresamento: 1,
        Bloqueio: 3,
        Esportes: 1,
        Foco: 0,
        ManobrasEspeciais: "Jump, Head Butt, Throw",
        Combos: "",
        Gloria: 1,
        Honra: 0,
        Chi: 1,
        ForcaVontade: 6,
        Saude: 10,
        Posto: 2,
        Antecedentes: antecedentes,
        Divisao: "Tradicional"
    };
    return enero;
}

function EneroSF5() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 5);
    antecedentes[0] = newCaracteristica("Contatos", 5);
    antecedentes[1] = newCaracteristica("Psycho Power", 1);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 3);

    const enero =
    {
        Nome: "Enero",
        Estilo: "Forças Especiais",
        Escola: "Shadaloo",
        Conceito: "Assassina",
        Assinatura: "Expressão Fria",
        Equipe: "Shadaloo",
        Time: "Dolls",
        Jogador: "NPC",
        Cronica: "Street Fighter 5",
        Forca: 2,
        Destreza: 3,
        Vigor: 3,
        Carisma: 3,
        Manipulacao: 5,
        Aparencia: 5,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 3,
        Intimidacao: 0,
        Perspicacia: 2,
        Manha: 2,
        Labia: 5,
        LutaCega: 0,
        Conducao: 2,
        Lideranca: 5,
        Seguranca: 5,
        Furtividade: 5,
        Sobrevivencia: 1,
        Arena: 2,
        Computador: 5,
        Investigacao: 5,
        Medicina: 0,
        Misterios: 0,
        Estilos: 2,
        Soco: 3,
        Chute: 2,
        Apresamento: 2,
        Bloqueio: 3,
        Esportes: 2,
        Foco: 0,
        ManobrasEspeciais: "Jump, Head Butt, Throw",
        Combos: "",
        Gloria: 2,
        Honra: 0,
        Chi: 2,
        ForcaVontade: 7,
        Saude: 12,
        Posto: 3,
        Antecedentes: antecedentes,
        Divisao: "Tradicional"
    };
    return enero;
}
let npc;
if (getParameterByName('age') === 'sfa')
    npc = EneroSFZ3();
else
    npc = EneroSF5();

npc = calcPC(npc);