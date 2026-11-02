function Crusher() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Apoio", 3);
    antecedentes[2] = newCaracteristica("Contatos", 2);
    antecedentes[3] = newCaracteristica("Empresario", 4);
    antecedentes[4] = newCaracteristica("Recursos", 2);
    antecedentes[5] = newCaracteristica("Staff", 2);

    const crusher = {
        Nome: "Crusher",
        Estilo: "Wrestling",
        Escola: "Shadaloo",
        Jogador: "NPC",
        Assinatura: "Ri cruelmente",
        Conceito: "Capanga Fortão",
        Equipe: "Shadaloo",
        Time: "Nenhum",
        Forca: 5,
        Destreza: 3,
        Vigor: 5,
        Carisma: 1,
        Manipulacao: 1,
        Aparencia: 1,
        Percepcao: 1,
        Inteligencia: 1,
        Raciocinio: 1,
        Prontidao: 3,
        Interrogacao: 4,
        Intimidacao: 5,
        Manha: 3,
        LutaCega: 3,
        Conducao: 2,
        Lideranca: 1,
        Seguranca: 2,
        Furtividade: 2,
        Arena: 4,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 3,
        Bloqueio: 3,
        Apresamento: 4,
        Esportes: 3,
        ManobrasEspeciais: "Buffalo Punch, Stomach Pump, Dashing Punch, Back Breaker, Dashing Uppercut, Bear Hug, Ear Pop, Brain Cracker, Head Butt, Knee Basher, Power Uppercut, Pile Driver, Spinning Back Fist, Spinning Clothesline, Spinning Knuckle, Double Hit Kick, Punch Defense",
        Gloria: 6,
        Chi: 2,
        ForcaVontade: 5,
        Saude: 14,
        Divisao: "Estilo Livre",
        Posto: 6
    };
    return crusher;
}

let npc = Crusher();

npc = calcPC(npc);