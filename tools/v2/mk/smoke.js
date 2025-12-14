function SmokeMK3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Apoio", 3);
    antecedentes[2] = newCaracteristica("Cibernético", 5);
    antecedentes[3] = newCaracteristica("Herança do Clã", 4);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Arremesso", 5);

    const armas = ["Granada", "Arpão"];

    const personagem =
    {
        Nome: "Smoke (Ciborgue)",
        Estilo: "Ninjitsu",
        Escola: "Clã Lin-Kuei",
        Equipe: "Lin-Kuei",
        Time: "Lin-Kuei",
        Conceito: "Ninja Ciborgue",
        Assinatura: "Levanta os braços",
        Jogador: "NPC",
        Cronica: "Mortal Kombat 3",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 2,
        Manipulacao: 4,
        Aparencia: 2,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 0,
        Intimidacao: 2,
        Perspicacia: 4,
        Manha: 0,
        Labia: 1,
        LutaCega: 4,
        Conducao: 0,
        Lideranca: 2,
        Seguranca: 0,
        Furtividade: 5,
        Sobrevivencia: 4,
        Arena: 2,
        Computador: 0,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 4,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 4,
        Foco: 6,
        NovasTecnicas: tecnicas,
        Armas: armas,
        Divisao: "Duelistas",
        Posto: 8,
        Gloria: 3,
        Honra: 0,
        Chi: 9,
        ForcaVontade: 9,
        Saude: 20,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Power Uppercut, Throw, Back Roll Throw, Shrouded Moon",
        Combos: "Power Uppercut - Arpão; Forward - Forward - Roundhouse (dizzy); Forward - Forward - Jab (dizzy); Jab - Jab - Power Uppercut (dizzy); Shrouded Moon - Power Uppercut"
    };
    return personagem;
}

function SmokeMK2() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Apoio", 3);
    antecedentes[2] = newCaracteristica("Elemental", 5);
    antecedentes[3] = newCaracteristica("Herança do Clã", 4);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Arremesso", 5);

    const armas = ["Arpão"];

    const personagem =
    {
        Nome: "Smoke (Humano)",
        Estilo: "Ninjitsu",
        Escola: "Clã Lin-Kuei",
        Equipe: "Lin-Kuei",
        Time: "Lin-Kuei",
        Conceito: "Ninja Elemental",
        Assinatura: "Levanta os braços",
        Jogador: "NPC",
        Cronica: "Mortal Kombat 2",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 2,
        Manipulacao: 4,
        Aparencia: 2,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 0,
        Intimidacao: 2,
        Perspicacia: 4,
        Manha: 0,
        Labia: 1,
        LutaCega: 4,
        Conducao: 0,
        Lideranca: 2,
        Seguranca: 0,
        Furtividade: 5,
        Sobrevivencia: 4,
        Arena: 2,
        Computador: 0,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 4,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 4,
        Foco: 6,
        NovasTecnicas: tecnicas,
        Armas: armas,
        Divisao: "Duelistas",
        Posto: 7,
        Gloria: 3,
        Honra: 6,
        Chi: 9,
        ForcaVontade: 9,
        Saude: 20,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Power Uppercut, Throw, Back Roll Throw, Elemental Stride, Sense Element",
        Combos: "Power Uppercut - Arpão; Forward - Forward - Roundhouse (dizzy); Forward - Forward - Jab (dizzy); Jab - Jab - Power Uppercut (dizzy); Elemental Stride - Fierce"
    };
    return personagem;
}

let npc;
if (getParameterByName('age') === 'mk2')
    npc = calcPC(SmokeMK2());
else if (getParameterByName('age') === 'mk3')
    npc = calcPC(SmokeMK3());