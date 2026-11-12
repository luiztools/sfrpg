function LilyKane() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 1);
    antecedentes[1] = newCaracteristica("Recursos", 1);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Bastão", 4);

    const armas = [];
    armas[0] = "Bastão";

    const personagem = {
        Nome: "Lily Kane",
        Estilo: "Bojutsu",
        Escola: "Billy Kane",
        Jogador: "NPC",
        Assinatura: "Gira o Bastão",
        Conceito: "Irmã caçula",
        Cronica: "Fatal Fury",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 3,
        Destreza: 5,
        Vigor: 3,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 4,
        Percepcao: 2,
        Inteligencia: 2,
        Raciocinio: 2,
        Prontidao: 2,
        Interrogacao: 0,
        Intimidacao: 3,
        Perspicacia: 1,
        Manha: 3,
        Labia: 1,
        LutaCega: 0,
        Conducao: 1,
        Lideranca: 0,
        Seguranca: 2,
        Furtividade: 2,
        Sobrevivencia: 1,
        Arena: 1,
        Computador: 0,
        Investigacao: 0,
        Medicina: 0,
        Misterios: 0,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 2,
        Chute: 2,
        Bloqueio: 3,
        Apresamento: 3,
        Esportes: 5,
        Foco: 4,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Slide Kick, Breakfall, Throw, Jump, Wall Spring, Spinning Weapon, Fireball, Handstand Kick",
        Combos: "Bastão Strong para Bastão Fierce; Handstand Kick para Jump para Bastão Fierce (Dizzy); Spinning Weapon para Fireball (Dizzy)",
        Gloria: 7,
        Honra: 3,
        Chi: 4,
        ForcaVontade: 8,
        Saude: 18,
        Divisao: "Duelistas",
        Posto: 8
    };
    return personagem;
}

let npc = LilyKane();

npc = calcPC(npc);
