function BlueMaryFF() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Apoio", 2);
    antecedentes[2] = newCaracteristica("Contatos", 3);
    antecedentes[3] = newCaracteristica("Mascote", 2);
    antecedentes[4] = newCaracteristica("Recursos", 2);

    const pericias = [];
    pericias[0] = newCaracteristica("Disfarce", 3);

    const personagem = {
        Nome: "Blue Mary",
        Estilo: "Sanbo",
        Escola: "Professor Particular",
        Jogador: "NPC",
        Assinatura: "Jaqueta de Butch",
        Conceito: "Agente Especial",
        Cronica: "Fatal Fury 3",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 5,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 2,
        Interrogacao: 4,
        Intimidacao: 0,
        Perspicacia: 1,
        Manha: 4,
        Labia: 2,
        LutaCega: 2,
        Conducao: 3,
        Lideranca: 2,
        Seguranca: 4,
        Furtividade: 5,
        Sobrevivencia: 2,
        Arena: 1,
        Computador: 2,
        Investigacao: 4,
        Medicina: 1,
        Misterios: 0,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 5,
        Foco: 2,
        NovasPericias: pericias,
        ManobrasEspeciais: "Jump, Kippup, Breakfall, Grappling Defense, Throw, Suplex, Thigh Press, Dislocate Limb, Back Roll Throw, Foot Sweep, Spinning Foot Sweep, Power Uppercut, Double Hit Kick, Air Throw, Air Suplex",
        Combos: "Short para Short para Jumping Roundhouse; Thigh Press para Dislocate Limb para Back Roll Throw (Dizzy); Jab para Strong para Forward; Thigh Press para Dislocate Limb para Thigh Press (Dizzy)",
        Gloria: 3,
        Honra: 5,
        Chi: 4,
        ForcaVontade: 9,
        Saude: 18,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

function BlueMaryKoF() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Apoio", 2);
    antecedentes[2] = newCaracteristica("Contatos", 4);
    antecedentes[3] = newCaracteristica("Mascote", 2);
    antecedentes[4] = newCaracteristica("Recursos", 2);

    const pericias = [];
    pericias[0] = newCaracteristica("Disfarce", 3);

    const personagem = {
        Nome: "Blue Mary",
        Estilo: "Sanbo",
        Escola: "Professor Particular",
        Jogador: "NPC",
        Assinatura: "Jaqueta de Butch",
        Conceito: "Agente Especial",
        Cronica: "The King of Fighters",
        Equipe: "Ikari Warriors",
        Time: "Agents Team",
        Forca: 5,
        Destreza: 6,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 5,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 4,
        Intimidacao: 0,
        Perspicacia: 1,
        Manha: 4,
        Labia: 2,
        LutaCega: 2,
        Conducao: 3,
        Lideranca: 2,
        Seguranca: 4,
        Furtividade: 5,
        Sobrevivencia: 2,
        Arena: 2,
        Computador: 2,
        Investigacao: 4,
        Medicina: 1,
        Misterios: 0,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 5,
        Foco: 2,
        NovasPericias: pericias,
        ManobrasEspeciais: "Jump, Kippup, Breakfall, Grappling Defense, Throw, Suplex, Thigh Press, Dislocate Limb, Back Roll Throw, Foot Sweep, Spinning Foot Sweep, Power Uppercut, Double Hit Kick, Air Throw, Air Suplex, Counter Attack, Slide Kick, Spinning Pile Driver",
        Combos: "Short para Short para Jumping Roundhouse; Thigh Press para Dislocate Limb para Back Roll Throw (Dizzy); Jab para Strong para Forward; Thigh Press para Dislocate Limb para Thigh Press (Dizzy); Short para Slide Kick; Bloqueio para Air Throw; Bloqueio para Back Roll Throw; Bloqueio para Spinning Pile Driver",
        Gloria: 4,
        Honra: 5,
        Chi: 5,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc;
if (getParameterByName('age') === 'kof')
    npc = BlueMaryKoF();
else
    npc = BlueMaryFF();

npc = calcPC(npc);
