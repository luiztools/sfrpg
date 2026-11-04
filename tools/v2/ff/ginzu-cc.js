function GinzuCC() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Herança de Clã", 3);
    antecedentes[3] = newCaracteristica("Sensei", 4);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Espada", 5);
    tecnicas[1] = newCaracteristica("Arremesso", 4);

    const armas = [];
    armas[0] = "Katana";
    armas[1] = "Shuriken";

    return {
        Nome: "Ginzu the Ninja (Shô)",
        Estilo: "Ninjitsu (Kenjutsu)",
        Escola: "Bushin-ryu",
        Jogador: "NPC",
        Assinatura: "Some numa bomba de fumaça",
        Conceito: "Ninja herdeiro",
        Cronica: "Captain Commando",
        Equipe: "Commando Team",
        Time: "Commando Team",
        Forca: 4,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 2,
        Percepcao: 5,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 0,
        Intimidacao: 0,
        Perspicacia: 4,
        Manha: 3,
        Labia: 0,
        LutaCega: 4,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 4,
        Furtividade: 5,
        Sobrevivencia: 3,
        Arena: 4,
        Computador: 0,
        Investigacao: 4,
        Medicina: 3,
        Misterios: 4,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 5,
        Foco: 2,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Kippup, Slide Kick, Throw",
        Combos: "Jab para Strong para Espada Strong (Dizzy), Espada Strong para Espada Fierce (Dizzy)",
        Gloria: 5,
        Honra: 7,
        Chi: 7,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 8
    };
}

let npc = GinzuCC();
npc = calcPC(npc);
