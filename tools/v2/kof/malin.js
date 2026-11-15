function Malin() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Recursos", 2);
    antecedentes[1] = newCaracteristica("Apoio", 3);
    antecedentes[2] = newCaracteristica("Contatos", 4);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Arremesso", 4);
    tecnicas[1] = newCaracteristica("Faca", 4);
    tecnicas[2] = newCaracteristica("Garra", 4);

    const armas = [];
    armas[0] = "Faca de Combate";
    armas[1] = "Faca Arremessada";
    armas[2] = "Iô-Iô";
    armas[3] = "Garra";

    const personagem = {
        Nome: "Malin",
        Estilo: "Ninjitsu",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Armas, muitas armas",
        Conceito: "Espiã",
        Cronica: "The King of Fighters",
        Equipe: "Nenhuma",
        Time: "High School Girls",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 4,
        Prontidao: 5,
        Interrogacao: 4,
        Intimidacao: 2,
        Perspicacia: 3,
        Manha: 3,
        Labia: 4,
        LutaCega: 4,
        Conducao: 1,
        Lideranca: 2,
        Seguranca: 4,
        Furtividade: 5,
        Sobrevivencia: 3,
        Arena: 1,
        Computador: 2,
        Investigacao: 4,
        Medicina: 1,
        Misterios: 1,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 1,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 0,
        Esportes: 5,
        Foco: 3,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Kippup, Slide Kick, Shock Treatment, Handstand Kick, Ax Kick, Wall Spring, Weapon Uppercut, Light Feet, Shrouded Moon",
        Combos: "Handstand Kick para Faca Arremessada (Dizzy); Faca Strong para Garra Strong para Faca Fierce; Faca Jab para Faca Jab para Slide Kick",
        Gloria: 4,
        Honra: 4,
        Chi: 3,
        ForcaVontade: 7,
        Saude: 18,
        Divisao: "Duelistas",
        Posto: 8
    };
    return personagem;
}

let npc = Malin();

npc = calcPC(npc);
