function Oro() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Contatos", 2);
    antecedentes[1] = newCaracteristica("Arena", 3);
    antecedentes[2] = newCaracteristica("Sensei", 3);
    antecedentes[3] = newCaracteristica("Paranormal", 4);

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 5);

    const personagem = {
        Nome: "Oro",
        Estilo: "Kung Fu",
        Escola: "Senjutsu",
        Jogador: "NPC",
        Assinatura: "Olhos Vermelhos",
        Conceito: "Mestre Eremita",
        Cronica: "Street Fighter 5",
        Time: "",
        Forca: 5,
        Destreza: 6,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 5,
        Aparencia: 1,
        Percepcao: 6,
        Inteligencia: 6,
        Raciocinio: 6,
        Prontidao: 5,
        Interrogacao: 3,
        Intimidacao: 3,
        Perspicacia: 5,
        Manha: 0,
        Labia: 3,
        NovosTalentos: talentos,
        LutaCega: 5,
        Conducao: 0,
        Lideranca: 4,
        Seguranca: 0,
        Furtividade: 5,
        Sobrevivencia: 6,
        Arena: 4,
        Computador: 0,
        Investigacao: 4,
        Medicina: 5,
        Misterios: 6,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 7,
        Chute: 6,
        Bloqueio: 7,
        Apresamento: 5,
        Esportes: 5,
        Foco: 9,
        ManobrasEspeciais: "Jump, Chi Push, Flying Heel Stomp, Multiple Stomp, Dragon Punch, Foot Sweep, Neck Choke, Power Uppercut, Spinning Back Fist, Back Roll Throw, Stone, Balance, Chi Kun Healing, Suplex, Air Suplex, Throw, Regeneration, Fireball, Accuracy, Telekinesis, Zen No Mind, Flying Knee Thrust, Double Jump, Double Hit Kick, Backflip Kick, Improved Fireball, Inferno Strike",
        Combos: "Strong para Short para Spinning Back Fist (dizzy), Chi Push para Stone (dizzy), Power Uppercut para Dragon Punch; Throw para Throw para Throw; Air Suplex para Flying Heel Stomp; Double Hit Kick para Backflip Kick; Air Suplex para Inferno Strike (Dizzy)",
        Gloria: 6,
        Honra: 10,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 9
    };
    return personagem;
}

function Oro2() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Contatos", 2);
    antecedentes[1] = newCaracteristica("Arena", 3);
    antecedentes[2] = newCaracteristica("Sensei", 3);
    antecedentes[3] = newCaracteristica("Paranormal", 4);

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 5);

    const personagem = {
        Nome: "Oro (Dois Braços)",
        Estilo: "Kung Fu",
        Escola: "Senjutsu",
        Jogador: "NPC",
        Assinatura: "Olhos Vermelhos",
        Conceito: "Mestre Eremita",
        Cronica: "Street Fighter 5",
        Time: "",
        Forca: 6,
        Destreza: 6,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 5,
        Aparencia: 1,
        Percepcao: 6,
        Inteligencia: 6,
        Raciocinio: 6,
        Prontidao: 5,
        Interrogacao: 3,
        Intimidacao: 3,
        Perspicacia: 5,
        Manha: 0,
        Labia: 3,
        NovosTalentos: talentos,
        LutaCega: 5,
        Conducao: 0,
        Lideranca: 4,
        Seguranca: 0,
        Furtividade: 5,
        Sobrevivencia: 6,
        Arena: 4,
        Computador: 0,
        Investigacao: 4,
        Medicina: 5,
        Misterios: 6,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 8,
        Chute: 6,
        Bloqueio: 8,
        Apresamento: 6,
        Esportes: 5,
        Foco: 9,
        ManobrasEspeciais: "Jump, Chi Push, Flying Heel Stomp, Multiple Stomp, Dragon Punch, Foot Sweep, Neck Choke, Power Uppercut, Spinning Back Fist, Back Roll Throw, Stone, Balance, Chi Kun Healing, Suplex, Air Suplex, Throw, Regeneration, Fireball, Accuracy, Telekinesis, Zen No Mind, Flying Knee Thrust, Double Jump, Double Hit Kick, Backflip Kick, Improved Fireball, Inferno Strike",
        Combos: "Strong para Short para Spinning Back Fist (dizzy), Chi Push para Stone (dizzy), Power Uppercut para Dragon Punch; Throw para Throw para Throw; Air Suplex para Flying Heel Stomp; Double Hit Kick para Backflip Kick; Air Suplex para Inferno Strike (Dizzy)",
        Gloria: 6,
        Honra: 10,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 9
    };
    return personagem;
}

let npc;
if (getParameterByName('age') === '2b')
    npc = Oro2();
else
    npc = Oro();

npc = calcPC(npc);