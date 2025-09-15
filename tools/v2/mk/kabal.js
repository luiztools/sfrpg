function Kabal() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Cibernetico", 4);
    antecedentes[1] = newCaracteristica("Fama", 3);
    antecedentes[2] = newCaracteristica("Recursos", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Espada", 5);
    tecnicas[1] = newCaracteristica("Armas de Fogo", 2);

    const armas = ["Espada Gancho"];

    const personagem =
    {
        Nome: "Kabal",
        Estilo: "Kenjutsu",
        Escola: "As Ruas",
        Equipe: "Black Dragon",
        Time: "Black Dragon",
        Conceito: "Sobrevivente",
        Assinatura: "Posa com suas armas",
        Jogador: "NPC",
        Cronica: "Mortal Kombat 3",
        Forca: 5,
        Destreza: 6,
        Vigor: 5,
        Carisma: 1,
        Manipulacao: 3,
        Aparencia: 0,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 2,
        Intimidacao: 4,
        Perspicacia: 0,
        Manha: 5,
        Labia: 3,
        LutaCega: 0,
        Conducao: 4,
        Lideranca: 0,
        Seguranca: 2,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 1,
        Computador: 2,
        Investigacao: 0,
        Medicina: 2,
        Misterios: 2,
        Estilos: 0,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 5,
        Foco: 2,
        NovasTecnicas: tecnicas,
        Armas: armas,
        Divisao: "Duelistas",
        Posto: 8,
        Gloria: 6,
        Honra: 3,
        Chi: 6,
        ForcaVontade: 10,
        Saude: 20,
        ManobrasEspeciais: "Jump, Foot Sweep, Power Uppercut, Throw, Fireball, Flying Fireball, Web Spin",
        Combos: "Espada Jab para Espada Strong para Power Uppercut; Foot Sweep para Web Spin; Short para Short para Roundhouse (dizzy); Short para Short para Jab (Dizzy); Jab para Jab para Power Uppercut (dizzy);"
    };
    return personagem;
}

let npc = Kabal();

npc = calcPC(npc);