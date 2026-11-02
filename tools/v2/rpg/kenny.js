function Kenny() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Recursos", 2);
    antecedentes[1] = newCaracteristica("Empresario", 1);
    antecedentes[2] = newCaracteristica("Sensei", 1);
    antecedentes[3] = newCaracteristica("Contatos", 1);

    const kenny = {
        Nome: "Kenny",
        Estilo: "Aikido",
        Escola: "Academia de Aikido Massaro",
        Jogador: "NPC",
        Assinatura: "Sorri para o adversário",
        Conceito: "Estudante",
        Equipe: "Gordon Produções",
        Time: "Meteora",
        Forca: 2,
        Destreza: 4,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 2,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 2,
        Intimidacao: 1,
        Perspicacia: 1,
        Manha: 1,
        Labia: 2,
        LutaCega: 1,
        Seguranca: 1,
        Furtividade: 1,
        Sobrevivencia: 1,
        Arena: 2,
        Computador: 2,
        Investigacao: 1,
        Medicina: 1,
        Misterios: 1,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 1,
        Chute: 1,
        Bloqueio: 4,
        Foco: 4,
        ManobrasEspeciais: "Chi Kun Healing, Maka Wara, San He",
        Honra: 3,
        Chi: 6,
        ForcaVontade: 6,
        Saude: 10,
        Divisao: "Estilo Livre",
        Posto: 1
    };
    return kenny;
}

let npc = Kenny();

npc = calcPC(npc);