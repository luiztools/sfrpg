function MakiFF2() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Sensei", 5);
    antecedentes[2] = newCaracteristica("Herança de Clã", 5);

    var tecnicas = [];
    tecnicas[0] = newCaracteristica("Bastão", 5);

    var armas = [];
    armas[0] = "Tonfa";

    var maki =
    {
        Nome: "Maki Genryusai",
        Estilo: "Ninjitsu (Bojutsu)",
        Escola: "Bushinryu Ninpou",
        Conceito: "Kunoichi",
        Assinatura: "Pula de alegria!",
        Cronica: "Final Fight 2",
        Time: "Final Fight",
        Equipe: "Nenhuma",
        Jogador: "NPC",
        Forca: 3,
        Destreza: 6,
        Vigor: 3,
        Carisma: 5,
        Manipulacao: 3,
        Aparencia: 5,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 4,
        Seguranca: 1,
        Computador: 1,
        Prontidao: 3,
        Perspicacia: 3,
        Manha: 3,
        Labia: 3,
        LutaCega: 4,
        Furtividade: 3,
        Sobrevivencia: 2,
        Investigacao: 1,
        Medicina: 2,
        Misterios: 1,
        Estilos: 2,
        Conducao: 2,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 3,
        Bloqueio: 3,
        Apresamento: 3,
        Esportes: 5,
        Foco: 2,
        Armas: armas,
        NovasTecnicas: tecnicas,
        ManobrasEspeciais: "Jump, Fist Sweep, Throw, Suplex, Air Suplex, Knee Basher, Elbow Smash, Rekka Ken, Slide Kick, Heel Stamp, Kippup, Power Uppercut, Spinning Baton",
        Combos: "Spinning Baton para Spinning Baton (Dizzy), Rekka Ken para Throw, Throw para Slide Kick",
        Posto: 6,
        Gloria: 3,
        Honra: 5,
        Divisao: "Duelistas",
        Chi: 3,
        ForcaVontade: 6,
        Saude: 17
    };
    return maki;
}

function MakiZ3() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Sensei", 5);
    antecedentes[2] = newCaracteristica("Herança de Clã", 5);

    var tecnicas = [];
    tecnicas[0] = newCaracteristica("Bastão", 5);

    var armas = [];
    armas[0] = "Tonfa";

    var maki =
    {
        Nome: "Maki Genryusai",
        Estilo: "Ninjitsu (Bojutsu)",
        Escola: "Bushinryu Ninpou",
        Conceito: "Kunoichi",
        Assinatura: "Pula de alegria!",
        Cronica: "Street Fighter Alpha",
        Time: "Final Fight",
        Equipe: "Nenhuma",
        Jogador: "NPC",
        Forca: 3,
        Destreza: 6,
        Vigor: 3,
        Carisma: 5,
        Manipulacao: 3,
        Aparencia: 5,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 4,
        Seguranca: 1,
        Computador: 1,
        Prontidao: 3,
        Perspicacia: 3,
        Manha: 4,
        Labia: 3,
        LutaCega: 4,
        Furtividade: 3,
        Sobrevivencia: 2,
        Investigacao: 1,
        Medicina: 2,
        Misterios: 1,
        Estilos: 2,
        Conducao: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 3,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 5,
        Foco: 2,
        Armas: armas,
        NovasTecnicas: tecnicas,
        ManobrasEspeciais: "Jump, Fist Sweep, Throw, Suplex, Air Suplex, Knee Basher, Elbow Smash, Rekka Ken, Slide Kick, Heel Stamp, Kippup, Power Uppercut, Spinning Baton",
        Combos: "Spinning Baton para Spinning Baton (Dizzy), Rekka Ken para Throw, Throw para Slide Kick, Heel Stamp para Throw",
        Posto: 7,
        Gloria: 4,
        Honra: 6,
        Divisao: "Duelistas",
        Chi: 4,
        ForcaVontade: 7,
        Saude: 18
    };
    return maki;
}

var npc;
if (getParameterByName('age') === 'ff2')
    npc = MakiFF2();
else
    npc = MakiZ3();

npc = calcPC(npc);