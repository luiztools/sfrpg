function SodomFF1() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 1);
    antecedentes[1] = newCaracteristica("Fama", 2);
    antecedentes[2] = newCaracteristica("Recursos", 3);
    antecedentes[3] = newCaracteristica("Aliados", 5);
    antecedentes[4] = newCaracteristica("Apoio", 4);
    antecedentes[5] = newCaracteristica("Contatos", 4);

    var tecnicas = [];
    tecnicas[0] = newCaracteristica("Faca", 5);
    tecnicas[1] = newCaracteristica("Espada", 4);
    tecnicas[2] = newCaracteristica("Mangual", 3);

    var armas = [];
    armas[0] = "Katana";
    armas[1] = "Faca";
    armas[2] = "Nunchaku";

    var sodom =
    {
        Nome: "Sodom",
        Estilo: "Ninjitsu (Kenjutsu)",
        Escola: "Desconhecida",
        Conceito: "Kabuki",
        Assinatura: "Cumprimento Oriental",
        Cronica: "Final Fight 1",
        Time: "Mad Gear",
        Equipe: "Mad Gear",
        Jogador: "NPC",
        Forca: 6,
        Destreza: 4,
        Vigor: 6,
        Carisma: 1,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 3,
        Prontidao: 3,
        Intimidacao: 5,
        Perspicacia: 2,
        Manha: 3,
        LutaCega: 3,
        Lideranca: 3,
        Furtividade: 2,
        Sobrevivencia: 2,
        Arena: 2,
        Investigacao: 3,
        Misterios: 1,
        Estilos: 3,
        Conducao: 5,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 5,
        Esportes: 3,
        Foco: 3,
        Armas: armas,
        NovasTecnicas: tecnicas,
        ManobrasEspeciais: "Jump, Slide Kick, Throw, Suplex, Air Suplex, Butsumetsu Buster, Daikyou Burning, Breakfall, Rekka Ken",
        Combos: "Bloqueio para Butsumetsu Buster;",
        Chi: 5,
        ForcaVontade: 6,
        Saude: 20,
        Posto: 6,
        Divisao: "Duelistas",
        Honra: 2,
        Gloria: 4
    };
    return sodom;
}

function SodomZ3() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 1);
    antecedentes[1] = newCaracteristica("Fama", 2);
    antecedentes[2] = newCaracteristica("Recursos", 2);
    antecedentes[3] = newCaracteristica("Aliados", 4);
    antecedentes[4] = newCaracteristica("Apoio", 3);
    antecedentes[5] = newCaracteristica("Contatos", 3);

    var tecnicas = [];
    tecnicas[0] = newCaracteristica("Faca", 5);
    tecnicas[1] = newCaracteristica("Espada", 4);
    tecnicas[2] = newCaracteristica("Mangual", 3);

    var armas = [];
    armas[0] = "Katana";
    armas[1] = "Faca";
    armas[2] = "Nunchaku";

    var sodom =
    {
        Nome: "Sodom",
        Estilo: "Ninjitsu (Kenjutsu)",
        Escola: "Desconhecida",
        Conceito: "Kabuki",
        Assinatura: "Cumprimento Oriental",
        Cronica: "Street Fighter Alpha",
        Time: "Nenhum",
        Equipe: "Nenhuma",
        Jogador: "NPC",
        Forca: 6,
        Destreza: 4,
        Vigor: 6,
        Carisma: 1,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 4,
        Inteligencia: 2,
        Raciocinio: 3,
        Prontidao: 3,
        Intimidacao: 5,
        Perspicacia: 2,
        Manha: 3,
        LutaCega: 3,
        Lideranca: 3,
        Furtividade: 2,
        Sobrevivencia: 2,
        Arena: 3,
        Investigacao: 3,
        Misterios: 2,
        Estilos: 3,
        Conducao: 5,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 3,
        Foco: 3,
        Armas: armas,
        NovasTecnicas: tecnicas,
        ManobrasEspeciais: "Jump, Slide Kick, Throw, Suplex, Air Suplex, Butsumetsu Buster, Daikyou Burning, Breakfall, Rekka Ken",
        Combos: "Bloqueio para Butsumetsu Buster; Bloqueio para Daikyou Burning",
        Chi: 6,
        ForcaVontade: 7,
        Saude: 20,
        Posto: 7,
        Divisao: "Duelistas",
        Honra: 2,
        Gloria: 5
    };
    return sodom;
}


var npc;
if (getParameterByName('age') === 'ff1')
    npc = SodomFF1();
else
    npc = SodomZ3();
npc = calcPC(npc);