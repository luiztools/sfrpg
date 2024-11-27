function IbukiSF4() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Mascote", 3);
    antecedentes[1] = newCaracteristica("Aliados", 5);
    antecedentes[2] = newCaracteristica("Contatos", 2);
    antecedentes[3] = newCaracteristica("Herança do Clã", 4);
    antecedentes[4] = newCaracteristica("Recursos", 2);

    var tecnicas = [];
    tecnicas[0] = newCaracteristica("Arremesso", 6);

    var pericias = [];
    pericias[0] = newCaracteristica("Idioma", 5);

    var armas = [];
    armas[0] = "Kunai";

    var ibuki =
    {
        Nome: "Ibuki",
        Estilo: "Ninjitsu",
        Escola: "Seu Clã",
        Conceito: "Estudante Ninja",
        Assinatura: "Bomba de fumaça",
        Jogador: "NPC",
        Cronica: "Street Fighter 4",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 3,
        Aparencia: 4,
        Manipulacao: 4,
        Percepcao: 5,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 2,
        Intimidacao: 4,
        Perspicacia: 5,
        Manha: 3,
        Labia: 6,
        LutaCega: 5,
        Conducao: 1,
        Lideranca: 2,
        Seguranca: 6,
        Furtividade: 6,
        Sobrevivencia: 3,
        NovasPericias: pericias,
        NovosTalentos: [],
        NovosConhecimentos: [],
        Arena: 5,
        Computador: 4,
        Investigacao: 4,
        Medicina: 2,
        Misterios: 3,
        Estilos: 3,
        Soco: 5,
        Chute: 6,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 6,
        Foco: 3,
        Armas: armas,
        Gloria: 8,
        Honra: 7,
        Chi: 6,
        ForcaVontade: 10,
        Divisao: "Duelistas",
        Antecedentes: antecedentes,
        NovasTecnicas: tecnicas,
        ManobrasEspeciais: "Air Throw, Chi Blast, Disengage, Dirty Fighting, Double Heel Stomp, Ear Pop, Empty Step, Flying Heel Stomp, Flying Thrust Kick, Foot Sweep, Jump, Kippup, Neck Breaker, Power Uppercut, Slide Kick, Spin Kick, Ki Blade, Throw",
        Combos: "Double Heel Stomp para Arremesso Fierce; Short para Forward para Roundhouse (Dizzy); Jab para Strong para Fierce (Dizzy)",
        Saude: 20,
        Posto: 9
    };
    return ibuki;
}

function IbukiSF5() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Mascote", 3);
    antecedentes[1] = newCaracteristica("Aliados", 5);
    antecedentes[2] = newCaracteristica("Contatos", 3);
    antecedentes[3] = newCaracteristica("Herança do Clã", 5);
    antecedentes[4] = newCaracteristica("Recursos", 2);

    var tecnicas = [];
    tecnicas[0] = newCaracteristica("Arremesso", 6);

    var pericias = [];
    pericias[0] = newCaracteristica("Idioma", 5);

    var armas = [];
    armas[0] = "Kunai";

    var ibuki =
    {
        Nome: "Ibuki",
        Estilo: "Ninjitsu",
        Escola: "Seu Clã",
        Conceito: "Estudante Ninja",
        Assinatura: "Bomba de fumaça",
        Jogador: "NPC",
        Cronica: "Street Fighter 5",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 4,
        Aparencia: 4,
        Manipulacao: 4,
        Percepcao: 5,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 2,
        Intimidacao: 4,
        Perspicacia: 5,
        Manha: 4,
        Labia: 6,
        LutaCega: 5,
        Conducao: 2,
        Lideranca: 2,
        Seguranca: 6,
        Furtividade: 6,
        Sobrevivencia: 4,
        NovasPericias: pericias,
        NovosTalentos: [],
        NovosConhecimentos: [],
        Arena: 5,
        Computador: 4,
        Investigacao: 4,
        Medicina: 2,
        Misterios: 3,
        Estilos: 3,
        Soco: 5,
        Chute: 6,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 6,
        Foco: 3,
        Armas: armas,
        Gloria: 9,
        Honra: 8,
        Chi: 7,
        ForcaVontade: 10,
        Divisao: "Duelistas",
        Antecedentes: antecedentes,
        NovasTecnicas: tecnicas,
        ManobrasEspeciais: "Airt Throw, Chi Blast, Disengage, Dirty Fighting, Double Heel Stomp, Ear Pop, Empty Step, Flying Heel Stomp, Flying Thrust Kick, Foot Sweep, Jump, Kippup, Neck Breaker, Power Uppercut, Slide Kick, Spin Kick, Ki Blade, Throw",
        Combos: "Double Heel Stomp para Arremesso Fierce; Short para Forward para Roundhouse (Dizzy); Jab para Strong para Fierce (Dizzy)",
        Saude: 20,
        Posto: 10
    };
    return ibuki;
}

var npc;
if (getParameterByName('age') === 'sf5')
    npc = IbukiSF5();
else
    npc = IbukiSF4();
npc = calcPC(npc);