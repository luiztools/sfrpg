function Nightwolf() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Fama", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Machado", 5);
    tecnicas[1] = newCaracteristica("Arremesso", 5);
    tecnicas[2] = newCaracteristica("Arco", 5);

    const armas = ["Machado Curto", "Machadinha Arremessada", "Arco Longo"];

    const personagem = {
        Nome: "Nightwolf",
        Estilo: "Luta-Livre Nativo Americana",
        Escola: "Tribo",
        Jogador: "NPC",
        Assinatura: "Gargalhada",
        Conceito: "Líder da Tribo",
        Cronica: "Mortal Kombat 3",
        Equipe: "Nenhum",
        Time: "Nenhum",
        Forca: 5,
        Destreza: 6,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 3,
        Percepcao: 5,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 0,
        Intimidacao: 0,
        Perspicacia: 2,
        Manha: 0,
        Labia: 2,
        LutaCega: 4,
        Conducao: 0,
        Lideranca: 3,
        Seguranca: 0,
        Furtividade: 4,
        Sobrevivencia: 5,
        Arena: 2,
        Computador: 0,
        Investigacao: 0,
        Medicina: 0,
        Misterios: 5,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 4,
        Foco: 5,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Foot Sweep, Power Uppercut, Throw, Fireball, Psychokinetic Channeling, Missile Reflection, Energy Reflection, Hyper Tackle, Electro Bolt, Wolf Animality",
        Combos: "Strong para Machado Strong para Machado Jab (Dizzy); Energy Reflection para Fireball (Dizzy); Forward para Forward para Roundhouse (Dizzy); Jab para Jab para String (Dizzy); Jab para Jab para Machado Jab (Dizzy); Short para Jab para Machado Jab (Dizzy)",
        Gloria: 4,
        Honra: 6,
        Chi: 9,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 8
    };
    return personagem;
}

function NightwolfArmageddon() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Fama", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Machado", 5);
    tecnicas[1] = newCaracteristica("Arremesso", 5);
    tecnicas[2] = newCaracteristica("Arco", 5);

    const armas = ["Machado Curto", "Machadinha Arremessada", "Arco Longo"];

    const personagem = {
        Nome: "Nightwolf",
        Estilo: "Luta-Livre Nativo Americana",
        Escola: "Tribo",
        Jogador: "NPC",
        Assinatura: "Gargalhada",
        Conceito: "Líder da Tribo",
        Cronica: "MK Armageddon",
        Equipe: "Nenhum",
        Time: "Nenhum",
        Forca: 5,
        Destreza: 6,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 3,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 5,
        Interrogacao: 0,
        Intimidacao: 1,
        Perspicacia: 3,
        Manha: 0,
        Labia: 2,
        LutaCega: 4,
        Conducao: 0,
        Lideranca: 4,
        Seguranca: 0,
        Furtividade: 5,
        Sobrevivencia: 6,
        Arena: 3,
        Computador: 0,
        Investigacao: 1,
        Medicina: 1,
        Misterios: 6,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 4,
        Foco: 5,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Foot Sweep, Power Uppercut, Throw, Fireball, Psychokinetic Channeling, Missile Reflection, Energy Reflection, Hyper Tackle, Electro Bolt, Wolf Animality",
        Combos: "Strong para Machado Strong para Machado Jab (Dizzy); Energy Reflection para Fireball (Dizzy); Forward para Forward para Roundhouse (Dizzy); Jab para Jab para String (Dizzy); Jab para Jab para Machado Jab (Dizzy); Short para Jab para Machado Jab (Dizzy)",
        Gloria: 5,
        Honra: 7,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 9
    };
    return personagem;
}

let npc;
if (getParameterByName('age') === 'mk3')
    npc = calcPC(Nightwolf());
else
    npc = calcPC(NightwolfArmageddon());