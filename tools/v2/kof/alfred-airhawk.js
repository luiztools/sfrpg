function Alfred() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 1);
    antecedentes[1] = newCaracteristica("Contatos", 1);
    antecedentes[2] = newCaracteristica("Sensei", 1);

    const personagem = {
        Nome: "Alfred Airhawk",
        Estilo: "Jeet Kune Dô",
        Escola: "Autodidata",
        Jogador: "NPC",
        Assinatura: "Estilo aviador",
        Conceito: "Piloto aventureiro",
        Cronica: "Fatal Fury",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 5,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 2,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 5,
        Interrogacao: 0,
        Intimidacao: 1,
        Perspicacia: 3,
        Manha: 2,
        Labia: 1,
        LutaCega: 1,
        Conducao: 4,
        Lideranca: 0,
        Seguranca: 1,
        Furtividade: 2,
        Sobrevivencia: 4,
        Arena: 3,
        Computador: 2,
        Investigacao: 1,
        Medicina: 1,
        Misterios: 2,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 3,
        Apresamento: 2,
        Esportes: 5,
        Foco: 1,
        ManobrasEspeciais: "Widowmaker, Jump, Throw, Flying Body Spear, Flying Thrust Kick, Spinning Back Fist, Buffalo Punch, Flash Kick, Somersault Kick",
        Combos: "Flying Body Spear para Flying Thrust Kick (Dizzy); Jab para Widowmaker (Dizzy); Buffalo Punch para Spinning Back Fist (Dizzy)",
        Gloria: 6,
        Honra: 5,
        Chi: 2,
        ForcaVontade: 8,
        Saude: 18,
        Divisao: "Livre",
        Posto: 7
    };
    return personagem;
}

function AlfredKoF() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 1);
    antecedentes[1] = newCaracteristica("Contatos", 1);
    antecedentes[2] = newCaracteristica("Sensei", 1);

    const personagem = {
        Nome: "Alfred Airhawk",
        Estilo: "Jeet Kune Dô",
        Escola: "Autodidata",
        Jogador: "NPC",
        Assinatura: "Estilo aviador",
        Conceito: "Piloto aventureiro",
        Cronica: "The King of Fighters",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 5,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 2,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 5,
        Interrogacao: 0,
        Intimidacao: 1,
        Perspicacia: 3,
        Manha: 2,
        Labia: 1,
        LutaCega: 1,
        Conducao: 4,
        Lideranca: 0,
        Seguranca: 1,
        Furtividade: 2,
        Sobrevivencia: 4,
        Arena: 3,
        Computador: 2,
        Investigacao: 1,
        Medicina: 1,
        Misterios: 2,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 3,
        Apresamento: 2,
        Esportes: 5,
        Foco: 1,
        ManobrasEspeciais: "Widowmaker, Jump, Throw, Flying Body Spear, Flying Thrust Kick, Spinning Back Fist, Buffalo Punch, Flash Kick, Somersault Kick",
        Combos: "Flying Body Spear para Flying Thrust Kick (Dizzy); Jab para Widowmaker (Dizzy); Buffalo Punch para Spinning Back Fist (Dizzy); Bloqueio para Somersault Kick; Bloqueio para Flying Thrust Kick; Bloqueio para Widowmaker",
        Gloria: 7,
        Honra: 6,
        Chi: 3,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc;
if (getParameterByName('age') === 'kof')
    npc = AlfredKoF();
else
    npc = Alfred();
npc = calcPC(npc);