function Tasia() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Fama", 2);
    antecedentes[3] = newCaracteristica("Recursos", 2);
    antecedentes[4] = newCaracteristica("Empresário", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Espada", 5);

    const armas = [];
    armas[0] = "Katana";

    const personagem =
    {
        Nome: "Tasia",
        Estilo: "Ninjitsu",
        Escola: "Desconhecida",
        Conceito: "Ninja Assassina",
        Assinatura: "Executa o oponente",
        Time: "Black Dragon",
        Equipe: "Black Dragon",
        Jogador: "NPC",
        Cronica: "MK: Special Forces",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 2,
        Interrogacao: 3,
        Intimidacao: 3,
        Perspicacia: 4,
        Manha: 4,
        Labia: 3,
        LutaCega: 2,
        Conducao: 1,
        Lideranca: 1,
        Seguranca: 1,
        Furtividade: 4,
        Sobrevivencia: 3,
        Arena: 1,
        Computador: 2,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 4,
        Estilos: 5,
        Antecedentes: antecedentes,
        NovasTecnicas: tecnicas,
        Armas: armas,
        Soco: 3,
        Chute: 3,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 4,
        Foco: 5,
        ManobrasEspeciais: "Jump, Repeating Fireball, Yoga Teleport, Fireball, Accuracy, Spinning Weapon, Kippup",
        Combos: "Espada Jab para Espada Strong para Espada Roundhouse (Dizzy); Espada Jab para Espada Strong para Fireball (Dizzy); Bloqueio para Spinning Weapon (Dizzy)",
        Posto: 5,
        Gloria: 6,
        Honra: 5,
        Divisao: "Duelistas",
        Chi: 7,
        ForcaVontade: 8,
        Saude: 18
    };
    return personagem;
}

let npc = Tasia();
npc = calcPC(npc);