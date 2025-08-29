function Itoketip() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 4);
    antecedentes[1] = newCaracteristica("Apoio", 5);
    antecedentes[2] = newCaracteristica("Fama", 1);
    antecedentes[3] = newCaracteristica("Staff", 3);

    const personagem =
    {
        Nome: "Itoketip",
        Estilo: "Kabaddi",
        Time: "Punho das Sombras",
        Conceito: "Sacerdote Antigo",
        Jogador: "NPC",
        Time: "Nenhum",
        Equipe: "Nenhuma",
        Assinatura: "Nuvens de Tempestade",
        Forca: 4,
        Destreza: 3,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 5,
        Aparencia: 1,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 6,
        Prontidao: 5,
        Interrogacao: 2,
        Perspicacia: 6,
        Labia: 1,
        LutaCega: 5,
        Lideranca: 3,
        Furtividade: 4,
        Sobrevivencia: 4,
        Arena: 1,
        Medicina: 4,
        Misterios: 6,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 3,
        Bloqueio: 4,
        Apresamento: 2,
        Esportes: 3,
        Foco: 6,
        ManobrasEspeciais: "Elbow Smash, Mind Control, Slide Kick, Psychic Vise, San He, Ghost Form, Missile Reflection, Regeneration, Energy Reflection, Jump, Stunning Shout, Fireball, Improved Fireball, Throw, Telephaty, Inferno Strike, Flying Head Butt",
        Combos: "Bloqueio para Improved Fireball para Improved Fireball (Dizzy); Stunning Shout para Inferno Strike; Bloqueio para Slide Kick para Elbow Smash (Dizzy)",
        Gloria: 5,
        Honra: 1,
        Chi: 10,
        ForcaVontade: 5,
        Saude: 16,
        Divisao: "Estilo Livre",
        Posto: 8
    };
    return personagem;
}

function ItoketipOrochi() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 4);
    antecedentes[1] = newCaracteristica("Apoio", 5);
    antecedentes[2] = newCaracteristica("Fama", 1);
    antecedentes[3] = newCaracteristica("Staff", 3);

    const personagem =
    {
        Nome: "Itoketip (Orochi)",
        Estilo: "Kabaddi",
        Time: "Punho das Sombras",
        Conceito: "Sangue de Orochi",
        Jogador: "NPC",
        Equipe: "Nenhuma",
        Assinatura: "Nuvens de Tempestade",
        Forca: 5,
        Destreza: 4,
        Vigor: 6,
        Carisma: 4,
        Manipulacao: 5,
        Aparencia: 1,
        Percepcao: 6,
        Inteligencia: 5,
        Raciocinio: 7,
        Prontidao: 5,
        Interrogacao: 2,
        Perspicacia: 6,
        Labia: 1,
        LutaCega: 5,
        Lideranca: 3,
        Furtividade: 4,
        Sobrevivencia: 4,
        Arena: 1,
        Medicina: 4,
        Misterios: 6,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 3,
        Bloqueio: 4,
        Apresamento: 2,
        Esportes: 3,
        Foco: 6,
        ManobrasEspeciais: "Elbow Smash, Mind Control, Slide Kick, Psychic Vise, San He, Ghost Form, Missile Reflection, Regeneration, Energy Reflection, Jump, Stunning Shout, Fireball, Improved Fireball, Throw, Telephaty, Inferno Strike, Flying Head Butt",
        Combos: "Bloqueio para Improved Fireball para Improved Fireball (Dizzy); Stunning Shout para Inferno Strike; Bloqueio para Slide Kick para Elbow Smash (Dizzy)",
        Gloria: 5,
        Honra: 1,
        Chi: 10,
        ForcaVontade: 5,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 8
    };
    return personagem;
}

let npc;
if (getParameterByName('age') === 'orochi')
    npc = ItoketipOrochi();
else
    npc = Itoketip();

npc = calcPC(npc);