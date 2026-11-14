function Rick() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Recursos", 2);
    antecedentes[1] = newCaracteristica("Fama", 2);

    const personagem = {
        Nome: "Rick Strowd",
        Estilo: "Boxe",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Prevê o tempo",
        Conceito: "Nativo Americano",
        Cronica: "Fatal Fury",
        Forca: 6,
        Destreza: 4,
        Vigor: 6,
        Carisma: 5,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 5,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 5,
        Interrogacao: 1,
        Intimidacao: 5,
        Perspicacia: 3,
        Manha: 3,
        Labia: 2,
        LutaCega: 2,
        Conducao: 2,
        Lideranca: 3,
        Furtividade: 5,
        Sobrevivencia: 5,
        Arena: 3,
        Investigacao: 1,
        Medicina: 4,
        Misterios: 4,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 7,
        Chute: 0,
        Bloqueio: 6,
        Apresamento: 3,
        Esportes: 4,
        Foco: 3,
        ManobrasEspeciais: "Double Hit Punch, Power Uppercut, Lunging Punch, Ducking Fierce, Dashing Punch, Hyper Fist, Dashing Uppercut, Punch Defense, Turn Punch, Esquives, Fist Sweep, Jump, Jumping Shoulder Butt, Criminal Upper, Flicker Jab",
        Combos: "Movimento para Hyper Fist; Punch Defense para Dashing Punch; Jab para Power Uppercut (Dizzy); Punch Defense para Jab para Power Uppercut (Dizzy); Double Hit Punch para Fierce (Dizzy); Hyper Fist para Jab para Fist Sweep (Dizzy); Ducking Fierce para Ducking Fierce para Fist Sweep (Dizzy); Power Uppercut para Jumping Shoulder Butt (Dizzy); Flicker Jab para Flicker Jab para Flicker Jab (Dizzy)",
        Gloria: 7,
        Honra: 8,
        Chi: 3,
        ForcaVontade: 10,
        Saude: 18,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

function RickKof() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Recursos", 2);
    antecedentes[1] = newCaracteristica("Fama", 2);

    const personagem = {
        Nome: "Rick Strowd",
        Estilo: "Boxe",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Prevê o tempo",
        Conceito: "Nativo Americano",
        Cronica: "City of the Wolves",
        Forca: 6,
        Destreza: 4,
        Vigor: 6,
        Carisma: 5,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 5,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 5,
        Interrogacao: 1,
        Intimidacao: 5,
        Perspicacia: 3,
        Manha: 3,
        Labia: 2,
        LutaCega: 2,
        Conducao: 2,
        Lideranca: 3,
        Furtividade: 5,
        Sobrevivencia: 5,
        Arena: 3,
        Investigacao: 1,
        Medicina: 4,
        Misterios: 4,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 7,
        Chute: 0,
        Bloqueio: 6,
        Apresamento: 3,
        Esportes: 4,
        Foco: 3,
        ManobrasEspeciais: "Double Hit Punch, Power Uppercut, Lunging Punch, Ducking Fierce, Dashing Punch, Hyper Fist, Dashing Uppercut, Punch Defense, Turn Punch, Esquives, Fist Sweep, Jump, Jumping Shoulder Butt, Criminal Upper, Flicker Jab",
        Combos: "Movimento para Hyper Fist; Punch Defense para Dashing Punch; Jab para Power Uppercut (Dizzy); Punch Defense para Jab para Power Uppercut (Dizzy); Double Hit Punch para Fierce (Dizzy); Hyper Fist para Jab para Fist Sweep (Dizzy); Ducking Fierce para Ducking Fierce para Fist Sweep (Dizzy); Power Uppercut para Jumping Shoulder Butt (Dizzy); Flicker Jab para Flicker Jab para Flicker Jab (Dizzy)",
        Gloria: 7,
        Honra: 8,
        Chi: 4,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 9
    };
    return personagem;
}


let npc;
if (getParameterByName('age') === 'kof')
    npc = RickKof();
else
    npc = Rick();

npc = calcPC(npc);