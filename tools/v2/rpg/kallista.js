function Kallista() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Recursos", 4);
    antecedentes[1] = newCaracteristica("Empresario", 5);
    antecedentes[2] = newCaracteristica("Aliados", 3);
    antecedentes[3] = newCaracteristica("Staff", 3);
    antecedentes[4] = newCaracteristica("Apoio", 3);

    const kallista = {
        Nome: "Kallista",
        Estilo: "Forças Especiais",
        Escola: "Exército da Suécia",
        Jogador: "NPC",
        Assinatura: "Frieza!",
        Conceito: "Rainha do Gelo",
        Equipe: "Elias Synn",
        Time: "Dragão Nascente",
        Forca: 3,
        Destreza: 4,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 1,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 4,
        Intimidacao: 2,
        Perspicacia: 1,
        LutaCega: 1,
        Conducao: 2,
        Seguranca: 1,
        Furtividade: 3,
        Sobrevivencia: 1,
        Arena: 2,
        Computador: 2,
        Misterios: 3,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 1,
        Chute: 3,
        Bloqueio: 3,
        Apresamento: 2,
        Esportes: 2,
        Foco: 3,
        ManobrasEspeciais: "Ice Blast, Backflip Kick, Flying Knee Thrust, Foot Sweep, Handstand Kick, Thigh Press, Jump",
        Combos: "Backflip Kick para Ice Blast (Dizzy); Short para Handstand Kick",
        Gloria: 6,
        Honra: 1,
        Chi: 9,
        ForcaVontade: 6,
        Saude: 12,
        Divisao: "Estilo Livre",
        Posto: 3
    };
    return kallista;
}

let npc = Kallista();

npc = calcPC(npc);