function FernandoDegaul() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 4);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Recursos", 3);

    const personagem = {
        Nome: "Fernando Degaul",
        Estilo: "Kung Fu",
        Escola: "",
        Jogador: "",
        Assinatura: "",
        Conceito: "Empresário",
        Cronica: "Segredos da Shadaloo",
        Equipe: "Shadaloo",
        Time: "Os Presságios",
        Forca: 1,
        Destreza: 2,
        Vigor: 3,
        Carisma: 2,
        Manipulacao: 4,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 1,
        Intimidacao: 1,
        Perspicacia: 2,
        Manha: 2,
        Labia: 4,
        NovosTalentos: [],
        LutaCega: 0,
        Conducao: 2,
        Lideranca: 2,
        Seguranca: 0,
        Furtividade: 1,
        Sobrevivencia: 0,
        NovasPericias: [],
        Arena: 3,
        Computador: 2,
        Investigacao: 2,
        Medicina: 0,
        Misterios: 0,
        Estilos: 0,
        NovosConhecimentos: [],
        Antecedentes: antecedentes,
        Soco: 1,
        Chute: 0,
        Bloqueio: 3,
        Apresamento: 0,
        Esportes: 2,
        Foco: 0,
        NovasTecnicas: [],
        ManobrasEspeciais: "",
        Combos: "",
        Gloria: 0,
        Honra: 0,
        Chi: 1,
        ForcaVontade: 3,
        Saude: 8,
        Divisao: "",
        Posto: 1
    };
    return personagem;
}

function Blade() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 3);
    antecedentes[1] = newCaracteristica("Recursos", 1);
    antecedentes[2] = newCaracteristica("Empresario", 4);
    antecedentes[3] = newCaracteristica("Aliados", 4);
    antecedentes[4] = newCaracteristica("Staff", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Faca", 2);

    const armas = [];
    armas[0] = "Faca";

    const blade = {
        Nome: "Blade",
        Estilo: "Ninjitsu Espanhol",
        Escola: "Escola de Vega",
        Jogador: "NPC",
        Assinatura: "Reverencia o oponente e sorri",
        Conceito: "Matador",
        Cronica: "Segredos da Shadaloo",
        Equipe: "Fernando Degaul",
        Time: "Os Presságios",
        Forca: 2,
        Destreza: 5,
        Vigor: 3,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 4,
        Percepcao: 2,
        Inteligencia: 2,
        Raciocinio: 3,
        Prontidao: 2,
        Interrogacao: 2,
        Intimidacao: 2,
        Perspicacia: 1,
        Manha: 3,
        Labia: 1,
        LutaCega: 3,
        Conducao: 1,
        Lideranca: 1,
        Seguranca: 2,
        Furtividade: 3,
        Arena: 1,
        Investigacao: 1,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 2,
        Chute: 2,
        Bloqueio: 3,
        Apresamento: 1,
        Esportes: 4,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Slide Kick, Jump, Backflip",
        Combos: "",
        Gloria: 3,
        Honra: 0,
        Chi: 1,
        ForcaVontade: 8,
        Saude: 10,
        Divisao: "Duelistas",
        Posto: 1
    };
    return blade;
}

function Leander() {
    const personagem = {
        Nome: "Leander",
        Estilo: "Pankration",
        Escola: "Academia de Erastus",
        Jogador: "",
        Assinatura: "Estrala o pescoço",
        Conceito: "Lutador Olímpico",
        Cronica: "Segredos da Shadaloo",
        Equipe: "Fernando Degaul",
        Time: "Os Presságios",
        Forca: 5,
        Destreza: 2,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 1,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 2,
        Prontidao: 2,
        Interrogacao: 0,
        Intimidacao: 3,
        Perspicacia: 3,
        Manha: 0,
        Labia: 0,
        NovosTalentos: [],
        LutaCega: 1,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 0,
        Sobrevivencia: 3,
        NovasPericias: [],
        Arena: 2,
        Computador: 0,
        Investigacao: 0,
        Medicina: 2,
        Misterios: 0,
        Estilos: 3,
        NovosConhecimentos: [],
        Antecedentes: [newCaracteristica("Aliados", 4), newCaracteristica("Recursos", 3), newCaracteristica("Apoio", 3), newCaracteristica("Sensei", 4), newCaracteristica("Staff", 2), newCaracteristica("Empresario", 4)],
        Soco: 1,
        Chute: 0,
        Bloqueio: 3,
        Apresamento: 3,
        Esportes: 2,
        Foco: 0,
        NovasTecnicas: [],
        ManobrasEspeciais: "Head Butt, Back Breaker, Bear Hug",
        Combos: "Bloqueio para Back Breaker para Bear Hug (Dizzy)",
        Gloria: 2,
        Honra: 1,
        Chi: 2,
        ForcaVontade: 5,
        Saude: 12,
        Divisao: "Tradicional",
        Posto: 1
    };
    return personagem;
}

