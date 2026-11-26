function KimWuKI() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Recursos", 2);
    antecedentes[2] = newCaracteristica("Sensei", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Mangual", 5);
    tecnicas[1] = newCaracteristica("Arremesso", 4);

    const armas = [];
    armas[0] = "Nunchaku";
    armas[1] = "Shuriken";

    const ficha = {
        Nome: "Kim Wu",
        Estilo: "Jeet Kune Dô (Bojutsu)",
        Escola: "Academia do Dragão (São Francisco)",
        Jogador: "NPC",
        Assinatura: "Gira os nunchakus e faz pose de dragão",
        Conceito: "Guardiã do dragão",
        Cronica: "Killer Instinct",
        Forca: 3,
        Destreza: 6,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 5,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 0,
        Intimidacao: 1,
        Perspicacia: 3,
        Manha: 3,
        Labia: 3,
        LutaCega: 1,
        Conducao: 2,
        Lideranca: 2,
        Seguranca: 1,
        Furtividade: 3,
        Sobrevivencia: 1,
        Arena: 3,
        Computador: 2,
        Investigacao: 1,
        Medicina: 1,
        Misterios: 3,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 5,
        Foco: 4,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Throw, Kippup, Fireball, Flash Kick, Hurricane Kick, Dive Kick, Weapon Uppercut, Double Hit Kick, Backflip Kick",
        Combos: "Mangual Jab para Weapon Uppercut (Dizzy); Dive Kick para Hurricane Kick para Flash Kick (Dizzy); Fireball para Double Hit Kick",
        Gloria: 4,
        Honra: 7,
        Chi: 6,
        ForcaVontade: 7,
        Saude: 18,
        Divisao: "Duelistas",
        Posto: 8
    };
    return ficha;
}

const npc = calcPC(KimWuKI());
