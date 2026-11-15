function Saiki() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Recursos", 3);
    antecedentes[2] = newCaracteristica("Elemental (Trevas)", 5);
    antecedentes[3] = newCaracteristica("Contatos", 2);

    const personagem = {
        Nome: "Saiki",
        Estilo: "Jeet Kune Dô",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Para o tempo com um gesto",
        Conceito: "Líder d'Aqueles do Passado",
        Cronica: "The King of Fighters",
        Equipe: "Aqueles do Passado",
        Time: "Nenhum",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 5,
        Aparencia: 5,
        Percepcao: 4,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 2,
        Intimidacao: 4,
        Perspicacia: 3,
        Manha: 1,
        Labia: 2,
        LutaCega: 4,
        Conducao: 1,
        Lideranca: 5,
        Seguranca: 3,
        Furtividade: 3,
        Sobrevivencia: 3,
        Arena: 3,
        Computador: 2,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 5,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 5,
        Foco: 7,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Fireball, Flash Kick, Power Kick, Yoga Teleport, Hurricane Kick, Sonic Boom, Elemental Rage, Final Wave, Haymaker",
        Combos: "Flash Kick para Yoga Teleport para Haymaker; Flash Kick para Yoga Teleport para Hurricane Kick (Dizzy); Power Kick para Yoga Teleport; Jump para Yoga Teleport para Roundhouse",
        Gloria: 7,
        Honra: 0,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

function SaikiDesperto() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Recursos", 3);
    antecedentes[2] = newCaracteristica("Elemental (Trevas)", 5);
    antecedentes[3] = newCaracteristica("Contatos", 2);

    const personagem = {
        Nome: "Saiki Desperto",
        Estilo: "Jeet Kune Dô",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Para o tempo com um gesto",
        Conceito: "Líder d'Aqueles do Passado",
        Cronica: "The King of Fighters",
        Equipe: "Aqueles do Passado",
        Time: "Nenhum",
        Forca: 7,
        Destreza: 4,
        Vigor: 7,
        Carisma: 3,
        Manipulacao: 5,
        Aparencia: 5,
        Percepcao: 4,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 2,
        Intimidacao: 4,
        Perspicacia: 3,
        Manha: 1,
        Labia: 2,
        LutaCega: 4,
        Conducao: 1,
        Lideranca: 5,
        Seguranca: 3,
        Furtividade: 3,
        Sobrevivencia: 3,
        Arena: 3,
        Computador: 2,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 5,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 5,
        Foco: 7,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Fireball, Flash Kick, Power Kick, Yoga Teleport, Hurricane Kick, Sonic Boom, Elemental Rage, Final Wave, Haymaker, Ice Blast, Stomach Pump, Criminal Upper, Improved Fireball, Power Uppercut, Wounded Knee, San He",
        Combos: "Flash Kick para Yoga Teleport para Haymaker; Flash Kick para Yoga Teleport para Hurricane Kick (Dizzy); Power Kick para Yoga Teleport; Jump para Yoga Teleport para Roundhouse; Criminal Upper para Ice Blast; Bloqueio para Stomach Pump",
        Gloria: 7,
        Honra: 0,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc;
if (getParameterByName('age') === 'desperto')
    npc = SaikiDesperto();
else
    npc = Saiki();

npc = calcPC(npc);
