function IbukiSF5() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Mascote", 3);
    antecedentes[1] = newCaracteristica("Aliados", 5);
    antecedentes[2] = newCaracteristica("Contatos", 3);
    antecedentes[3] = newCaracteristica("Herança de Clã", 5);
    antecedentes[4] = newCaracteristica("Recursos", 2);

    var tecnicas = [];
    tecnicas[0] = newCaracteristica("Arremesso", 6);

    var pericias = [];

    var armas = [];
    armas[0] = "Kunai";

    var ibuki = {
        Nome: "Ibuki",
        Estilo: "Ninjitsu",
        Escola: "Dojô do Clã",
        Jogador: "NPC",
        Assinatura: "Bomba de fumaça",
        Conceito: "Estudante Ninja",
        Cronica: "Street Fighter 5",
        Forca: 4,
        Destreza: 7,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 4,
        Aparencia: 3,
        Percepcao: 5,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 5,
        Interrogacao: 2,
        Intimidacao: 0,
        Perspicacia: 3,
        Manha: 3,
        Labia: 2,
        NovosTalentos: [],
        LutaCega: 5,
        Conducao: 1,
        Lideranca: 2,
        Seguranca: 4,
        Furtividade: 5,
        Sobrevivencia: 3,
        NovasPericias: pericias,
        Arena: 2,
        Computador: 1,
        Investigacao: 4,
        Medicina: 2,
        Misterios: 3,
        Estilos: 2,
        NovosConhecimentos: [],
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 6,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 6,
        Foco: 4,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Air Throw, Handstand Kick, Spin Kick, Flying Thrust Kick, Throw, Thigh Press, Ducking Fierce, Foot Sweep, Kippup, Power Uppercut, Slide Kick, Missile Reflection, Shrouded Moon, Energy Ball, Disengage, Empty Step, Double Jump, Balance",
        Combos: "Kunai para Kunai (dizzy), Slide Kick para Flying Thrust Kick, Spin Kick para Energy Ball (dizzy), Missile Reflection para Kunai (dizzy), Shrouded Moon para Thigh Press",
        Gloria: 6,
        Honra: 7,
        Chi: 5,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 9
    };
    return ibuki;
}

function IbukiSF4() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Mascote", 3);
    antecedentes[1] = newCaracteristica("Aliados", 4);
    antecedentes[2] = newCaracteristica("Contatos", 2);
    antecedentes[3] = newCaracteristica("Herança de Clã", 5);
    antecedentes[4] = newCaracteristica("Recursos", 2);

    var tecnicas = [];
    tecnicas[0] = newCaracteristica("Arremesso", 5);

    var pericias = [];

    var armas = [];
    armas[0] = "Kunai";

    var ibuki = {
        Nome: "Ibuki",
        Estilo: "Ninjitsu",
        Escola: "Dojô do Clã",
        Jogador: "NPC",
        Assinatura: "Bomba de fumaça",
        Conceito: "Estudante Ninja",
        Cronica: "Street Fighter 4",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 4,
        Aparencia: 3,
        Percepcao: 5,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 5,
        Interrogacao: 2,
        Intimidacao: 0,
        Perspicacia: 3,
        Manha: 2,
        Labia: 2,
        NovosTalentos: [],
        LutaCega: 5,
        Conducao: 1,
        Lideranca: 1,
        Seguranca: 4,
        Furtividade: 5,
        Sobrevivencia: 3,
        NovasPericias: pericias,
        Arena: 2,
        Computador: 1,
        Investigacao: 4,
        Medicina: 2,
        Misterios: 2,
        Estilos: 2,
        NovosConhecimentos: [],
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 5,
        Esportes: 6,
        Foco: 4,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Air Throw, Handstand Kick, Spin Kick, Flying Thrust Kick, Throw, Thigh Press, Ducking Fierce, Foot Sweep, Kippup, Power Uppercut, Slide Kick, Missile Reflection, Shrouded Moon, Energy Ball, Disengage, Empty Step, Double Jump, Balance",
        Combos: "Kunai para Kunai (dizzy), Slide Kick para Flying Thrust Kick, Spin Kick para Energy Ball (dizzy), Missile Reflection para Kunai (dizzy), Shrouded Moon para Thigh Press",
        Gloria: 5,
        Honra: 6,
        Chi: 4,
        ForcaVontade: 7,
        Saude: 18,
        Divisao: "Duelistas",
        Posto: 8
    };
    return ibuki;
}

var npc;
if (getParameterByName('age') === 'sf5' || getParameterByName('age') === 'sf3')
    npc = IbukiSF5();
else
    npc = IbukiSF4();
npc = calcPC(npc);