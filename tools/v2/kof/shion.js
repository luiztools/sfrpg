function Shion() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 3);
    antecedentes[1] = newCaracteristica("Contatos", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Lança", 5);
    tecnicas[1] = newCaracteristica("Chicote", 4);
    tecnicas[2] = newCaracteristica("Arremesso", 3);

    const armas = [];
    armas[0] = "Lança";
    armas[1] = "Kusari";
    armas[2] = "Shuriken";

    const personagem = {
        Nome: "Shion",
        Estilo: "Wu Shu",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Faz pose para o oponente",
        Conceito: "Servo d'Aqueles do Passado",
        Cronica: "The King of Fighters",
        Equipe: "Aqueles do Passado",
        Time: "Nenhum",
        Forca: 3,
        Destreza: 6,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 2,
        Interrogacao: 3,
        Intimidacao: 2,
        Perspicacia: 4,
        Manha: 3,
        Labia: 1,
        LutaCega: 2,
        Conducao: 1,
        Lideranca: 3,
        Seguranca: 1,
        Furtividade: 3,
        Sobrevivencia: 3,
        Arena: 3,
        Computador: 1,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 4,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 2,
        Esportes: 5,
        Foco: 1,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Kippup, Spinning Weapon, Hundred Hand Slap, Power Uppercut, Punch Defense, Kick Defense, Flying Heel Stomp, Wall Spring, Drunken Monkey Roll, Spinning Foot Sweep, Backflip, Double Hit Punch, Double Hit Blow, Slide Kick, Face Slam, Weapon Uppercut",
        Combos: "Lança Jab para Lança Strong para Lança Fierce; Hundred Hand Slap para Power Uppercut (Dizzy); Double Hit Blow para Spinning Weapon (Dizzy); Forward Slide Kick para Shuriken",
        Gloria: 3,
        Honra: 6,
        Chi: 4,
        ForcaVontade: 7,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 8
    };
    return personagem;
}

let npc = Shion();

npc = calcPC(npc);
