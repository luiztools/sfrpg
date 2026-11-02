function RolentoZ3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Staff", 5);
    antecedentes[1] = newCaracteristica("Apoio", 3);
    antecedentes[2] = newCaracteristica("Arena", 3);
    antecedentes[3] = newCaracteristica("Contatos", 5);
    antecedentes[4] = newCaracteristica("Fama", 1);
    antecedentes[5] = newCaracteristica("Recursos", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 5);
    tecnicas[1] = newCaracteristica("Faca", 4);
    tecnicas[2] = newCaracteristica("Arremesso", 4);
    tecnicas[3] = newCaracteristica("Bastão", 5);

    const armas = [];
    armas[0] = "Tonfa de Ferro";
    armas[1] = "Faca";
    armas[2] = "Granada";
    armas[3] = "Garrote";

    const rolento = {
        Nome: "Rolento F. Schugerg",
        Estilo: "Forças Especiais (Bojutsu)",
        Escola: "Exército Americano",
        Jogador: "NPC",
        Assinatura: "Joga uma granada no oponente caído",
        Conceito: "Revolucionário",
        Cronica: "Street Fighter Alpha",
        Equipe: "Mad Gear",
        Time: "Mad Gear",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 5,
        Aparencia: 2,
        Percepcao: 4,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 3,
        Interrogacao: 5,
        Intimidacao: 4,
        Perspicacia: 2,
        Manha: 5,
        Labia: 4,
        LutaCega: 1,
        Conducao: 4,
        Lideranca: 4,
        Seguranca: 5,
        Furtividade: 3,
        Sobrevivencia: 4,
        Arena: 3,
        Computador: 2,
        Investigacao: 3,
        Medicina: 1,
        Misterios: 0,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 5,
        Esportes: 4,
        Foco: 2,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Weapon Sweep, Throw, Air Throw, Spinning Weapon",
        Combos: "Faca Arremessada para Granada; Spinning Weapon para Spinning Weapon para Spinning Weapon (Dizzy)",
        Gloria: 6,
        Honra: 3,
        Chi: 3,
        ForcaVontade: 9,
        Saude: 18,
        Divisao: "Duelistas",
        Posto: 6
    };
    return rolento;
}

function RolentoSF4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Staff", 5);
    antecedentes[1] = newCaracteristica("Apoio", 2);
    antecedentes[2] = newCaracteristica("Arena", 2);
    antecedentes[3] = newCaracteristica("Contatos", 5);
    antecedentes[4] = newCaracteristica("Fama", 2);
    antecedentes[5] = newCaracteristica("Recursos", 1);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 5);
    tecnicas[1] = newCaracteristica("Faca", 5);
    tecnicas[2] = newCaracteristica("Arremesso", 5);
    tecnicas[3] = newCaracteristica("Bastão", 5);

    const armas = [];
    armas[0] = "Tonfa de Ferro";
    armas[1] = "Faca";
    armas[2] = "Faca Arremessada";
    armas[3] = "Granada";
    armas[4] = "Garrote";

    const rolento = {
        Nome: "Rolento F. Schugerg",
        Estilo: "Forças Especiais (Bojutsu)",
        Escola: "Exército Americano",
        Jogador: "NPC",
        Assinatura: "Joga uma granada no oponente caído",
        Conceito: "Revolucionário",
        Cronica: "Street Fighter 4",
        Equipe: "",
        Time: "",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 5,
        Aparencia: 2,
        Percepcao: 4,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 5,
        Intimidacao: 4,
        Perspicacia: 3,
        Manha: 5,
        Labia: 5,
        LutaCega: 1,
        Conducao: 5,
        Lideranca: 5,
        Seguranca: 5,
        Furtividade: 3,
        Sobrevivencia: 5,
        Arena: 4,
        Computador: 2,
        Investigacao: 3,
        Medicina: 1,
        Misterios: 0,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 5,
        Esportes: 4,
        Foco: 2,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Weapon Sweep, Throw, Air Throw, Spinning Weapon",
        Combos: "Faca Arremessada para Granada; Spinning Weapon para Spinning Weapon para Spinning Weapon (Dizzy)",
        Gloria: 7,
        Honra: 4,
        Chi: 4,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 7
    };
    return rolento;
}

let npc;
if (getParameterByName('age') === 'sfa')
    npc = RolentoZ3();
else
    npc = RolentoSF4();

npc = calcPC(npc);