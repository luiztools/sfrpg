function DenzilKincaid() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Contatos", 3);
    antecedentes[1] = newCaracteristica("Recursos", 1);
    antecedentes[2] = newCaracteristica("Empresario", 1);

    const denzil = {
        Nome: "Denzil Kincaid",
        Estilo: "Capoeira",
        Escola: "Ensinado pela família",
        Jogador: "NPC",
        Assinatura: "Dança da Vitória",
        Conceito: "Dançarino animado",
        Equipe: "Gordon Produções",
        Time: "Os Corvos",
        Forca: 3,
        Destreza: 4,
        Vigor: 3,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 4,
        Percepcao: 1,
        Inteligencia: 2,
        Raciocinio: 3,
        Prontidao: 2,
        Perspicacia: 2,
        Manha: 1,
        Labia: 2,
        Conducao: 1,
        Seguranca: 1,
        Furtividade: 3,
        Arena: 1,
        Computador: 2,
        Investigacao: 3,
        Medicina: 2,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 1,
        Chute: 2,
        Bloqueio: 2,
        Esportes: 3,
        ManobrasEspeciais: "Jump, Kippup, Rolling Attack, Double Hit Knee, Forward Flip Knee",
        Gloria: 2,
        Honra: 1,
        Chi: 3,
        ForcaVontade: 6,
        Saude: 10,
        Divisao: "Estilo Livre",
        Posto: 1
    };
    return denzil;
}

let npc = DenzilKincaid();

npc = calcPC(npc);