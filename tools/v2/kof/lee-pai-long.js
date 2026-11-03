function LeePaiLong() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 1);
    antecedentes[1] = newCaracteristica("Arena", 1);
    antecedentes[2] = newCaracteristica("Recursos", 3);
    antecedentes[3] = newCaracteristica("Contatos", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Garra", 5);

    const armas = [];
    armas[0] = "Garra";

    const personagem = {
        Nome: "Lee Pai Long",
        Estilo: "Majestic Crow Kung Fu",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Braços cruzados para trás",
        Conceito: "Sábio",
        Cronica: "Art of Fighting",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 4,
        Aparencia: 2,
        Percepcao: 4,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 0,
        Intimidacao: 2,
        Perspicacia: 0,
        Manha: 1,
        Labia: 3,
        LutaCega: 5,
        Conducao: 0,
        Lideranca: 3,
        Seguranca: 0,
        Furtividade: 0,
        Sobrevivencia: 2,
        Arena: 0,
        Computador: 0,
        Investigacao: 0,
        Medicina: 5,
        Misterios: 3,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 5,
        Esportes: 5,
        Foco: 4,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Throw, Air Throw, Rising Storm Crow, Spinning Weapon, Wall Spring, Handstand Kick, Triple Strike, Hundred Hand Slap, Chi Kun Healing, Foot Sweep, Spinning Foot Sweep, Multiple Stomp, Balance, Rolling Attack, Flying Heel Stomp, Power Uppercut",
        Combos: "Wall Spring - Spinning Weapon; Jump - Spinning Weapon; Bloqueio - Power Uppercut; Hundred Hand Slap - Power Uppercut - Jumping Forward (Dizzy)",
        Gloria: 3,
        Honra: 6,
        Chi: 4,
        ForcaVontade: 9,
        Saude: 18,
        Divisao: "Duelistas",
        Posto: 8
    };
    return personagem;
}

let npc = LeePaiLong();

npc = calcPC(npc);
