function Hoover() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Cibernético", 5);

    return {
        Nome: "Hoover (Baby Head)",
        Estilo: "Wrestling",
        Escola: "Commando Team",
        Jogador: "NPC",
        Assinatura: "Ri como um bebê no cockpit do robô",
        Conceito: "Bebê gênio",
        Cronica: "Captain Commando",
        Equipe: "Commando Team",
        Time: "Commando Team",
        Forca: 6,
        Destreza: 3,
        Vigor: 6,
        Carisma: 4,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 5,
        Raciocinio: 3,
        Prontidao: 2,
        Interrogacao: 0,
        Intimidacao: 3,
        Perspicacia: 0,
        Manha: 0,
        Labia: 0,
        LutaCega: 0,
        Conducao: 2,
        Lideranca: 0,
        Seguranca: 4,
        Furtividade: 0,
        Sobrevivencia: 0,
        Arena: 0,
        Computador: 5,
        Investigacao: 0,
        Medicina: 0,
        Misterios: 0,
        Estilos: 0,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 3,
        Bloqueio: 4,
        Apresamento: 5,
        Esportes: 3,
        Foco: 0,
        ManobrasEspeciais: "Jump, Throw, Pile Driver, Buffalo Punch",
        Combos: "Bloqueio para Pile Driver, Jab para Strong para Buffalo Punch (Dizzy)",
        Gloria: 4,
        Honra: 6,
        Chi: 2,
        ForcaVontade: 7,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 8
    };
}

let npc = Hoover();
npc = calcPC(npc);
