function JaxMk2() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Apoio", 3);
    antecedentes[2] = newCaracteristica("Contatos", 2);
    antecedentes[3] = newCaracteristica("Recursos", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 5);
    tecnicas[1] = newCaracteristica("Arremessar", 2);

    const talentos = [];
    talentos[0] = newCaracteristica("Procurar", 1);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Direito", 2);

    const armas = [];
    armas[0] = "Pistola";

    const personagem = {
        Nome: "Jackson \"Jax\" Briggs",
        Estilo: "Forças Especiais",
        Escola: "US Special Forces",
        Jogador: "NPC",
        Assinatura: "Mostra os músculos",
        Conceito: "Agente Especial",
        Time: "Defensores da Terra",
        Cronica: "Mortal Kombat 2",
        Forca: 6,
        Destreza: 5,
        Vigor: 6,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 2,
        Intimidacao: 5,
        Perspicacia: 0,
        Manha: 4,
        Labia: 3,
        LutaCega: 0,
        Conducao: 2,
        Lideranca: 4,
        Seguranca: 2,
        Furtividade: 1,
        Sobrevivencia: 4,
        Arena: 0,
        Computador: 1,
        Investigacao: 2,
        Medicina: 1,
        Misterios: 0,
        NovosTalentos: talentos,
        NovosConhecimentos: conhecimentos,
        Estilos: 0,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 4,
        Bloqueio: 6,
        Apresamento: 6,
        Esportes: 3,
        Foco: 0,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Kippup, Throw, Air Throw, Brain Cracker, Foot Sweep, Power Uppercut, Suplex",
        Combos: "Strong para Brain Cracker (Dizzy); Forward para Forward para Roundhouse (Dizzy); Forward para Forward para Power Uppercut (Dizzy); Jab para Jab para Power Uppercut (dizzy); Suplex para Suplex para Suplex (Dizzy);",
        Gloria: 4,
        Honra: 5,
        Chi: 1,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Tradicional",
        Posto: 8
    };
    return personagem;
}

function JaxMk3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Apoio", 3);
    antecedentes[2] = newCaracteristica("Contatos", 2);
    antecedentes[3] = newCaracteristica("Recursos", 2);
    antecedentes[4] = newCaracteristica("Cibernético", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 5);
    tecnicas[1] = newCaracteristica("Arremessar", 2);

    const talentos = [];
    talentos[0] = newCaracteristica("Procurar", 1);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Direito", 2);

    const armas = [];
    armas[0] = "Pistola";

    const personagem = {
        Nome: "Jackson \"Jax\" Briggs",
        Estilo: "Forças Especiais",
        Escola: "US Special Forces",
        Jogador: "NPC",
        Assinatura: "Mostra os músculos",
        Conceito: "Agente Especial",
        Time: "Defensores da Terra",
        Cronica: "Mortal Kombat 3",
        Forca: 6,
        Destreza: 5,
        Vigor: 6,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 2,
        Intimidacao: 5,
        Perspicacia: 0,
        Manha: 4,
        Labia: 3,
        LutaCega: 0,
        Conducao: 2,
        Lideranca: 4,
        Seguranca: 2,
        Furtividade: 1,
        Sobrevivencia: 4,
        Arena: 0,
        Computador: 1,
        Investigacao: 2,
        Medicina: 1,
        Misterios: 0,
        NovosTalentos: talentos,
        NovosConhecimentos: conhecimentos,
        Estilos: 0,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 4,
        Bloqueio: 6,
        Apresamento: 6,
        Esportes: 3,
        Foco: 5,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Kippup, Throw, Air Throw, Brain Cracker, Foot Sweep, Power Uppercut, Suplex, Sonic Boom, Fireball, Shockwave",
        Combos: "Strong para Brain Cracker (Dizzy); Forward para Forward para Roundhouse (Dizzy); Forward para Forward para Power Uppercut (Dizzy); Jab para Jab para Power Uppercut (dizzy); Suplex para Suplex para Suplex (Dizzy); Shockwave para Sonic Boom (Dizzy); Fireball para Fireball (Dizzy);",
        Gloria: 4,
        Honra: 5,
        Chi: 6,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 9
    };
    return personagem;
}

let npc;
if (getParameterByName('age') === 'mk2')
    npc = calcPC(JaxMk2());
else if (getParameterByName('age') === 'mk3')
    npc = calcPC(JaxMk3());