function Oswald() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Recursos", 3);
    antecedentes[1] = newCaracteristica("Contatos", 4);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Arremesso", 4);
    tecnicas[1] = newCaracteristica("Garra", 4);

    const armas = [];
    armas[0] = "Carta de Baralho";
    armas[1] = "Carta Arremessada";

    const personagem = {
        Nome: "Oswald",
        Estilo: "Jeet Kune Dô",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Óculos e sorriso maquiavélico",
        Conceito: "Assassino",
        Cronica: "The King of Fighters",
        Equipe: "Nenhuma",
        Time: "Ash Team",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 5,
        Aparencia: 5,
        Percepcao: 4,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 2,
        Interrogacao: 3,
        Intimidacao: 2,
        Perspicacia: 3,
        Manha: 4,
        Labia: 2,
        LutaCega: 4,
        Conducao: 2,
        Lideranca: 1,
        Seguranca: 4,
        Furtividade: 4,
        Sobrevivencia: 3,
        Arena: 1,
        Computador: 2,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 0,
        Estilos: 1,
        Antecedentes: antecedentes,
        NovasTecnicas: tecnicas,
        Soco: 4,
        Chute: 6,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 5,
        Foco: 6,
        Armas: armas,
        ManobrasEspeciais: "Jump, Kippup, Slide Kick, Knife Hand Strike, Haymaker, Weapon Uppercut, Esquives, Widowmaker, Gekiro, Double Hit Blow, Spinning Weapon, Two Sided Jumping Kick",
        Combos: "Carta Jab para Carta Jab para Carta Jab; Haymaker para Weapon Uppercut para Gekiro (Dizzy); Weapon Uppercut para Widowmaker; Spinning Weapon para Spinning Weapon",
        Gloria: 8,
        Honra: 4,
        Chi: 10,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 8
    };
    return personagem;
}

let npc = Oswald();

npc = calcPC(npc);
