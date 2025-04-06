function BillyKane() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Apoio", 4);
    antecedentes[2] = newCaracteristica("Fama", 3);
    antecedentes[3] = newCaracteristica("Recursos", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Bastão", 5);

    const armas = [];
    armas[0] = "Bastão";

    const personagem =
    {
        Nome: "Billy Kane",
        Estilo: "Bojutsu",
        Escola: "Desconhecida",
        Conceito: "Capanga",
        Assinatura: "Bandana",
        Jogador: "NPC",
        Cronica: "Fatal Fury",
        Equipe: "Howard Connection",
        Time: "Howard Connection",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 4,
        Perspicacia: 2,
        Manha: 4,
        Labia: 2,
        LutaCega: 0,
        Conducao: 2,
        Lideranca: 0,
        Seguranca: 3,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 2,
        Computador: 0,
        Investigacao: 0,
        Medicina: 1,
        Misterios: 0,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 3,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 6,
        Foco: 5,
        NovasTecnicas: tecnicas,
        Armas: armas,
        Divisao: "Duelistas",
        Posto: 8,
        Gloria: 9,
        Honra: 2,
        Chi: 5,
        ForcaVontade: 9,
        Saude: 20,
        ManobrasEspeciais: "Slide Kick, Breakfall, Throw, Jump, Wall Spring, Spinning Weapon, Fireball, Handstand Kick",
        Combos: "Bastão Strong - Bastão Fierce; Handstand Kick - Jumping - Bastão Fierce (Dizzy); Spinning Weapon - Fireball (dizzy)"
    };
    return personagem;
}

let npc = BillyKane();

npc = calcPC(npc);