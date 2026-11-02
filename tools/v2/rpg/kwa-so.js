function KwaSo() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 3);
    antecedentes[1] = newCaracteristica("Recursos", 3);
    antecedentes[2] = newCaracteristica("Aliados", 3);
    antecedentes[3] = newCaracteristica("Staff", 3);
    antecedentes[4] = newCaracteristica("Arena", 3);
    antecedentes[5] = newCaracteristica("Empresario", 5);

    const kwaSo = {
        Nome: "Kwa So",
        Estilo: "Kung Fu",
        Escola: "Ruas da China",
        Jogador: "NPC",
        Assinatura: "Faz cara de desdém",
        Conceito: "Chefe regional da Shadaloo",
        Equipe: "Elias Synn",
        Time: "Dragão Nascente",
        Forca: 3,
        Destreza: 5,
        Vigor: 3,
        Carisma: 2,
        Manipulacao: 4,
        Aparencia: 2,
        Percepcao: 2,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 2,
        Perspicacia: 4,
        Manha: 3,
        Labia: 3,
        LutaCega: 3,
        Conducao: 2,
        Lideranca: 4,
        Seguranca: 1,
        Furtividade: 3,
        Arena: 3,
        Misterios: 3,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 5,
        Bloqueio: 3,
        Apresamento: 1,
        Esportes: 3,
        ManobrasEspeciais: "Hundred Hand Slap, Rekka Ken, Monkey Grab Punch, Deflecting Punch, Jump, Punch Defense",
        Combos: "Deflecting Punch para Hundred Hand Slap (Dizzy)",
        Gloria: 5,
        Honra: 3,
        Chi: 5,
        ForcaVontade: 7,
        Saude: 14,
        Divisao: "Estilo Livre",
        Posto: 4
    };
    return kwaSo;
}

let npc = KwaSo();

npc = calcPC(npc);