function LukeSF6() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 2);
    antecedentes[1] = newCaracteristica("Contatos", 2);
    antecedentes[2] = newCaracteristica("Sensei", 3);
    antecedentes[3] = newCaracteristica("Recursos", 2);

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 1);

    const personagem = {
        Nome: "Luke Sullivan",
        Estilo: "Vale-Tudo",
        Escola: "USAF",
        Jogador: "NPC",
        Assinatura: "Tatuagens",
        Conceito: "Ex-Militar",
        Cronica: "Street Fighter 6",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 3,
        Interrogacao: 2,
        Intimidacao: 4,
        Perspicacia: 2,
        Manha: 0,
        Labia: 2,
        NovosTalentos: talentos,
        LutaCega: 1,
        Conducao: 2,
        Lideranca: 2,
        Seguranca: 3,
        Furtividade: 1,
        Sobrevivencia: 3,
        Arena: 0,
        Computador: 1,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 0,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 4,
        Foco: 4,
        ManobrasEspeciais: "Jump, Flying Knee Thrust, Power Uppercut, Foot Sweep, Brain Cracker, Knee Basher, Psychokinetic Channeling, Punch Defense, Deflecting Punch, Ax Kick, Spinning Back Fist, Dragon Punch, Throw, Fireball, Dashing Punch, Double Hit Punch, Suplex, Hyper Tackle, Hyper Fist, Grappling Defense, Pin, Improved Pin, Flying Tackle, Choke Throw",
        Combos: "Fireball para Fireball para Fireball (Dizzy); Jab para Strong para Fierce (Dizzy); Spinning Back Fist para Psycho + Fierce (Dizzy); Roundhouse para Strong para Dragon Punch; Flying Tackle para Brain Cracker",
        Gloria: 6,
        Honra: 5,
        Chi: 7,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 6
    };
    return personagem;
}

function LukeSF5() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 2);
    antecedentes[1] = newCaracteristica("Contatos", 2);
    antecedentes[2] = newCaracteristica("Sensei", 3);
    antecedentes[3] = newCaracteristica("Recursos", 1);

    const personagem = {
        Nome: "Luke Sullivan",
        Estilo: "Vale-Tudo",
        Escola: "USAF",
        Jogador: "NPC",
        Assinatura: "Tatuagens",
        Conceito: "Ex-Militar",
        Cronica: "Street Fighter 5",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 2,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 3,
        Interrogacao: 2,
        Intimidacao: 3,
        Perspicacia: 1,
        Manha: 0,
        Labia: 2,
        LutaCega: 1,
        Conducao: 2,
        Lideranca: 1,
        Seguranca: 3,
        Furtividade: 1,
        Sobrevivencia: 3,
        Arena: 0,
        Computador: 1,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 0,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 4,
        Bloqueio: 3,
        Apresamento: 4,
        Esportes: 4,
        Foco: 3,
        ManobrasEspeciais: "Jump, Flying Knee Thrust, Power Uppercut, Foot Sweep, Brain Cracker, Knee Basher, Psychokinetic Channeling, Punch Defense, Deflecting Punch, Ax Kick, Spinning Back Fist, Dragon Punch, Throw, Fireball, Dashing Punch, Double Hit Punch, Suplex, Hyper Tackle, Hyper Fist, Grappling Defense, Pin, Improved Pin",
        Combos: "Fireball para Fireball para Fireball (Dizzy); Jab para Strong para Fierce (Dizzy); Spinning Back Fist para Psycho + Fierce (Dizzy); Roundhouse para Strong para Dragon Punch",
        Gloria: 5,
        Honra: 4,
        Chi: 6,
        ForcaVontade: 7,
        Saude: 18,
        Divisao: "Estilo Livre",
        Posto: 5
    };
    return personagem;
}

let npc;
if (getParameterByName('age') === 'sf5' || getParameterByName('age') === 'sf3')
    npc = LukeSF5();
else
    npc = LukeSF6();

npc = calcPC(npc);