function ChenTsu() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Recursos", 2);
    antecedentes[1] = newCaracteristica("Fama", 1);
    antecedentes[2] = newCaracteristica("Contatos", 2);

    const chentsu = {
        Nome: "Chen Tsu",
        Estilo: "Luta-Livre Nativo Americana",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Olhar frio e silencioso",
        Conceito: "Viajante Nômade",
        Equipe: "Gordon Produções",
        Time: "Meteora",
        Forca: 4,
        Destreza: 3,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 4,
        Inteligencia: 2,
        Raciocinio: 2,
        Prontidao: 1,
        Interrogacao: 2,
        Intimidacao: 3,
        Perspicacia: 1,
        Manha: 1,
        Labia: 1,
        LutaCega: 2,
        Furtividade: 2,
        Sobrevivencia: 3,
        Misterios: 2,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 2,
        Apresamento: 4,
        Esportes: 4,
        ManobrasEspeciais: "Power Uppercut, Buffalo Punch, Throw, Suplex, Jump, Bear Hug, Thunderstrike",
        Gloria: 1,
        Honra: 2,
        Chi: 3,
        ForcaVontade: 4,
        Saude: 10,
        Divisao: "Tradicional",
        Posto: 1
    };
    return chentsu;
}

let npc = ChenTsu();

npc = calcPC(npc);