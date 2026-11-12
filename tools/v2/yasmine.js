function YasmineSF6() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Arena", 2);
    antecedentes[2] = newCaracteristica("Contatos", 3);
    antecedentes[3] = newCaracteristica("Sensei", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Faca", 6);

    const armas = [];
    armas[0] = "Faca";

    const personagem = {
        Nome: "Yasmine",
        Estilo: "Silat (Maculelê)",
        Escola: "Professor Particular (avô)",
        Jogador: "NPC",
        Assinatura: "Facas karambit",
        Conceito: "Estudante",
        Cronica: "Street Fighter 6",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 2,
        Intimidacao: 0,
        Perspicacia: 2,
        Manha: 2,
        Labia: 2,
        LutaCega: 3,
        Conducao: 1,
        Lideranca: 2,
        Seguranca: 2,
        Furtividade: 3,
        Sobrevivencia: 3,
        Arena: 1,
        Computador: 1,
        Investigacao: 2,
        Medicina: 1,
        Misterios: 3,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 6,
        Foco: 5,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Foot Sweep, Spinning Weapon, Throw, Killing Blade, Gekiro, Burn Knuckle, Double Hit Kick, Energy Ball, Hundred Hand Slap, Triple Strike, Monkey Grab Punch",
        Combos: "Faca Fierce para Spinning Weapon (Dizzy); Faca Strong para Killing Blade; Double Hit Kick para Foot Sweep; Monkey Grab Punch para Triple Strike (Dizzy); Throw para Forward",
        Gloria: 5,
        Honra: 5,
        Chi: 7,
        ForcaVontade: 7,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 6
    };
    return personagem;
}

let npc = YasmineSF6();

npc = calcPC(npc);
