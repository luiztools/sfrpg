function Philippe() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Recursos", 4);
    antecedentes[1] = newCaracteristica("Contatos", 4);
    antecedentes[2] = newCaracteristica("Apoio", 3);
    antecedentes[3] = newCaracteristica("Aliados", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Bastão", 4);

    const armas = [];
    armas[0] = "Bengala";

    const npc = {
        Nome: "Philippe",
        Estilo: "Savate",
        Escola: "Circo R&B",
        Jogador: "NPC",
        Assinatura: "Gargalhada de palhaço",
        Conceito: "Mestre de Picadeiro",
        Cronica: "Final Fight 2",
        Equipe: "Mad Gear",
        Time: "Mad Gear",
        Forca: 3,
        Destreza: 5,
        Vigor: 2,
        Carisma: 4,
        Manipulacao: 5,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 1,
        Intimidacao: 3,
        Perspicacia: 3,
        Manha: 4,
        Labia: 5,
        LutaCega: 0,
        Conducao: 3,
        Lideranca: 3,
        Seguranca: 3,
        Furtividade: 3,
        Sobrevivencia: 1,
        Arena: 1,
        Computador: 0,
        Investigacao: 1,
        Medicina: 0,
        Misterios: 0,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 3,
        Bloqueio: 2,
        Apresamento: 2,
        Esportes: 4,
        Foco: 1,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Slide Kick, Brain Cracker, Spinning Weapon, Backflip, Light Feet",
        Combos: "Bengala Jab para Bengala Jab para Spinning Weapon (Dizzy); Slide Kick para Brain Cracker",
        Gloria: 3,
        Honra: 0,
        Chi: 2,
        ForcaVontade: 6,
        Saude: 13,
        Divisao: "Duelistas",
        Posto: 6
    };
    return npc;
}

const npc = calcPC(Philippe());
