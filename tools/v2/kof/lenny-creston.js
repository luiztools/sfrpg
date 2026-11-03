function LennyCreston() {
    const antecedentes = [];

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Chicote", 5);

    const armas = [];
    armas[0] = "Chicote";

    const personagem = {
        Nome: "Lenny Creston",
        Estilo: "Kickboxe",
        Escola: "As ruas",
        Jogador: "NPC",
        Assinatura: "Grito de vitória!",
        Conceito: "Líder de gangue",
        Cronica: "Art of Fighting 3",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 2,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 3,
        Intimidacao: 2,
        Perspicacia: 3,
        Manha: 4,
        Labia: 4,
        LutaCega: 0,
        Conducao: 3,
        Lideranca: 2,
        Seguranca: 2,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 3,
        Computador: 3,
        Investigacao: 4,
        Medicina: 0,
        Misterios: 0,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 2,
        Chute: 4,
        Bloqueio: 0,
        Apresamento: 2,
        Esportes: 4,
        Foco: 0,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Breakfall, Backflip Kick, Throw, Spinning Weapon, Kippup",
        Combos: "Chicote Jab - Spinning Weapon (Dizzy); Short - Forward - Spinning Weapon (Dizzy)",
        Gloria: 0,
        Honra: 0,
        Chi: 2,
        ForcaVontade: 9,
        Saude: 18,
        Divisao: "Duelistas",
        Posto: 8
    };
    return personagem;
}

let npc = LennyCreston();

npc = calcPC(npc);
