function LiliTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 1);
    antecedentes[1] = newCaracteristica("Arena", 2);
    antecedentes[2] = newCaracteristica("Contatos", 3);
    antecedentes[3] = newCaracteristica("Fama", 2);
    antecedentes[4] = newCaracteristica("Recursos", 5);
    antecedentes[5] = newCaracteristica("Staff", 2);

    return {
        Nome: "Lili Rochefort",
        Estilo: "Kickboxe",
        Escola: "Autodidata",
        Jogador: "NPC",
        Assinatura: "Faz uma reverência de bailarina e ajeita os cabelos",
        Conceito: "Herdeira aventureira",
        Cronica: "Tekken 5",
        Forca: 3,
        Destreza: 5,
        Vigor: 3,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 5,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 1,
        Intimidacao: 2,
        Perspicacia: 3,
        Manha: 2,
        Labia: 3,
        LutaCega: 1,
        Conducao: 2,
        Lideranca: 2,
        Seguranca: 1,
        Furtividade: 3,
        Sobrevivencia: 1,
        Arena: 2,
        Computador: 2,
        Investigacao: 1,
        Medicina: 1,
        Misterios: 0,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 2,
        Chute: 5,
        Bloqueio: 3,
        Apresamento: 2,
        Esportes: 5,
        Foco: 1,
        ManobrasEspeciais: "Jump, Kippup, Throw, Light Feet, Esquives, Backflip, Foot Sweep, Double Hit Kick, Handstand Kick, Cartwheel Kick, Backflip Kick, Stepping Front Kick, Ax Kick, Soccer Kick, Flying Heel Stomp, Forward Backflip Kick, Somersault Kick",
        Combos: "Esquives para Handstand Kick, Double Hit Kick para Foot Sweep, Foot Sweep para Flying Heel Stomp, Stepping Front Kick para Soccer Kick, Double Hit Kick para Cartwheel Kick (Dizzy)",
        Gloria: 3,
        Honra: 4,
        Chi: 4,
        ForcaVontade: 8,
        Saude: 18,
        Divisao: "Livre",
        Posto: 6
    };
}

function LiliTk8() {
    const personagem = LiliTk4();
    personagem.Cronica = "Tekken 8";
    personagem.Chute = 6;
    personagem.Gloria = 4;
    personagem.Chi = 5;
    personagem.ForcaVontade = 9;
    personagem.Saude = 20;
    personagem.Posto = 7;
    return personagem;
}

let npc;
if (getParameterByName('age') === 'tk8') npc = LiliTk8();
else npc = LiliTk4();
npc = calcPC(npc);
