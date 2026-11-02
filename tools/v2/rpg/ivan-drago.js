function Drago() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Staff", 2);
    antecedentes[1] = newCaracteristica("Recursos", 2);
    antecedentes[2] = newCaracteristica("Empresario", 3);
    antecedentes[3] = newCaracteristica("Arena", 2);
    antecedentes[4] = newCaracteristica("Cibernético", 2);

    const drago = {
        Nome: "Ivan Drago",
        Estilo: "Boxe",
        Escola: "Laboratórios Soviéticos",
        Jogador: "NPC",
        Assinatura: "Se morrer, morreu!",
        Conceito: "Lutador Ciborgue",
        Equipe: "União Soviética",
        Time: "Nenhum",
        Forca: 5,
        Destreza: 2,
        Vigor: 4,
        Carisma: 1,
        Manipulacao: 1,
        Aparencia: 5,
        Percepcao: 2,
        Inteligencia: 2,
        Raciocinio: 2,
        Prontidao: 2,
        Intimidacao: 2,
        Perspicacia: 2,
        Manha: 0,
        Conducao: 1,
        Seguranca: 0,
        Arena: 5,
        Computador: 1,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 4,
        Bloqueio: 3,
        Apresamento: 1,
        Esportes: 2,
        ManobrasEspeciais: "Fist Sweep, Head Butt, Deflecting Punch, Punch Defense",
        Combos: "Bloqueio para Deflecting Punch para Fist Sweep; Bloqueio para Fist Sweep para Fierce; Deflecting Punch para Jab",
        Gloria: 4,
        Honra: 0,
        Chi: 1,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Tradicional",
        Posto: 2
    };
    return drago;
}

let npc = Drago();

npc = calcPC(npc);