function LotusBlossom() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 3);
    antecedentes[1] = newCaracteristica("Recursos", 2);
    antecedentes[2] = newCaracteristica("Empresario", 4);
    antecedentes[3] = newCaracteristica("Aliados", 4);
    antecedentes[4] = newCaracteristica("Staff", 3);
    antecedentes[5] = newCaracteristica("Contatos", 3);

    const lotus = {
        Nome: "Lótus Blossom",
        Estilo: "Kung Fu",
        Escola: "Shadaloo",
        Jogador: "NPC",
        Assinatura: "Manda um beijo",
        Conceito: "Mercenária",
        Cronica: "Segredos da Shadaloo",
        Equipe: "Fernando Degaul",
        Time: "Os Presságios",
        Forca: 2,
        Destreza: 3,
        Vigor: 3,
        Carisma: 2,
        Manipulacao: 4,
        Aparencia: 4,
        Percepcao: 2,
        Inteligencia: 3,
        Raciocinio: 4,
        Interrogacao: 3,
        Perspicacia: 2,
        Manha: 3,
        Labia: 2,
        Seguranca: 2,
        Furtividade: 2,
        Arena: 2,
        Computador: 2,
        Investigacao: 2,
        Misterios: 3,
        Antecedentes: antecedentes,
        Chute: 2,
        Bloqueio: 3,
        Esportes: 2,
        Foco: 2,
        ManobrasEspeciais: "Double Hit Kick, Cobra Charm, Jump",
        Combos: "Bloqueio para Double Hit Kick",
        Gloria: 3,
        Chi: 4,
        ForcaVontade: 3,
        Saude: 10,
        Divisao: "Estilo Livre",
        Posto: 1
    };
    return lotus;
}

function Siren() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 3);
    antecedentes[1] = newCaracteristica("Recursos", 2);
    antecedentes[2] = newCaracteristica("Empresario", 4);
    antecedentes[3] = newCaracteristica("Aliados", 4);
    antecedentes[4] = newCaracteristica("Staff", 3);
    antecedentes[5] = newCaracteristica("Contatos", 3);

    const siren = {
        Nome: "Siren",
        Estilo: "Capoeira",
        Escola: "Polícia Européia",
        Jogador: "NPC",
        Assinatura: "Grita Eufórica",
        Conceito: "Agente Especial",
        Cronica: "Segredos da Shadaloo",
        Equipe: "Fernando Degaul",
        Time: "Os Presságios",
        Forca: 3,
        Destreza: 4,
        Vigor: 3,
        Carisma: 2,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 2,
        Inteligencia: 2,
        Raciocinio: 3,
        Prontidao: 2,
        Interrogacao: 1,
        Perspicacia: 2,
        Manha: 1,
        Labia: 3,
        Conducao: 1,
        Seguranca: 3,
        Furtividade: 2,
        Sobrevivencia: 1,
        Computador: 1,
        Investigacao: 3,
        Estilos: 1,
        Antecedentes: antecedentes,
        Chute: 3,
        Bloqueio: 3,
        Esportes: 3,
        ManobrasEspeciais: "Double Hit Kick, Handstand Kick, Backflip Kick, Backflip, Jump",
        Combos: "Double Hit Kick para Backflip Kick para Handstand Kick (Dizzy)",
        Gloria: 1,
        Honra: 2,
        Chi: 3,
        ForcaVontade: 6,
        Saude: 10,
        Divisao: "Tradicional",
        Posto: 1
    };
    return siren;
}

function Kahn() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 2);
    antecedentes[1] = newCaracteristica("Recursos", 2);
    antecedentes[2] = newCaracteristica("Empresario", 4);
    antecedentes[3] = newCaracteristica("Aliados", 4);
    antecedentes[4] = newCaracteristica("Staff", 2);

    const kahn = {
        Nome: "Kahn",
        Estilo: "Boxe",
        Escola: "Ruas da Filadélfia",
        Jogador: "NPC",
        Assinatura: "Ergue o braço em vitória!",
        Conceito: "Brutamontes",
        Cronica: "Segredos da Shadaloo",
        Equipe: "Fernando Degaul",
        Time: "Os Presságios",
        Forca: 4,
        Destreza: 3,
        Vigor: 3,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 1,
        Raciocinio: 2,
        Prontidao: 2,
        Intimidacao: 3,
        Manha: 3,
        Labia: 1,
        LutaCega: 2,
        Conducao: 3,
        Sobrevivencia: 2,
        Arena: 2,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 4,
        Bloqueio: 3,
        Esportes: 3,
        ManobrasEspeciais: "Fist Sweep, Dashing Punch, Punch Defense",
        Combos: "Bloqueio para Dashing Punch",
        Gloria: 2,
        Honra: 1,
        Chi: 1,
        ForcaVontade: 6,
        Saude: 12,
        Divisao: "Tradicional",
        Posto: 1
    };
    return kahn;
}

let npc;
if (getParameterByName('age') === 'fernando-degaul')
    npc = FernandoDegaul();
else if (getParameterByName('age') === 'blade')
    npc = Blade();
else if (getParameterByName('age') === 'leander')
    npc = Leander();
else if (getParameterByName('age') === 'lotus-blossom')
    npc = LotusBlossom();
else if (getParameterByName('age') === 'siren')
    npc = Siren();
else if (getParameterByName('age') === 'kahn')
    npc = Kahn();
else
    npc = FernandoDegaul();

npc = calcPC(npc);
