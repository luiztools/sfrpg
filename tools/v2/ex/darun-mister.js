function DarunEX() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 3);
    antecedentes[1] = newCaracteristica("Arena", 2);
    antecedentes[2] = newCaracteristica("Fama", 3);
    antecedentes[3] = newCaracteristica("Recursos", 3);

    return {
        Nome: "Darun Mister",
        Estilo: "Wrestling",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Levanta o braço",
        Conceito: "Ex-wrestler",
        Cronica: "Street Fighter EX",
        Forca: 7,
        Destreza: 2,
        Vigor: 6,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 5,
        Perspicacia: 0,
        Manha: 2,
        Labia: 0,
        LutaCega: 0,
        Conducao: 2,
        Lideranca: 3,
        Seguranca: 0,
        Furtividade: 1,
        Sobrevivencia: 2,
        Arena: 2,
        Computador: 0,
        Investigacao: 0,
        Medicina: 1,
        Misterios: 0,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 6,
        Esportes: 4,
        Foco: 1,
        ManobrasEspeciais: "Foot Sweep, Flying Tackle, Suplex, Air Suplex, Pile Driver, Spinning Pile Driver, Block And Grab, Grappling Defense, Jump",
        Combos: "Foot Sweep para Suplex; Flying Tackle para Spinning Pile Driver (Dizzy); Block And Grab para Fierce (Dizzy)",
        Gloria: 8,
        Honra: 6,
        Chi: 2,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 7
    };
}

const npc = calcPC(DarunEX());
