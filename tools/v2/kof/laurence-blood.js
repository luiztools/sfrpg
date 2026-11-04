function LaurenceFF() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 4);
    antecedentes[1] = newCaracteristica("Fama", 1);
    antecedentes[2] = newCaracteristica("Recursos", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Espada", 5);

    const armas = [];
    armas[0] = "Sabre";

    const personagem = {
        Nome: "Laurence Blood",
        Estilo: "Ninjitsu Espanhol",
        Escola: "Família Blood",
        Jogador: "NPC",
        Assinatura: "Toca flamenco",
        Conceito: "Toureiro",
        Cronica: "Fatal Fury 2",
        Equipe: "Família Stroheim",
        Time: "Família Stroheim",
        Forca: 4,
        Destreza: 5,
        Vigor: 5,
        Carisma: 2,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 3,
        Intimidacao: 4,
        Perspicacia: 2,
        Manha: 1,
        Labia: 2,
        LutaCega: 0,
        Conducao: 2,
        Lideranca: 2,
        Seguranca: 2,
        Furtividade: 4,
        Sobrevivencia: 0,
        Arena: 3,
        Computador: 1,
        Investigacao: 2,
        Medicina: 0,
        Misterios: 0,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 5,
        Foco: 0,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Slide Kick, Head Butt, Flying Head Butt, Air Throw, Knee Basher, Flying Body Spear, Wall Spring, Spinning Weapon",
        Combos: "Espada Jab para Espada Strong para Espada Fierce; Wall Spring para Espada Fierce",
        Gloria: 5,
        Honra: 1,
        Chi: 1,
        ForcaVontade: 9,
        Saude: 18,
        Divisao: "Duelistas",
        Posto: 8
    };
    return personagem;
}

let npc = LaurenceFF();

npc = calcPC(npc);
