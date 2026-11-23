function FahkumramTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 3);
    antecedentes[1] = newCaracteristica("Contatos", 2);
    antecedentes[2] = newCaracteristica("Fama", 4);
    antecedentes[3] = newCaracteristica("Recursos", 1);

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 2);

    return {
        Nome: "Fahkumram",
        Estilo: "Thai Kickboxe",
        Escola: "Exército Tailandês",
        Jogador: "NPC",
        Assinatura: "Faz o Wai Kru antes da luta e encara o oponente do alto, em silêncio",
        Conceito: "Herói nacional coagido",
        Cronica: "Tekken 7",
        Forca: 6,
        Destreza: 4,
        Vigor: 6,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 2,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 1,
        Intimidacao: 5,
        Perspicacia: 2,
        Manha: 2,
        Labia: 1,
        LutaCega: 2,
        Conducao: 1,
        Lideranca: 2,
        Seguranca: 1,
        Furtividade: 1,
        Sobrevivencia: 3,
        Arena: 4,
        Computador: 0,
        Investigacao: 0,
        Medicina: 2,
        Misterios: 1,
        Estilos: 3,
        Antecedentes: antecedentes,
        NovosTalentos: talentos,
        Soco: 5,
        Chute: 6,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 4,
        Foco: 2,
        ManobrasEspeciais: "Jump, Kippup, Throw, Elbow Smash, Power Uppercut, Jumping Hammer Punch, Foot Sweep, Wounded Knee, Stepping Front Kick, Wheel Kick, Ax Kick, Power Kick, Tiger Knee, Double Hit Knee, Flying Knee Thrust, Clinch, Neck Choke, Knee Basher, Kick Defense, Maka Wara",
        Combos: "Wounded Knee para Power Kick, Elbow Smash 2x para Tiger Knee (Dizzy), Clinch para Knee Basher (Dizzy), Stepping Front Kick para Jumping Hammer Punch",
        Gloria: 6,
        Honra: 5,
        Chi: 3,
        ForcaVontade: 8,
        Saude: 18,
        Divisao: "Livre",
        Posto: 8
    };
}

function FahkumramTk8() {
    const personagem = FahkumramTk4();
    personagem.Conceito = "Avatar de Garuda";
    personagem.Cronica = "Tekken 8";
    personagem.Assinatura = "Abre os braços como as asas de Garuda e avança sobre o oponente";
    personagem.Destreza = 5;
    personagem.Bloqueio = 6;
    personagem.Esportes = 5;
    personagem.Misterios = 2;
    personagem.ManobrasEspeciais += ", Reverse Frontal Kick, Cross Counter, Power Up";
    personagem.Combos += ", Power Up para Reverse Frontal Kick, Bloqueio para Cross Counter";
    personagem.Gloria = 7;
    personagem.Honra = 4;
    personagem.Chi = 4;
    personagem.ForcaVontade = 9;
    personagem.Posto = 9;
    return personagem;
}

let npc;
if (getParameterByName('age') === 'tk8') npc = FahkumramTk8();
else npc = FahkumramTk4();
npc = calcPC(npc);
