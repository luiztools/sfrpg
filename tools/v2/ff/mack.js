function Mack() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Faca", 5);

    const armas = [];
    armas[0] = "Faca";

    return {
        Nome: "Mack the Knife",
        Estilo: "Maculelê",
        Escola: "Commando Team",
        Jogador: "NPC",
        Assinatura: "Gira as facas antes de atacar",
        Conceito: "Alienígena vingador",
        Cronica: "Captain Commando",
        Equipe: "Planeta Genetic",
        Time: "Commando Team",
        Forca: 3,
        Destreza: 6,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 3,
        Aparencia: 1,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 4,
        Perspicacia: 0,
        Manha: 2,
        Labia: 0,
        LutaCega: 0,
        Conducao: 2,
        Lideranca: 0,
        Seguranca: 2,
        Furtividade: 0,
        Sobrevivencia: 3,
        Arena: 0,
        Computador: 4,
        Investigacao: 0,
        Medicina: 4,
        Misterios: 4,
        Estilos: 0,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 5,
        Foco: 0,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Throw, Spinning Clothesline, Turbo Spinning Clothesline, Spinning Weapon",
        Combos: "Jumping Faca Strong para Strong para Faca Fierce (Dizzy)",
        Gloria: 4,
        Honra: 6,
        Chi: 2,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 8
    };
}

let npc = Mack();
npc = calcPC(npc);
