function RoseZ3() {
    var antecedentes = [5];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Arena", 3);
    antecedentes[2] = newCaracteristica("Fama", 3);
    antecedentes[3] = newCaracteristica("Recursos", 3);
    antecedentes[4] = newCaracteristica("Paranormal", 4);

    var tecnicas = [1];
    tecnicas[0] = newCaracteristica("Chicote", 5);

    var rose =
    {
        Nome: "Rose",
        Estilo: "Soul Power",
        Escola: "Professor Particular",
        Conceito: "Feiticeira",
        Assinatura: "Soul Illusion",
        Cronica: "Street Fighter Alpha",
        Jogador: "NPC",
        Forca: 4,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 5,
        Percepcao: 5,
        Inteligencia: 5,
        Raciocinio: 5,
        Interrogacao: 3,
        Perspicacia: 3,
        Manha: 3,
        Labia: 4,
        LutaCega: 2,
        Conducao: 2,
        Lideranca: 2,
        Furtividade: 3,
        Arena: 3,
        Computador: 2,
        Investigacao: 1,
        Medicina: 2,
        Misterios: 5,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 4,
        Foco: 5,
        NovasTecnicas: tecnicas,
        ManobrasEspeciais: "Telekinesis, Jump, Soul Throw, Throw, Air Throw, Hair Throw, Soul Spiral, Slide Kick, Psychokinetic Channeling, Soul Spark, Missile Reflection, Energy Reflection, Power Uppercut, Telepathy, Soul Illusion, Ashura Senkuu",
        Combos: "Energy Reflection para Soul Spark (dizzy), Slide Kick para Soul Spiral (dizzy), Short para Soul Throw, Short para Short (dizzy)",
        Chi: 10,
        ForcaVontade: 7,
        Saude: 20,
        Posto: 7,
        Divisao: "Estilo Livre",
        Gloria: 5,
        Honra: 7
    };
    return rose;
}

function RoseSF4() {
    var antecedentes = [5];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Arena", 4);
    antecedentes[2] = newCaracteristica("Fama", 4);
    antecedentes[3] = newCaracteristica("Recursos", 3);
    antecedentes[4] = newCaracteristica("Paranormal", 5);

    var tecnicas = [1];
    tecnicas[0] = newCaracteristica("Chicote", 5);

    var rose =
    {
        Nome: "Rose",
        Estilo: "Soul Power",
        Escola: "Professor Particular",
        Conceito: "Feiticeira",
        Assinatura: "Soul Illusion",
        Cronica: "Street Fighter 4",
        Jogador: "NPC",
        Forca: 4,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 5,
        Percepcao: 5,
        Inteligencia: 6,
        Raciocinio: 6,
        Interrogacao: 3,
        Perspicacia: 3,
        Manha: 3,
        Labia: 4,
        LutaCega: 3,
        Conducao: 2,
        Lideranca: 2,
        Furtividade: 3,
        Arena: 3,
        Computador: 2,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 5,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 4,
        Foco: 6,
        NovasTecnicas: tecnicas,
        ManobrasEspeciais: "Telekinesis, Jump, Soul Throw, Throw, Air Throw, Hair Throw, Soul Spiral, Slide Kick, Psychokinetic Channeling, Soul Spark, Missile Reflection, Energy Reflection, Power Uppercut, Telepathy, Soul Illusion, Ashura Senkuu",
        Combos: "Energy Reflection para Soul Spark (dizzy), Slide Kick para Soul Spiral (dizzy), Short para Soul Throw, Short para Short (dizzy); Bloqueio para Soul Spark",
        Chi: 10,
        ForcaVontade: 8,
        Saude: 20,
        Posto: 9,
        Divisao: "Estilo Livre",
        Gloria: 6,
        Honra: 8
    };
    return rose;
}

var npc;
if (getParameterByName('age') === 'sfa')
    npc = RoseZ3();
else
    npc = RoseSF4();

npc = calcPC(npc);