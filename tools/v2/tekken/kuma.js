function KumaTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 3);
    antecedentes[1] = newCaracteristica("Empresário", 3);
    antecedentes[2] = newCaracteristica("Híbrido Animal", 5);
    antecedentes[3] = newCaracteristica("Sensei", 3);

    return {
        Nome: "Kuma",
        Estilo: "Wrestling",
        Escola: "Heihachi Mishima",
        Equipe: "Mishima Zaibatsu",
        Jogador: "NPC",
        Assinatura: "Levanta os braços",
        Conceito: "Urso",
        Cronica: "Tekken 4",
        Forca: 6,
        Destreza: 3,
        Vigor: 6,
        Carisma: 3,
        Manipulacao: 1,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 3,
        Perspicacia: 3,
        Manha: 0,
        Labia: 0,
        LutaCega: 3,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 3,
        Sobrevivencia: 3,
        Arena: 3,
        Computador: 1,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 3,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 4,
        Foco: 0,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Throw, Bear Hug, Double Hit Punch, Buffalo Punch, Head Bite, Head Butt, Claw, Bite",
        Combos: "Double Hit Punch para Double Hit Punch para Buffalo Punch, Bloqueio para Bear Hug para Head Bite",
        Gloria: 5,
        Honra: 5,
        Chi: 3,
        ForcaVontade: 4,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
}

function KumaTk1() {
    const personagem = KumaTk4();
    personagem.Cronica = "Tekken 2";
    personagem.Gloria = 4;
    personagem.Honra = 4;
    personagem.Chi = 2;
    personagem.ForcaVontade = 3;
    personagem.Saude = 18;
    personagem.Posto = 7;
    return personagem;
}

function KumaTk8() {
    const personagem = KumaTk4();
    personagem.Cronica = "Tekken 8";
    personagem.Soco = 5;
    personagem.Gloria = 6;
    personagem.Chi = 4;
    personagem.ForcaVontade = 5;
    personagem.Saude = 20;
    personagem.Posto = 9;
    return personagem;
}

let npc;
if (getParameterByName('age') === 'tk1') npc = KumaTk1();
else if (getParameterByName('age') === 'tk8') npc = KumaTk8();
else npc = KumaTk4();
npc = calcPC(npc);
