function SokakuFF() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Herança de Clã", 4);
    antecedentes[1] = newCaracteristica("Apoio", 4);
    antecedentes[2] = newCaracteristica("Recursos", 2);
    antecedentes[3] = newCaracteristica("Contatos", 3);
    antecedentes[4] = newCaracteristica("Elemental (Eletricidade)", 6);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Bastão", 5);
    tecnicas[1] = newCaracteristica("Arremesso", 5);

    const armas = [];
    armas[0] = "Bastão Longo";

    const personagem = {
        Nome: "Sokaku Mochizuki",
        Estilo: "Ninjitsu (Bojutsu)",
        Escola: "Clã Mochizuki",
        Jogador: "NPC",
        Assinatura: "Eletricidade para todos os lados",
        Conceito: "Monge",
        Cronica: "Fatal Fury 3",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 5,
        Inteligencia: 5,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 0,
        Intimidacao: 3,
        Perspicacia: 4,
        Manha: 1,
        Labia: 1,
        LutaCega: 3,
        Conducao: 0,
        Lideranca: 2,
        Seguranca: 0,
        Furtividade: 3,
        Sobrevivencia: 3,
        Arena: 1,
        Computador: 0,
        Investigacao: 0,
        Medicina: 3,
        Misterios: 5,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 3,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 5,
        Foco: 6,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Foot Sweep, Throw, Breakfall, Energy Ball, Shock Treatment, Spinning Weapon, Spinning Back Fist, Electro Bolt, Deaths Visage, Elemental Explosion, Pile Driver, Rolling Attack, Missile Reflection, Energy Reflection, Chi Kun Healing, Shrouded Moon",
        Combos: "Bastão Jab para Bastão Jab para Bastão Jab; Bastão Jab para Shock Treatment (Dizzy); Bastão Strong para Elemental Explosion; Shock Treatment para Pile Driver",
        Gloria: 4,
        Honra: 5,
        Chi: 10,
        ForcaVontade: 8,
        Saude: 18,
        Divisao: "Duelistas",
        Posto: 8
    };
    return personagem;
}

let npc = SokakuFF();

npc = calcPC(npc);
