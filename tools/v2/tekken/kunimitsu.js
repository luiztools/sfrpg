function KunimitsuITk1() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Contatos", 3);
    antecedentes[1] = newCaracteristica("Herança de Clã", 3);
    antecedentes[2] = newCaracteristica("Recursos", 2);
    antecedentes[3] = newCaracteristica("Fama", 1);
    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Faca", 5);
    tecnicas[1] = newCaracteristica("Arremesso", 4);
    const armas = [];
    armas[0] = "Kunai";
    armas[1] = "Kunai Arremessada";
    const pericias = [];
    pericias[0] = newCaracteristica("Mecânica", 3);
    pericias[1] = newCaracteristica("Reparos", 3);

    return {
        Nome: "Kunimitsu I",
        Estilo: "Ninjitsu",
        Escola: "Clã Manji",
        Jogador: "NPC",
        Assinatura: "Esconde o rosto atrás da máscara de raposa e aponta a kunai para o oponente.",
        Conceito: "Ladra",
        Cronica: "Tekken 2",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 0,
        Percepcao: 5,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 1,
        Intimidacao: 2,
        Perspicacia: 3,
        Manha: 4,
        Labia: 3,
        LutaCega: 2,
        Conducao: 1,
        Lideranca: 1,
        Seguranca: 4,
        Furtividade: 5,
        Sobrevivencia: 2,
        Arena: 1,
        Computador: 2,
        Investigacao: 2,
        Medicina: 1,
        Misterios: 2,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 5,
        Foco: 4,
        NovasTecnicas: tecnicas,
        NovasPericias: pericias,
        Armas: armas,
        ManobrasEspeciais: "Double Hit Punch, Double Hit Kick, Slide Kick, Foot Sweep, Cartwheel Kick, Flying Thrust Kick, Weapon Uppercut, Jump, Kippup, Throw, Air Throw, Yoga Flame, Shrouded Moon",
        Combos: "Double Hit Punch para Double Hit Kick (dizzy), Kunai Jab para Weapon Uppercut, Shrouded Moon para Kunai Fierce (dizzy), Shrouded Moon para Slide Kick para Foot Sweep, Kunai Arremessada para Yoga Flame",
        Gloria: 3,
        Honra: 3,
        Chi: 6,
        ForcaVontade: 6,
        Saude: 18,
        Divisao: "Duelistas",
        Posto: 5
    };
}

function KunimitsuIITk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 1);
    antecedentes[1] = newCaracteristica("Contatos", 2);
    antecedentes[2] = newCaracteristica("Herança de Clã", 3);
    antecedentes[3] = newCaracteristica("Recursos", 1);
    antecedentes[4] = newCaracteristica("Fama", 2);
    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Faca", 5);
    tecnicas[1] = newCaracteristica("Espada", 4);
    tecnicas[2] = newCaracteristica("Arremesso", 4);
    const armas = [];
    armas[0] = "Faca";
    armas[1] = "Ninjato";
    armas[2] = "Kunai Arremessada";
    const pericias = [];
    pericias[0] = newCaracteristica("Disfarce", 3);

    return {
        Nome: "Kunimitsu II",
        Estilo: "Ninjitsu",
        Escola: "Clã Manji",
        Jogador: "NPC",
        Assinatura: "Junta as mãos num selo ninja e some numa nuvem de pétalas.",
        Conceito: "Kunoichi",
        Cronica: "Tekken 7",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 0,
        Percepcao: 5,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 1,
        Intimidacao: 2,
        Perspicacia: 3,
        Manha: 3,
        Labia: 4,
        LutaCega: 2,
        Conducao: 1,
        Lideranca: 1,
        Seguranca: 4,
        Furtividade: 5,
        Sobrevivencia: 2,
        Arena: 1,
        Computador: 2,
        Investigacao: 3,
        Medicina: 1,
        Misterios: 2,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 5,
        Foco: 4,
        NovasTecnicas: tecnicas,
        NovasPericias: pericias,
        Armas: armas,
        ManobrasEspeciais: "Double Hit Punch, Double Hit Kick, Slide Kick, Foot Sweep, Cartwheel Kick, Flying Thrust Kick, Weapon Uppercut, Jump, Kippup, Throw, Air Throw, Yoga Flame, Shrouded Moon",
        Combos: "Double Hit Punch para Double Hit Kick (dizzy), Faca Jab para Weapon Uppercut, Shrouded Moon para Espada Fierce (dizzy), Shrouded Moon para Slide Kick para Foot Sweep, Kunai Arremessada para Yoga Flame",
        Gloria: 4,
        Honra: 4,
        Chi: 7,
        ForcaVontade: 7,
        Saude: 18,
        Divisao: "Duelistas",
        Posto: 6
    };
}

function KunimitsuIITk8() {
    const personagem = KunimitsuIITk4();
    personagem.Cronica = "Tekken 8";
    personagem.NovasTecnicas = personagem.NovasTecnicas.map(t => t.Nome === "Espada" ? newCaracteristica("Espada", 5) : t);
    personagem.Gloria = 5;
    personagem.Chi = 8;
    personagem.ForcaVontade = 8;
    personagem.Saude = 20;
    personagem.Posto = 7;
    return personagem;
}

let npc;
if (getParameterByName('age') === 'tk1') npc = KunimitsuITk1();
else if (getParameterByName('age') === 'tk8') npc = KunimitsuIITk8();
else npc = KunimitsuIITk4();
npc = calcPC(npc);
