function CarlosFF2() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Recursos", 3);
    antecedentes[2] = newCaracteristica("Fama", 1);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Espada", 4);

    const armas = [];
    armas[0] = "Katana";

    const carlos =
    {
        Nome: "Carlos Miyamoto",
        Estilo: "Karatê Shotokan",
        Escola: "Professor de Kenjutsu",
        Conceito: "Andarilho",
        Assinatura: "Guarda a espada",
        Time: "Final Fight",
        Jogador: "NPC",
        Cronica: "Final Fight 2",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 2,
        Interrogacao: 3,
        Intimidacao: 4,
        Perspicacia: 4,
        Manha: 3,
        Labia: 2,
        LutaCega: 2,
        Conducao: 1,
        Lideranca: 1,
        Seguranca: 0,
        Furtividade: 3,
        Sobrevivencia: 4,
        Arena: 1,
        Computador: 2,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 4,
        Estilos: 5,
        Antecedentes: antecedentes,
        NovasTecnicas: tecnicas,
        Armas: armas,
        Soco: 4,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 4,
        Foco: 3,
        ManobrasEspeciais: "Jump, Throw, Knee Basher, Back Roll Throw, Regeneration, Spinning Weapon, Kippup",
        Combos: "Jab para Strong para Roundhouse (Dizzy); Jab para Strong para Back Roll Throw (Dizzy); Bloqueio para Spinning Weapon (Dizzy)",
        Posto: 5,
        Gloria: 6,
        Honra: 5,
        Divisao: "Duelistas",
        Chi: 7,
        ForcaVontade: 8,
        Saude: 18
    };
    return carlos;
}

function CarlosSF6() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Recursos", 3);
    antecedentes[2] = newCaracteristica("Fama", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Espada", 5);

    const armas = [];
    armas[0] = "Katana";

    const carlos =
    {
        Nome: "Carlos Miyamoto",
        Estilo: "Karatê Shotokan",
        Escola: "Professor de Kenjutsu",
        Conceito: "Andarilho",
        Assinatura: "Guarda a espada",
        Time: "Final Fight",
        Jogador: "NPC",
        Cronica: "Street Fighter 6",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 3,
        Interrogacao: 3,
        Intimidacao: 4,
        Perspicacia: 5,
        Manha: 4,
        Labia: 2,
        LutaCega: 3,
        Conducao: 1,
        Lideranca: 2,
        Seguranca: 0,
        Furtividade: 3,
        Sobrevivencia: 4,
        Arena: 2,
        Computador: 2,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 4,
        Estilos: 5,
        Antecedentes: antecedentes,
        NovasTecnicas: tecnicas,
        Armas: armas,
        Soco: 4,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 4,
        Foco: 3,
        ManobrasEspeciais: "Jump, Throw, Knee Basher, Back Roll Throw, Regeneration, Spinning Weapon, Kippup",
        Combos: "Jab para Strong para Roundhouse (Dizzy); Jab para Strong para Back Roll Throw (Dizzy); Bloqueio para Spinning Weapon (Dizzy)",
        Posto: 6,
        Gloria: 7,
        Honra: 6,
        Divisao: "Duelistas",
        Chi: 8,
        ForcaVontade: 9,
        Saude: 20
    };
    return carlos;
}

let npc;
if (getParameterByName('age') === 'ff2')
    npc = CarlosFF2();
else
    npc = CarlosSF6();
npc = calcPC(npc);