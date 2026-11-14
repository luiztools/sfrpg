function TungFuRue() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Fama", 2);
    antecedentes[2] = newCaracteristica("Recursos", 3);
    antecedentes[3] = newCaracteristica("Arena", 4);

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 5);

    const personagem = {
        Nome: "Tung Fu Rue",
        Estilo: "Jeet Kune Dô",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Crescer os músculos e rasgar as roupas",
        Conceito: "Sensei verdadeiro",
        Cronica: "Fatal Fury",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 3,
        Destreza: 3,
        Vigor: 3,
        Carisma: 4,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 5,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 2,
        Intimidacao: 3,
        Perspicacia: 6,
        Manha: 5,
        Labia: 5,
        LutaCega: 5,
        Conducao: 0,
        Lideranca: 3,
        Seguranca: 5,
        Furtividade: 0,
        Sobrevivencia: 4,
        Arena: 5,
        Computador: 0,
        Investigacao: 3,
        Medicina: 4,
        Misterios: 0,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 5,
        Foco: 6,
        NovosTalentos: talentos,
        ManobrasEspeciais: "Jump, Throw, Foot Sweep, Hundred Hand Slap, Double Hit Kick, Kippup, Chi Kun Healing, Spinning Clothesline, Turbo Spinning Clothesline, Dashing Punch, Fist Sweep, Head Butt, Energy Ball, Ear Pop, Light Feet, Psychokinetic Channeling, San He, Maka Wara, Haymaker, Widowmaker, Flying Heel Stomp, Multiple Stomp",
        Combos: "Haymaker para Energy Ball para Dashing Punch; Roundhouse para Multiple Stomp; San He para Widowmaker (Dizzy); San He para Turbo Spinning Clothesline (Dizzy)",
        Gloria: 4,
        Honra: 10,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 18,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

function TungFuRueJovem() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Fama", 2);
    antecedentes[2] = newCaracteristica("Recursos", 3);
    antecedentes[3] = newCaracteristica("Arena", 4);

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 5);

    const personagem = {
        Nome: "Tung Fu Rue (forma jovem)",
        Estilo: "Jeet Kune Dô",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Crescer os músculos e rasgar as roupas",
        Conceito: "Sensei verdadeiro",
        Cronica: "Fatal Fury",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 6,
        Destreza: 6,
        Vigor: 6,
        Carisma: 4,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 5,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 2,
        Intimidacao: 3,
        Perspicacia: 6,
        Manha: 5,
        Labia: 5,
        LutaCega: 5,
        Conducao: 0,
        Lideranca: 3,
        Seguranca: 5,
        Furtividade: 0,
        Sobrevivencia: 4,
        Arena: 5,
        Computador: 0,
        Investigacao: 3,
        Medicina: 4,
        Misterios: 0,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 5,
        Foco: 6,
        NovosTalentos: talentos,
        ManobrasEspeciais: "Jump, Throw, Foot Sweep, Hundred Hand Slap, Double Hit Kick, Kippup, Chi Kun Healing, Spinning Clothesline, Turbo Spinning Clothesline, Dashing Punch, Fist Sweep, Head Butt, Energy Ball, Ear Pop, Light Feet, Psychokinetic Channeling, San He, Maka Wara, Haymaker, Widowmaker, Flying Heel Stomp, Multiple Stomp",
        Combos: "Haymaker para Energy Ball para Dashing Punch; Roundhouse para Multiple Stomp; San He para Widowmaker (Dizzy); San He para Turbo Spinning Clothesline (Dizzy)",
        Gloria: 4,
        Honra: 10,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 18,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc;
if (getParameterByName('age') === 'jovem')
    npc = TungFuRueJovem();
else
    npc = TungFuRue();

npc = calcPC(npc);
