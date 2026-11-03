function ShaoKahnMK2() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 5);
    antecedentes[1] = newCaracteristica("Aliados", 4);
    antecedentes[2] = newCaracteristica("Fama", 3);
    antecedentes[3] = newCaracteristica("Recursos", 5);

    const armas = ["Martelo de Guerra"];

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 3);

    const pericias = [];
    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Idiomas", 8);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Martelo", 5);

    const personagem = {
        Nome: "Shao Kahn",
        Estilo: "Thai Kickboxe",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Gargalhada",
        Conceito: "Imperador do Outworld",
        Cronica: "Mortal Kombat 2",
        Equipe: "Nenhuma",
        Time: "Outworld",
        Forca: 9,
        Destreza: 5,
        Vigor: 8,
        Carisma: 1,
        Manipulacao: 5,
        Aparencia: 3,
        Percepcao: 5,
        Inteligencia: 6,
        Raciocinio: 6,
        Prontidao: 5,
        Interrogacao: 3,
        Intimidacao: 8,
        Perspicacia: 6,
        Manha: 2,
        Labia: 4,
        NovosTalentos: talentos,
        LutaCega: 3,
        Conducao: 0,
        Lideranca: 5,
        Seguranca: 2,
        Furtividade: 2,
        Sobrevivencia: 4,
        NovasPericias: pericias,
        Arena: 5,
        Computador: 0,
        Investigacao: 3,
        Medicina: 1,
        Misterios: 8,
        Estilos: 4,
        NovosConhecimentos: conhecimentos,
        Antecedentes: antecedentes,
        Soco: 8,
        Chute: 4,
        Bloqueio: 6,
        Apresamento: 2,
        Esportes: 4,
        Foco: 8,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Tiger Knee, Power Uppercut, Fireball, Improved Fireball, Jumping Shoulder Butt, Brain Cracker, Leech, Absorb Soul, Face Slam",
        Combos: "Jab para Jab para Martelo Jab (Dizzy); Forward para Forward para Martelo Jab (Dizzy);",
        Gloria: 10,
        Honra: 0,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 10
    };
    return personagem;
}

function ShaoKahn() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 5);
    antecedentes[1] = newCaracteristica("Aliados", 4);
    antecedentes[2] = newCaracteristica("Fama", 4);
    antecedentes[3] = newCaracteristica("Recursos", 5);

    const armas = ["Martelo de Guerra", "Martelo Arremessado", "Lança", "Lança Arremessada"];

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 3);

    const pericias = [];
    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Idiomas", 8);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Martelo", 5);
    tecnicas[1] = newCaracteristica("Arremesso", 4);
    tecnicas[2] = newCaracteristica("Lança", 4);

    const personagem = {
        Nome: "Shao Kahn",
        Estilo: "Thai Kickboxe",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Gargalhada",
        Conceito: "Imperador do Outworld",
        Cronica: "Mortal Kombat Armageddon",
        Equipe: "Nenhuma",
        Time: "Outworld",
        Forca: 9,
        Destreza: 5,
        Vigor: 8,
        Carisma: 1,
        Manipulacao: 5,
        Aparencia: 3,
        Percepcao: 5,
        Inteligencia: 6,
        Raciocinio: 6,
        Prontidao: 5,
        Interrogacao: 3,
        Intimidacao: 8,
        Perspicacia: 6,
        Manha: 2,
        Labia: 4,
        NovosTalentos: talentos,
        LutaCega: 3,
        Conducao: 0,
        Lideranca: 5,
        Seguranca: 2,
        Furtividade: 2,
        Sobrevivencia: 4,
        NovasPericias: pericias,
        Arena: 5,
        Computador: 0,
        Investigacao: 3,
        Medicina: 1,
        Misterios: 8,
        Estilos: 4,
        NovosConhecimentos: conhecimentos,
        Antecedentes: antecedentes,
        Soco: 8,
        Chute: 4,
        Bloqueio: 6,
        Apresamento: 2,
        Esportes: 4,
        Foco: 8,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Tiger Knee, Power Uppercut, Fireball, Improved Fireball, Jumping Shoulder Butt, Brain Cracker, Leech, Absorb Soul, Face Slam, Regeneration, Energy Reflection, Missile Reflection, Weapon Channeling, Shockwave, Telekinesis, Wounded Knee",
        Combos: "Jab para Jab para Martelo Jab (Dizzy); Forward para Forward para Martelo Jab (Dizzy);",
        Gloria: 10,
        Honra: 0,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 10
    };
    return personagem;
}

let npc;
if (getParameterByName('age') === 'mk2')
    npc = calcPC(ShaoKahnMK2());
else if (getParameterByName('age') === 'mkx')
    npc = calcPC(ShaoKahn());
else
    npc = calcPC(ShaoKahn());