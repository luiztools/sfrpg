function EdSF5() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Apoio", 5);
    antecedentes[2] = newCaracteristica("Psycho Power", 5);
    antecedentes[3] = newCaracteristica("Sensei", 3);

    const ed = {
        Nome: "Ed",
        Estilo: "Boxe",
        Escola: "Professor particular",
        Jogador: "NPC",
        Assinatura: "Chamas psíquicas",
        Conceito: "Comandante",
        Cronica: "Street Fighter 5",
        Equipe: "Shadaloo",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 5,
        Manipulacao: 4,
        Aparencia: 5,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 2,
        Intimidacao: 4,
        Perspicacia: 3,
        Manha: 4,
        Labia: 3,
        LutaCega: 3,
        Conducao: 3,
        Lideranca: 5,
        Seguranca: 4,
        Furtividade: 3,
        Sobrevivencia: 5,
        Arena: 4,
        Computador: 2,
        Investigacao: 4,
        Medicina: 2,
        Misterios: 3,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 1,
        Esportes: 5,
        Foco: 5,
        ManobrasEspeciais: "Jump, Dashing Punch, Psychokinetic Channeling, Power Uppercut, Punch Defense, Foot Sweep, Telekinesis, Sonic Boom, Fireball, Hyper Fist, Burn Knuckle, Criminal Upper, Monkey Grab Punch, Flash Kick",
        Combos: "Criminal Upper para Fireball para Power Uppercut; Punch Defense para Fierce (dizzy), Flash Kick para Burn Knuckle",
        Gloria: 6,
        Honra: 3,
        Chi: 9,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 6
    };
    return calcPC(ed);
}
function EdSF6() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Apoio", 5);
    antecedentes[2] = newCaracteristica("Psycho Power", 5);
    antecedentes[3] = newCaracteristica("Sensei", 3);

    const ed = {
        Nome: "Ed",
        Estilo: "Boxe",
        Escola: "Professor particular",
        Jogador: "NPC",
        Assinatura: "Chamas psíquicas",
        Conceito: "Comandante",
        Cronica: "Street Fighter 6",
        Equipe: "Shadaloo",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 5,
        Manipulacao: 4,
        Aparencia: 5,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 2,
        Intimidacao: 4,
        Perspicacia: 3,
        Manha: 4,
        Labia: 3,
        LutaCega: 3,
        Conducao: 3,
        Lideranca: 5,
        Seguranca: 4,
        Furtividade: 3,
        Sobrevivencia: 5,
        Arena: 4,
        Computador: 2,
        Investigacao: 4,
        Medicina: 2,
        Misterios: 3,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 1,
        Esportes: 5,
        Foco: 5,
        ManobrasEspeciais: "Jump, Dashing Punch, Psychokinetic Channeling, Power Uppercut, Punch Defense, Foot Sweep, Telekinesis, Sonic Boom, Fireball, Hyper Fist, Burn Knuckle, Criminal Upper, Monkey Grab Punch, Flash Kick, Fist Sweep",
        Combos: "Criminal Upper para Fireball para Power Uppercut; Punch Defense para Fierce (dizzy), Flash Kick para Burn Knuckle; Telekinesis para Hyper Fist (dizzy)",
        Gloria: 6,
        Honra: 3,
        Chi: 9,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 6
    };
    return calcPC(ed);
}

let npc;
if (getParameterByName('age') === 'sf6')
    npc = EdSF6();
else
    npc = EdSF5();