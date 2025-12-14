function Reiko() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Apoio", 5);
    antecedentes[2] = newCaracteristica("Fama", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Bastão", 5);
    tecnicas[1] = newCaracteristica("Arremesso", 5);

    const armas = ["Bastão Curto Reforçado", "Shuriken"];

    const personagem =
    {
        Nome: "Reiko",
        Estilo: "Jeet Kune Dô",
        Escola: "Netherrealm",
        Equipe: "Netherrealm",
        Time: "Netherrealm",
        Conceito: "General de Shinnok",
        Assinatura: "Olhar determinado",
        Jogador: "NPC",
        Cronica: "Mortal Kombat 4",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 5,
        Aparencia: 3,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 4,
        Intimidacao: 4,
        Perspicacia: 3,
        Manha: 3,
        Labia: 3,
        LutaCega: 4,
        Conducao: 0,
        Lideranca: 5,
        Seguranca: 0,
        Furtividade: 4,
        Sobrevivencia: 4,
        Arena: 4,
        Computador: 0,
        Investigacao: 3,
        Medicina: 3,
        Misterios: 3,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 5,
        Esportes: 6,
        Foco: 4,
        NovasTecnicas: tecnicas,
        Armas: armas,
        Divisao: "Duelistas",
        Posto: 9,
        Gloria: 10,
        Honra: 2,
        Chi: 8,
        ForcaVontade: 9,
        Saude: 20,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Power Uppercut, Throw, Back Breaker, Double-Hit Kick, Double-Hit Punch, Knee Basher, Yoga Teleport, Dislocate Limb, Weapon Sweep, Backflip Kick, Forward Backflip Kick",
        Combos: "Double-Hit Punch - Double-Hit Punch - Power Uppercut (Dizzy); Double-Hit Punch - Double-Hit Punch - Power Uppercut (Dizzy); Yoga Teleport - Power Uppercut - Throw (Dizzy); Jumping Short - Foot Sweep - Power Uppercut"
    };
    return personagem;
}

//mais tarde ele ganha martelo de guerra
let npc = calcPC(Reiko());