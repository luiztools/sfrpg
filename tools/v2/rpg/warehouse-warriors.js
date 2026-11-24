function Becca() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Apoio", 2);
    antecedentes[2] = newCaracteristica("Recursos", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Bastão", 2);

    const armas = [];
    armas[0] = "Ferramenta Grande";

    const pericias = [];
    pericias[0] = newCaracteristica("Reparos", 5);
    pericias[1] = newCaracteristica("Mecânica", 5);
    pericias[2] = newCaracteristica("Demolições", 3);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Ciências", 5);
    conhecimentos[1] = newCaracteristica("Linguística", 2);

    const personagem = {
        Nome: "Rebecca Giorno",
        Estilo: "Jiu Jitsu",
        Escola: "",
        Jogador: "NPC",
        Assinatura: "Prende o coque com uma chave de fenda",
        Conceito: "Engenheira-chefe do armazém de Mriganka",
        Cronica: "",
        Equipe: "Shadaloo",
        Time: "Warehouse Warriors",
        Forca: 3,
        Destreza: 3,
        Vigor: 3,
        Carisma: 1,
        Manipulacao: 2,
        Aparencia: 1,
        Percepcao: 3,
        Inteligencia: 5,
        Raciocinio: 4,
        Prontidao: 2,
        Interrogacao: 0,
        Intimidacao: 1,
        Perspicacia: 2,
        Manha: 0,
        Labia: 0,
        NovosTalentos: [],
        LutaCega: 0,
        Conducao: 4,
        Lideranca: 2,
        Seguranca: 3,
        Furtividade: 0,
        Sobrevivencia: 0,
        NovasPericias: pericias,
        Arena: 0,
        Computador: 4,
        Investigacao: 1,
        Medicina: 1,
        Misterios: 0,
        Estilos: 1,
        NovosConhecimentos: conhecimentos,
        Antecedentes: antecedentes,
        Soco: 1,
        Chute: 1,
        Bloqueio: 2,
        Apresamento: 3,
        Esportes: 2,
        Foco: 0,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Throw, Breakfall, Arm Wrist Lock, Neck Choke",
        Combos: "",
        Gloria: 1,
        Honra: 0,
        Chi: 1,
        ForcaVontade: 6,
        Saude: 8,
        Divisao: "Duelistas",
        Posto: 0
    };
    return personagem;
}

function Dione() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 3);
    antecedentes[1] = newCaracteristica("Contatos", 4);
    antecedentes[2] = newCaracteristica("Recursos", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 2);

    const armas = [];
    armas[0] = "Pistola de Choque";

    const talentos = [];
    talentos[0] = newCaracteristica("Administrar", 4);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Finanças", 4);
    conhecimentos[1] = newCaracteristica("Direito", 3);
    conhecimentos[2] = newCaracteristica("Linguística", 2);

    const personagem = {
        Nome: "Dione Reyes",
        Estilo: "Capoeira",
        Escola: "",
        Jogador: "NPC",
        Assinatura: "Só sorri ao mandar alguém para a morte",
        Conceito: "Diretora de logística da Shadaloo",
        Cronica: "",
        Equipe: "Shadaloo",
        Time: "Warehouse Warriors",
        Forca: 2,
        Destreza: 3,
        Vigor: 2,
        Carisma: 4,
        Manipulacao: 4,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 3,
        Prontidao: 2,
        Interrogacao: 3,
        Intimidacao: 4,
        Perspicacia: 4,
        Manha: 2,
        Labia: 4,
        NovosTalentos: talentos,
        LutaCega: 0,
        Conducao: 2,
        Lideranca: 4,
        Seguranca: 3,
        Furtividade: 1,
        Sobrevivencia: 0,
        NovasPericias: [],
        Arena: 0,
        Computador: 3,
        Investigacao: 3,
        Medicina: 0,
        Misterios: 0,
        Estilos: 1,
        NovosConhecimentos: conhecimentos,
        Antecedentes: antecedentes,
        Soco: 1,
        Chute: 2,
        Bloqueio: 2,
        Apresamento: 0,
        Esportes: 2,
        Foco: 0,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Backflip Kick, Cartwheel Kick",
        Combos: "",
        Gloria: 2,
        Honra: 0,
        Chi: 2,
        ForcaVontade: 6,
        Saude: 8,
        Divisao: "Livre",
        Posto: 0
    };
    return personagem;
}

function Laverne() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Apoio", 3);
    antecedentes[2] = newCaracteristica("Cibernético", 1);
    antecedentes[3] = newCaracteristica("Fama", 2);
    antecedentes[4] = newCaracteristica("Recursos", 3);

    const tecnicas = [];

    const armas = [];

    const personagem = {
        Nome: "Nayobe Laverne",
        Estilo: "Boxe",
        Escola: "Academia de Boxe do Brooklyn",
        Jogador: "NPC",
        Assinatura: "Voz grave incomum",
        Conceito: "Comandante do armazém de Mriganka",
        Cronica: "",
        Equipe: "Shadaloo",
        Time: "Warehouse Warriors",
        Forca: 5,
        Destreza: 2,
        Vigor: 5,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 1,
        Percepcao: 3,
        Inteligencia: 1,
        Raciocinio: 2,
        Prontidao: 3,
        Interrogacao: 2,
        Intimidacao: 5,
        Perspicacia: 1,
        Manha: 4,
        Labia: 0,
        NovosTalentos: [],
        LutaCega: 1,
        Conducao: 1,
        Lideranca: 3,
        Seguranca: 3,
        Furtividade: 0,
        Sobrevivencia: 1,
        NovasPericias: [],
        Arena: 3,
        Computador: 0,
        Investigacao: 0,
        Medicina: 0,
        Misterios: 0,
        Estilos: 2,
        NovosConhecimentos: [],
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 0,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 1,
        Foco: 0,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Dashing Punch, Power Uppercut, Fist Sweep, Dashing Uppercut, Punch Defense, Head Butt, Jump",
        Combos: "Jab para Power Uppercut (Dizzy), Jab para Strong para Fierce (Dizzy), Strong para Dashing Punch, Bloqueio para Dashing Punch",
        Gloria: 4,
        Honra: 1,
        Chi: 1,
        ForcaVontade: 10,
        Saude: 15,
        Divisao: "Livre",
        Posto: 6
    };
    return personagem;
}

let npc;
if (getParameterByName('age') === 'dione')
    npc = Dione();
else if (getParameterByName('age') === 'laverne')
    npc = Laverne();
else
    npc = Becca();

npc = calcPC(npc);