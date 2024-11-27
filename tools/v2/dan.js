function DanSF4() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Arena", 3);
    antecedentes[2] = newCaracteristica("Fama", 3);
    antecedentes[3] = newCaracteristica("Recursos", 1);
    antecedentes[4] = newCaracteristica("Satsui no Hadou", 1);
    var dan =
    {
        Nome: "Dan Hibiki",
        Conceito: "Lutador Vingativo",
        Estilo: "Karatê Shotokan",
        Escola: "Autodidata",
        Assinatura: "Ironiza o oponente",
        Jogador: "NPC",
        Cronica: "Street Fighter 4",
        Forca: 4,
        Destreza: 4,
        Vigor: 4,
        Carisma: 5,
        Manipulacao: 4,
        Aparencia: 2,
        Percepcao: 2,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 2,
        Intimidacao: 1,
        Perspicacia: 4,
        Manha: 3,
        Lideranca: 3,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 2,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 2,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 3,
        Foco: 4,
        Gloria: 5,
        Honra: 4,
        Posto: 9,
        Divisao: "Estilo Livre",
        Chi: 6,
        ForcaVontade: 8,
        Saude: 20,
        ManobrasEspeciais: "Power Uppercut, Foot Sweep, Buffalo Punch, Jump, Flying Thrust Kick, Dragon Punch, Dankukyaku, Gadouken, Throw, Kippup",
        Combos: "Jump + Roundhouse para Fierce para Dragon Punch; Jump + Roundhouse para Jab para Dankukyaku; Jump + Roundhouse para Gadouken"
    };
    return dan;
}

function DanZ3() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Arena", 3);
    antecedentes[2] = newCaracteristica("Fama", 2);
    antecedentes[3] = newCaracteristica("Recursos", 2);
    antecedentes[4] = newCaracteristica("Satsui no Hadou", 1);
    var dan =
    {
        Nome: "Dan Hibiki",
        Conceito: "Lutador Vingativo",
        Estilo: "Karatê Shotokan",
        Escola: "Autodidata",
        Assinatura: "Ironiza o oponente",
        Jogador: "NPC",
        Cronica: "Street Fighter Alpha",
        Forca: 4,
        Destreza: 4,
        Vigor: 4,
        Carisma: 5,
        Manipulacao: 3,
        Aparencia: 2,
        Percepcao: 2,
        Inteligencia: 2,
        Raciocinio: 3,
        Prontidao: 2,
        Intimidacao: 1,
        Perspicacia: 4,
        Manha: 3,
        Lideranca: 2,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 1,
        Investigacao: 2,
        Medicina: 1,
        Misterios: 2,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 3,
        Foco: 4,
        Gloria: 5,
        Honra: 4,
        Posto: 7,
        Divisao: "Estilo Livre",
        Chi: 6,
        ForcaVontade: 8,
        Saude: 20,
        ManobrasEspeciais: "Power Uppercut, Foot Sweep, Buffalo Punch, Jump, Flying Thrust Kick, Dragon Punch, Dankukyaku, Gadouken, Throw, Kippup",
        Combos: "Jump + Roundhouse para Fierce para Dragon Punch; Jump + Roundhouse para Jab para Dankukyaku; Jump + Roundhouse para Gadouken"
    };
    return dan;
}

var npc;
if (getParameterByName('age') === 'sfa')
    npc = DanZ3();
else
    npc = DanSF4();

npc = calcPC(npc);