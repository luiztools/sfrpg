function HaggarFF3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Recursos", 4);
    antecedentes[1] = newCaracteristica("Contatos", 5);
    antecedentes[2] = newCaracteristica("Aliados", 5);
    antecedentes[3] = newCaracteristica("Staff", 5);
    antecedentes[4] = newCaracteristica("Fama", 3);

    const talentos = [];
    talentos[0] = newCaracteristica("Administrar", 2);
    talentos[1] = newCaracteristica("Instrução", 1);

    const pericias = [];
    pericias[0] = newCaracteristica("Reparos", 4);

    const conhecimentos = [];

    const haggar = {
        Nome: "Mike Haggar",
        Estilo: "Wrestling",
        Escola: "Associação Slam Masters",
        Jogador: "NPC",
        Assinatura: "Flexiona os músculos!",
        Conceito: "Prefeito Ex-Wrestler",
        Cronica: "Final Fight 3",
        Equipe: "Prefeitura de Metro City",
        Time: "Final Fight",
        Forca: 6,
        Destreza: 3,
        Vigor: 6,
        Carisma: 5,
        Manipulacao: 4,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 4,
        Intimidacao: 5,
        Perspicacia: 3,
        Manha: 3,
        Labia: 3,
        NovosTalentos: talentos,
        LutaCega: 1,
        Conducao: 2,
        Lideranca: 5,
        Seguranca: 0,
        Furtividade: 2,
        Sobrevivencia: 3,
        NovasPericias: pericias,
        Arena: 3,
        Computador: 1,
        Investigacao: 4,
        Medicina: 2,
        Misterios: 1,
        Estilos: 3,
        NovosConhecimentos: conhecimentos,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 6,
        Esportes: 4,
        Foco: 1,
        ManobrasEspeciais: "Jump, Throw, Back Breaker, Pile Driver, Suplex, Spinning Pile Driver, Spinning Clothesline, Head Butt, Head Butt Hold, Haymaker, Buffalo Punch",
        Combos: " Jab para Jab para Back Breaker (dizzy); Jab para Suplex; Jump + Short para Spinning Pile Driver; Jab para Jab para Buffalo Punch (dizzy); Movimento para Fierce",
        Gloria: 8,
        Honra: 6,
        Chi: 3,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Tradicional",
        Posto: 8
    };
    return haggar;
}

function Haggar() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Recursos", 4);
    antecedentes[1] = newCaracteristica("Contatos", 5);
    antecedentes[2] = newCaracteristica("Aliados", 5);
    antecedentes[3] = newCaracteristica("Staff", 5);
    antecedentes[4] = newCaracteristica("Fama", 3);

    const talentos = [];
    talentos[0] = newCaracteristica("Administrar", 1);

    const pericias = [];

    const conhecimentos = [];

    const haggar = {
        Nome: "Mike Haggar",
        Estilo: "Wrestling",
        Escola: "Associação Slam Masters",
        Jogador: "NPC",
        Assinatura: "Flexiona os músculos!",
        Conceito: "Prefeito Ex-Wrestler",
        Cronica: "Final Fight 1-2",
        Equipe: "Prefeitura de Metro City",
        Time: "Final Fight",
        Forca: 5,
        Destreza: 2,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 3,
        Percepcao: 2,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 1,
        Interrogacao: 3,
        Intimidacao: 4,
        Perspicacia: 2,
        Manha: 2,
        Labia: 2,
        NovosTalentos: talentos,
        LutaCega: 0,
        Conducao: 2,
        Lideranca: 3,
        Seguranca: 0,
        Furtividade: 0,
        Sobrevivencia: 0,
        NovasPericias: pericias,
        Arena: 2,
        Computador: 1,
        Investigacao: 2,
        Medicina: 1,
        Misterios: 0,
        Estilos: 2,
        NovosConhecimentos: conhecimentos,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 2,
        Bloqueio: 1,
        Apresamento: 4,
        Esportes: 3,
        Foco: 0,
        ManobrasEspeciais: "Pile Driver, Suplex, Jump, Spinning Clothesline, Head Butt, Throw, Haymaker, Head Butt Hold",
        Combos: "Jab para Suplex",
        Gloria: 5,
        Honra: 3,
        Chi: 1,
        ForcaVontade: 9,
        Saude: 12,
        Divisao: "Tradicional",
        Posto: 5
    };
    return haggar;
}

let npc;
if (getParameterByName('age') === 'ff3')
    npc = HaggarFF3();
else
    npc = Haggar();
npc = calcPC(npc);