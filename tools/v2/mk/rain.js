function RainUMK3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 5);
    antecedentes[1] = newCaracteristica("Elemental", 5);

    const tecnicas = [];
    const armas = [];

    const personagem =
    {
        Nome: "Rain",
        Estilo: "Kung Fu",
        Escola: "Outworld",
        Equipe: "Outworld",
        Time: "Outworld",
        Conceito: "Elemental da Água",
        Assinatura: "Levanta o Braço",
        Jogador: "NPC",
        Cronica: "Mortal Kombat 3",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 0,
        Intimidacao: 2,
        Perspicacia: 4,
        Manha: 0,
        Labia: 0,
        LutaCega: 4,
        Conducao: 0,
        Lideranca: 2,
        Seguranca: 0,
        Furtividade: 4,
        Sobrevivencia: 5,
        Arena: 2,
        Computador: 0,
        Investigacao: 0,
        Medicina: 2,
        Misterios: 3,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 5,
        Foco: 6,
        NovasTecnicas: tecnicas,
        Armas: armas,
        Divisao: "Duelistas",
        Posto: 8,
        Gloria: 3,
        Honra: 7,
        Chi: 10,
        ForcaVontade: 7,
        Saude: 20,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Power Uppercut, Throw, Back Roll Throw, Lightning, Shock Treatment, God Invocation",
        Combos: "Jab para Power Uppercut (Dizzy); Short para Forward para Roundhouse (Dizzy); Forward para Forward para Foot Sweep (Dizzy); Jab para Jab para Power Uppercut (Dizzy); Jab para Jab para Forward (dizzy)"
    };
    return personagem;
}

function RainMKA() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 5);
    antecedentes[1] = newCaracteristica("Elemental", 5);

    const tecnicas = [];
    const armas = [];

    const personagem =
    {
        Nome: "Rain",
        Estilo: "Kung Fu",
        Escola: "Outworld",
        Equipe: "Outworld",
        Time: "Outworld",
        Conceito: "Elemental da Água",
        Assinatura: "Levanta o Braço",
        Jogador: "NPC",
        Cronica: "MK Armageddon",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 0,
        Intimidacao: 2,
        Perspicacia: 4,
        Manha: 0,
        Labia: 0,
        LutaCega: 4,
        Conducao: 0,
        Lideranca: 2,
        Seguranca: 0,
        Furtividade: 4,
        Sobrevivencia: 5,
        Arena: 2,
        Computador: 0,
        Investigacao: 0,
        Medicina: 2,
        Misterios: 3,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 5,
        Foco: 6,
        NovasTecnicas: tecnicas,
        Armas: armas,
        Divisao: "Duelistas",
        Posto: 9,
        Gloria: 3,
        Honra: 7,
        Chi: 10,
        ForcaVontade: 7,
        Saude: 20,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Power Uppercut, Throw, Back Roll Throw, Lightning, Shock Treatment, God Invocation, Drench, Elemental Stride, Sense Element, Pool, Envelop, Psychokinetic Channeling",
        Combos: "Jab para Power Uppercut (Dizzy); Short para Forward para Roundhouse (Dizzy); Forward para Forward para Foot Sweep (Dizzy); Jab para Jab para Power Uppercut (Dizzy); Jab para Jab para Forward (dizzy)"
    };
    return personagem;
}

let npc;
if (getParameterByName('age') === 'mk3')
    npc = calcPC(RainUMK3());
else if (getParameterByName('age') === 'mka')
    npc = calcPC(RainMKA());