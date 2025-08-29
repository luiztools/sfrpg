function LadyDeath() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 3);
    antecedentes[1] = newCaracteristica("Apoio", 5);
    antecedentes[2] = newCaracteristica("Contatos", 4);
    antecedentes[3] = newCaracteristica("Recursos", 5);
    antecedentes[4] = newCaracteristica("Sensei", 5);
    antecedentes[5] = newCaracteristica("Staff", 5);
    antecedentes[6] = newCaracteristica("Psycho Power", 5);

    const personagem = {
        Nome: "Lady Death",
        Estilo: "Ler Drit",
        Escola: "Shadaloo",
        Time: "Punho das Sombras",
        Conceito: "Aluna de Bison",
        Jogador: "NPC",
        Equipe: "Nenhuma",
        Assinatura: "Dá as costas",
        Forca: 5,
        Destreza: 5,
        Vigor: 6,
        Carisma: 3,
        Manipulacao: 5,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 6,
        Intimidacao: 3,
        Perspicacia: 2,
        Manha: 2,
        Labia: 5,
        LutaCega: 3,
        Conducao: 2,
        Lideranca: 4,
        Seguranca: 1,
        Furtividade: 4,
        Sobrevivencia: 3,
        Arena: 3,
        Computador: 2,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 4,
        Estilos: 5,
        Soco: 4,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 5,
        Foco: 5,
        Antecedentes: antecedentes,
        Gloria: 5,
        Honra: 1,
        Posto: 8,
        Divisao: "Estilo Livre",
        Chi: 10,
        ForcaVontade: 8,
        Saude: 17,
        ManobrasEspeciais: "Psychokinetic Channeling, Flying Heel Stomp, Ear Pop, Mind Control, Flying Knee Thrust, Jump, Mind Reading, Psycho Crusher, Forward Slide Kick, Iron Claw, Scissor Kick, Psychic Vise, Handstand Kick, Ducking Fierce, Energy Reflection, Throw, Missile Reflection",
        Combos: "Scissor Kick para handstand Kick para Roundhouse (Dizzy); Bloqueio para Psycho Crusher; Forward Slide Kick para Jab para Iron Claw (Dizzy)"
    };
    return personagem;
}

function LadyDeathOrochi() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 3);
    antecedentes[1] = newCaracteristica("Apoio", 5);
    antecedentes[2] = newCaracteristica("Contatos", 4);
    antecedentes[3] = newCaracteristica("Recursos", 5);
    antecedentes[4] = newCaracteristica("Sensei", 5);
    antecedentes[5] = newCaracteristica("Staff", 5);
    antecedentes[6] = newCaracteristica("Psycho Power", 5);

    const personagem = {
        Nome: "Lady Death (Orochi)",
        Estilo: "Ler Drit",
        Escola: "Shadaloo",
        Time: "Punho das Sombras",
        Conceito: "Sangue de Orochi",
        Jogador: "NPC",
        Equipe: "Nenhuma",
        Assinatura: "Mata seu oponente",
        Forca: 6,
        Destreza: 6,
        Vigor: 7,
        Carisma: 2,
        Manipulacao: 4,
        Aparencia: 4,
        Percepcao: 5,
        Inteligencia: 6,
        Raciocinio: 6,
        Prontidao: 3,
        Interrogacao: 5,
        Intimidacao: 2,
        Perspicacia: 1,
        Manha: 1,
        Labia: 4,
        LutaCega: 2,
        Conducao: 1,
        Lideranca: 3,
        Seguranca: 0,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 2,
        Computador: 1,
        Investigacao: 2,
        Medicina: 1,
        Misterios: 3,
        Estilos: 4,
        Soco: 4,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 5,
        Foco: 5,
        Antecedentes: antecedentes,
        Gloria: 5,
        Honra: 0,
        Posto: 8,
        Divisao: "Estilo Livre",
        Chi: 10,
        ForcaVontade: 8,
        Saude: 20,
        ManobrasEspeciais: "Psychokinetic Channeling, Flying Heel Stomp, Ear Pop, Mind Control, Flying Knee Thrust, Jump, Mind Reading, Psycho Crusher, Forward Slide Kick, Iron Claw, Scissor Kick, Psychic Vise, Handstand Kick, Ducking Fierce, Energy Reflection, Throw, Missile Reflection",
        Combos: "Scissor Kick para handstand Kick para Roundhouse (Dizzy); Bloqueio para Psycho Crusher; Forward Slide Kick para Jab para Iron Claw (Dizzy)"
    };
    return personagem;
}


let npc;
if (getParameterByName('age') === 'orochi')
    npc = LadyDeathOrochi();
else
    npc = LadyDeath();

npc = calcPC(npc);