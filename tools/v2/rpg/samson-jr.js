function SamsonJr() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Sensei", 4);
    antecedentes[1] = newCaracteristica("Recursos", 1);
    antecedentes[2] = newCaracteristica("Empresario", 2);
    antecedentes[3] = newCaracteristica("Arena", 2);
    antecedentes[4] = newCaracteristica("Staff", 1);

    const samson = {
        Nome: "Samson Jr.",
        Estilo: "Boxe",
        Escola: "Academia de Balrog",
        Jogador: "NPC",
        Assinatura: "Ergue o braço em vitória!",
        Conceito: "Discípulo de Balrog",
        Equipe: "Mr. Ray",
        Time: "Nenhum",
        Forca: 5,
        Destreza: 2,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 1,
        Aparencia: 3,
        Percepcao: 2,
        Inteligencia: 1,
        Raciocinio: 2,
        Prontidao: 1,
        Intimidacao: 1,
        Perspicacia: 1,
        Manha: 2,
        Conducao: 2,
        Seguranca: 1,
        Arena: 3,
        Computador: 1,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 0,
        Bloqueio: 3,
        Apresamento: 1,
        Esportes: 1,
        Foco: 0,
        ManobrasEspeciais: "Fist Sweep, Head Butt, Deflecting Punch",
        Combos: "Bloqueio para Deflecting Punch para Fist Sweep; Bloqueio para Fist Sweep para Fierce; Deflecting Punch para Jab",
        Gloria: 3,
        Honra: 1,
        Chi: 1,
        ForcaVontade: 6,
        Saude: 13,
        Divisao: "Tradicional",
        Posto: 2
    };
    return samson;
}

var npc = SamsonJr();

npc = calcPC(npc);