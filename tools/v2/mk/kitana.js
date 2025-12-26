function Kitana() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Apoio", 5);
    antecedentes[2] = newCaracteristica("Fama", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Leque", 5);
    tecnicas[1] = newCaracteristica("Arremesso", 5);

    const armas = ["Leque", "Leque Arremessado"];

    const talentos = [];
    talentos[0] = newCaracteristica("Procurar", 2);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Linguística", 1);

    const personagem =
    {
        Nome: "Kitana",
        Estilo: "Kung Fu",
        Escola: "Shao Kahn",
        Equipe: "Nenhuma",
        Time: "Nenhuma",
        Conceito: "Princesa de Edênia",
        Assinatura: "Abre os leques",
        Jogador: "NPC",
        Cronica: "Mortal Kombat",
        Forca: 4,
        Destreza: 7,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 4,
        Aparencia: 5,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 5,
        Perspicacia: 5,
        Manha: 2,
        Interrogacao: 0,
        Intimidacao: 0,
        Labia: 0,
        LutaCega: 5,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 5,
        Sobrevivencia: 3,
        Arena: 4,
        Computador: 0,
        Investigacao: 3,
        Medicina: 0,
        Misterios: 5,
        Estilos: 3,
        NovosTalentos: talentos,
        NovosConhecimentos: conhecimentos,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 6,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 6,
        Foco: 3,
        NovasTecnicas: tecnicas,
        Armas: armas,
        Divisao: "Duelistas",
        Posto: 8,
        Gloria: 3,
        Honra: 7,
        Chi: 6,
        ForcaVontade: 10,
        Saude: 20,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Power Uppercut, Throw, Back Roll Throw, Wall Spring, Stunning Shout",
        Combos: "Jab para Short para Leque Fierce; Stunning Shout para Power Uppercut; Forward para Forward para Roundhouse (Dizzy); Jab para Jab para Forward (Dizzy);"
    };
    return personagem;
}

function KitanaMKA() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Apoio", 5);
    antecedentes[2] = newCaracteristica("Fama", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Leque", 5);
    tecnicas[1] = newCaracteristica("Arremesso", 5);

    const armas = ["Leque", "Leque Arremessado"];

    const talentos = [];
    talentos[0] = newCaracteristica("Procurar", 2);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Linguística", 1);

    const personagem =
    {
        Nome: "Kitana",
        Estilo: "Kung Fu",
        Escola: "Shao Kahn",
        Equipe: "Nenhuma",
        Time: "Nenhuma",
        Conceito: "Princesa de Edênia",
        Assinatura: "Abre os leques",
        Jogador: "NPC",
        Cronica: "Mortal Kombat X",
        Forca: 4,
        Destreza: 7,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 4,
        Aparencia: 5,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 5,
        Perspicacia: 5,
        Manha: 2,
        Interrogacao: 0,
        Intimidacao: 0,
        Labia: 0,
        LutaCega: 5,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 5,
        Sobrevivencia: 3,
        Arena: 4,
        Computador: 0,
        Investigacao: 3,
        Medicina: 0,
        Misterios: 5,
        Estilos: 3,
        NovosTalentos: talentos,
        NovosConhecimentos: conhecimentos,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 6,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 6,
        Foco: 3,
        NovasTecnicas: tecnicas,
        Armas: armas,
        Divisao: "Duelistas",
        Posto: 9,
        Gloria: 3,
        Honra: 7,
        Chi: 6,
        ForcaVontade: 10,
        Saude: 20,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Throw, Back Roll Throw, Wall Spring, Stunning Shout, Power Uppercut, Dragon Punch, Jumping Shoulder Butt, Missile Reflection, Energy Reflection",
        Combos: "Jab para Short para Leque Fierce; Stunning Shout para Power Uppercut; Forward para Forward para Roundhouse (Dizzy); Jab para Jab para Forward (Dizzy);"
    };
    return personagem;
}

let npc;
if (getParameterByName('age') === 'mkx')
    npc = calcPC(KitanaMKX());
else
    npc = calcPC(Kitana());